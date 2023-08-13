// Generic input component

import { textColor } from "@/lib/constants";
import { useEffect, useRef } from "react";

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
  customValidator,
  minLength,
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
  customValidator?: (value: string) => boolean;
  minLength?: number;
}) {
  const ref = useRef(null);

  useEffect(() => {
    // Custom validation
    if (customValidator && !customValidator(value)) {
      ref.current.setCustomValidity(`Invalid ${name}.`);
      ref.current.reportValidity();
    }
  }, [value, customValidator, id, name]);

  return (
    <input
      ref={ref}
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
      minLength={minLength || 0}
    />
  );
}
