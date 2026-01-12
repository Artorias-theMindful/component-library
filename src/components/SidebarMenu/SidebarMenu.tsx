import React from "react";
import { MenuList } from "./MenuList";
import "./sidebar.css";

export interface MenuItem {
  label: string;
  children?: MenuItem[];
}

interface Props {
  open: boolean;
  items: MenuItem[];
  onClose: () => void;
}

export const SidebarMenu: React.FC<Props> = ({ open, items, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${open ? "sidebar-overlay-show" : ""}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <MenuList items={items} />
      </div>
    </>
  );
};
