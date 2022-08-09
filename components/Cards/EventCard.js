export default function EventCard({
  title,
  subTitle,
  organisationName,
  category,
  date,
  startTime,
  endTime,
  eventImage,
  locationName,
  suburb,
  description,
  children,
}) {
  return (
    <>
      <section aria-labelledby={title}>
        <h2 className="sr-only" id={title}>
          {title}
        </h2>
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <img
            src={eventImage}
            alt={title}
            className="w-full h-full object-center object-cover"
          />
          <div className="p-6">
            <div className="pt-4 sm:pt-4 lg:pt-4">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-2xl text-gray-900 font-extrabold tracking-tight sm:text-3xl">
                  {subTitle}
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Date</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <time dateTime={date}>{date}</time>
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Time</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {startTime} - {endTime}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Category
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">{category}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {locationName}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Suburb
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">{suburb}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Organisation
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {organisationName}
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 text-gray-500 space-y-6">
                  <p className="text-base leading-7">{description}</p>
                </div>
              </div>
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
