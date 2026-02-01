// components/ui/Accordion.jsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Accordion({ children, defaultOpen = false }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {children}
    </div>
  );
}

export function AccordionItem({
  title,
  children,
  color = "var(--core)",
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        border: `1px solid ${color}30`,
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: 16,
          background: open ? `${color}10` : "var(--card)",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          fontSize: 16,
          fontWeight: 600,
          color: "var(--text)",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          if (!open) e.currentTarget.style.background = `${color}05`;
        }}
        onMouseLeave={(e) => {
          if (!open) e.currentTarget.style.background = "var(--card)";
        }}
      >
        <span>{title}</span>
        {open ? (
          <ChevronUp size={20} style={{ color: color }} />
        ) : (
          <ChevronDown size={20} style={{ color: color }} />
        )}
      </button>

      {open && (
        <div
          style={{
            padding: 20,
            background: `${color}05`,
            borderTop: `1px solid ${color}20`,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
