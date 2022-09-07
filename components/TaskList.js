import { useQuery, gql } from "@apollo/client";
import { CheckIcon, EmojiHappyIcon } from "@heroicons/react/outline";
import ClientOnly from "./ClientOnly";

// const taskEventId = queryArguments.toString();

const TASK_QUERY = gql`
query getEvents($eventId: ID!) {
  getTasksByEventId(eventId: $eventId) {
    _id
    eventId
    taskTitle
    taskDescription
    taskGoalHours
  }
}
`;

export default function TaskList({ queryArguments }) {

  const { loading, error, data } = useQuery(TASK_QUERY, {
    variables: { eventId: queryArguments } 
  });
  
  const tasks = data?.getEvents || [];
  const tasksID = data?.getTasksByEventId || [];

   console.log({tasks})
   console.log({tasksID})

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }


  return (
    <>
      <ClientOnly>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <h3 className="text-2xl text-gray-900 font-extrabold tracking-tight sm:text-1xl">
                  Tasks
                </h3>
                <div className="mt-12 lg:mt-4">
            {/* <dl className="space-y-10 sm:space-y-0 sm:grid l sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                {tasks.map((task) => (
                  <div key={task._id} className="relative">
                    <dt>
                      <CheckIcon
                        className="absolute h-6 w-6 text-gray-300"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                        {task.taskTitle}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-9 text-base text-gray-500">
                      {task.taskDescription}
                    </dd>
                    <dd className="mt-2 ml-9 text-base text-gray-500">
                      Estimated time needed: {task.taskGoalHours}hrs
                    </dd>
                    <dd className="mt-2 ml-9 text-base text-gray-500">
                      Time donated: hrs
                    </dd>
                    <dd className="mt-2 ml-9 text-base text-gray-500">
                      Contributors:
                    </dd>
                  </div>
                ))}
                 </dl> */}
                 </div>
              </div>
        </ClientOnly>
    
</>
  );
}