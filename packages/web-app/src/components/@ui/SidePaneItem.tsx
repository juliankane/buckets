import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { safeClick } from '@utils/safeClick';
import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type PanelItemProps = {
    children?: ReactNode ;
    to: string;
    leftIcon?: ReactNode;
    rightIcon?: true;
    type?: string;
};

export const SidePanelItem: FC<PanelItemProps> = ({
    children,
    to,
    leftIcon,
    rightIcon,
}) => {
    return (

          
           <NavLink to={to} 
        className={({ isActive }) =>  `transition-[width]  w-full h-18 p-2 gap-2 justify-around items-center flex rounded-lg hover:bg-background-secondary hover:cursor-pointer 
         ${isActive ? 'bg-background-secondary' : ''}` }

         
    >       {leftIcon &&  <div className='shrink-0 size-10'>{leftIcon} </div>}
           

            {children && <div className='flex-grow'><span className='text-2xl'>{children}</span></div>}

            {rightIcon && 
            <button
                className="hover:bg-text-muted hover:text-white size-8 rounded-full transiton ease-out" onClick={safeClick(() => { console.log("Ellipsis clicked"); })} >
                <EllipsisHorizontalIcon />
            </button>}

            </NavLink>
    );
};
