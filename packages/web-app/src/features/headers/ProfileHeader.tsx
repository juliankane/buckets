import { SearchBar } from "@components/@ui/SearchBar"
import { ProfileMenu } from "@features/menus/ProfileMenu"
import { useLocation } from "react-router-dom"
import { HeaderLogo } from "@assets/headerlogo"
import { NotificationMenu } from "../menus/NotificationMenu"

function SettingsHeaderContent() {
    return (
        <div className="flex flex-1 items-center justify-between">
            <HeaderLogo color='red' text='settings'/>
        </div>
    )
}

type ProfileHeader = {
  collapsed: boolean;
}
export default function ProfileHeader({collapsed}:ProfileHeader) {
  const location = useLocation();
  const isSettings = location.pathname.includes("settings");
const left = collapsed ? "left-20" : "left-48";


  function setSearchTerm(value: unknown) {
    throw new Error(`${value}`);
  }

  return (
       <div className={`fixed top-0 ${left} right-0 h-16 bg-background border-b px-6 flex items-center transition-all duration-100 z-10`}>
      {isSettings ? (
        <SettingsHeaderContent />
      ) : (
        <SearchBar
          className="bg-background-secondary text-text-primary px-3 py-1 rounded-lg outline-none focus:bg-background-rich"
          onChange={e => setSearchTerm(e.target.value)}
          placeholder={"Search buckets"}
        />
      )}
      <div className="ml-auto flex items-center space-x-3 max-h-48">
        <NotificationMenu />
        <ProfileMenu />
      </div>
    </div>
  );
}