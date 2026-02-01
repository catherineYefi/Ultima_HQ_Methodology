// tabs/ProductMatrixTab.jsx - SIMPLIFIED FOR TRACKERS
import React from "react";
import {
  Target,
  Zap,
  Award,
  Shield,
  Info,
  Users,
  Clock,
  CheckCircle,
  User,
  Sparkles,
  Lightbulb,
  Package,
  Wrench,
  Circle,
} from "lucide-react";
import { Tooltip } from "../components/Tooltip";

// ========== TIER MARKERS ==========
const TIER_MARKERS = {
  entry: {
    IconComponent: () => (
      <Circle size={14} fill="var(--entry)" strokeWidth={0} />
    ),
    label: "Entry",
    color: "var(--entry)",
  },
  core: {
    IconComponent: () => (
      <Circle size={14} fill="var(--core)" strokeWidth={0} />
    ),
    label: "Core",
    color: "var(--core)",
  },
  elite: {
    IconComponent: () => (
      <Circle size={14} fill="var(--premium)" strokeWidth={0} />
    ),
    label: "Elite",
    color: "var(--premium)",
  },
  scale: {
    IconComponent: () => (
      <Circle size={14} fill="var(--grey)" strokeWidth={0} />
    ),
    label: "Scale",
    color: "var(--grey)",
  },
};

// ========== PRODUCT CARD COMPONENT ==========
function ProductCard({
  tier,
  title,
  icon: Icon,
  forWho,
  whatGives,
  whenAdvise,
  includes,
  notes,
}) {
  const tierData = TIER_MARKERS[tier];

  return (
    <div
      className="product-card"
      style={{
        borderLeft: `4px solid ${tierData.color}`,
      }}
    >
      {/* Tier Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 12px",
          borderRadius: 20,
          background: `${tierData.color}15`,
          border: `1px solid ${tierData.color}40`,
          marginBottom: 16,
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        <tierData.IconComponent />
        <span style={{ color: tierData.color }}>{tierData.label}</span>
      </div>

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 16,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: `linear-gradient(135deg, ${tierData.color}, ${tierData.color}cc)`,
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

      {/* For Who */}
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: tierData.color,
            marginBottom: 6,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <User size={14} />
          Кому подходит
        </div>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            margin: 0,
            color: "var(--text)",
          }}
        >
          {forWho}
        </p>
      </div>

      {/* What Gives */}
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: tierData.color,
            marginBottom: 6,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Sparkles size={14} />
          Что даёт участнику
        </div>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            margin: 0,
            color: "var(--text)",
          }}
        >
          {whatGives}
        </p>
      </div>

      {/* When to Advise */}
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: tierData.color,
            marginBottom: 6,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Lightbulb size={14} />
          Когда советовать
        </div>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            margin: 0,
            color: "var(--text)",
          }}
        >
          {whenAdvise}
        </p>
      </div>

      {/* Includes */}
      {includes && includes.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: tierData.color,
              marginBottom: 8,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Package size={14} />
            Что включено
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              fontSize: 13,
              lineHeight: 1.8,
            }}
          >
            {includes.map((item, i) => (
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
                    color: tierData.color,
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Notes */}
      {notes && (
        <div
          style={{
            marginTop: 16,
            padding: 12,
            borderRadius: 8,
            background: "rgba(245, 158, 11, 0.1)",
            borderLeft: "3px solid var(--warn)",
            fontSize: 12,
            color: "var(--text-secondary)",
          }}
        >
          <strong style={{ color: "var(--warn)" }}>📌 Важно:</strong> {notes}
        </div>
      )}
    </div>
  );
}

