import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
       <div className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
        <button onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
      <button onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  );
}
