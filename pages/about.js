import { SearchIcon, HandIcon, HeartIcon } from '@heroicons/react/outline'

const steps = [
  {
    name: 'Find a community cause',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
    icon: SearchIcon,
  },
  {
    name: 'Nominate your time against a task',
    description: 'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
    icon: HandIcon,
  },
  {
    name: 'Show up and get the job done!',
    description: 'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
    icon: HeartIcon,
  },
]


export default function About() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <>
              <h2 className="text-base font-semibold text-amber-500 tracking-wide uppercase">
                About
              </h2>
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
                How it works
              </p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                non sagittis nulla, eu luctus augue.
              </p>
            </>
          </div>
      </div>
      <div className="relative pt-16 pb-16 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Making a difference
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                    WorkingBee is a platform with a focus on bettering the community through support via the application of donating time alternatively to monetary investments.
                    </p>
                    <p className="mt-4 text-lg text-gray-500">
                    Volunteers can donate their time to an area of importance that they feel is impactful to them and the community.

                    </p>
                    {/* <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                      >
                        Get started
                      </a>
                    </div> */}
                  </div>
                </div>
                {/* <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-500">
                        &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean
                        curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-about-placeholder-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="text-base font-medium text-gray-700">
                          Marcia Hill, Digital Marketing Manager
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div> */}
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-about-placeholder-1.jpg"
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Connecting communities with causes 
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                    Using Working Bee users can explore a list of causes that need their time in a specific area over an array of opportunities. Eg, community gardens, parks, fund raisers.
                    </p>
                    <p className="mt-4 text-lg text-gray-500">
                      While the core of Working Bee is to get the job done through “time” donation”, it also links individuals that have similar interests together creating strong relationships that can impact change in the community.
                    </p>
                    {/* <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                      >
                        Get started
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-about-placeholder-2.jpg"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
       </div>
    </div>
    <div className="relative bg-white py-16 sm:py-16 lg:py-16">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <p className="mt-2 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Working Bee is a three step process
              </p>
              <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
                malesuada. Eleifend condimentum id viverra nulla.
              </p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {steps.map((step) => (
                    <div key={step.name} className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-amber-500 rounded-md shadow-lg">
                              <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{step.name}</h3>
                          <p className="mt-5 text-base text-gray-500">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
