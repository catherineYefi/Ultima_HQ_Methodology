// tabs/RolesOpsTab.jsx
import React from "react";
import {
  Users,
  Crown,
  User,
  Briefcase,
  Award,
  Calendar,
  CheckCircle,
  FileText,
  Shield,
  AlertTriangle,
  Target,
  ClipboardList,
  XCircle,
} from "lucide-react";
import { Accordion, SectionHeader, Badge } from "../components";

// ========== ROLE CARD COMPONENT ==========
function RoleCard({
  title,
  icon: Icon,
  goal,
  responsibilities,
  startCycle,
  midCycle,
  finalCycle,
  boundaries,
  color = "var(--core)",
}) {
  return (
    <div
      style={{
        background: "var(--card)",
        border: `2px solid ${color}30`,
        borderRadius: 12,
        padding: 24,
        marginBottom: 20,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 20,
        }}
      >
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
        <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{title}</h3>
      </div>

      {/* Goal */}
      {goal && (
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: color,
              marginBottom: 6,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Target size={14} />
            Цель роли
          </div>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "var(--text)",
              margin: 0,
            }}
          >
            {goal}
          </p>
        </div>
      )}

      {/* Responsibilities */}
      {responsibilities && responsibilities.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: color,
              marginBottom: 8,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <ClipboardList size={14} />
            Зона ответственности
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
            {responsibilities.map((item, i) => (
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
                    color: color,
                    fontWeight: 700,
                  }}
                >
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cycle Actions */}
      {(startCycle || midCycle || finalCycle) && (
        <div
          style={{
            marginTop: 16,
            padding: 16,
            borderRadius: 8,
            background: `${color}10`,
            border: `1px solid ${color}30`,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: color,
              marginBottom: 12,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Calendar size={14} />
            Действия в цикле
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
            }}
          >
            {startCycle && (
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    marginBottom: 4,
                    color: "var(--ok)",
                  }}
                >
                  START-СС
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
                  {startCycle}
                </div>
              </div>
            )}
            {midCycle && (
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    marginBottom: 4,
                    color: "var(--warn)",
                  }}
                >
                  6 МЕСЯЦЕВ
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
                  {midCycle}
                </div>
              </div>
            )}
            {finalCycle && (
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    marginBottom: 4,
                    color: "var(--core)",
                  }}
                >
                  FINAL-СС
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
                  {finalCycle}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Boundaries */}
      {boundaries && boundaries.length > 0 && (
        <div
          style={{
            marginTop: 16,
            padding: 12,
            borderRadius: 8,
            background: "rgba(239, 68, 68, 0.1)",
            border: "1px solid var(--error)30",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "var(--error)",
              marginBottom: 8,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <XCircle size={14} />
            Границы роли (что НЕ делает)
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              fontSize: 13,
              lineHeight: 1.6,
            }}
          >
            {boundaries.map((item, i) => (
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
                    color: "var(--error)",
                    fontWeight: 700,
                  }}
                >
                  ✗
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

// ========== CYCLE MAP COMPONENT ==========
function CycleMap() {
  const points = [
    { label: "Start-СС", color: "var(--ok)", desc: "Диагностика + WIG + план" },
    {
      label: "12× Трекер",
      color: "var(--core)",
      desc: "Встречи раз в 2 недели",
    },
    { label: "12× Лидер", color: "var(--premium)", desc: "Динамика группы" },
    { label: "Прожекторы", color: "var(--entry)", desc: "На каждой встрече" },
    { label: "Mid-point", color: "var(--warn)", desc: "Опционально" },
    { label: "Final-СС", color: "var(--ok)", desc: "Фиксация + новый цикл" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16,
        marginBottom: 24,
      }}
    >
      {points.map((point, i) => (
        <div
          key={i}
          style={{
            padding: 16,
            borderRadius: 10,
            border: `2px solid ${point.color}`,
            background: `${point.color}10`,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              marginBottom: 6,
              color: point.color,
            }}
          >
            {point.label}
          </div>
          <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
            {point.desc}
          </div>
        </div>
      ))}
    </div>
  );
}

// ========== RESPONSIBILITY TABLE ==========
function ResponsibilityTable() {
  const data = [
    {
      point: "Start-СС",
      tracker: "Фасилитация, WIG, план",
      leader: "Поддержка динамики",
      participant: "Честность, вовлечённость",
      pm: "Логистика, материалы",
    },
    {
      point: "Встреча десятки",
      tracker: "Структура, прожектор",
      leader: "Контроль времени, фиксация",
      participant: "Обязательства, отчёт",
      pm: "Zoom, запись",
    },
    {
      point: "Final-СС",
      tracker: "Фиксация результата",
      leader: "Сбор данных",
      participant: "Рефлексия",
      pm: "Документация",
    },
  ];

  return (
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
            <th style={{ padding: 12, textAlign: "left", fontWeight: 700 }}>
              Точка
            </th>
            <th style={{ padding: 12, textAlign: "left", fontWeight: 700 }}>
              Трекер
            </th>
            <th style={{ padding: 12, textAlign: "left", fontWeight: 700 }}>
              Лидер
            </th>
            <th style={{ padding: 12, textAlign: "left", fontWeight: 700 }}>
              Участник
            </th>
            <th style={{ padding: 12, textAlign: "left", fontWeight: 700 }}>
              PM
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              style={{
                borderBottom: "1px solid var(--border)",
              }}
            >
              <td style={{ padding: 12, fontWeight: 600 }}>{row.point}</td>
              <td style={{ padding: 12, color: "var(--text-secondary)" }}>
                {row.tracker}
              </td>
              <td style={{ padding: 12, color: "var(--text-secondary)" }}>
                {row.leader}
              </td>
              <td style={{ padding: 12, color: "var(--text-secondary)" }}>
                {row.participant}
              </td>
              <td style={{ padding: 12, color: "var(--text-secondary)" }}>
                {row.pm}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ========== MAIN COMPONENT ==========
export function RolesOpsTab() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <SectionHeader
        title="Roles & Operations"
        subtitle="Чёткие описания ролей, операционных процессов и структуры цикла Ultima"
        icon={Users}
      />

      {/* БЛОК 1: РОЛИ */}
      <Accordion
        title="1. Роли в ULTIMA"
        borderColor="var(--core)"
        defaultOpen={true}
      >
        <RoleCard
          title="Трекер"
          icon={Award}
          color="var(--core)"
          goal="Стратегический фасилитатор и держатель рамки цикла."
          responsibilities={[
            "Проведение Start-СС и Final-СС",
            "Фасилитация встреч десятки (12 встреч за 6 мес)",
            "Ведение прожекторов",
            "Контроль WIG и Lead/Lag",
            "Работа с динамикой группы",
            "Еженедельный созвон с лидером десятки (30–45 минут)",
            "Управление групповой динамикой через лидера",
            "Подготовка кейсов участников к Совету директоров",
          ]}
          startCycle="Диагностика, постановка WIG, план"
          midCycle="12 встреч, прожекторы, разборы"
          finalCycle="Фиксация результата, новый цикл"
          boundaries={[
            "Не даёт готовых решений",
            "Не выполняет работу за участника",
            "Не является терапевтом",
          ]}
        />

        <RoleCard
          title="Лидер десятки"
          icon={Crown}
          color="var(--premium)"
          goal="Ключевой проводник трекера в группе. Усиливает управляемость десятки между встречами и отвечает за групповую динамику."
          responsibilities={[
            "Держит динамику группы между встречами",
            "Контроль времени на встречах",
            "Фиксирует обязательства и договорённости",
            "Готовит группу к встречам",
            "12 встреч с группой за 6 мес (отдельно от трекера)",
            "Поддержание активности и вовлечённости в чате десятки",
            "Подготовка группы к встречам и мастермайндам",
            "Фиксация договорённостей и обязательств участников",
          ]}
          startCycle="Знакомство с группой, правила"
          midCycle="Поддержка динамики, контроль"
          finalCycle="Сбор данных для Final-СС"
          boundaries={[
            "Не заменяет трекера",
            "Не ведёт прожекторы",
            "Не даёт экспертизу",
          ]}
        />

        <RoleCard
          title="Участник"
          icon={User}
          color="var(--entry)"
          goal="Владелец WIG, активный участник процесса."
          responsibilities={[
            "Формулирует WIG и Lead/Lag на Start-СС",
            "Готовится к каждой встрече (отчёт по Lead)",
            "Участвует в прожекторах (свой + других)",
            "Выполняет обязательства",
            "Даёт честную обратную связь группе",
          ]}
          startCycle="Честность, вовлечённость"
          midCycle="Регулярная подготовка, отчёты"
          finalCycle="Рефлексия, новый WIG"
          boundaries={[
            "Не наблюдатель (активное участие обязательно)",
            "Не может скрывать информацию",
          ]}
        />

        <RoleCard
          title="Продюсер / PM"
          icon={Briefcase}
          color="var(--grey)"
          goal="Операционная поддержка трекера и цикла."
          responsibilities={[
            "Логистика (Zoom, календарь)",
            "Подготовка материалов для Start-СС",
            "Контроль дедлайнов",
            "Коммуникация с участниками",
            "Документация и отчётность",
          ]}
          startCycle="Логистика, материалы"
          midCycle="Zoom, запись, напоминания"
          finalCycle="Сбор данных, документация"
          boundaries={[
            "Не вмешивается в контент",
            "Не заменяет трекера/лидера",
          ]}
        />

        <RoleCard
          title="АК-трекер (Андрей Калашников)"
          icon={Award}
          color="var(--premium)"
          goal="Премиальный трекер для топовых предпринимателей."
          responsibilities={[
            "Работа с группой до 5 участников",
            "Эксклюзивный уровень разборов",
            "Индивидуальный подход",
            "Стратегические сессии высшего уровня",
          ]}
          startCycle="Глубокая диагностика"
          midCycle="VIP-разборы"
          finalCycle="Стратегический план"
          boundaries={[
            "Только для опытных предпринимателей (оборот от 100М)",
            "Ограниченное количество мест",
          ]}
        />

        <RoleCard
          title="Совет директоров ULTIMA"
          icon={Shield}
          color="var(--ok)"
          goal="Стратегическое усиление решений участников ULTIMA."
          responsibilities={[
            "Проверка стратегических гипотез",
            "Расширение рамки мышления",
            "Давление на масштаб и качество решений",
            "Участие в мастермайндах",
            "Точечные разборы кейсов",
            "Работа только с участниками ULTIMA",
          ]}
          startCycle="Формирование состава экспертов"
          midCycle="3 мастермайнда за цикл"
          finalCycle="Стратегические рекомендации"
          boundaries={[
            "Не обучение, а стратегическое давление",
            "Не консультирование, а проверка решений",
            "Не для всех участников, только по рекомендации трекера",
          ]}
        />
      </Accordion>

      {/* БЛОК 2: STRUCTURE OF CYCLE */}
      <Accordion
        title="2. Structure of Cycle (6-месячный движок)"
        borderColor="var(--ok)"
        defaultOpen={false}
      >
        <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>
          2.1. Карта 6-месячного цикла
        </h4>
        <CycleMap />

        <h4
          style={{
            fontSize: 16,
            fontWeight: 600,
            marginBottom: 16,
            marginTop: 24,
          }}
        >
          2.2. Функции каждой точки
        </h4>
        <p
          style={{
            fontSize: 14,
            color: "var(--text-secondary)",
            marginBottom: 24,
          }}
        >
          Короткие карточки для каждой точки цикла.
        </p>

        <h4
          style={{
            fontSize: 16,
            fontWeight: 600,
            marginBottom: 16,
            marginTop: 24,
          }}
        >
          2.3. Карта ответственности по точкам цикла
        </h4>
        <ResponsibilityTable />
      </Accordion>

      {/* БЛОК 3: ОПЕРАЦИОННЫЕ ПРОЦЕССЫ */}
      <Accordion
        title="3. Операционные процессы"
        borderColor="var(--warn)"
        defaultOpen={false}
      >
        <div style={{ marginBottom: 20 }}>
          <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
            3.1. Подготовка к Start-СС
          </h4>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              marginBottom: 12,
            }}
          >
            PLACEHOLDER: Чек-лист трекера, материалы, формы, правила офлайна.
          </p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
            3.2. Подготовка к встрече десятки
          </h4>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              marginBottom: 12,
            }}
          >
            PLACEHOLDER: Чек-листы трекера, лидера, участников.
          </p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
            3.3. Подготовка к Final-СС
          </h4>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              marginBottom: 12,
            }}
          >
            PLACEHOLDER: Сбор данных, фиксация результата, подготовка нового
            цикла.
          </p>
        </div>
      </Accordion>

      {/* БЛОК 4: ПРАВИЛА */}
      <Accordion
        title="4. Правила работы в ULTIMA"
        borderColor="var(--error)"
        defaultOpen={false}
      >
        <div style={{ marginBottom: 20 }}>
          <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
            4.1. Честность
          </h4>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              marginBottom: 12,
            }}
          >
            PLACEHOLDER: Формулировки правил честности, примеры нарушений.
          </p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
            4.2. Безопасность
          </h4>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              marginBottom: 12,
            }}
          >
            PLACEHOLDER: Правила конфиденциальности, границы безопасности.
          </p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
            4.3. Поведение в группе
          </h4>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              marginBottom: 12,
            }}
          >
            PLACEHOLDER: Участник ≠ наблюдатель, честность в прожекторе,
            уважение времени.
          </p>
        </div>
      </Accordion>

      {/* БЛОК 5: ФОРМАТЫ ВСТРЕЧ */}
      <Accordion
        title="5. Форматы встреч"
        borderColor="var(--core)"
        defaultOpen={false}
      >
        <div style={{ marginBottom: 20 }}>
          <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
            5.1. Start-СС (2 дня, 2-3 часа на участника)
          </h4>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              marginBottom: 12,
            }}
          >
            PLACEHOLDER: Структура, вопросы, результаты, чек-листы.
          </p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
            5.2. Final-СС (1 день, все участники)
          </h4>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              marginBottom: 12,
            }}
          >
            PLACEHOLDER: Структура, формат вопросов, постановка нового цикла.
          </p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
            5.3. Двухнедельная встреча
          </h4>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              marginBottom: 12,
            }}
          >
            PLACEHOLDER: Opening → WIG → Lead/Lag → прожектор → обязательства.
          </p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
            5.4. Прожектор (Standard + Deep)
          </h4>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              marginBottom: 12,
            }}
          >
            PLACEHOLDER: Структура стандартного и глубокого прожектора.
          </p>
        </div>
      </Accordion>

      {/* БЛОК 6: DOCUMENTATION TEMPLATES */}
      <Accordion
        title="6. Documentation Templates"
        borderColor="var(--entry)"
        defaultOpen={false}
      >
        <div style={{ marginBottom: 20 }}>
          <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
            6.1. Start-СС Template
          </h4>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              marginBottom: 12,
            }}
          >
            PLACEHOLDER: Структура документа, разделы для фиксации.
          </p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
            6.2. Final-СС Template
          </h4>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              marginBottom: 12,
            }}
          >
            PLACEHOLDER: Структура фиксации результата.
          </p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
            6.3. Meeting Notes Template
          </h4>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              marginBottom: 12,
            }}
          >
            PLACEHOLDER: Шаблон протокола встречи десятки.
          </p>
        </div>
      </Accordion>

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
          📝 <strong>Placeholder контент:</strong> Этот таб содержит структуру
          для 30+ компонентов (роли, процессы, правила). Позже заменю
          PLACEHOLDER на тексты для финальной версии.
        </p>
      </div>
    </div>
  );
}
