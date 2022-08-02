import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import TextArea from './Form/TextArea';

const TaskForm = ({ name, label, onChange }) => (
  <div className="mt-6">
  <fieldset>
    <legend className="sr-only">{label}</legend>
      <div className="text-base font-medium text-gray-900" aria-hidden="true">
      {label} 
      </div>
      <div className="mt-4 space-y-4">
      <Input type="text" name="taskTitle" label="Task Title" onChange={onChange} value={form.taskTitle} width="sm:col-span-6"/>
      <TextArea rows="10" name="taskDescription" label="Task Description" onChange={onChange} value={form.taskDescription} width="sm:col-span-6"/>
      <Select type="text" name="goalHours" label="Goal Amount in hours" onChange={onChange} value={form.goalHours} width="sm:col-span-6"/>
      </div>
  </fieldset>
</div>
);

export default TaskForm;