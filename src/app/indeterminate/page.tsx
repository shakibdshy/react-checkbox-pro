"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

const initialTodos: TodoItem[] = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Build a project", completed: false },
  { id: 3, title: "Write documentation", completed: false },
  { id: 4, title: "Share with others", completed: false },
];

export default function Home() {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);

  // Calculate states for parent checkbox
  const allSelected = todos.every((todo) => todo.completed);
  const someSelected = todos.some((todo) => todo.completed);
  const isIndeterminate = someSelected && !allSelected;

  // Handle parent checkbox change
  const handleParentChange = (checked: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        completed: checked,
      }))
    );
  };

  // Handle individual checkbox changes
  const handleChildChange = (todoId: number, checked: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: checked } : todo
      )
    );
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold mb-6">Todo List</h1>
        
        <div className="space-y-4">
          {/* Parent Checkbox */}
          <div className="pb-2 border-b">
            <Checkbox
              checked={allSelected}
              indeterminate={isIndeterminate}
              onChange={(checked: boolean) => handleParentChange(checked)}
              helperText="Select or deselect all tasks"
            >
              Select All Tasks
            </Checkbox>
          </div>

          {/* Child Checkboxes */}
          <div className="space-y-3">
            {todos.map((todo) => (
              <Checkbox
                key={todo.id}
                checked={todo.completed}
                onChange={(checked: boolean) => handleChildChange(todo.id, checked)}
              >
                {todo.title}
              </Checkbox>
            ))}
          </div>

          {/* Status */}
          <div className="pt-4 text-sm text-gray-600">
            {todos.filter((todo) => todo.completed).length} of {todos.length} tasks completed
          </div>
        </div>
      </div>
    </main>
  );
}
