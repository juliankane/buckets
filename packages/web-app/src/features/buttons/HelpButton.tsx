import { FC } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

type HelpButtonProps = {
    className?: string
    
}

const HelpButton: FC<HelpButtonProps> = ({className}) => {
    const base = "hover:cursor-pointer flex items-center";

    const finalClassName = `${base} ${className}`.trim();

    return (
        <Link to={"/help"} className={finalClassName}>
            <QuestionMarkCircleIcon className="w-12 h-12 text-text-secondary"/>
        </Link>
    )
}


export {HelpButton}