import Link from "next/link";
import React from "react";

const ButtonComponent = ({
  label,
  link,
  style,
  rel,
  onClick,
}: {
  label: string | React.ReactNode;
  link?: string;
  style?: string;
  rel?: string;
  onClick?: () => void;
}) => {
  // If onClick is provided, render as button
  if (onClick) {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        className={`btn no-underline ${
          style === "outline" ? "btn-outline-primary" : "btn-primary"
        }`}
      >
        {label}
      </button>
    );
  }

  // Otherwise render as Link
  return (
    <Link
      href={link || "#"}
      target="_blank"
      rel={`noopener noreferrer ${
        rel ? (rel === "follow" ? "" : rel) : "nofollow"
      }`}
      className={`btn no-underline ${
        style === "outline" ? "btn-outline-primary" : "btn-primary"
      }`}
    >
      {label}
    </Link>
  );
};

export default ButtonComponent;