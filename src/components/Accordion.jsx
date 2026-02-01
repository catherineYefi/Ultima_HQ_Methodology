// components/Accordion.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Accordion({
  title,
  children,
  defaultOpen = false,
  borderColor = "#6366f1",
  icon: Icon,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        borderRadius: 12,
        border: `2px solid ${borderColor}`,
        marginBottom: 16,
        background: "rgba(15,23,42,0.6)",
        overflow: "hidden",
        transition: "all 0.2s ease",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: isOpen
            ? "linear-gradient(90deg, rgba(99,102,241,0.15), rgba(79,70,229,0.1))"
            : "transparent",
          border: "none",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.style.background = "rgba(99,102,241,0.05)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.background = "transparent";
          }
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {Icon && <Icon size={20} color={borderColor} />}
          <h4
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#f9fafb",
              margin: 0,
              textAlign: "left",
            }}
          >
            {title}
          </h4>
        </div>
        {isOpen ? (
          <ChevronUp size={20} color="#9ca3af" />
        ) : (
          <ChevronDown size={20} color="#9ca3af" />
        )}
      </button>

      {isOpen && (
        <div
          style={{
            padding: "20px",
            borderTop: `1px solid ${borderColor}40`,
            animation: "slideDown 0.2s ease",
          }}
        >
          <div style={{ fontSize: 13, color: "#d1d5db", lineHeight: 1.6 }}>
            {children}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
