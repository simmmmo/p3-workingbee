import { useSession, signIn, signOut } from "next-auth/react";

export default function Hero() {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Get involved in a</span>{" "}
              <span className="block text-amber-500 xl:inline">
                community cause
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-500 hover:bg-amber-400 md:py-4 md:text-lg md:px-10">
              <button onClick={() => signIn()}>Join a cause</button>
                
              </div>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="create"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-500 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Create a cause
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-hero-placeholder.jpg"
            alt=""
          />
        </div>
      </main>
    </div>
  );
}