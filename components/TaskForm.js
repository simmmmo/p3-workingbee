import React, { useCallback, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";

import Input from "./Form/Input";
import Select from "./Form/Select";
import TextArea from "./Form/TextArea";
import Form from "./Form/Form";
import FieldContainer from "./Form/Container";

const TaskForm = ({ eventId, formId, taskForm, forNewTask = true }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    taskTitle: taskForm.taskTitle,
    taskDescription: taskForm.taskDescription,
    taskGoalHours: taskForm.taskGoalHours,
    eventId: taskForm.eventId,
  });

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      mutate(`/api/tasks/${id}`, data, false); // Update the local data without a revalidation
      router.push("/");
    } catch (error) {
      setMessage("Failed to update task");
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push("/");
    } catch (error) {
      setMessage("Failed to add task");
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      forNewTask ? postData(form) : putData(form);
    } else {
      setErrors({ errs });
    }
  };

  /* Makes sure task info is filled for task name, owner name, species, and image url*/
  const formValidate = () => {
    let err = {};
    if (!form.taskTitle) err.taskTitle = "Title is required";
    if (!form.taskDescription) err.taskDescription = "Description is required";
    return err;
  };

  return (
    <>
      <Form id={formId} onSubmit={handleSubmit}>
        <FieldContainer
          headerText="Task Information"
          subHeaderText="Add Task"
          bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
          <Input
            type="text"
            name="taskTitle"
            label="Task Title"
            onChange={handleChange}
            value={form.taskTitle}
            width="sm:col-span-6"
            required
          />

          <TextArea
            rows="10"
            name="taskDescription"
            label="Task Description"
            onChange={handleChange}
            value={form.taskDescription}
            width="sm:col-span-6"
            required
          />
          <Select
            type="number"
            name="taskGoalHours"
            label="Goal Amount in hours"
            onChange={handleChange}
            value={form.taskGoalHours}
            width="sm:col-span-6"
            defaultValue=""
          >
            <option value="" disabled>
              Please select task goal hours
            </option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </Select>

          <Input
            type="text"
            name="eventId"
            label="Event Id"
            onChange={handleChange}
            value={form.eventId}
            width="sm:col-span-6"
            required
          />
        </FieldContainer>
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </Form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
};

export default TaskForm;
