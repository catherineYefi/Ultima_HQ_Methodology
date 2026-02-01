// components/ui/BulletList.jsx
import React from "react";

export function BulletList({ items, color = "var(--core)" }) {
  return (
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        fontSize: 14,
        lineHeight: 1.8,
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            paddingLeft: 20,
            position: "relative",
            color: "var(--text-secondary)",
            marginBottom: 4,
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              color: color,
              fontWeight: 700,
            }}
          >
            •
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
