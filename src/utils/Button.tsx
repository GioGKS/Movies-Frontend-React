import React from "react";

export default function Button(props: buttonProps) {
  return (
    <button type={props.type} className="btn btn-primary" onClick={props.onclick}>
      {props.children}
    </button>
  );
}

interface buttonProps {
  children: React.ReactNode;
  onclick?(): void;
  type: "button" | "submit"
}

Button.defaultProps = {
  type: "button"
}
