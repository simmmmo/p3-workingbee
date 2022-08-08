import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
       <div className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-slate-900 hover:bg-amber-500 hover:text-white">
        <button onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-slate-900 hover:bg-amber-500 hover:text-white">
      <button onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  );
}
