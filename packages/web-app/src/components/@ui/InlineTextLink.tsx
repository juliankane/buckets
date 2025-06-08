import { FC } from "react";
import { NavLink, type LinkProps } from "react-router-dom";

type InlineTextLinkProps = {
    leadingText?: string | false,
    linkText?: string,
    className?:string
} & LinkProps



const InlineTextLink: FC<InlineTextLinkProps> = ({className="", leadingText=false, linkText="", to="", ...rest}) => {
    const base = "text-lg text-text-primary"
    
    
    const finalClassName = `${base} ${className}`.trim();

    return (
        <NavLink to={to} {...rest}>
            {leadingText && <span className={finalClassName}>
                {leadingText}
            </span>}
            <span className="text-lg text-link hover:underline hover:text-link-hover focus:outline-none">
                {linkText}
            </span>
        </NavLink>
    )
}


export {InlineTextLink}