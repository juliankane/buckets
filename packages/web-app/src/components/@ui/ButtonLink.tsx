

import React from 'react';
import { Link } from 'react-router-dom';

type ButtonLinkProps = {

    to: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
    children?: React.ReactNode
    className?: string;
};

export default function ButtonLink({children, to, variant="primary", className=""}: ButtonLinkProps) {
 
    
    
    
    const variants = {
        primary: `rounded text-center bg-bucket-blue text-2xl font-semibold text-white px-6 py-4 hover:bg-bucket-blue/60 transition ease-in shadow-lg`,
        secondary: `rounded text-center bg-bucket-blue text-2xl text-white px-6 py-4 hover:bg-bucket-blue/60 transition ease-in shadow-lg`,
        tertiary: `rounded text-center text-xl text-text-primary px-6 py-4 ease-in border-bucket-aqua`

    }

    const finalClassName = `${variants[variant]} ${className}`.trim();
    
    return(
        <Link to={to} className={finalClassName}>
            {children}
        </Link>
    );
};