import { useDevice } from "@context/DeviceContext";
import { ProfileProvider, useProfileContext } from "@context/ProfileContext";
import MobileHeader from "@features/headers/MobileHeader";
import ProfileHeader from "@features/headers/ProfileHeader";
import { SidePanel } from "@features/side-panel";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";



function MobileProfileLayout() {
  const location = useLocation();
  const path = location.pathname


  return( 
    <div className="flex min-h-screen"> 
        <MobileHeader path={path}/>
            <main className="pt-30 px-3">
                <Outlet />
            </main>
    </div>
  )
}

function DesktopProfileLayout() {
    const [collapsed, setCollapsed] = useState<boolean>(false); 
    const sidebarPadding = collapsed ? "pl-20" : "pl-64";

    return( 
       <div className="flex min-h-screen">
            <SidePanel collapsed={collapsed} setCollapsed={setCollapsed}/>
               
                <ProfileHeader collapsed={collapsed} />
        
                <main className={`flex-1 overflow-y-auto transition-all duration-100 ${sidebarPadding} pt-30`}>
                    <Outlet />
                </main> 
            
      </div>
  )
};




function ProfileContent() {
  const { loading } = useProfileContext();
  const { isMobile } = useDevice();
 
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }
  
  return isMobile ? <MobileProfileLayout/> : <DesktopProfileLayout/>
}


function ProfileLayout() {
  return (
    <ProfileProvider>
      <ProfileContent />
    </ProfileProvider>
  );
}

export { ProfileLayout };
