import React from "react";

interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  onSubmit: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, onSubmit }) => {
  return (
    <button
      type="submit"
      onClick={onSubmit}
      className="rounded w-full p-4 bg-rose-500 text-white"
    >
      {label}
    </button>
  );
};

export default Button;
