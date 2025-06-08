
import { Button } from '@components/@base/Button';
import { Header } from '@components/@containers/Header';
import MobileMenu from '@components/@containers/MobileMenu';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline';
import { LayoutDashboardIcon, Settings } from 'lucide-react';
import { useLayoutEffect, useState,  JSX } from 'react';
import { Link, useLocation } from 'react-router-dom';



type MobileHeaderProps = {
    path: string;


}






export default function MobileHeader({path}:MobileHeaderProps) {
  const [title, setTitle] = useState<JSX.Element | null>(null);

  useLayoutEffect(() => {
    const getTitleText = () => {
      if (path.includes("dashboard")) return "Dashboard";
      if (path.includes("buckets")) return "Buckets";
      if (path.includes("settings")) return "Settings";
      if (path.includes("settings")) return "Settings";
      return "Profile";
    };

    const newTitle = getTitleText();

    setTitle(
      <h1 className="text-[1rem] font-sans font-bold text-text-primary md:tracking-wider">
        {newTitle}
      </h1>
    );
  }, [path]);

  return (
    <Header variant="fixed">
      <div className="flex flex-row w-full items-center justify-between px-2">

        <div className='flex flex-row items-center gap-3'>
            {/* Left-side menu */}
            <MobileMenu
            menuTitle="Main Menu"
            direction="left"
            trigger={
                <Button variant="icon" className="size-[2rem] text-text-primary">
                <Bars3Icon />
                </Button>
            }
            >
            <Link to="dashboard" className="flex items-center gap-2 text-lg">
                <LayoutDashboardIcon className="text-xl" />
                <span>Dashboard</span>
            </Link>
       
            </MobileMenu>

            {/* Center Title */}
            <div className="flex-1">{title}</div>
        </div>




        {/* Right-side user menu */}
        <MobileMenu
          menuTitle="User Menu"
          direction="right"
          trigger={
            <Button variant="icon" className="size-[2rem] text-text-primary">
              <UserCircleIcon />
            </Button>
          }
        >
          <Link to="settings" className="flex items-center gap-2 text-lg">
            <Settings className="text-xl" />
            <span>Settings</span>
          </Link>
        </MobileMenu>
      </div>
    </Header>
  );
}