// components/Card.jsx
import React from "react";

export function Card({
  title,
  children,
  style = {},
  borderColor = "rgba(148,163,184,0.4)",
  className = "",
}) {
  return (
    <section
      className={className}
      style={{
        borderRadius: 16,
        border: `1px solid ${borderColor}`,
        padding: 20,
        marginBottom: 16,
        background:
          "linear-gradient(145deg,rgba(15,23,42,0.96),rgba(15,23,42,0.86))",
        ...style,
      }}
    >
      {title && (
        <h3
          style={{
            fontSize: 15,
            fontWeight: 600,
            marginBottom: 12,
            color: "#e5e7eb",
          }}
        >
          {title}
        </h3>
      )}
      <div style={{ fontSize: 13, color: "#d1d5db", lineHeight: 1.6 }}>
        {children}
      </div>
    </section>
  );
}
