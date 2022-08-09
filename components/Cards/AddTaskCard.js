import TaskForm from "../TaskForm";
import { useSession, signIn, signOut } from "next-auth/react";
export default function AddTaskCard({ eventId }) {
  const { data: session } = useSession();
  
  const taskForm = {
    taskTitle: "",
    taskDescription: "",
    taskGoalHours: "",
    eventId: eventId,
  };

  return (
    <>
      <section aria-labelledby="add-tasks">
        <h2 className="sr-only" id="add-tasks">
          Add tasks
        </h2>
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <div className="p-6">
            <div className="pt-4 sm:pt-4 lg:pt-4">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-2xl text-gray-900 font-extrabold tracking-tight sm:text-3xl">
                Add a task
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          
             

        {session?.user && (
            <>     
              {/* <span>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span> */}
                 <div className="mt-12 lg:mt-0">
              <TaskForm formId="add-task-form" taskForm={taskForm} />
              </div>
            </>
          )}
                 

        {!session && (
             <>
               <div className="mt-12 lg:mt-0">
             Not signed in <br />
             <button onClick={() => signIn()}>Sign in</button>
             </div>
           </>
          )}
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
