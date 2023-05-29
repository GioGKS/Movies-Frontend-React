import React from "react";

export default function Button(props: buttonProps) {
  return (
    <button className="btn btn-primary" onClick={props.onclick}>
      {props.children}
    </button>
  );
}

interface buttonProps {
  children: React.ReactNode;
  onclick(): void;
}
