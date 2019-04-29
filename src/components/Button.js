import React from "react";

export default function Button({ text, href, path }) {
  return (
    <div>
      <button className="mainButton">
        <a href={href}>{text}</a>
      </button>
    </div>
  );
}
