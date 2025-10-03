interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button',
  disabled = false,
  fullWidth = false
}: ButtonProps) => {
  const baseClasses = 'px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform active:scale-95 md:hover:scale-105';
  const variants = {
    primary: 'bg-blue-600 text-white md:hover:bg-blue-700 shadow-lg md:hover:shadow-xl active:bg-blue-800',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 md:hover:bg-blue-50 active:bg-blue-100'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};