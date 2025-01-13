# React Checkbox Pro

A fully accessible, customizable React checkbox component with indeterminate state support, keyboard shortcuts, and modern styling.

[![npm version](https://img.shields.io/npm/v/react-checkbox-pro.svg)](https://www.npmjs.com/package/react-checkbox-pro)
[![npm downloads](https://img.shields.io/npm/dm/react-checkbox-pro.svg)](https://www.npmjs.com/package/react-checkbox-pro)
[![License](https://img.shields.io/npm/l/react-checkbox-pro.svg)](https://github.com/yourusername/react-checkbox-pro/blob/main/LICENSE)

## 📚 Demo

[Demo](https://react-checkbox-pro.vercel.app/)

## 📚 Documentation

[[Demo](https://react-packages-doc.vercel.app/)

## Features

### Core Features
- ✨ Modern, lightweight checkbox component
- 🔄 Controlled & Uncontrolled modes support
- 👥 Checkbox group for managing multiple selections
- 🎯 Indeterminate state support
- ⌨️ Full keyboard navigation and shortcuts
- 🎨 CSS-in-JS with Tailwind variants

### Styling & Customization
- 🎭 Custom icons support
- 🖼️ Built-in check and indeterminate icons
- 🎨 Multiple built-in color variants
-    Default, Primary, Secondary, Success, Warning, Danger
- 📐 Four size variants (xs, sm, md, lg)
- 🔲 Configurable border radius
- 📍 Flexible label placement (left, right, top, bottom)
- 💅 Works with both Tailwind CSS and custom CSS
- 🎯 Custom styles without breaking accessibility
- 🎪 Compound variants support

### Accessibility & UX
- ♿️ WAI-ARIA 1.2 compliant
- 🔍 Screen reader friendly
- 🎯 Focus management and indicators
- 💬 Support for helper text and error messages
- 📱 Responsive and touch-friendly
- 🖱️ Click area optimization
- 🔄 Smooth transitions

### Developer Experience
- 📝 Written in TypeScript with full type definitions
- 🏃‍♂️ Tree-shakeable and optimized bundle
- 📚 Comprehensive documentation and examples
- 🧪 Reliable with proper error handling
- 🔧 Easy to integrate and customize
- 🎁 Zero external runtime dependencies
- 📦 Small bundle size
- 🔍 Source maps included

### Advanced Features
- 🔑 Keyboard shortcuts customization
- 🎛️ Form integration support
- 🔄 Async state management
- 🎨 Theme customization support
- 🔒 Disabled and readonly states
- 📊 Group selection management
- 🎯 Compound variants for complex styling
- 🎨 CSS variables support
- 🔄 State persistence options
- 🎨 Custom styles without breaking accessibility
## Installation

```bash
npm install react-checkbox-pro
# or
yarn add react-checkbox-pro
# or
pnpm add react-checkbox-pro
```

## Quick Start

```jsx
import { Checkbox } from 'react-checkbox-pro';

function App() {
  return (
    <Checkbox defaultChecked>
      Click me
    </Checkbox>
  );
}
```

## Usage

### Basic Usage

```jsx
// Controlled
const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onChange={setChecked}
  helperText="Optional helper text"
>
  Accept terms and conditions
</Checkbox>

// Uncontrolled
<Checkbox
  defaultChecked
  onChange={(checked) => console.log(checked)}
>
  Remember me
</Checkbox>
```

### Color Variants

```jsx
<Checkbox color="default">Default</Checkbox>
<Checkbox color="primary">Primary</Checkbox>
<Checkbox color="secondary">Secondary</Checkbox>
<Checkbox color="success">Success</Checkbox>
<Checkbox color="warning">Warning</Checkbox>
<Checkbox color="danger">Danger</Checkbox>
```

### Size Variants

```jsx
<Checkbox size="xs">Extra Small</Checkbox>
<Checkbox size="sm">Small</Checkbox>
<Checkbox size="md">Medium</Checkbox>
<Checkbox size="lg">Large</Checkbox>
```

### Label Placement

```jsx
<Checkbox labelPlacement="left">Left Label</Checkbox>
<Checkbox labelPlacement="right">Right Label</Checkbox>
<Checkbox labelPlacement="top">Top Label</Checkbox>
<Checkbox labelPlacement="bottom">Bottom Label</Checkbox>
```

### With Error State

```jsx
<Checkbox
  error={true}
  errorMessage="This field is required"
  required
>
  Accept terms and conditions
</Checkbox>
```

### With Keyboard Shortcuts

```jsx
<Checkbox
  shortcut="ctrl+1"
  onShortcut={() => console.log('Shortcut triggered')}
>
  Toggle with Ctrl+1
</Checkbox>
```

### Checkbox Group

```jsx
function App() {
  const [selected, setSelected] = useState(['apple']);

  return (
    <CheckboxGroup
      value={selected}
      onChange={setSelected}
      orientation="vertical"
    >
      <Checkbox value="apple">Apple</Checkbox>
      <Checkbox value="banana">Banana</Checkbox>
      <Checkbox value="orange">Orange</Checkbox>
    </CheckboxGroup>
  );
}
```

### Indeterminate State Example

```jsx
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
  ]);

  const allSelected = todos.every((todo) => todo.completed);
  const someSelected = todos.some((todo) => todo.completed);
  const isIndeterminate = someSelected && !allSelected;

  const handleParentChange = (checked) => {
    setTodos((prev) => prev.map((todo) => ({
      ...todo,
      completed: checked,
    })));
  };

  return (
    <div>
      <Checkbox
        checked={allSelected}
        indeterminate={isIndeterminate}
        onChange={handleParentChange}
      >
        Select All
      </Checkbox>
      
      {todos.map((todo) => (
        <Checkbox
          key={todo.id}
          checked={todo.completed}
          onChange={(checked) => handleTodoChange(todo.id, checked)}
        >
          {todo.title}
        </Checkbox>
      ))}
    </div>
  );
}
```

### Custom Icons

```jsx
import { CircleIcon, CheckIcon } from './icons';

<Checkbox
  icon={<CircleIcon />}
  checkedIcon={<CheckIcon />}
>
  Custom Icons
</Checkbox>
```

## Props

### Checkbox Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `undefined` | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Default checked state for uncontrolled component |
| `onChange` | `(checked: boolean) => void` \| `(event: ChangeEvent) => void` | `undefined` | Change handler |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `required` | `boolean` | `false` | Whether the checkbox is required |
| `error` | `boolean` | `false` | Whether to show error state |
| `errorMessage` | `string` | `undefined` | Error message to display |
| `helperText` | `string` | `undefined` | Helper text to display |
| `indeterminate` | `boolean` | `false` | Whether to show indeterminate state |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Size of the checkbox |
| `color` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color variant |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Border radius variant |
| `labelPlacement` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | Label placement |
| `icon` | `ReactNode` | `undefined` | Custom unchecked icon |
| `checkedIcon` | `ReactNode` | `undefined` | Custom checked icon |
| `shortcut` | `string` | `undefined` | Keyboard shortcut (e.g., 'ctrl+1') |
| `onShortcut` | `() => void` | `undefined` | Shortcut callback |

### CheckboxGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string[]` | `undefined` | Controlled selected values |
| `defaultValue` | `string[]` | `[]` | Default selected values |
| `onChange` | `(values: string[]) => void` | `undefined` | Change handler |
| `disabled` | `boolean` | `false` | Disable all checkboxes in group |
| `orientation` | `'horizontal' \| 'vertical'` | `'vertical'` | Layout orientation |
| `spacing` | `'sm' \| 'md' \| 'lg'` | `'md'` | Space between checkboxes |
| `labelPlacement` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | Label placement for all checkboxes |

## Accessibility

The component is built with accessibility in mind and follows WAI-ARIA guidelines:

- Proper ARIA attributes (`aria-checked`, `aria-invalid`, etc.)
- Keyboard navigation support
- Screen reader friendly
- Clear focus indicators
- Proper labeling and descriptions

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [Md Habibur Rahman](https://github.com/shakibdshy)

## Support

- Create an [Issue](https://github.com/shakibdshy/react-checkbox-pro/issues)
- Follow on [Twitter](https://twitter.com/shakibdshy)
- Star the repo ⭐️
