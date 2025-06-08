


type HeaderProps = {
  children: React.ReactNode;
  variant?: 'fixed' | 'flex';
  className?: string;
};

export function Header({ children, variant = 'fixed', className = '' }: HeaderProps) {
  const base = "border-b-1 bg-background rounded border-border h-18 p-2";

  const variants = { 
    fixed: "fixed z-50 w-full top-0 flex top-0",
    flex: "flex flex-1 justify-between" 
  };

  const finalClassName = `${base} ${variants[variant]} ${className}`.trim();

  return (
    <header className={finalClassName}>

      {children}

    </header>
  );
}
