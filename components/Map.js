import {Loader} from '@googlemaps/js-api-loader';
import {useEffect, useRef} from 'react'; 

export default function Map () {
  
const googlemap = useRef(null);
  
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      version: 'weekly',
    });
    let map; 
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: {lat: -37.8252943, lng: 145.1011334},
        zoom: 15,
      });
    });
  });

    return (
        <div id="map" ref={googlemap} />         
  )
}
