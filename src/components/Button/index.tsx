import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`p-2 rounded-md drop-shadow-lg hover:ring-2 hover:ring-gray-300 ${rest.className}`}
    >
      {children}
    </button>
  );
};
