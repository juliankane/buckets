import React from "react";
import { Link } from "react-router-dom";
import {  Menu, LayoutDashboardIcon, Settings } from "lucide-react"; // or your icon imports




type SidePanelProps = {
    collapsed: boolean;
    setCollapsed: (e:boolean) => void;

}

export const SidePanel = ({collapsed, setCollapsed}: SidePanelProps) => {


  

  const toggleSidebar = () => setCollapsed(!collapsed);

  // Sidebar width for desktop
  const sidebarWidth = collapsed ? "w-20" : "w-48";
    return (
      <div
  className={`fixed left-0 top-0 h-screen bg-background text-text-primary border-r flex ${sidebarWidth} transition-all ease-in-out duration-100 z-10`}
>
        <div className="flex flex-col w-full">
          {/* Toggle Button */}
          <div className="flex flex-col">
            <button
              onClick={toggleSidebar}
              className="p-6 focus:outline-none hover:bg-background-secondary"
            >
              <Menu />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col h-full justify-between gap-2 mt-4">
            <div>
              <SidebarItem
                icon={<LayoutDashboardIcon />}
                label="Dashboard"
                collapsed={collapsed}
                navTo="dashboard"
              />
            </div>

            <div>
              <SidebarItem
                icon={<Settings />}
                label="Settings"
                collapsed={collapsed}
                navTo="settings"
              />
            </div>
          </nav>
        </div>
      </div>
    );
};

const SidebarItem = ({
  icon,
  label,
  collapsed,
  navTo,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
  navTo: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      to={navTo}
      onClick={onClick}
      className="flex items-center gap-4 px-6 py-2 hover:bg-background-secondary cursor-pointer"
    >
      <span className="text-xl">{icon}</span>
      {!collapsed && <span className="text-sm">{label}</span>}
    </Link>
  );
};