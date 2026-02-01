// tabs/MethodologyTab.jsx
import React from "react";
import { BookOpen } from "lucide-react";
import { SectionHeader } from "../components";
import { Block1 } from "../content/methodology/Block1";
import { Block2 } from "../content/methodology/Block2";
import { Block3 } from "../content/methodology/Block3";
import { Block4 } from "../content/methodology/Block4";
import { Block5 } from "../content/methodology/Block5";
import { Block6 } from "../content/methodology/Block6";

export function MethodologyTab() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <SectionHeader
        title="Methodology"
        subtitle="Краткий справочник методологий ULTIMA для трекеров и лидеров"
        icon={BookOpen}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Block5 />
        <Block6 />
      </div>
    </div>
  );
}
