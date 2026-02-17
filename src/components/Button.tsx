type ButtonProps = {
  variant?: 'default' | 'light';
  link?: string;
  children: React.ReactNode;
  className?: string;
};

const hoverBase =
  'transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]';

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  link,
  children,
  className,
}) => {
  const variantClasses =
    variant === 'default'
      ? 'bg-primary text-white hover:bg-primary-dark'
      : 'bg-[#F1F8EC] text-primary hover:bg-[#E4F2D4]';

  const classes =
    `px-2.5 py-4 flex justify-center items-center rounded-full text-xs ${hoverBase} ${variantClasses} ${className ?? ''}`.trim();

  if (link) {
    return (
      <a className={classes} href={link}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
};

export default Button;
