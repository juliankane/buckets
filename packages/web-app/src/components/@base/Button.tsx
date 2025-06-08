import React from "react";

type ButtonVariant = "primary" | "icon"; // Add more variants if needed

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
  children?: React.ReactNode;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest 
}: ButtonProps) {
  
  const variants: Record<ButtonVariant, string> = {
    primary: `
      rounded-full w-full bg-bucket-blue text-md text-white 
      transition-colors duration-200 ease-in-out 
      hover:bg-bucket-blue/60 cursor-pointer
    `,
    icon: `
      rounded-full flex items-center justify-center 
      transition-colors ease-linear duration-200 
      hover:bg-gray-200 cursor-pointer
    `,
  };

  const finalClassName = `${variants[variant]} ${className}`.trim();

  return (
    <button className={finalClassName} {...rest}>
      {children}
    </button>
  );
}