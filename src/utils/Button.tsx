import React from "react";

export default function Button(props: buttonProps) {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={props.className}
      onClick={props.onclick}
    >
      {props.children}
    </button>
  );
}

interface buttonProps {
  children: React.ReactNode;
  onclick?(): void;
  type: "button" | "submit";
  disabled: boolean;
  className: string;
}

Button.defaultProps = {
  type: "button",
  disabled: false,
  className: "btn btn-primary"
};
