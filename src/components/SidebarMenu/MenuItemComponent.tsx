import { useState } from "react";
import type { MenuItem } from "./SidebarMenu";
import "./sidebar.css";

export const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  return (
    <li className="sidebar-item">
      <div
        className="sidebar-item-label"
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        <span>{item.label}</span>
        {hasChildren && <span>{expanded ? "▾" : "▸"}</span>}
      </div>

      {hasChildren && expanded && (
        <ul className="sidebar-sublist">
          {item.children!.map((c, i) => (
            <MenuItemComponent key={i} item={c} />
          ))}
        </ul>
      )}
    </li>
  );
};
