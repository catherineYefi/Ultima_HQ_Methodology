// components/ui/Card.jsx
import React from "react";

export function Card({ children, color = "var(--core)" }) {
  return (
    <div
      style={{
        background: "var(--card)",
        border: `1px solid ${color}30`,
        borderLeft: `4px solid ${color}`,
        borderRadius: 12,
        padding: 20,
      }}
    >
      {children}
    </div>
  );
}
