// tabs/ProtocolsTab.jsx
import React, { useState, useEffect, useRef } from "react";
import { SectionHeader, Accordion, Badge } from "../components";
import {
  FileText,
  Users,
  CheckCircle,
  Calendar,
  Zap,
  AlertCircle,
  Shield,
  Clock,
  Target,
} from "lucide-react";
import { PROTOCOLS_DATA } from "../data/protocolsData";

export function ProtocolsTab() {
  const [activeSection, setActiveSection] = useState("");

  // Отслеживание активной секции при скролле
  useEffect(() => {
    const handleScroll = () => {
      const sections = PROTOCOLS_DATA.quickNav.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* Header */}
      <SectionHeader
        title="Protocols"
        subtitle="Стандарты проведения всех ключевых процессов ULTIMA 9.0 — стартовые и финальные стратсессии, встречи десяток, прожекторы, конфликты и честность. Это рабочая книга для трекеров и лидеров."
        icon={FileText}
      />

      {/* Quick Nav */}
      <QuickNav
        items={PROTOCOLS_DATA.quickNav}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Блок 1: Start-СС */}
      <ProtocolBlock
        data={PROTOCOLS_DATA.startSS}
        icon={Users}
        renderContent={(card) => {
          if (card.title === "Overview Start-СС") {
            return <OverviewContent content={card.content} />;
          }
          if (card.title === "Structure of 2-Day Start-СС") {
            return <TwoDayStructure content={card.content} />;
          }
          if (card.title.includes("Протокол 2–3 часа")) {
            return <TimeBlocksContent content={card.content} />;
          }
        }}
      />

      {/* Блок 2: Final-СС */}
      <ProtocolBlock
        data={PROTOCOLS_DATA.finalSS}
        icon={CheckCircle}
        renderContent={(card) => {
          if (card.title === "Overview Final-СС") {
            return <OverviewContent content={card.content} />;
          }
          if (card.title.includes("Structure")) {
            return <StepsContent steps={card.content.steps} />;
          }
        }}
      />

      {/* Блок 3: Би-викли встречи */}
      <ProtocolBlock
        data={PROTOCOLS_DATA.meetings}
        icon={Calendar}
        renderContent={(card) => {
          if (card.title === "Первые 4 встречи цикла (Weekly)") {
            return (
              <div>
                <p style={{ marginBottom: 12 }}>
                  <strong>Цель:</strong> {card.content.goal}
                </p>
                {card.content.format && (
                  <div style={{ marginTop: 16, marginBottom: 16 }}>
                    <strong>Формат:</strong>
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        flexWrap: "wrap",
                        marginTop: 8,
                      }}
                    >
                      {card.content.format.map((item, i) => (
                        <Badge key={i} variant="info">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {card.content.focus && (
                  <div style={{ marginTop: 16 }}>
                    <strong>Фокус:</strong>
                    <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                      {card.content.focus.map((item, i) => (
                        <li key={i} style={{ marginBottom: 4 }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {card.content.note && (
                  <div
                    style={{
                      marginTop: 16,
                      padding: 12,
                      background: "rgba(139,92,246,0.1)",
                      borderLeft: "3px solid #8b5cf6",
                      borderRadius: 6,
                      fontStyle: "italic",
                    }}
                  >
                    {card.content.note}
                  </div>
                )}
              </div>
            );
          }
          if (card.title.includes("Overview")) {
            return <OverviewContent content={card.content} />;
          }
          if (card.title === "Структура встречи") {
            return <MeetingStructure content={card.content} />;
          }
        }}
      />

      {/* Блок 4: Прожекторы */}
      <ProtocolBlock
        data={PROTOCOLS_DATA.spotlights}
        icon={Zap}
        renderContent={(card) => {
          if (card.title.includes("Стандартный")) {
            return <SpotlightStructure content={card.content} />;
          }
          if (card.title.includes("Deep")) {
            return <DeepSpotlight content={card.content} />;
          }
        }}
      />

      {/* Блок 5: Конфликтный протокол */}
      <ProtocolBlock
        data={PROTOCOLS_DATA.conflicts}
        icon={AlertCircle}
        renderContent={(card) => {
          if (card.title === "Когда активировать") {
            return <ListContent items={card.content.triggers} />;
          }
          if (card.title === "Принципы") {
            return <ListContent items={card.content.principles} />;
          }
          if (card.title === "Протокол") {
            return <StepsContent steps={card.content.steps} />;
          }
        }}
      />

      {/* Блок 6: Honesty & Safety */}
      <ProtocolBlock
        data={PROTOCOLS_DATA.honesty}
        icon={Shield}
        renderContent={(card) => {
          if (card.content.rules) {
            return <ListContent items={card.content.rules} />;
          }
          if (card.content.forbidden) {
            return (
              <ListContent items={card.content.forbidden} type="warning" />
            );
          }
        }}
      />

      {/* Блок 7: Созвон трекер–лидер (НОВЫЙ) */}
      <ProtocolBlock
        data={PROTOCOLS_DATA.trackerLeaderSync}
        icon={Users}
        renderContent={(card) => {
          if (card.title === "Обзор") {
            return <OverviewContent content={card.content} />;
          }
          if (card.content.topics) {
            return (
              <div>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  {card.content.topics.map((topic, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: 4,
                        fontSize: 14,
                        lineHeight: 1.5,
                      }}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          if (card.content.principle) {
            return (
              <div
                style={{
                  padding: 12,
                  background: "rgba(236,72,153,0.1)",
                  borderLeft: "3px solid #ec4899",
                  borderRadius: 6,
                  fontStyle: "italic",
                }}
              >
                {card.content.principle}
              </div>
            );
          }
        }}
      />

      {/* Блок 8: Совет директоров (НОВЫЙ) */}
      <ProtocolBlock
        data={PROTOCOLS_DATA.boardOfDirectors}
        icon={Target}
        renderContent={(card) => {
          if (card.content.format) {
            return (
              <div>
                <strong>Формат:</strong>
                <div
                  style={{
                    marginTop: 8,
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  {card.content.format.map((item, i) => (
                    <Badge key={i} variant="info">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          }
          if (card.content.layers) {
            return (
              <div>
                <p style={{ marginBottom: 8 }}>
                  <strong>Цель:</strong> {card.content.goal}
                </p>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  {card.content.layers.map((layer, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: 4,
                        fontSize: 14,
                        lineHeight: 1.5,
                      }}
                    >
                      {layer}
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          if (card.content.selection) {
            return (
              <div>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  {card.content.selection.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: 4,
                        fontSize: 14,
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          if (card.content.note) {
            return (
              <div
                style={{
                  padding: 12,
                  background: "rgba(168,85,247,0.1)",
                  borderLeft: "3px solid #a855f7",
                  borderRadius: 6,
                  fontStyle: "italic",
                }}
              >
                {card.content.note}
              </div>
            );
          }
        }}
      />
    </div>
  );
}

// ========== КОМПОНЕНТЫ ==========

// Quick Navigation
function QuickNav({ items, activeSection, onNavigate }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        marginBottom: 32,
        flexWrap: "wrap",
        padding: "16px",
        background: "rgba(15,23,42,0.4)",
        borderRadius: 12,
        border: "1px solid rgba(148,163,184,0.2)",
      }}
    >
      {items.map((item) => {
        const isActive = item.id === activeSection;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              border: `2px solid ${item.color}`,
              background: isActive ? item.color : "rgba(15,23,42,0.6)",
              color: isActive ? "#fff" : item.color,
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = `${item.color}20`;
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = "rgba(15,23,42,0.6)";
              }
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

// Protocol Block Container
function ProtocolBlock({ data, icon: Icon, renderContent }) {
  return (
    <section id={data.id} style={{ marginBottom: 48, scrollMarginTop: 100 }}>
      <h3
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: data.color,
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Icon size={24} />
        {data.title}
      </h3>

      {data.cards.map((card, index) => (
        <Accordion key={index} title={card.title} borderColor={data.color}>
          {renderContent(card)}
        </Accordion>
      ))}
    </section>
  );
}

// Content Renderers

function OverviewContent({ content }) {
  return (
    <div>
      <p style={{ marginBottom: 12 }}>
        <strong>Цель:</strong> {content.goal}
      </p>

      {content.format && (
        <div style={{ marginTop: 16, marginBottom: 16 }}>
          <strong>Формат:</strong>
          <div
            style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}
          >
            {content.format.map((item, i) => (
              <Badge key={i} variant="info">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {content.results && (
        <div style={{ marginTop: 16 }}>
          <strong>Результаты:</strong>
          <ul style={{ marginTop: 8, paddingLeft: 20 }}>
            {content.results.map((item, i) => (
              <li key={i} style={{ marginBottom: 4 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function TwoDayStructure({ content }) {
  return (
    <div>
      {/* Day 1 */}
      <div style={{ marginBottom: 24 }}>
        <h4
          style={{
            fontSize: 15,
            fontWeight: 600,
            marginBottom: 12,
            color: "#6366f1",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Clock size={18} />
          {content.day1.title}
        </h4>
        <ul style={{ paddingLeft: 20 }}>
          {content.day1.items.map((item, i) => (
            <li key={i} style={{ marginBottom: 12 }}>
              <strong>{item.block}</strong>
              {item.details.length > 0 && (
                <ul style={{ marginTop: 4, paddingLeft: 20 }}>
                  {item.details.map((detail, j) => (
                    <li key={j} style={{ fontSize: 13, color: "#d1d5db" }}>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Day 2 */}
      <div>
        <h4
          style={{
            fontSize: 15,
            fontWeight: 600,
            marginBottom: 12,
            color: "#8b5cf6",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Clock size={18} />
          {content.day2.title}
        </h4>
        <ul style={{ paddingLeft: 20 }}>
          {content.day2.items.map((item, i) => (
            <li key={i} style={{ marginBottom: 12 }}>
              <strong>{item.block}</strong>
              {item.details.length > 0 && (
                <ul style={{ marginTop: 4, paddingLeft: 20 }}>
                  {item.details.map((detail, j) => (
                    <li key={j} style={{ fontSize: 13, color: "#d1d5db" }}>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TimeBlocksContent({ content }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {content.blocks.map((block, i) => (
        <div
          key={i}
          style={{
            padding: 12,
            background: "rgba(99,102,241,0.05)",
            borderLeft: "3px solid #6366f1",
            borderRadius: 6,
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: 8, color: "#e5e7eb" }}>
            {block.title}
          </div>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            {block.items.map((item, j) => (
              <li key={j} style={{ fontSize: 13, color: "#d1d5db" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function StepsContent({ steps }) {
  return (
    <ol style={{ paddingLeft: 20, margin: 0 }}>
      {steps.map((step, i) => (
        <li
          key={i}
          style={{
            marginBottom: 8,
            fontSize: 14,
            lineHeight: 1.5,
            color: "#e5e7eb",
          }}
        >
          {step}
        </li>
      ))}
    </ol>
  );
}

function MeetingStructure({ content }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {content.blocks.map((block, i) => (
        <div
          key={i}
          style={{
            padding: 12,
            background: "rgba(139,92,246,0.05)",
            borderLeft: "3px solid #8b5cf6",
            borderRadius: 6,
          }}
        >
          <div
            style={{
              fontWeight: 600,
              marginBottom: 6,
              color: "#e5e7eb",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Target size={16} />
            {block.title}
          </div>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            {block.items.map((item, j) => (
              <li key={j} style={{ fontSize: 13, color: "#d1d5db" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SpotlightStructure({ content }) {
  return (
    <div>
      {content.goal && (
        <p style={{ marginBottom: 16 }}>
          <strong>Цель:</strong> {content.goal}
        </p>
      )}

      {content.structure && (
        <div>
          <strong>Структура:</strong>
          <div
            style={{
              marginTop: 12,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {content.structure.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px 12px",
                  background: "rgba(245,158,11,0.05)",
                  borderRadius: 6,
                }}
              >
                <span style={{ fontWeight: 500 }}>{item.step}</span>
                <Badge variant="warning">{item.time}</Badge>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DeepSpotlight({ content }) {
  return (
    <div>
      {content.when && (
        <div style={{ marginBottom: 16 }}>
          <strong>Используем когда:</strong>
          <ul style={{ marginTop: 8, paddingLeft: 20 }}>
            {content.when.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {content.structure && (
        <div>
          <strong>Структура:</strong>
          <ul style={{ marginTop: 8, paddingLeft: 20 }}>
            {content.structure.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ListContent({ items, type = "default" }) {
  const checkColor = type === "warning" ? "#ef4444" : "#10b981";

  return (
    <ul
      style={{
        listStyle: "none",
        paddingLeft: 0,
        margin: 0,
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            paddingLeft: 24,
            position: "relative",
            marginBottom: 8,
            lineHeight: 1.5,
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              color: checkColor,
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            {type === "warning" ? "✗" : "✓"}
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
