"use client";

import { useState } from "react";
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox";
// import { Checkbox, CheckboxGroup } from 'react-checkbox-pro';
import CheckIcon from "@/components/icons/checkbox-icon";
import CircleIcon from "@/components/icons/circle-icon";

export default function Home() {
  // Basic checkbox state
  const [isChecked, setIsChecked] = useState(false);

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

  // Fixed handleChange for the basic checkbox
  const handleBasicChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-2xl mx-auto space-y-12">
        {/* Basic Examples */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Basic Usage</h2>
          <div className="space-y-4">
            <Checkbox>Default</Checkbox>
          </div>
        </section>

        {/* Controlled Checkbox */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Controlled Checkbox</h2>
          <div className="space-y-4">
            <Checkbox checked={isChecked} onChange={handleBasicChange}>
              Basic Checkbox
            </Checkbox>
            <div className="mt-2 text-sm text-gray-500">
              Current state: {isChecked ? "Checked" : "Unchecked"}
            </div>
          </div>
        </section>

        {/* Custom CSS Checkbox */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Custom CSS Checkbox</h2>
          <div className="space-y-4">
            <Checkbox isWithoutTailwind color="primary" size="md">
              Custom CSS Checkbox
            </Checkbox>
          </div>
        </section>

        {/* Helper Text and Error Checkbox */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            Helper Text and Error Checkbox
          </h2>
          <div className="space-y-4">
            <Checkbox required helperText="This field is required">
              Required Checkbox
            </Checkbox>

            <Checkbox
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
            <Checkbox defaultChecked color="default">
              Default
            </Checkbox>
            <Checkbox defaultChecked color="primary">
              Primary
            </Checkbox>
            <Checkbox defaultChecked color="secondary">
              Secondary
            </Checkbox>
            <Checkbox defaultChecked color="success">
              Success
            </Checkbox>
            <Checkbox defaultChecked color="warning">
              Warning
            </Checkbox>
            <Checkbox defaultChecked color="danger">
              Danger
            </Checkbox>
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
                  onChange={(checked: boolean) =>
                    handleChildChange(todo.id, checked)
                  }
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

        {/* Keyboard Shortcuts Example */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Keyboard Shortcuts</h2>
          <div className="space-y-4">
            <Checkbox
              shortcut="ctrl+1"
              onShortcut={() => console.log("Shortcut triggered: ctrl+1")}
            >
              Toggle with Ctrl+1
            </Checkbox>
            <Checkbox
              shortcut="alt+space"
              onShortcut={() => console.log("Shortcut triggered: alt+space")}
            >
              Toggle with Alt+Space
            </Checkbox>
          </div>
        </section>

        {/* Checkbox Group Example */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Checkbox Groups</h2>

          {/* Vertical Group */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Favorite Fruits (Vertical)</h3>
            <CheckboxGroup
              defaultValue={["apple"]}
              onChange={(values) => console.log("Selected fruits:", values)}
            >
              <Checkbox value="apple">Apple</Checkbox>
              <Checkbox value="banana">Banana</Checkbox>
              <Checkbox value="orange">Orange</Checkbox>
            </CheckboxGroup>
          </div>

          {/* Horizontal Group */}
          <div className="space-y-4 mt-8">
            <h3 className="text-lg font-medium">
              Notification Preferences (Horizontal)
            </h3>
            <CheckboxGroup
              orientation="horizontal"
              spacing="lg"
              defaultValue={["email"]}
              onChange={(values) => console.log("Notification prefs:", values)}
            >
              <Checkbox value="email">Email</Checkbox>
              <Checkbox value="sms">SMS</Checkbox>
              <Checkbox value="push">Push</Checkbox>
            </CheckboxGroup>
          </div>

          {/* Different Label Placements */}
          <div className="space-y-4 mt-8">
            <h3 className="text-lg font-medium">Label Placements</h3>
            <div className="grid grid-cols-2 gap-8">
              <CheckboxGroup labelPlacement="left" defaultValue={["option1"]}>
                <Checkbox value="option1">Left Label</Checkbox>
                <Checkbox value="option2">Left Label 2</Checkbox>
              </CheckboxGroup>

              <CheckboxGroup labelPlacement="right" defaultValue={["option1"]}>
                <Checkbox value="option1">Right Label</Checkbox>
                <Checkbox value="option2">Right Label 2</Checkbox>
              </CheckboxGroup>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
