// tabs/AssetsTab.jsx
import React from "react";
import {
  FileText,
  Table,
  BookOpen,
  Video,
  Monitor,
  ExternalLink,
} from "lucide-react";
import { SectionHeader } from "../components";

// ========== ASSET CARD COMPONENT ==========
function AssetCard({ title, icon: Icon, description, link, category }) {
  const categoryColors = {
    templates: "var(--core)",
    forms: "var(--premium)",
    tools: "var(--entry)",
    resources: "var(--ok)",
    dashboards: "var(--warn)",
  };

  const color = categoryColors[category] || "var(--grey)";

  return (
    <div
      style={{
        background: "var(--card)",
        border: `2px solid ${color}30`,
        borderRadius: 12,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        transition: "all 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 8px 24px ${color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: `linear-gradient(135deg, ${color}, ${color}cc)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Icon size={24} />
      </div>

      {/* Content */}
      <div>
        <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>
          {title}
        </h4>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>

      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 16px",
          borderRadius: 8,
          background: `${color}20`,
          border: `1px solid ${color}40`,
          color: color,
          fontSize: 14,
          fontWeight: 600,
          textDecoration: "none",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = `${color}30`;
          e.currentTarget.style.borderColor = color;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = `${color}20`;
          e.currentTarget.style.borderColor = `${color}40`;
        }}
      >
        <span>Открыть ресурс</span>
        <ExternalLink size={16} />
      </a>
    </div>
  );
}

// ========== MAIN COMPONENT ==========
export function AssetsTab() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <SectionHeader
        title="Assets & Links"
        subtitle="Все необходимые материалы, шаблоны и ресурсы для работы трекеров и лидеров"
        icon={FileText}
      />

      {/* TEMPLATES */}
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 24,
            color: "var(--core)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <FileText size={24} />
          Шаблоны и формы
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          <AssetCard
            title="Start-СС Workbook"
            icon={FileText}
            description="Шаблон воркбука для проведения Start-СС. Включает структуру, вопросы и формы фиксации."
            link="#"
            category="templates"
          />

          <AssetCard
            title="Final-СС Template"
            icon={FileText}
            description="Шаблон для фиксации результатов Final-СС и подготовки нового цикла."
            link="#"
            category="templates"
          />

          <AssetCard
            title="Meeting Notes Template"
            icon={FileText}
            description="Стандартная форма протокола встречи десятки (Opening → WIG → Lead/Lag → прожектор)."
            link="#"
            category="templates"
          />

          <AssetCard
            title="WIG Формуляр"
            icon={FileText}
            description="Форма для постановки WIG, Lead и Lag метрик. С примерами и подсказками."
            link="#"
            category="forms"
          />

          <AssetCard
            title="Прожектор Template"
            icon={FileText}
            description="Структура стандартного и deep прожектора с ключевыми вопросами."
            link="#"
            category="forms"
          />

          <AssetCard
            title="Checklist Трекера"
            icon={FileText}
            description="Чек-лист подготовки к Start-СС, встречам десятки и Final-СС."
            link="#"
            category="forms"
          />
        </div>
      </section>

      {/* DASHBOARDS & TOOLS */}
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 24,
            color: "var(--entry)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <Monitor size={24} />
          Дашборды и инструменты
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          <AssetCard
            title="Трекинговый Дашборд"
            icon={Monitor}
            description="Google Sheets с автоматическими расчётами WIG, Lead/Lag для всех десяток."
            link="#"
            category="dashboards"
          />

          <AssetCard
            title="Scoreboard Template"
            icon={Table}
            description="Шаблон Scoreboard для визуализации прогресса группы."
            link="#"
            category="dashboards"
          />

          <AssetCard
            title="Calendar десятки"
            icon={Monitor}
            description="Google Calendar с расписанием всех встреч на 6 месяцев."
            link="#"
            category="dashboards"
          />
        </div>
      </section>

      {/* RESOURCES */}
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 24,
            color: "var(--ok)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <BookOpen size={24} />
          Методологические материалы
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          <AssetCard
            title="Методология в Notion"
            icon={BookOpen}
            description="Полная база знаний по методологиям Ultima (WIG, Kegan, Goldsmith, Lencioni)."
            link="#"
            category="resources"
          />

          <AssetCard
            title="Protocols Library"
            icon={BookOpen}
            description="Библиотека всех протоколов (Start-СС, встречи, прожекторы, конфликты)."
            link="#"
            category="resources"
          />

          <AssetCard
            title="Кейс-база участников"
            icon={BookOpen}
            description="Примеры успешных WIG и разборы по индустриям (retail, SaaS, e-commerce)."
            link="#"
            category="resources"
          />
        </div>
      </section>

      {/* VIDEO & TRAINING */}
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 24,
            color: "var(--premium)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <Video size={24} />
          Видео и обучение
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          <AssetCard
            title="Разборы трекеров"
            icon={Video}
            description="Записи разборов опытных трекеров (супервизии, анализ кейсов)."
            link="#"
            category="resources"
          />

          <AssetCard
            title="Обучение новых трекеров"
            icon={Video}
            description="Видеокурс для Grey-трекеров: методология, протоколы, фасилитация."
            link="#"
            category="resources"
          />

          <AssetCard
            title="Примеры Start-СС"
            icon={Video}
            description="Записи реальных Start-СС с комментариями (с согласия участников)."
            link="#"
            category="resources"
          />
        </div>
      </section>

      {/* FOOTER NOTE */}
      <div
        style={{
          marginTop: 40,
          padding: 20,
          borderRadius: 12,
          background: "rgba(139, 92, 246, 0.05)",
          border: "2px dashed var(--core)",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: 0 }}>
          🔗 <strong>Placeholder ссылки:</strong> Все ссылки ведут на "#".
          Заменю их позже на реальные URL (Google Docs, Sheets, Notion, YouTube)
          для финальной версии.
        </p>
      </div>
    </div>
  );
}
