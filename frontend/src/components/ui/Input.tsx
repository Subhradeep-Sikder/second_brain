import type { ChangeEvent } from "react";

interface InputProps {
  placeholder: string;
  type?: "text" | "password";
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ placeholder, type = "text", value, onChange }: InputProps) {
  return (
    <input 
      type={type} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm text-gray-700 placeholder-gray-400"
    />
  );
}