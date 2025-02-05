"use client";

import { useState } from "react";
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function Example() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Complete documentation", completed: false },
    { id: 2, title: "Review pull requests", completed: false },
    { id: 3, title: "Fix bugs", completed: false },
    { id: 4, title: "Write tests", completed: false },
  ]);

  // Calculate parent checkbox state
  const allSelected = todos.every((todo) => todo.completed);
  const someSelected = todos.some((todo) => todo.completed);
  const isIndeterminate = someSelected && !allSelected;

  console.log(isIndeterminate);

  const handleParentChange = () => {
    const shouldCheck = !someSelected;
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        completed: shouldCheck,
      }))
    );
  };

  // Handle individual checkbox changes
  const handleChildChange = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Indeterminate Example</h2>
      <div className="flex flex-col space-y-4 border rounded-lg p-4">
        <CheckboxGroup
          defaultValue={["apple"]}
          onChange={(values) => console.log("Selected fruits:", values)}
        >
          <Checkbox value="apple">Apple</Checkbox>
          <Checkbox value="banana">Banana</Checkbox>
          <Checkbox value="orange">Orange</Checkbox>
        </CheckboxGroup>
      </div>
      <div className="flex flex-col space-y-4 border rounded-lg p-4">
        <Checkbox color="default" disabled>
          Primary Checkbox
        </Checkbox>
        <Checkbox color="secondary" disabled>
          Secondary Checkbox
        </Checkbox>
        <Checkbox color="success">Success Checkbox</Checkbox>
        <Checkbox color="warning">Warning Checkbox</Checkbox>
        <Checkbox color="error">Error Checkbox</Checkbox>
        <Checkbox color="neutral" iconClassName="w-3.5 h-3.5">
          Neutral Checkbox
        </Checkbox>
        <Checkbox color="info">Info Checkbox</Checkbox>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
          Controlled Checkbox
        </Checkbox>
      </div>
      <div className="space-y-4 border rounded-lg p-4">
        <Checkbox
          checked={allSelected || isIndeterminate}
          indeterminate={isIndeterminate}
          onChange={handleParentChange}
          aria-label="Select all todos"
          helperText="Select or deselect all items"
        >
          Select All Tasks
        </Checkbox>

        <div className="ml-6 space-y-2 flex flex-col mt-2">
          {todos.map((todo) => (
            <Checkbox
              key={todo.id}
              checked={todo.completed}
              onChange={() => handleChildChange(todo.id)}
            >
              {todo.title}
            </Checkbox>
          ))}
        </div>
      </div>
    </section>
  );
}
