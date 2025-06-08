import { useLocation } from "react-router-dom";
import {
  useEffect,
  useState,
  cloneElement,
  ReactNode,
  ReactElement,
  MouseEventHandler,
} from "react";

type MobileSideMenuProps = {
  children?: ReactNode;
  trigger: ReactElement<{ onClick?: MouseEventHandler<any> }>;
  menuTitle?: string;
  direction?: "left" | "right" | "top" | "bottom";
};

export default function MobileMenu({
  children,
  trigger,
  menuTitle,
  direction = "left",
}: MobileSideMenuProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Auto-close when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleTriggerClick = (e: React.MouseEvent) => {
    if (trigger?.props?.onClick) trigger.props.onClick(e);
    setOpen(true);
  };

  const handleItemClick = () => {
    // Auto-close when clicking inside menu
    setOpen(false);
  };

  const directionClasses = {
    left: {
      position: "left-0 top-0 h-full w-[80%] max-w-sm",
      transform: open ? "translate-x-0" : "-translate-x-full",
    },
    right: {
      position: "right-0 top-0 h-full w-[80%] max-w-sm",
      transform: open ? "translate-x-0" : "translate-x-full",
    },
    top: {
      position: "top-0 left-0 w-full max-h-[80%]",
      transform: open ? "translate-y-0" : "-translate-y-full",
    },
    bottom: {
      position: "bottom-0 left-0 w-full max-h-[80%]",
      transform: open ? "translate-y-0" : "translate-y-full",
    },
  }[direction];

  return (
    <div>
      {/* Trigger element */}
      {cloneElement(trigger, { onClick: handleTriggerClick })}

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed ${directionClasses.position} bg-white z-50 shadow-lg 
                    transform transition-transform duration-300 ease-in-out 
                    ${directionClasses.transform}`}
      >
        <div className="p-6 space-y-4 overflow-auto">
          <div className="flex justify-between items-center">
            {menuTitle && <h2 className="text-lg font-semibold">{menuTitle}</h2>}
            <button onClick={() => setOpen(false)} className="text-2xl">✕</button>
          </div>

          {/* Wrap menu children and close on click */}
          <div onClick={handleItemClick}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}