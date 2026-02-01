// tabs/MethodologyTab.jsx
import React from "react";
import { SectionHeader } from "../components";
import { BookOpen } from "lucide-react";

export function MethodologyTab() {
  return (
    <div>
      <SectionHeader
        title="Methodology"
        subtitle="Смысловой скелет продукта — все ключевые модели методологии ULTIMA 9.0"
        icon={BookOpen}
      />
      <p style={{ color: "#9ca3af" }}>Coming in Phase 2...</p>
    </div>
  );
}

// tabs/RolesOpsTab.jsx
export function RolesOpsTab() {
  return (
    <div>
      <SectionHeader
        title="Roles & Ops"
        subtitle="Описание ролей и 6-месячный операционный цикл ULTIMA"
        icon={BookOpen}
      />
      <p style={{ color: "#9ca3af" }}>Coming in Phase 2...</p>
    </div>
  );
}

// tabs/AssetsTab.jsx
export function AssetsTab() {
  return (
    <div>
      <SectionHeader
        title="Assets & Links"
        subtitle="Центральный узел ссылок на Notion, таблицы, презентации и материалы"
        icon={BookOpen}
      />
      <p style={{ color: "#9ca3af" }}>Coming in Phase 3...</p>
    </div>
  );
}

// tabs/LabTab.jsx
export function LabTab() {
  return (
    <div>
      <SectionHeader
        title="Lab / Dev"
        subtitle="Площадка для будущих идей и экспериментов"
        icon={BookOpen}
      />
      <p style={{ color: "#9ca3af" }}>Coming in Phase 3...</p>
    </div>
  );
}
