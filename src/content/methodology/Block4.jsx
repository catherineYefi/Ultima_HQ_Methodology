// content/methodology/Block4.jsx
import React from "react";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { Accordion, AccordionItem } from "../../components/ui/Accordion";
import { Card } from "../../components/ui/Card";
import { BulletList } from "../../components/ui/BulletList";

export function Block4() {
  return (
    <>
      <SectionTitle title="Блок 4. Тактики и инструменты" />
      <Accordion>
        <AccordionItem title="4.1. Прожектор (Standard)" color="var(--ok)">
          <Card color="var(--ok)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Формат:</strong>
            </p>
            <BulletList
              color="var(--ok)"
              items={[
                "20–25 минут",
                "один предприниматель",
                "один вопрос/проблема",
                "группа задаёт уточняющие вопросы",
                "трекер — модератор, не лекция",
                "выход = одно конкретное действие",
              ]}
            />
          </Card>
        </AccordionItem>

        <AccordionItem title="4.2. Deep Прожектор" color="var(--ok)">
          <Card color="var(--ok)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Формат:</strong>
            </p>
            <BulletList
              color="var(--ok)"
              items={[
                "40–60 минут",
                "глубокий слой причин",
                "паттерны, убеждения",
                "ITC-связки",
                "работает только в зрелых группах",
              ]}
            />
          </Card>
        </AccordionItem>

        <AccordionItem
          title="4.3. Операционная работа с предпринимателем"
          color="var(--ok)"
        >
          <Card color="var(--ok)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Алгоритм:</strong>
            </p>
            <BulletList
              color="var(--ok)"
              items={[
                "Сканы 6 систем",
                "Поиск узкого места",
                "WIG → Lead",
                "Недельный короткий план",
                "Контроль",
                "Корректировка",
              ]}
            />
          </Card>
        </AccordionItem>

        <AccordionItem title="4.4. Honesty & Safety Protocol" color="var(--ok)">
          <Card color="var(--ok)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> Без честности невозможен рост. Без
              безопасности невозможна честность.
            </p>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--ok)",
                marginBottom: 8,
              }}
            >
              Правила:
            </div>
            <BulletList
              color="var(--ok)"
              items={[
                "честный feedback",
                "нулевая агрессия",
                "уважение времени",
                "границы обсуждений",
              ]}
            />
          </Card>
        </AccordionItem>
      </Accordion>
    </>
  );
}
