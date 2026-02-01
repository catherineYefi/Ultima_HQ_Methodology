// content/methodology/Block5.jsx
import React from "react";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { Accordion, AccordionItem } from "../../components/ui/Accordion";
import { Card } from "../../components/ui/Card";
import { BulletList } from "../../components/ui/BulletList";

export function Block5() {
  return (
    <>
      <SectionTitle title="Блок 5. Group Dynamics" />
      <Accordion>
        <AccordionItem
          title="5.1. Как держать динамику десятки"
          color="var(--grey)"
        >
          <Card color="var(--grey)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Инструменты:</strong>
            </p>
            <BulletList
              color="var(--grey)"
              items={[
                "открытие круга",
                "ритуал обязательств",
                "лидерский контроль энергии",
                "правила разговора",
                "отсутствие «спасания» других",
              ]}
            />
          </Card>
        </AccordionItem>

        <AccordionItem title="5.2. Конфликтный протокол" color="var(--grey)">
          <Card color="var(--grey)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> Конфликт = норма. Но есть правила.
            </p>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--grey)",
                marginBottom: 8,
              }}
            >
              Принципы:
            </div>
            <BulletList
              color="var(--grey)"
              items={[
                "не тушим конфликт",
                "держим рамку",
                "переводим в конструктив",
                "запрещены личные атаки",
                "трекер следит за безопасностью",
              ]}
            />
          </Card>
        </AccordionItem>
      </Accordion>
    </>
  );
}
