// Generic input component

import { textColor } from "@/lib/constants";

const sizeClasses = {
  sm: "w-1/4 p-2",
  md: "w-1/3 p-3",
  lg: "w-1/2 p-4",
};

export default function TextInput({
  placeholder,
  name,
  value,
  onChange,
  type,
  size,
  pattern,
  id,
  required,
  maxLength,
  className,
}: {
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id?: string;
  type?: "text" | "password" | "email";
  size?: "sm" | "md" | "lg";
  pattern?: string;
  required?: boolean;
  maxLength?: number;
  className?: string;
}) {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      name={name}
      id={id || name}
      className={`text-2xl rounded-3xl shadow-2xl drop-shadow-2xl text-[${textColor}] hover:opacity-[35%] outline-none ${
        sizeClasses[size || "md"]
      }${className ? " " + className : ""}`}
      value={value}
      onChange={onChange}
      pattern={pattern}
      required={required || false}
      maxLength={maxLength || 20}
    />
  );
}
