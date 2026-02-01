// content/methodology/Block2.jsx
import React from "react";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { Accordion, AccordionItem } from "../../components/ui/Accordion";
import { Card } from "../../components/ui/Card";
import { BulletList } from "../../components/ui/BulletList";

export function Block2() {
  return (
    <>
      <SectionTitle title="Блок 2. Управленческие методологии (CORE Layer)" />

      <Accordion>
        <AccordionItem
          title="2.1. WIG (Wildly Important Goal)"
          color="var(--premium)"
        >
          <Card color="var(--premium)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> 1–2 самых важных стратегических цели,
              которые изменят траекторию бизнеса.
            </p>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--premium)",
                marginBottom: 8,
              }}
            >
              Критерии:
            </div>
            <BulletList
              color="var(--premium)"
              items={[
                "измеримый",
                "трансформационный",
                "достижимый за 6 месяцев",
                "привязан к росту компании",
              ]}
            />
            <div
              style={{
                marginTop: 16,
                padding: 12,
                borderRadius: 8,
                background: "rgba(245, 158, 11, 0.1)",
                border: "1px solid var(--warn)30",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  marginBottom: 4,
                  color: "var(--warn)",
                }}
              >
                ⚠️ Типичные ошибки:
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                слишком много целей, операционная задача вместо стратегической,
                отсутствие метрик.
              </p>
            </div>
          </Card>
        </AccordionItem>

        <AccordionItem title="2.2. Lead & Lag Metrics" color="var(--premium)">
          <Card color="var(--premium)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> Система управления результатом.
            </p>
            <BulletList
              color="var(--premium)"
              items={[
                "Lag — конечный результат (выручка, NPS, EBIT)",
                "Lead — поведение, которое создаёт результат (звонки, внедрённые процессы, встречи, контент)",
              ]}
            />
            <div
              style={{
                marginTop: 16,
                padding: 12,
                borderRadius: 8,
                background: "rgba(139, 92, 246, 0.1)",
                border: "1px solid var(--premium)30",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  marginBottom: 4,
                  color: "var(--premium)",
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
                Научить участника жить в Lead-метриках.
              </p>
            </div>
          </Card>
        </AccordionItem>

        <AccordionItem title="2.3. Scoreboard" color="var(--premium)">
          <Card color="var(--premium)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> Простая визуальная доска, показывающая
              прогресс по Lead и Lag.
            </p>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--premium)",
                marginBottom: 8,
              }}
            >
              Правила:
            </div>
            <BulletList
              color="var(--premium)"
              items={[
                "всегда видно группе",
                "обновляется каждую встречу",
                "только 3–5 показателей",
                "видно, кто «зелёный», кто «красный»",
              ]}
            />
          </Card>
        </AccordionItem>

        <AccordionItem title="2.4. Accountability Loop" color="var(--premium)">
          <Card color="var(--premium)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> Цикл ответственности, который держит
              предпринимателя в движении.
            </p>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--premium)",
                marginBottom: 8,
              }}
            >
              Элементы:
            </div>
            <BulletList
              color="var(--premium)"
              items={[
                "обязательства → действие → разбор → корректировка",
                "минус-оценка = фокус на причинности",
                "«держим обязательство, пока не сделано»",
              ]}
            />
          </Card>
        </AccordionItem>
      </Accordion>
    </>
  );
}
