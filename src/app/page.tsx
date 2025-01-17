"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
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
  const isIndeterminate = todos.some((todo) => todo.completed) && !allSelected;

  // Handle parent checkbox change
  const handleParentChange = () => {
    // If all are selected or some are selected, uncheck all
    // If none are selected, check all
    const shouldCheck = !allSelected && !isIndeterminate;
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
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto space-y-8">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Indeterminate Example</h2>
          <div className="space-y-4 border rounded-lg p-4">
            <Checkbox color="primary" isWithoutTailwind>Primary Checkbox</Checkbox>
            <Checkbox color="secondary">Secondary Checkbox</Checkbox>
            <Checkbox color="success">Success Checkbox</Checkbox>
            <Checkbox color="warning">Warning Checkbox</Checkbox>
            <Checkbox color="danger">Danger Checkbox</Checkbox>
            <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
              Controlled Checkbox
            </Checkbox>
          </div>
          <div className="space-y-4 border rounded-lg p-4">
            <Checkbox
              checked={allSelected}
              indeterminate={isIndeterminate}
              onChange={handleParentChange}
              aria-label="Select all todos"
              helperText="Select or deselect all items"
            >
              Select All Tasks
            </Checkbox>

            <div className="ml-6 space-y-2 mt-2">
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
      </div>
    </main>
  );
}