// ========== MAIN COMPONENT ==========
export function ProductMatrixTab() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      {/* HEADER */}
      <div style={{ marginBottom: 40 }}>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 12,
            background: "linear-gradient(135deg, var(--core), var(--premium))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ULTIMA PORTAL — Product Line
        </h1>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            maxWidth: 800,
          }}
        >
          Краткий гид по продуктам Ultima для трекеров и лидеров.{" "}
          <strong style={{ color: "var(--text)" }}>
            Кому советовать, что даёт, когда применять.
          </strong>
        </p>
      </div>

      {/* TIER LEGEND */}
      <div
        style={{
          display: "flex",
          gap: 16,
          marginBottom: 40,
          padding: 20,
          borderRadius: 12,
          background: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        {Object.entries(TIER_MARKERS).map(([key, tier]) => (
          <div
            key={key}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 8,
              background: `${tier.color}10`,
              border: `1px solid ${tier.color}30`,
            }}
          >
            <span style={{ fontSize: 20 }}>{tier.icon}</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: tier.color }}>
              {tier.label}
            </span>
          </div>
        ))}
      </div>

      {/* DIAGNOSTICS */}
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
          <Target size={24} />
          Diagnostics — вход в продукт
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
        >
          <ProductCard
            tier="entry"
            title="Diagnostics Mini"
            icon={Target}
            forWho="Предприниматели, которые впервые слышат про Ultima или хотят быстро понять, подходит ли им продукт."
            whatGives="Экспресс-оценка бизнеса по 6 системам за 2 часа. Карта роста и рекомендации по следующим шагам."
            whenAdvise="Когда участник ещё не готов к СС или Ultima, но хочет понять свои точки роста."
            includes={[
              "2 часа работы с трекером",
              "Оценка 6 систем бизнеса",
              "Карта роста на 1 страницу",
              "Рекомендации по продуктам",
            ]}
          />

          <ProductCard
            tier="entry"
            title="Diagnostics Pro"
            icon={Target}
            forWho="Предприниматели с командой от 5 человек, готовые к глубокому разбору."
            whatGives="Глубокая диагностика за 1 день (6-8 часов) с участием топ-менеджеров. План трансформации на 6-12 месяцев."
            whenAdvise="Когда бизнес готов к изменениям, но нужно чётко определить, с чего начать."
            includes={[
              "6-8 часов работы",
              "Участие топ-менеджеров",
              "Глубокий аудит 6 систем",
              "План трансформации",
              "Приоритизация задач",
            ]}
            notes="Конверсия в СС или Ultima: 25-40%"
          />
        </div>
      </section>

      {/* STRATEGY SESSIONS */}
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
          <Zap size={24} />
          Strategy Sessions — ядро продукта
        </h2>

        <div style={{ marginBottom: 24 }}>
          <ProductCard
            tier="core"
            title="СС Десятки (трекеры)"
            icon={Zap}
            forWho="Предприниматели с командой от 3 человек, готовые к системной трансформации."
            whatGives="Стратегическая сессия на 2 дня (офлайн или онлайн). Глубокий разбор бизнеса, определение WIG, план на 6 месяцев."
            whenAdvise="Основной продукт. Советовать всем, кто прошёл Diagnostics и готов работать."
            includes={[
              "2 дня работы с группой (8 участников)",
              "Определение WIG на 6 месяцев",
              "План трансформации",
              "Протокол на каждого участника",
              "Подготовка трекера: 8ч БИ",
            ]}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <ProductCard
            tier="core"
            title="СС Компании (трекеры)"
            icon={Zap}
            forWho="Компании с командой от 10 человек, где нужна работа с топ-менеджментом."
            whatGives="Корпоративная СС на 2 дня. Работа с владельцем и командой. Стратегия, оргструктура, цели."
            whenAdvise="Когда у участника есть команда и ему нужна трансформация всей компании, а не только его лично."
            includes={[
              "2 дня офлайн",
              "Работа с топ-менеджментом",
              "Стратегия компании",
              "Оргструктура",
              "Подготовка: 6ч БИ",
            ]}
          />
        </div>

        <div
          style={{
            padding: 20,
            borderRadius: 12,
            background: "rgba(245, 158, 11, 0.05)",
            border: "2px dashed var(--premium)",
            marginBottom: 24,
          }}
        >
          <h4
            style={{
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 12,
              color: "var(--premium)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Circle size={16} fill="var(--premium)" strokeWidth={0} />
            СС с АК (Андрей Калашников)
          </h4>
          <p
            style={{ fontSize: 14, color: "var(--text-secondary)", margin: 0 }}
          >
            Премиальный формат с участием Андрея Калашникова. Ограниченное
            количество мест (1-2 СС в год). Только для опытных предпринимателей
            с оборотом от 100М.
          </p>
        </div>
      </section>

      {/* ULTIMA */}
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
          <Award size={24} />
          Ultima — премиальное сопровождение
        </h2>

        <div
          style={{
            marginBottom: 24,
            padding: 20,
            borderRadius: 12,
            background: "rgba(139, 92, 246, 0.05)",
            border: "2px solid var(--core)",
          }}
        >
          <h4
            style={{
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 12,
              color: "var(--core)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Wrench size={16} />
            Во всех тарифах Ultima:
          </h4>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 8,
              fontSize: 13,
            }}
          >
            {[
              "Start-СС и Final-СС",
              "Первые 4 встречи — weekly",
              "12 встреч с трекером (раз в 2 недели)",
              "12 встреч с лидером десятки",
              "Совет директоров и экспертные мастермайнды",
              "Связка трекер–лидер",
              "2 слёта за 6 месяцев",
              "Методология ULTIMA",
            ].map((item, i) => (
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
                    color: "var(--ok)",
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          <ProductCard
            tier="elite"
            title="Ultima Standard"
            icon={Award}
            forWho="Предприниматели, которые прошли Start-СС и хотят системной поддержки на 6 месяцев."
            whatGives="Регулярная работа с трекером и группой. Контроль WIG, разборы, прожекторы, адвайзери-борд."
            whenAdvise="Основной формат сопровождения. Советовать тем, кто готов к регулярным встречам."
            includes={[
              "Группа: 8 участников",
              "Трекеры: Лобойко Алексей",
              "12 встреч раз в 2 недели",
              "Прожекторы и разборы",
              "Чат-поддержка",
            ]}
          />

          <ProductCard
            tier="elite"
            title="Ultima Premium"
            icon={Award}
            forWho="Участники с более сложными бизнесами (от 50М оборота), которым нужен опытный трекер."
            whatGives="Всё из Standard + работа с топ-трекерами (Гор, Шпак, Дубровин)."
            whenAdvise="Когда бизнес сложнее, есть команда от 10 человек, нужны глубокие разборы."
            includes={[
              "Группа: 8 участников",
              "Трекеры: Дубровин Евгений, Арзуманян Гор, Безиков Кирилл",
              "Глубокие разборы",
              "Приоритет в слётах",
              "Расширенная поддержка",
            ]}
          />

          <ProductCard
            tier="elite"
            title="Ultima AK"
            icon={Award}
            forWho="Топовые предприниматели с оборотом от 100М, которые хотят работать с АК."
            whatGives="Премиальный формат с участием Андрея Калашникова. До 5 участников в группе."
            whenAdvise="Только для опытных предпринимателей. Ограниченное количество мест."
            includes={[
              "Группа: до 5 участников",
              "Трекер: Андрей Калашников",
              "Эксклюзивный доступ",
              "Индивидуальный подход",
              "VIP-слёты",
            ]}
            notes="Самый премиальный формат. Только по рекомендации."
          />
        </div>
      </section>

      {/* GREY TRACKERS */}
      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 24,
            color: "var(--grey)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <Shield size={24} />
          Grey Trackers — масштабирование
        </h2>

        <ProductCard
          tier="scale"
          title="Grey Tracker Program"
          icon={Shield}
          forWho="Участники Ultima, которые хотят стать трекерами и вести свои группы."
          whatGives="Обучение методологии, супервизии, возможность вести группы под брендом Ultima."
          whenAdvise="Когда участник прошёл полный цикл Ultima, хочет делиться опытом и зарабатывать."
          includes={[
            "Обучение методологии Ultima",
            "Супервизии от старших трекеров",
            "Доступ ко всем материалам",
            "Возможность вести группы (10 чел)",
            "Комиссия Нечто: 30%",
          ]}
          notes="Это канал масштабирования. Не ограничен capacity основных трекеров."
        />
      </section>
    </div>
  );
}
