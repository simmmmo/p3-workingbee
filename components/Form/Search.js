import React, { useCallback, useState, useEffect, useRef } from "react";
import FormLabel from "./Label";
let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
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
    { componentRestrictions: { state: "au" } }
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
// export default function SearchField ({ name, label, onChange, type, value, placeholder, width, ref }) {

//   const [query, setQuery] = useState("");
//   const autoCompleteRef = useRef(null);

//   useEffect(() => {
//     loadScript(
//       `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_KEY}&libraries=places`,
//       () => handleScriptLoad(setQuery, autoCompleteRef)
//     );
//   }, [])

//   return (
//   <div className={width}>
//     <FormLabel name={name} label={label} />

//     <div className="mt-1">
//       <input
//         ref={ref}
//         type={type}
//         name={name}
//         id={name}
//         onChange={onChange}
//         value={value}
//         placeholder={placeholder}
//         className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//       />
//     </div>
//   </div>
//   )
// }

export default function Search({
  name,
  label,
  type,
  value,
  placeholder,
  width,
  ref,
}) {
  // const [query, setQuery] = useState("");
  // const autoCompleteRef = useRef(null);

  // useEffect(() => {
  //   loadScript(
  //     `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_KEY}&libraries=places`,
  //     () => handleScriptLoad(setQuery, autoCompleteRef)
  //   );
  // }, []);

  return (
    <div className={width}>
      <FormLabel name={name} label={label} />

      <div className="mt-1">
        <input
          ref={ref}
          type={type}
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}
