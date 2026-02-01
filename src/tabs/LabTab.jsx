// tabs/LabTab.jsx
import React, { useState } from "react";
import {
  FlaskConical,
  Lightbulb,
  CheckCircle,
  Clock,
  XCircle,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import { SectionHeader, Badge } from "../components";

// ========== EXPERIMENT CARD ==========
function ExperimentCard({
  title,
  hypothesis,
  status,
  owner,
  startDate,
  results,
  learnings,
}) {
  const statusConfig = {
    active: { icon: Clock, color: "var(--warn)", label: "В процессе" },
    completed: { icon: CheckCircle, color: "var(--ok)", label: "Завершён" },
    paused: { icon: AlertCircle, color: "var(--grey)", label: "Приостановлен" },
    failed: { icon: XCircle, color: "var(--error)", label: "Неуспешно" },
  };

  const config = statusConfig[status] || statusConfig.active;
  const StatusIcon = config.icon;

  return (
    <div
      style={{
        background: "var(--card)",
        border: `2px solid ${config.color}30`,
        borderLeft: `4px solid ${config.color}`,
        borderRadius: 12,
        padding: 24,
        marginBottom: 20,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 16,
        }}
      >
        <div>
          <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
            {title}
          </h4>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 13,
              color: "var(--text-secondary)",
            }}
          >
            <span>👤 {owner}</span>
            <span>•</span>
            <span>📅 {startDate}</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 12px",
            borderRadius: 20,
            background: `${config.color}15`,
            border: `1px solid ${config.color}40`,
          }}
        >
          <StatusIcon size={14} style={{ color: config.color }} />
          <span style={{ fontSize: 12, fontWeight: 600, color: config.color }}>
            {config.label}
          </span>
        </div>
      </div>

      {/* Hypothesis */}
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: config.color,
            marginBottom: 6,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          💡 Гипотеза
        </div>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text)",
            margin: 0,
          }}
        >
          {hypothesis}
        </p>
      </div>

      {/* Results (if completed) */}
      {results && (
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: config.color,
              marginBottom: 6,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            📊 Результаты
          </div>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              margin: 0,
            }}
          >
            {results}
          </p>
        </div>
      )}

      {/* Learnings (if completed) */}
      {learnings && learnings.length > 0 && (
        <div
          style={{
            marginTop: 16,
            padding: 16,
            borderRadius: 8,
            background: `${config.color}10`,
            border: `1px solid ${config.color}30`,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: config.color,
              marginBottom: 8,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            🎓 Выводы
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              fontSize: 14,
              lineHeight: 1.8,
            }}
          >
            {learnings.map((item, i) => (
              <li
                key={i}
                style={{
                  paddingLeft: 20,
                  position: "relative",
                  color: "var(--text-secondary)",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: config.color,
                    fontWeight: 700,
                  }}
                >
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ========== IDEA CARD ==========
function IdeaCard({ title, description, priority, votes = 0 }) {
  const priorityColors = {
    high: "var(--error)",
    medium: "var(--warn)",
    low: "var(--ok)",
  };

  const color = priorityColors[priority] || "var(--grey)";

  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <h5 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>{title}</h5>
        <div
          style={{
            padding: "4px 10px",
            borderRadius: 6,
            background: `${color}15`,
            border: `1px solid ${color}40`,
            fontSize: 11,
            fontWeight: 700,
            color: color,
            textTransform: "uppercase",
          }}
        >
          {priority === "high"
            ? "Высокий"
            : priority === "medium"
            ? "Средний"
            : "Низкий"}
        </div>
      </div>

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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 13,
          color: "var(--text-secondary)",
        }}
      >
        <TrendingUp size={14} />
        <span>{votes} голосов</span>
      </div>
    </div>
  );
}

// ========== MAIN COMPONENT ==========
export function LabTab() {
  const [filter, setFilter] = useState("all");

  const experiments = [
    {
      title: "Gamification в Scoreboard",
      hypothesis:
        "Если добавить элементы геймификации в Scoreboard (бейджи, лидерборд), участники будут активнее фиксировать прогресс.",
      status: "active",
      owner: "Гор Арзуманян",
      startDate: "01.11.2024",
    },
    {
      title: "Micro-прожекторы в Slack",
      hypothesis:
        "Короткие асинхронные прожекторы (3-5 вопросов) в Slack между встречами помогут держать фокус на WIG.",
      status: "active",
      owner: "Наталья Лозовая",
      startDate: "15.10.2024",
    },
    {
      title: "Mid-point Review",
      hypothesis:
        "Промежуточная мини-СС на 3-м месяце поможет корректировать WIG и повысит процент достижения целей.",
      status: "completed",
      owner: "Евгений Дубровин",
      startDate: "01.09.2024",
      results: "Участники с Mid-point достигли WIG на 15% чаще (65% vs 50%).",
      learnings: [
        "Mid-point эффективен для долгих WIG (6+ мес)",
        "Формат: 1 час, все участники, фокус на корректировку",
        "Не подходит для коротких циклов (3 мес)",
      ],
    },
    {
      title: "AI-ассистент для прожекторов",
      hypothesis:
        "AI может помогать трекерам генерировать вопросы для deep прожектора на основе истории участника.",
      status: "paused",
      owner: "Валентин Шпак",
      startDate: "01.08.2024",
      results:
        "Пилот показал низкое качество вопросов. Нужна дообучение модели.",
      learnings: [
        "AI генерирует слишком общие вопросы",
        "Трекеры не доверяют AI-вопросам",
        "Перезапуск после дообучения модели",
      ],
    },
  ];

  const ideas = [
    {
      title: "Peer прожекторы",
      description:
        "Участники ведут прожекторы друг для друга (без трекера) для развития навыка фасилитации.",
      priority: "high",
      votes: 12,
    },
    {
      title: "VR Start-СС",
      description:
        "Провести Start-СС в виртуальной реальности для более глубокого погружения.",
      priority: "low",
      votes: 3,
    },
    {
      title: "Weekly WIG Pulse",
      description:
        "Автоматический опрос участников раз в неделю: 'Насколько ты близок к WIG? 1-10'",
      priority: "medium",
      votes: 8,
    },
  ];

  const filteredExperiments =
    filter === "all"
      ? experiments
      : experiments.filter((exp) => exp.status === filter);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <SectionHeader
        title="Lab — Эксперименты и пилоты"
        subtitle="Песочница для тестирования новых форматов, гипотез и улучшений методологии"
        icon={FlaskConical}
      />

      {/* INTRO */}
      <div
        style={{
          marginBottom: 32,
          padding: 20,
          borderRadius: 12,
          background: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            margin: 0,
          }}
        >
          <strong style={{ color: "var(--text)" }}>
            Lab — это не обязаловка для трекеров.
          </strong>{" "}
          Это место для тех, кто любит экспериментировать и приносить новые
          инсайты в методологию Ultima. Здесь мы тестируем гипотезы, пилотим
          новые форматы и фиксируем результаты.
        </p>
      </div>

      {/* FILTER */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", gap: 12 }}>
          {[
            { key: "all", label: "Все эксперименты" },
            { key: "active", label: "Активные" },
            { key: "completed", label: "Завершённые" },
            { key: "paused", label: "Приостановленные" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                border: `2px solid ${
                  filter === item.key ? "var(--core)" : "var(--border)"
                }`,
                background:
                  filter === item.key ? "rgba(99,102,241,0.2)" : "var(--card)",
                color: filter === item.key ? "var(--core)" : "var(--text)",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                transition: "all 0.2s",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* ACTIVE EXPERIMENTS */}
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
          <FlaskConical size={24} />
          {filter === "all"
            ? "Все эксперименты"
            : filter === "active"
            ? "Активные эксперименты"
            : filter === "completed"
            ? "Завершённые эксперименты"
            : "Приостановленные эксперименты"}
        </h2>

        {filteredExperiments.map((exp, i) => (
          <ExperimentCard key={i} {...exp} />
        ))}
      </section>

      {/* IDEAS BACKLOG */}
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
          <Lightbulb size={24} />
          Идеи для тестов
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {ideas.map((idea, i) => (
            <IdeaCard key={i} {...idea} />
          ))}
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
          🧪 <strong>Placeholder контент:</strong> Примеры экспериментов для
          демонстрации. Замени на реальные пилоты и гипотезы для финальной
          версии.
        </p>
      </div>
    </div>
  );
}
