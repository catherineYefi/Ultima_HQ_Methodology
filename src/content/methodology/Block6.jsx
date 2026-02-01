// content/methodology/Block6.jsx
import React from "react";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { Accordion, AccordionItem } from "../../components/ui/Accordion";
import { Card } from "../../components/ui/Card";
import { BulletList } from "../../components/ui/BulletList";

export function Block6() {
  return (
    <>
      <SectionTitle title="Блок 6. Product Layer (для трекеров)" />
      <Accordion>
        <AccordionItem
          title="6.1. Форматы ULTIMA (высокий уровень)"
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
              Без цен, только принципы:
            </p>
            <BulletList
              color="var(--premium)"
              items={[
                "Standard — стабильные группы",
                "Premium — «усиленные» группы, более сильный состав",
                "AK — малая группа (≤5), глубокая работа",
              ]}
            />
          </Card>
        </AccordionItem>

        <AccordionItem title="6.2. Strategy Sessions" color="var(--premium)">
          <Card color="var(--premium)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> Двухдневная или однодневная стратегическая
              работа с десяткой/компанией.
            </p>
            <div
              style={{
                marginTop: 16,
                padding: 12,
                borderRadius: 8,
                background: "rgba(245, 158, 11, 0.1)",
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
                💡 Главное:
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                Трекер — модератор, не консультант.
              </p>
            </div>
          </Card>
        </AccordionItem>

        <AccordionItem title="6.3. Grey-трекинг" color="var(--premium)">
          <Card color="var(--premium)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> Дополнительный формат трекинга для внешних
              участников.
            </p>
            <div
              style={{
                marginTop: 16,
                padding: 12,
                borderRadius: 8,
                background: "rgba(245, 158, 11, 0.1)",
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
                💡 Когда советовать:
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                когда человеку нужен более частый контроль, но он не готов в
                Ultima.
              </p>
            </div>
          </Card>
        </AccordionItem>
      </Accordion>
    </>
  );
}
