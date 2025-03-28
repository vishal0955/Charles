import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const SuperAdminLayout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    const toggleSidebar = () => {
      setIsSidebarCollapsed((prev) => !prev);
    };

    return (
        <div className="flex" >
            <Sidebar  toggleSidebar={toggleSidebar}  collapsed={isSidebarCollapsed}/>
            <div className="w-full">
                <Navbar toggleSidebar={toggleSidebar} />
                <Outlet />
            </div>
        </div>
    );
};

export default SuperAdminLayout;
