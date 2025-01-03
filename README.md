# React Checkbox Pro

A fully accessible, customizable React checkbox component with indeterminate state support and modern styling.

[![npm version](https://img.shields.io/npm/v/react-checkbox-pro.svg)](https://www.npmjs.com/package/react-checkbox-pro)
[![npm downloads](https://img.shields.io/npm/dm/react-checkbox-pro.svg)](https://www.npmjs.com/package/react-checkbox-pro)
[![License](https://img.shields.io/npm/l/react-checkbox-pro.svg)](https://github.com/yourusername/react-checkbox-pro/blob/main/LICENSE)

## Features

- 🎨 Multiple color variants and sizes
- ♿️ Fully accessible (WAI-ARIA compliant)
- 📱 Responsive and mobile-friendly
- 🎯 Indeterminate state support
- 🎭 Custom icons support
- 💅 Tailwind CSS styling
- 📝 TypeScript support
- 🔧 Highly customizable
- 🎉 Easy to use

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
    <Checkbox>
      Click me
    </Checkbox>
  );
}
```

## Usage

### Basic Usage

```jsx
import { Checkbox } from 'react-checkbox-pro';

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={setChecked}
      helperText="Optional helper text"
    >
      Accept terms and conditions
    </Checkbox>
  );
}
```

### Color Variants

```jsx
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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `undefined` | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Default checked state for uncontrolled component |
| `onChange` | `(checked: boolean) => void` | `undefined` | Change handler |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `required` | `boolean` | `false` | Whether the checkbox is required |
| `error` | `boolean` | `false` | Whether to show error state |
| `errorMessage` | `string` | `undefined` | Error message to display |
| `helperText` | `string` | `undefined` | Helper text to display |
| `indeterminate` | `boolean` | `false` | Whether to show indeterminate state |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Size of the checkbox |
| `color` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | Color variant |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Border radius variant |
| `icon` | `ReactNode` | `undefined` | Custom unchecked icon |
| `checkedIcon` | `ReactNode` | `undefined` | Custom checked icon |
| `children` | `ReactNode \| ((props: CheckboxRenderProps) => ReactNode)` | `undefined` | Label content or render prop |

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

MIT © [Your Name]

## Credits

Built with:
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Support

- Create an [Issue](https://github.com/yourusername/react-checkbox-pro/issues)
- Follow on [Twitter](https://twitter.com/yourusername)
- Star the repo ⭐️
