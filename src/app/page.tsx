"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import CheckIcon from "@/components/icons/checkbox-icon";
import CircleIcon from "@/components/icons/circle-icon";

export default function Home() {
  // Basic checkbox state
  const [isChecked, setIsChecked] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Todo list for indeterminate example
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a project", completed: false },
    { id: 3, title: "Write documentation", completed: false },
  ]);

  // Calculate indeterminate state
  const allSelected = todos.every((todo) => todo.completed);
  const someSelected = todos.some((todo) => todo.completed);
  const isIndeterminate = someSelected && !allSelected;

  // Handlers
  const handleParentChange = (checked: boolean) => {
    setTodos((prev) => prev.map((todo) => ({ ...todo, completed: checked })));
  };

  const handleChildChange = (id: number, checked: boolean) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: checked } : todo
      )
    );
  };

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-2xl mx-auto space-y-12">
        {/* Basic Examples */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Basic Usage</h2>
          <div className="space-y-4">
            <Checkbox checked={isChecked} onChange={setIsChecked}>
              Basic Checkbox
            </Checkbox>

            <Checkbox 
              checked={isRequired} 
              onChange={setIsRequired}
              required
              helperText="This field is required"
            >
              Required Checkbox
            </Checkbox>

            <Checkbox
              checked={hasError}
              onChange={setHasError}
              error={true}
              errorMessage="Please accept the terms"
              required
            >
              Checkbox with Error
            </Checkbox>
          </div>
        </section>

        {/* Color Variants */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Color Variants</h2>
          <div className="space-y-4">
            <Checkbox color="default">Default</Checkbox>
            <Checkbox color="primary">Primary</Checkbox>
            <Checkbox color="secondary">Secondary</Checkbox>
            <Checkbox color="success">Success</Checkbox>
            <Checkbox color="warning">Warning</Checkbox>
            <Checkbox color="danger">Danger</Checkbox>
          </div>
        </section>

        {/* Size Variants */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Size Variants</h2>
          <div className="space-y-4">
            <Checkbox size="xs">Extra Small</Checkbox>
            <Checkbox size="sm">Small</Checkbox>
            <Checkbox size="md">Medium</Checkbox>
            <Checkbox size="lg">Large</Checkbox>
          </div>
        </section>

        {/* Radius Variants */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Radius Variants</h2>
          <div className="space-y-4">
            <Checkbox radius="none">Square</Checkbox>
            <Checkbox radius="sm">Small Radius</Checkbox>
            <Checkbox radius="md">Medium Radius</Checkbox>
            <Checkbox radius="lg">Large Radius</Checkbox>
            <Checkbox radius="full">Full Radius</Checkbox>
          </div>
        </section>

        {/* Custom Icons */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Custom Icons</h2>
          <div className="space-y-4">
            <Checkbox 
              icon={<CircleIcon />} 
              checkedIcon={<CheckIcon />}
              helperText="Checkbox with custom icons"
            >
              Custom Icons
            </Checkbox>
          </div>
        </section>

        {/* Indeterminate Example */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Indeterminate Example</h2>
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
                  onChange={(checked: boolean) => handleChildChange(todo.id, checked)}
                >
                  {todo.title}
                </Checkbox>
              ))}
            </div>
          </div>
        </section>

        {/* Disabled State */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Disabled State</h2>
          <div className="space-y-4">
            <Checkbox disabled>Disabled Unchecked</Checkbox>
            <Checkbox disabled checked>
              Disabled Checked
            </Checkbox>
            <Checkbox 
              disabled 
              checked 
              helperText="This checkbox cannot be modified"
            >
              Disabled with Helper Text
            </Checkbox>
          </div>
        </section>

        {/* Accessibility Example */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Accessibility Features</h2>
          <div className="space-y-4">
            <Checkbox
              aria-label="Subscribe to newsletter"
              aria-describedby="newsletter-description"
            >
              Subscribe to Newsletter
            </Checkbox>
            <p 
              id="newsletter-description" 
              className="text-sm text-gray-500 ml-6"
            >
              Receive weekly updates about our products and services
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
