export default function PageTitle({ title }) {
  return (
    <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold leading-tight text-gray-900">
        {title}
      </h1>
    </div>
  );
}
