import { MenuItemComponent } from "./MenuItemComponent";
import type { MenuItem } from "./SidebarMenu";
import "./sidebar.css";

export const MenuList: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  return (
    <ul className="sidebar-list">
      {items.map((item, idx) => (
        <MenuItemComponent key={idx} item={item} />
      ))}
    </ul>
  );
};