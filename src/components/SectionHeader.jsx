// components/SectionHeader.jsx
import React from "react";

export function SectionHeader({ title, subtitle, icon: Icon }) {
  return (
    <header style={{ marginBottom: 24 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 8,
        }}
      >
        {Icon && <Icon size={24} color="#6366f1" />}
        <h2
          style={{ fontSize: 24, fontWeight: 700, margin: 0, color: "#f9fafb" }}
        >
          {title}
        </h2>
      </div>
      {subtitle && (
        <p
          style={{
            fontSize: 14,
            color: "#9ca3af",
            maxWidth: 800,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
