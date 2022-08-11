export default function ExploreList({ pageContent, children }) {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
         <div className="text-center">
            <>
              <h2 className="text-base font-semibold text-amber-500 tracking-wide uppercase">
              {pageContent.page}
              </h2>
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              {pageContent.title}
              </p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              {pageContent.intro}
              </p>
            </>
          </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
         {children}
        </div>
      </div>
    </div>
  );
}
