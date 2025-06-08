import React from 'react';

type IconProps = {
  children: React.ReactNode;
  className?: string;
  size?: number | string;
  title?: string;
  'aria-hidden'?: boolean;
  role?: string;
};

export default function Icon({
  children,
  className = '',
  size = 20,
  title,
  ...rest
}: IconProps) {
  return (
    <span
      className={className}
      style={{ width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      {...rest}
    >
      {title && <title>{title}</title>}
      {children}
    </span>
  );
}