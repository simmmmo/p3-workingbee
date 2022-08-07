import Link from "next/link";
import LoginBtn from "./LoginBtn";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "#" },
  { name: "Create", href: "/create" },
  { name: "About", href: "/about" },
  // { name: 'Event Single', href: 'event' },
  // { name: 'Add', href: 'new' },
];

export default function Header() {
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/" as={`/`}>
              <>
                <span className="sr-only">WorkingBee</span>
                <img
                  className="h-10 w-auto"
                  src="https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/workingbee-logo.png"
                  alt=""
                />
              </>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <LoginBtn />
            {/* <Link href="/signin" as={`/signin`} className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
              <>Sign in</>
          </Link> */}
            <Link
              href="/join"
              as={`/join`}
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              <> Join</>
            </Link>
            {/* <a
              href="/join"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Join
            </a> */}
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
