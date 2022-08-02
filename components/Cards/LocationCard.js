import Map from '../Map';

export default function LocationCard({ name, address, mapLink, mapLong, mapLat }) {

  return (
  <>
    <section aria-labelledby="section-2-title">
      <h2 className="sr-only" id="section-2-title">
        {name}
      </h2>
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <Map mapLong={mapLong} mapLat={mapLat}/>
          <div className="p-6">
            <h3 className="font-medium text-gray-900">
              {name}
            </h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {address}
                </p>
                <div className="mt-6">
                  <a
                    href={mapLink}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    View on Google Maps
                  </a>
                </div>
          </div>
      </div>
    </section>
</>
  )
}