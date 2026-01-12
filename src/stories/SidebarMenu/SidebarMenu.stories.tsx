import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SidebarMenu, type MenuItem } from "../../components/SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
};
export default meta;

// Example Menus
const oneLevel: MenuItem[] = [
  { label: "Home" },
  { label: "Profile" },
  { label: "Settings" }
];

const twoLevel: MenuItem[] = [
  {
    label: "Dashboard",
    children: [
      { label: "Analytics" },
      { label: "Reports" },
    ]
  },
  {
    label: "Account",
    children: [
      { label: "Profile" },
      { label: "Security" },
    ]
  },
  { label: "About" }
];

// Wrapper for demo
const Wrapper = ({ items }: { items: MenuItem[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Sidebar</button>
      <SidebarMenu open={open} items={items} onClose={() => setOpen(false)} />
    </>
  );
};

// Stories

export const OneLevel: StoryObj = {
  render: () => <Wrapper items={oneLevel} />,
};

export const TwoLevel: StoryObj = {
  render: () => <Wrapper items={twoLevel} />,
};

export const InitiallyOpen: StoryObj = {
  render: () => <SidebarMenu open={true} items={twoLevel} onClose={() => {}} />,
};
