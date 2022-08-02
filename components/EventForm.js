import React, { useCallback, useState, useEffect, useRef } from 'react';
import Input from './Form/Input';
// import Search from './Form/Search';
import Select from './Form/Select';
import TextArea from './Form/TextArea';
// import FormHeader from './Form/Header';
import Form from './Form/Form';
// import FormSubHeader from './Form/SubHeader';
import FormLabel from './Form/Label';
// import TaskForm from './TaskForm';
import UploadImage from './Form/UploadImage';
import FieldContainer from './Form/Container';
// import Divider from './Form/Divider';
import FieldSetContainer from './Form/FieldSetContainer';

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    {componentRestrictions: { country: "au" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}


const Wrapper = ({ children }) => (
  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      {children}
    </div>
  </div>
);

export default function EventForm () {

  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  const [form, setForm] = useState({
    title: '',
    organisationName: '',
    category: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
    eventImage: '',
    locationSearch: '',
    locationName: '',
    locationAddress: '',
    locationAddress1: '',
    locationAddress2: '',
    locationAddress3: '',
    locationSuburb: '',
    locationCountry: '',
    locationPostcode: '',
    locationLat: '',
    locationLong: '',
    locationUrl: '',
  });
  const handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

/**
 * <Wrapper>
 *   <Form>
 *     <Input />
 *     <Input />
 *     <Input />
 *     <Input />
 *   </Form>
 * </Wrapper>
 */

  return (
    <Wrapper>
      <Form action="#" method="POST">
        <FieldContainer headerText="Event Information" bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
          
          <Input 
            type="text" 
            name="title" 
            label="Title" 
            onChange={handleChange} 
            value={form.title} 
            width="sm:col-span-6"
          />
          <Input 
            type="text" 
            name="organisation" 
            label="Organisation Name" 
            onChange={handleChange} 
            value={form.organisationName} 
            width="sm:col-span-6"
          />
          <Select 
            type="text" 
            name="category" 
            label="Category" 
            onChange={handleChange} 
            value={form.category} 
            width="sm:col-span-6"
          />
          <Input 
            type="date" 
            name="date" 
            label="Date" 
            onChange={handleChange} 
            value={form.date} 
            width="sm:col-span-2"
          />
          <Input 
            type="time" 
            name="startTime" 
            label="Start Time" 
            onChange={handleChange} 
            value={form.startTime} 
            width="sm:col-span-2"
          />
          <Input 
            type="time" 
            name="endTime" 
            label="Finish Time" 
            onChange={handleChange} 
            value={form.endTime} 
            width="sm:col-span-2"
          />
          <TextArea 
            rows="10" 
            name="description" 
            label="Event Description" 
            onChange={handleChange} 
            value={form.description} 
            width="sm:col-span-6"
          />
          <UploadImage 
          name="eventImage" 
            type="file" 
            label="Event Image" 
            onChange={handleChange} 
            value={form.eventImage} 
            width="sm:col-span-6"
          />      
        </FieldContainer>

        <FieldContainer headerText="Location Information" bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
        <div className="sm:col-span-6">
        <FormLabel name="locationName" label="Event Location"  />
        <div className="mt-1">
            <input 
            type="text" 
              ref={autoCompleteRef}
              onChange={event => setQuery(event.target.value)}
              placeholder='Start typing the location name or address' 
              value={query}
              width="sm:col-span-6"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
            </div>
          </div>
          
            {/* <Search 
              ref={autoCompleteRef}
              onChange={event => setQuery(event.target.value)}
              placeholder='Start typing the location name or address' 
              value={query}
              type="text" 
              name="locationSearch" 
              label="Event Location" 
              id="location-find"
              width="sm:col-span-6"
            /> */}

            <Input 
              type="text" 
              name="locationName" 
              label="Location Name" 
              onChange={handleChange} 
              value={form.locationName} 
              width="sm:col-span-6"
            />
  
            <Input 
              type="text" 
              name="locationAddress" 
              label="Location Address" 
              onChange={handleChange} 
              value={form.locationAddress} 
              width="sm:col-span-6"
            />

            <div className='hidden'>
             <Input 
              type="hidden" 
              name="locationAddress1" 
              label="locationAddress1" 
              onChange={handleChange} 
              value={form.locationAddress1} 
             />
              <Input 
                type="hidden" 
                name="locationAddress2" 
                label="locationAddress2" 
                nChange={handleChange} 
                value={form.locationAddress2} 
              />
              <Input 
              type="hidden" 
                name="locationAddress3" 
                label="locationAddress3" 
                onChange={handleChange} 
                value={form.locationAddress3} 
              />
              <Input 
                type="hidden" 
                name="locationSuburb" 
                label="locationSuburb" 
                onChange={handleChange} 
                value={form.locationSuburb} 
              />
              <Input 
                type="hidden" 
                name="locationCountry" 
                label="locationCountry" 
                onChange={handleChange} 
                value={form.locationCountry} 
              />
              <Input 
                type="hidden" 
                name="locationPostcode" 
                label="locationPostcode" 
                onChange={handleChange} 
                value={form.locationPostcode} 
              />
              <Input 
                type="hidden" 
                name="locationLat" 
                label="locationLat" 
                onChange={handleChange} 
                value={form.locationLat} 
              />
              <Input 
                type="hidden" 
                name="locationLong" 
                label="locationLong" 
                onChange={handleChange} 
                value={form.locationLong} 
              />
              <Input 
                type="hidden" 
                name="locationUrl" 
                label="locationUrl" 
                onChange={handleChange} 
                value={form.locationUrl} 
              />
              </div>
            </FieldContainer>

        <FieldSetContainer headerText="Task Information" subHeaderText="Tack1" bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
              <Input 
                type="text" 
                name="taskTitle" 
                label="Task Title" 
                onChange={handleChange} 
                value={form.taskTitle} 
                width="sm:col-span-6"
              />
              <TextArea 
                rows="10" 
                name="taskDescription" 
                label="Task Description" 
                onChange={handleChange} 
                value={form.taskDescription} 
                width="sm:col-span-6"
              />
              <Select 
                type="text" 
                name="goalHours" 
                label="Goal Amount in hours" 
                onChange={handleChange} 
                value={form.goalHours} 
                width="sm:col-span-6"
              />
         </FieldSetContainer>
  

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </Form>
    </Wrapper>
  )
}
console.log()