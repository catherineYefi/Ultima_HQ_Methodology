// App.jsx - ULTIMA HQ Portal
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { TabsBar } from "./components";
import {
  ProductMatrixTab,
  ProtocolsTab,
  MethodologyTab,
  RolesOpsTab,
  AssetsTab,
  LabTab,
} from "./tabs";
import "./styles/globals.css";

const TABS = [
  { id: "product", label: "Product Matrix" },
  { id: "protocols", label: "Protocols" },
  { id: "methodology", label: "Methodology" },
  { id: "roles", label: "Roles & Ops" },
  { id: "assets", label: "Assets & Links" },
  { id: "lab", label: "Lab" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [theme, setTheme] = useState(() => {
    // Загружаем тему из localStorage или используем dark по умолчанию
    return localStorage.getItem("ultima-theme") || "dark";
  });

  // Применяем тему к body при монтировании и изменении
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("ultima-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      style={{
        fontFamily:
          "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px 24px",
          borderBottom: "1px solid var(--border)",
          background: "var(--card)",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 16,
          }}
        >
          <div>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 6,
                background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ULTIMA HQ
            </h1>
            <p
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              Продуктовая, методологическая и операционная карта ULTIMA 9.0
            </p>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              padding: 10,
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--card)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun size={20} color="var(--text)" />
            ) : (
              <Moon size={20} color="var(--text)" />
            )}
          </button>
        </div>

        <TabsBar tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {/* Content */}
      <div style={{ padding: "32px 24px", maxWidth: 1400, margin: "0 auto" }}>
        {activeTab === "product" && <ProductMatrixTab />}
        {activeTab === "protocols" && <ProtocolsTab />}
        {activeTab === "methodology" && <MethodologyTab />}
        {activeTab === "roles" && <RolesOpsTab />}
        {activeTab === "assets" && <AssetsTab />}
        {activeTab === "lab" && <LabTab />}
      </div>
    </div>
  );
}
