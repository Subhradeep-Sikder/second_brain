import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  secondary: "bg-indigo-100 text-indigo-600 hover:bg-indigo-200",
};

export function Button({ variant, text, startIcon, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} 
      className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors ${variantStyles[variant]}`}>
        
      {startIcon}
      {text}

    </button>
  );
}