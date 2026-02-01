// components/Badge.jsx
import React from "react";

const BADGE_STYLES = {
  core: {
    background: "linear-gradient(90deg, #8b5cf6, #6366f1)",
    color: "#fff",
  },
  premium: {
    background: "linear-gradient(90deg, #f59e0b, #d97706)",
    color: "#fff",
  },
  entry: {
    background: "linear-gradient(90deg, #10b981, #059669)",
    color: "#fff",
  },
  grey: {
    background: "linear-gradient(90deg, #6b7280, #4b5563)",
    color: "#fff",
  },
  info: {
    background: "rgba(99,102,241,0.2)",
    color: "#a5b4fc",
    border: "1px solid #6366f1",
  },
  warning: {
    background: "rgba(245,158,11,0.2)",
    color: "#fbbf24",
    border: "1px solid #f59e0b",
  },
  success: {
    background: "rgba(16,185,129,0.2)",
    color: "#6ee7b7",
    border: "1px solid #10b981",
  },
};

export function Badge({ children, variant = "info", style = {} }) {
  const variantStyle = BADGE_STYLES[variant] || BADGE_STYLES.info;

  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 10px",
        borderRadius: 6,
        fontSize: 11,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        ...variantStyle,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
