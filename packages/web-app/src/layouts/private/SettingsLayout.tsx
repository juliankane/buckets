

import SettingsViewHeader from "@features/headers/SettingsViewHeader";
import { Outlet } from "react-router-dom";

export function DesktopSettingsLayout() {
    return ( 
        <div className="flex flex-col  bg-background shadow-lg rounded-lg px-8 py-6 ">
            <SettingsViewHeader />
            
            <div className="mt-6 pt-15 w-full">
                <Outlet />
            </div>
        </div> 
    )
}