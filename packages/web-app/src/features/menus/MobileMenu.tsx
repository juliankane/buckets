import { Button } from "@components/@base/Button";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Button */}
        <Button onClick={()=>setOpen(true)} variant="icon" className="size-[2rem] text-text-primary">
            <Bars3Icon />
        </Button>


      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}
      
      {/* Sidebar Menu */}
      <div className={`
        fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}
      `}>


        <div className="p-6 space-y-4">
          <button onClick={() => setOpen(false)} className="text-right w-full">
            ✕
          </button>
          <a href="/signin" className="block text-lg">Sign In</a>
          <a href="/premium" className="block text-lg">Get Premium</a>
          <a href="/help" className="block text-lg">Help</a>
        </div>
      </div>
    </div>
  );
}
