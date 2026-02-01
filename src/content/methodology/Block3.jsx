// content/methodology/Block3.jsx
import React from "react";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { Accordion, AccordionItem } from "../../components/ui/Accordion";
import { Card } from "../../components/ui/Card";
import { BulletList } from "../../components/ui/BulletList";

export function Block3() {
  return (
    <>
      <SectionTitle title="Блок 3. Психология и динамики" />

      <Accordion>
        <AccordionItem title="3.1. Kegan 3 → Kegan 4" color="var(--entry)">
          <Card color="var(--entry)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> Переход от операционного предпринимателя к
              стратегическому.
            </p>
            <BulletList
              color="var(--entry)"
              items={[
                "Kegan 3 — «я = бизнес», реактивность, хаос",
                "Kegan 4 — системность, делегирование, процессы",
              ]}
            />
            <div
              style={{
                marginTop: 16,
                padding: 12,
                borderRadius: 8,
                background: "rgba(59, 130, 246, 0.1)",
                border: "1px solid var(--entry)30",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  marginBottom: 4,
                  color: "var(--entry)",
                }}
              >
                💡 Задача трекера:
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                мягко вести человека в сторону K4 через вопросы, прожекторы и
                Lead-метрики.
              </p>
            </div>
          </Card>
        </AccordionItem>

        <AccordionItem
          title="3.2. ITC (Immunity to Change)"
          color="var(--entry)"
        >
          <Card color="var(--entry)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> Выявление скрытых установок, которые мешают
              росту.
            </p>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--entry)",
                marginBottom: 8,
              }}
            >
              Как применять в Ultima:
            </div>
            <BulletList
              color="var(--entry)"
              items={[
                "в deep-прожекторах",
                "через «competing commitments»",
                "через вопрос: «что ты делаешь, чтобы это НЕ произошло?»",
              ]}
            />
          </Card>
        </AccordionItem>

        <AccordionItem title="3.3. Goldsmith Triggers" color="var(--entry)">
          <Card color="var(--entry)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> Поведенческие паттерны, которые тормозят
              рост лидера.
            </p>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--entry)",
                marginBottom: 8,
              }}
            >
              Примеры:
            </div>
            <BulletList
              color="var(--entry)"
              items={[
                "«я всегда прав»",
                "перебиваю",
                "перфекционизм",
                "избегание ответственности",
                "эмоциональная реактивность",
              ]}
            />
            <div
              style={{
                marginTop: 16,
                padding: 12,
                borderRadius: 8,
                background: "rgba(59, 130, 246, 0.1)",
                border: "1px solid var(--entry)30",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  marginBottom: 4,
                  color: "var(--entry)",
                }}
              >
                💡 Задача трекера:
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                мягко подсвечивать и переводить в действие.
              </p>
            </div>
          </Card>
        </AccordionItem>

        <AccordionItem
          title="3.4. Lencioni — 5 дисфункций"
          color="var(--entry)"
        >
          <Card color="var(--entry)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> Модель для понимания динамики десятки.
            </p>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--entry)",
                marginBottom: 8,
              }}
            >
              Дисфункции:
            </div>
            <BulletList
              color="var(--entry)"
              items={[
                "отсутствие доверия",
                "страх конфликта",
                "отсутствие вовлечённости",
                "избегание ответственности",
                "отсутствие ориентации на результат",
              ]}
            />
            <div
              style={{
                marginTop: 16,
                padding: 12,
                borderRadius: 8,
                background: "rgba(59, 130, 246, 0.1)",
                border: "1px solid var(--entry)30",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  marginBottom: 4,
                  color: "var(--entry)",
                }}
              >
                💡 Задача трекера/лидера:
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                держать команду выше линии.
              </p>
            </div>
          </Card>
        </AccordionItem>
      </Accordion>
    </>
  );
}
