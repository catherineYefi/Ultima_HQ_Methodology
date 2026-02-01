// components/TabsBar.jsx
import React from "react";

export function TabsBar({ tabs, activeTab, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        padding: "4px 4px",
        borderRadius: 999,
        backgroundColor: "rgba(15,23,42,0.9)",
        border: "1px solid rgba(148,163,184,0.5)",
        overflowX: "auto",
        marginBottom: 20,
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            style={{
              padding: "8px 16px",
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 500,
              whiteSpace: "nowrap",
              background: isActive
                ? "linear-gradient(90deg,#4f46e5,#6366f1)"
                : "transparent",
              color: isActive ? "#f9fafb" : "#9ca3af",
              opacity: isActive ? 1 : 0.9,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = "#e5e7eb";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = "#9ca3af";
              }
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
