import React, { useCallback, useState, useEffect, useRef } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { useRouter } from "next/router";
import { mutate } from "swr";



import Input from "./Form/Input";
import Select from "./Form/Select";
import TextArea from "./Form/TextArea";
import Form from "./Form/Form";
import FormLabel from "./Form/Label";
import UploadImage from "./Form/UploadImage";
import FieldContainer from "./Form/Container";
import categoryData from "../data/categoryData";

const Wrapper = ({ children }) => (
  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      {children}
    </div>
  </div>
);

export default function EventForm({ createdBy, formId, eventForm, forNewEvent = true }) {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    title: eventForm.title,
    subTitle: eventForm.subTitle,
    organisationName: eventForm.organisationName,
    category: eventForm.category,
    date: eventForm.date,
    startTime: eventForm.startTime,
    endTime: eventForm.endTime,
    description: eventForm.description,
    eventImage: eventForm.eventImage,
    locationSearch: eventForm.locationSearch,
    locationName: eventForm.locationName,
    address: eventForm.address,
    suburb: eventForm.suburb,
    state: eventForm.state,
    postcode: eventForm.postcode,
    lat: eventForm.lat,
    long: eventForm.long,
    link: eventForm.link,
    createdBy: createdBy,
  });

  const handleAddressUpdate = (newAddress) => {
    console.log({ form, newAddress });
    setForm({ ...form, ...newAddress });
  };

  const { ref, autocompleteRef } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_API_KEY_GOOGLE,
    options: {
      types: [],
      fields: ['place_id', 'name', 'address_components', 'geometry', 'formatted_address', 'url'],
      componentRestrictions: { country: "au" },
    },
    onPlaceSelected: (place = {}) => {
      console.log("1111 updating address");
      const { address_components = [], formatted_address, geometry, name } = place;
      const getAddressComponent = (key) =>
        address_components.find((item) => item.types.includes(key))
          ?.long_name || "";
      console.log({place})
      console.log(2222, {
        locationName: place.name,
        address: formatted_address,
        lat: geometry.location.lat(),
        long: geometry.location.lng(),
        postcode: getAddressComponent("postal_code"),
        suburb: getAddressComponent("locality"),
        state: getAddressComponent("administrative_area_level_1"),
        link: place.url,
      });
      handleAddressUpdate({
        locationName: place.name,
        address: formatted_address,
        lat: geometry.location.lat(),
        long: geometry.location.lng(),
        postcode: getAddressComponent("postal_code"),
        suburb: getAddressComponent("locality"),
        state: getAddressComponent("administrative_area_level_1"),
        link: place.url,
      });
    },
  });

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query;

    try {
      const payload = {
        ...form,
        // task: {
        //   taskTitle: form.taskTitle,
        //   taskDescription: form.taskDescription,
        //   taskGoalHours: form.taskGoalHours,
        // },
      };

      console.log({ payload });

      const res = await fetch(`/api/events/${id}`, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(payload),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      mutate(`/api/events/${id}`, data, false); // Update the local data without a revalidation
      router.push("/");
    } catch (error) {
      setMessage("Failed to update event");
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const payload = {
        ...form,
        // task: {
        //   taskTitle: form.taskTitle,
        //   taskDescription: form.taskDescription,
        //   taskGoalHours: form.taskGoalHours,
        // },
      };

      console.log({ payload });

      const res = await fetch("/api/events", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(payload),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push("/");
    } catch (error) {
      setMessage("Failed to add event");
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidate();

    if (Object.keys(errs).length === 0) {
      forNewEvent ? postData(form) : putData(form);
    } else {
      setErrors({ errs });
    }

    return false;
  };

  /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
  const formValidate = () => {
    let err = {};
    if (!form.title) err.title = "Title is required";
    if (!form.organisationName)
      err.organisationName = "Orgainisation is required";
    if (!form.description) err.description = "Description is required";
    if (!form.eventImage) err.eventImage = "Image URL is required";
    return err;
  };

  return (
    <Wrapper>
      <Form id={formId} onSubmit={handleSubmit}>
        <FieldContainer
          headerText="Event Information"
          bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
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
            name="subTitle"
            label="Sub Title"
            onChange={handleChange}
            value={form.subTitle}
            width="sm:col-span-6"
          />
          <Input
            type="text"
            name="organisationName"
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
            defaultValue=""
          >
            <option value="" disabled>
              Please select a category
            </option>
            {categoryData.map((cat) => (
              <option key={cat.title} value={cat.title}>
                {cat.title}
              </option>
            ))}
          </Select>
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
          <Input
            type="url"
            name="eventImage"
            label="Event Image"
            onChange={handleChange}
            value={form.eventImage}
            width="sm:col-span-6"
          />
          {/* <UploadImage 
          name="eventImage" 
            type="file" 
            label="Event Image" 
            onChange={handleChange} 
            value={form.eventImage} 
            width="sm:col-span-6"
          />       */}
        </FieldContainer>

        <FieldContainer
          headerText="Location Information"
          bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
          <Input 
              ref={ref}
              placeholder='Start typing the location name or address' 
              type="text" 
              name="locationSearch" 
              label="Event Location" 
              id="location-find"
              width="sm:col-span-6"
            />

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
            name="address"
            label="Location Address"
            onChange={handleChange}
            value={form.address}
            width="sm:col-span-6"
          />

          <div className="hidden">
            <Input
              type="text"
              name="suburb"
              label="suburb"
              onChange={handleChange}
              value={form.suburb}
            />
            <Input
              type="text"
              name="state"
              label="state"
              onChange={handleChange}
              value={form.state}
            />
            <Input
              type="text"
              name="postcode"
              label="postcode"
              onChange={handleChange}
              value={form.postcode}
            />
            <Input
              type="text"
              name="lat"
              label="lat"
              onChange={handleChange}
              value={form.lat}
            />
            <Input
              type="text"
              name="long"
              label="long"
              onChange={handleChange}
              value={form.long}
            />
            <Input
              type="text"
              name="link"
              label="link"
              onChange={handleChange}
              value={form.link}
            />
            <Input
              type="text"
              name="createdBy"
              label="createdBy"
              onChange={handleChange}
              value={form.createdBy}
            />
          </div>
        </FieldContainer>

        {/* <FieldContainer headerText="Task Information" subHeaderText="Tack1" bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
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
                type="number" 
                name="taskGoalHours" 
                label="Goal Amount in hours" 
                onChange={handleChange} 
                value={form.taskGoalHours} 
                width="sm:col-span-6"
                >
                {[1,2,3,4,5,6,7,8,9].map((number) => (
                  <option key={number} value={number}>{number}</option>
                ))}

              </Select>
         </FieldContainer> */}
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
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </Form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </Wrapper>
  );
}
