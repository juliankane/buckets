import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`border px-3 py-2 rounded ${className}`}
      {...props}
    />
  );
}