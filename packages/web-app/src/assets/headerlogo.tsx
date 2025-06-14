import { FC } from "react"
import { Link } from "react-router-dom"
import { Logo } from "."

type LogoColor = 'red';

type LogoProps = {
    color?: LogoColor;
    text?: string
}
const HeaderLogo: FC<LogoProps> = ({color = 'red', text='buckets'}) => {
    const colors: Record<LogoColor, string> = {
        'red': 'bg-bucket-red'
    }

    return (
    <div className="flex items-center gap-4">
        <span className={`w-16 h-16 flex items-center justify-center rounded-full ${colors[color]}`}>
            <Logo className="w-4 h-4 md:w-8 md:h-8 lg:w-12 lg:h-12 rotate-12 fill-text-primary transition-all duration-200" />
        </span>

        <h1 className="ml-4 font-sans font-bold text-text-heading text-4xl tracking-wider">
            {text}
        </h1>
    </div>

    )
}

const CenterLogoBig: FC = () => {
    return (
         <Link to="/" className="hover:cursor-pointer flex items-center" aria-label='/'>
                <span className="w-32 h-32 flex items-center justify-center rounded-full bg-bucket-red ">
                    <Logo className="w-4 h-4 md:w-8 md:h-8 lg:w-24 lg:h-24 rotate-12 fill transition-all duration-200 " />
                </span>
                <span className='ml-4 font-sarif-sans sarif-sans font-bold text-text-heading text-4xl tracking-wider'>
                    buckets
                </span>
        </Link>
    )
}

export {HeaderLogo, CenterLogoBig}