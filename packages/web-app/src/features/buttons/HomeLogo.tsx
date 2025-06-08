import { Logo } from "@assets/index";
import { FC } from "react";
import { Link } from "react-router-dom";

type HomeLogo = {
    logoFill?: boolean
    showTitle?: boolean
}

const HomeLogo: FC<HomeLogo> = ({ logoFill = true, showTitle = true }) => {
    const logoBg = logoFill ? 'bg-bucket-orange' : 'bg-mute';

    return (
        
        <Link to="/" className="hover:cursor-pointer flex items-center space-x-1" aria-label="/">
            <span className={`flex size-12 md:size-14 items-center justify-center rounded-full ${logoBg}`}>
                <Logo className="size-10 md:size-11 rotate-12 fill" />
            </span>

            {showTitle && <h1 className='text-[2rem] font-sans font-bold text-text-heading md:tracking-wider'>
                buckets
            </h1>}
        </Link>
     
    )
}

export { HomeLogo }
