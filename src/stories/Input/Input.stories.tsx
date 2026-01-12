import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../components/Input";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

// Helper wrapper to show input state
const ControlledInput = (args: any) => {
  const [value, setValue] = useState("");
  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

// --- Stories ---

export const Text: Story = {
  render: () => <ControlledInput placeholder="Text input" />,
};

export const TextClearable: Story = {
  render: () => (
    <ControlledInput placeholder="Clearable text" clearable />
  ),
};

export const Password: Story = {
  render: () => (
    <ControlledInput type="password" placeholder="Password" />
  ),
};

export const PasswordClearable: Story = {
  render: () => (
    <ControlledInput
      type="password"
      placeholder="Clearable password"
      clearable
    />
  ),
};

export const Number: Story = {
  render: () => <ControlledInput type="number" placeholder="Number" />,
};

export const NumberClearable: Story = {
  render: () => (
    <ControlledInput type="number" placeholder="Clearable number" clearable />
  ),
};
