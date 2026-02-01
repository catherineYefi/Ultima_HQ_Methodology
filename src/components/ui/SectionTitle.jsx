// components/ui/SectionTitle.jsx
import React from "react";

export function SectionTitle({ title, subtitle }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: subtitle ? 8 : 0,
          color: "var(--text)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 14,
            color: "var(--text-secondary)",
            opacity: 0.8,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
