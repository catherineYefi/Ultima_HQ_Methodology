// tabs/LogicTab.jsx
import React, { useState } from "react";
import {
  Zap,
  Award,
  Target,
  Shield,
  ArrowDown,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Check,
  BarChart3,
} from "lucide-react";
import { SectionHeader, Accordion, Badge } from "../components";
import { CONFIG } from "../data/productConfig";
import { SCENARIOS, calculateTotals } from "../data/scenarios";
import { fmtShort } from "../utils/helpers";

export function LogicTab() {
  const [selectedScenario, setSelectedScenario] = useState("realistic");

  const scenario = SCENARIOS[selectedScenario];
  const totals = calculateTotals(scenario, CONFIG);

  return (
    <div
      className="logic-economics-tab"
      style={{ maxWidth: 1200, margin: "0 auto" }}
    >
      <SectionHeader
        title="Logic & Economics"
        subtitle="Архитектура продукта, бизнес-логика и экономика ULTIMA 9.0"
        icon={BarChart3}
      />

      {/* ОСНОВНАЯ ЛОГИКА */}
      <section className="essence-section">
        <h2>ОСНОВНАЯ ЛОГИКА ULTIMA 9.0</h2>
        <div className="essence-grid">
          {[
            {
              icon: Zap,
              className: "core",
              title: "СС — ядро годового цикла",
              desc: "Все стратегические изменения происходят на СС.",
            },
            {
              icon: Award,
              className: "premium",
              title: "Ultima — надстройка на 6 месяцев",
              desc: "Поддержка, разборы, регулярные созвоны.",
            },
            {
              icon: Target,
              className: "entry",
              title: "Diagnostics — вход и квалификация",
              desc: "Быстрая оценка бизнеса → конверсия в СС или Ultima.",
            },
            {
              icon: Shield,
              className: "grey",
              title: "Grey — масштабируемая сеть",
              desc: "Единая методология, доход без нагрузки на команду.",
            },
          ].map((item, i) => (
            <div key={i} className={`essence-card ${item.className}`}>
              <item.icon size={24} />
              <div>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TL;DR */}
      <section className="tldr-section">
        <h2>Краткая суть</h2>
        <ul className="tldr-list">
          <li>
            <strong>СС — ядро продукта:</strong> высокая маржа (38-65%), нулевые
            риски, предсказуемость.
          </li>
          <li>
            <strong>Ultima — премиум-надстройка</strong> на 6 месяцев между СС.
          </li>
          <li>
            <strong>Diagnostics — вход:</strong> конверсия 25-40%.
          </li>
          <li>
            <strong>Grey Trackers — масштабируемый канал:</strong> комиссия 30%.
          </li>
          <li>
            <strong>План на год:</strong> 100 СС.
          </li>
        </ul>
      </section>

      {/* ARCHITECTURE FLOW */}
      <section className="logic-section">
        <h2 className="logic-title">
          <BarChart3 size={20} />
          Архитектура продукта Ultima 9.0
        </h2>
        <div className="architecture-flow">
          <div className="flow-step">
            <div className="flow-icon">
              <Target size={32} />
            </div>
            <h3>Diagnostics</h3>
            <p>Воронка квалификации</p>
          </div>
          <ArrowDown size={24} className="flow-arrow" />
          <div className="flow-step">
            <div className="flow-icon">
              <Zap size={32} />
            </div>
            <h3>Strategy Sessions</h3>
            <p>Ядро — годовой цикл</p>
          </div>
          <ArrowDown size={24} className="flow-arrow" />
          <div className="flow-step">
            <div className="flow-icon">
              <Award size={32} />
            </div>
            <h3>Ultima 6M</h3>
            <p>Премиум сопровождение</p>
          </div>
          <ArrowDown size={24} className="flow-arrow" />
          <div className="flow-step">
            <div className="flow-icon">
              <Shield size={32} />
            </div>
            <h3>Grey Trackers</h3>
            <p>Масштабирование</p>
          </div>
        </div>
      </section>

      {/* SCENARIO SELECTOR */}
      <section style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
          Выберите сценарий:
        </h3>
        <div style={{ display: "flex", gap: 12 }}>
          {Object.entries(SCENARIOS).map(([key, s]) => (
            <button
              key={key}
              onClick={() => setSelectedScenario(key)}
              style={{
                padding: "12px 24px",
                borderRadius: 8,
                border: `2px solid ${
                  selectedScenario === key ? "var(--core)" : "var(--border)"
                }`,
                background:
                  selectedScenario === key
                    ? "rgba(99,102,241,0.2)"
                    : "var(--card)",
                color: selectedScenario === key ? "var(--core)" : "var(--text)",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                transition: "all 0.2s",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </section>

      {/* SUMMARY METRICS */}
      <div className="hero-summary-compact">
        <div className="summary-item">
          <div className="summary-label">Total Revenue</div>
          <div className="summary-value">{fmtShort(totals.totalRevenue)}</div>
        </div>
        <div className="summary-item">
          <div className="summary-label">Total Margin</div>
          <div className="summary-value">
            {Math.round(totals.totalMargin * 100)}%
          </div>
        </div>
        <div className="summary-item highlight">
          <div className="summary-label">Total Profit</div>
          <div className="summary-value">{fmtShort(totals.totalProfit)}</div>
        </div>
        <div className="summary-item">
          <div className="summary-label">Capacity Usage</div>
          <div
            className={`summary-value ${
              totals.capacityUsage > 90
                ? "error"
                : totals.capacityUsage > 80
                ? "warning"
                : "ok"
            }`}
          >
            {Math.round(totals.capacityUsage)}%
          </div>
        </div>
      </div>

      {/* CAPACITY ALERTS */}
      {totals.capacityUsage > 80 && (
        <div className="capacity-alerts">
          <div className="alert warning">
            <AlertCircle size={16} />
            <span>
              Capacity близок к лимиту: {Math.round(totals.capacityUsage)}%
            </span>
          </div>
        </div>
      )}

      {/* REVENUE BREAKDOWN */}
      <section style={{ marginBottom: 32, marginTop: 24 }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
          Разбивка выручки
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
        >
          {[
            {
              label: "Diagnostics",
              value: totals.diagRevenue,
              color: "var(--entry)",
            },
            { label: "СС", value: totals.ssRevenue, color: "var(--core)" },
            {
              label: "Ultima",
              value: totals.ultimaRevenue,
              color: "var(--premium)",
            },
            { label: "Grey", value: totals.greyRevenue, color: "var(--grey)" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: 16,
                borderRadius: 12,
                border: `2px solid ${item.color}`,
                background: "var(--card)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text-secondary)",
                  marginBottom: 8,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: item.color,
                  marginBottom: 4,
                }}
              >
                {fmtShort(item.value)}
              </div>
              <div style={{ fontSize: 11, color: "var(--text-secondary)" }}>
                {Math.round((item.value / totals.totalRevenue) * 100)}%
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACCORDION: CAPACITY */}
      <Accordion
        title="Capacity & Constraints"
        borderColor="var(--core)"
        defaultOpen={false}
      >
        <div style={{ fontSize: 14, lineHeight: 1.8 }}>
          <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12 }}>
            Capacity трекеров:
          </h4>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li>
              <strong>Standard (Лозовая, Лобойко):</strong> 2 группы max
            </li>
            <li>
              <strong>Premium (Гор, Шпак, Дубровин):</strong> 3 группы max
            </li>
            <li>
              <strong>AK (Калашников):</strong> 1 группа max (до 5 участников)
            </li>
            <li>
              <strong>СС:</strong> 10-15 СС/год/трекер, всего max 96 СС/год
            </li>
          </ul>

          <div className="alert warning">
            <AlertCircle size={16} />
            <span>
              <strong>Ключевое ограничение:</strong> рост Ultima ограничен
              трекерами. Масштабирование возможно только через Grey Trackers.
            </span>
          </div>
        </div>
      </Accordion>

      {/* ACCORDION: ЭКОНОМИКА */}
      <Accordion
        title="Экономика продуктов"
        borderColor="var(--premium)"
        defaultOpen={false}
      >
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: 13,
            }}
          >
            <thead>
              <tr style={{ background: "rgba(139,92,246,0.1)" }}>
                <th style={{ padding: 12, textAlign: "left" }}>Продукт</th>
                <th style={{ padding: 12, textAlign: "left" }}>Capacity</th>
                <th style={{ padding: 12, textAlign: "left" }}>Маржа</th>
                <th style={{ padding: 12, textAlign: "left" }}>Риск</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  product: "СС десятки",
                  capacity: "10-15 СС/год/трекер",
                  margin: "38%",
                  risk: "низкий",
                },
                {
                  product: "СС компании",
                  capacity: "4-6 СС/год",
                  margin: "36%",
                  risk: "низкий",
                },
                {
                  product: "СС АК десятки",
                  capacity: "2-3 СС/год",
                  margin: "40%",
                  risk: "низкий",
                },
                {
                  product: "СС АК компании",
                  capacity: "1-2 СС/год",
                  margin: "65%",
                  risk: "низкий",
                },
                {
                  product: "Ultima Standard",
                  capacity: "1 группа/трекер",
                  margin: "28%",
                  risk: "высокий",
                },
                {
                  product: "Ultima Premium",
                  capacity: "1 группа/трекер",
                  margin: "30%",
                  risk: "высокий",
                },
                {
                  product: "Ultima AK",
                  capacity: "макс 1 группа (5 чел)",
                  margin: "28%",
                  risk: "высокий",
                },
                {
                  product: "Grey Trackers",
                  capacity: "∞ (масштабируемо)",
                  margin: "30%",
                  risk: "средний",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <td style={{ padding: 12 }}>{row.product}</td>
                  <td style={{ padding: 12 }}>{row.capacity}</td>
                  <td style={{ padding: 12 }}>{row.margin}</td>
                  <td style={{ padding: 12 }}>
                    <Badge
                      variant={
                        row.risk === "низкий"
                          ? "success"
                          : row.risk === "средний"
                          ? "warning"
                          : "info"
                      }
                    >
                      {row.risk}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Accordion>

      {/* ACCORDION: ВЫВОДЫ */}
      <Accordion
        title="Ключевые выводы"
        borderColor="var(--ok)"
        defaultOpen={true}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            {
              icon: Check,
              color: "var(--ok)",
              text: "СС масштабируются лучше всех — ключевой драйвер прибыли",
            },
            {
              icon: AlertCircle,
              color: "var(--warn)",
              text: "АК может вести максимум 5 участников → ограничение роста Ultima AK",
            },
            {
              icon: AlertCircle,
              color: "var(--warn)",
              text: "Стандартные трекеры — по 1 группе → рост ограничен кадрами",
            },
            {
              icon: Check,
              color: "var(--ok)",
              text: "Grey Trackers не имеют ограничений capacity → масштабирование без роста команды",
            },
            {
              icon: AlertCircle,
              color: "var(--error)",
              text: "Ultima имеет высокие риски возврата → фокус должен быть на СС",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: 12,
                borderRadius: 8,
                background: `${item.color}10`,
                border: `2px solid ${item.color}30`,
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
              }}
            >
              <item.icon
                size={16}
                style={{ color: item.color, flexShrink: 0, marginTop: 2 }}
              />
              <span style={{ fontSize: 14, lineHeight: 1.6 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
}
