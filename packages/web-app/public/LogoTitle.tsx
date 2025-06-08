import { Logo } from "../src/assets/index";
import { FC } from "react";
import { Link } from "react-router-dom";

type HomeLogo = {
    logoFill?: boolean
    showTitle?: boolean
  
}

const LogoTitle: FC<HomeLogo> = ({  logoFill = true, showTitle = true }) => {
    const logoBg = logoFill ? 'bg-bucket-orange' : 'bg-border';



    return (

        <Link to="/" className="hover:cursor-pointer flex items-center" aria-label="/">
            <span className={`p-3 flex items-center justify-center rounded-full ${logoBg}`}>
                <Logo className="size-[4rem] lg:size-[5rem]  md:size-[4rem] rotate-12 fill  " />
            </span>

            {showTitle && <span className='ml-4 text-text-primary font-sans font-bold text-[3.5rem] lg:text-[4rem] md:text-[3rem]  tracking-wider'>
                buckets
            </span>}
        </Link>

    )
}

export { LogoTitle as LogoTitle }


