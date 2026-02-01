// content/methodology/Block1.jsx
import React from "react";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { Accordion, AccordionItem } from "../../components/ui/Accordion";
import { Card } from "../../components/ui/Card";
import { BulletList } from "../../components/ui/BulletList";
import { Circle } from "lucide-react";

export function Block1() {
  return (
    <>
      <SectionTitle title="Блок 1. Архитектура ULTIMA 9.0" />

      <Accordion>
        <AccordionItem
          title="1.1. Шестимесячный цикл (6-Month Cycle)"
          color="var(--core)"
          defaultOpen={true}
        >
          <Card color="var(--core)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> Главный механизм трансформации. Построен
              вокруг двух стратегических точек и стабильного ритма внедрения.
            </p>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--core)",
                marginBottom: 8,
              }}
            >
              Ключевые элементы цикла:
            </div>
            <BulletList
              color="var(--core)"
              items={[
                "Start-СС → запуск стратегии и фокуса",
                "12 встреч трекера (1 раз в 2 недели)",
                "12 встреч лидера (между встречами трекера)",
                "Прожекторы (standard/deep)",
                "WIG → Lead/Lag → Scoreboard",
                "Mid-point (опционально)",
                "Final-СС → фиксация результата",
                "Переход в новый цикл",
              ]}
            />
          </Card>
        </AccordionItem>

        {/* НОВЫЙ ПОДБЛОК 1.2 */}
        <AccordionItem
          title="1.2. Архитектура участника (Participant-Centric Model)"
          color="var(--core)"
        >
          <Card color="var(--core)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> В ULTIMA участник находится в центре
              системы.
              <br />
              Вся архитектура программы выстроена вокруг его бизнес-задач,
              решений и скорости внедрения.
            </p>

            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--core)",
                marginBottom: 8,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Circle size={16} fill="var(--core)" strokeWidth={0} />
              Центр системы:
            </div>
            <BulletList
              color="var(--core)"
              items={[
                "Участник — владелец WIG, принимает решения и несёт ответственность за результат.",
              ]}
            />

            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--core)",
                marginBottom: 8,
                marginTop: 16,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Circle size={16} fill="var(--core)" strokeWidth={0} />
              Ближний контур (еженедельное взаимодействие):
            </div>
            <BulletList
              color="var(--core)"
              items={[
                "Трекер — стратегический фасилитатор и держатель рамки цикла.",
                "Лидер десятки — проводник трекера в группе, отвечает за динамику и вовлечённость.",
                "Группа — среда давления, честности и взаимного усиления.",
              ]}
            />

            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--core)",
                marginBottom: 8,
                marginTop: 16,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Circle size={16} fill="var(--core)" strokeWidth={0} />
              Поддерживающий контур:
            </div>
            <BulletList
              color="var(--core)"
              items={[
                "Ассистент — операционная поддержка (фиксация, напоминания, структура).",
                "Бадди — горизонтальная поддержка и взаимная ответственность между участниками.",
              ]}
            />

            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--core)",
                marginBottom: 8,
                marginTop: 16,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Circle size={16} fill="var(--core)" strokeWidth={0} />
              Экспертный контур:
            </div>
            <BulletList
              color="var(--core)"
              items={[
                "Совет директоров ULTIMA.",
                "Приглашённые эксперты и мастермайнды.",
              ]}
            />

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginTop: 16,
                color: "var(--text)",
                fontStyle: "italic",
              }}
            >
              <strong>Принцип:</strong> участник никогда не остаётся один на
              один с задачей — вокруг него всегда есть система поддержки,
              давления и экспертизы.
            </p>
          </Card>
        </AccordionItem>

        {/* НОВЫЙ ПОДБЛОК 1.3 */}
        <AccordionItem
          title="1.3. Ключевые элементы системы ULTIMA"
          color="var(--core)"
        >
          <Card color="var(--core)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              ULTIMA — это не набор встреч, а система из взаимосвязанных
              элементов:
            </p>

            <div style={{ marginBottom: 12 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--core)",
                  marginBottom: 4,
                }}
              >
                1. Стратегическая сессия (Start-CC)
              </div>
              <div
                style={{ fontSize: 13, color: "var(--text)", marginLeft: 16 }}
              >
                Точка запуска: формирование WIG, стратегии и фокуса на 6
                месяцев.
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--core)",
                  marginBottom: 4,
                }}
              >
                2. Трекер
              </div>
              <div
                style={{ fontSize: 13, color: "var(--text)", marginLeft: 16 }}
              >
                Ведёт цикл, держит рамку, фокусирует на главном, не даёт
                свернуть с траектории.
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--core)",
                  marginBottom: 4,
                }}
              >
                3. Лидер десятки
              </div>
              <div
                style={{ fontSize: 13, color: "var(--text)", marginLeft: 16 }}
              >
                Усиливает групповую динамику, прожимает участников на выполнение
                обязательств.
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--core)",
                  marginBottom: 4,
                }}
              >
                4. Группа (десятка)
              </div>
              <div
                style={{ fontSize: 13, color: "var(--text)", marginLeft: 16 }}
              >
                Среда неизбежности результата: давление, честность, сравнение,
                поддержка.
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--core)",
                  marginBottom: 4,
                }}
              >
                5. Бадди-система
              </div>
              <div
                style={{ fontSize: 13, color: "var(--text)", marginLeft: 16 }}
              >
                Парная ответственность между участниками между встречами.
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--core)",
                  marginBottom: 4,
                }}
              >
                6. Регулярные встречи (weekly / bi-weekly)
              </div>
              <div
                style={{ fontSize: 13, color: "var(--text)", marginLeft: 16 }}
              >
                Ритм внедрения и контроля исполнения.
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--core)",
                  marginBottom: 4,
                }}
              >
                7. Совет директоров и эксперты
              </div>
              <div
                style={{ fontSize: 13, color: "var(--text)", marginLeft: 16 }}
              >
                Стратегическое усиление и расширение горизонта решений.
              </div>
            </div>

            <div style={{ marginBottom: 0 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--core)",
                  marginBottom: 4,
                }}
              >
                8. Финальная стратегическая сессия (Final-CC)
              </div>
              <div
                style={{ fontSize: 13, color: "var(--text)", marginLeft: 16 }}
              >
                Фиксация результата, рефлексия, переход в новый цикл.
              </div>
            </div>
          </Card>
        </AccordionItem>

        {/* НОВЫЙ ПОДБЛОК 1.4 */}
        <AccordionItem title="1.4. Путь участника в ULTIMA" color="var(--core)">
          <Card color="var(--core)">
            <div style={{ marginBottom: 12 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--core)",
                  marginBottom: 4,
                }}
              >
                1. Вход через диагностику
              </div>
              <div
                style={{ fontSize: 13, color: "var(--text)", marginLeft: 16 }}
              >
                Любой вход в ULTIMA начинается с диагностики. Это обязательная
                точка допуска в продукт.
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--core)",
                  marginBottom: 4,
                }}
              >
                2. Start-CC
              </div>
              <div
                style={{ fontSize: 13, color: "var(--text)", marginLeft: 16 }}
              >
                Формирование стратегии, WIG, ключевых проектов и метрик.
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--core)",
                  marginBottom: 4,
                }}
              >
                3. Первый месяц — еженедельный ритм
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text)",
                  marginLeft: 16,
                  marginBottom: 8,
                }}
              >
                Первые 4 встречи проходят еженедельно для:
              </div>
              <BulletList
                color="var(--core)"
                items={[
                  "глубокого погружения трекера в бизнес,",
                  "выстраивания доверия,",
                  "запуска дисциплины отчётности и внедрения.",
                ]}
              />
            </div>

            <div style={{ marginBottom: 12 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--core)",
                  marginBottom: 4,
                }}
              >
                4. Основной цикл — встречи раз в 2 недели
              </div>
              <div
                style={{ fontSize: 13, color: "var(--text)", marginLeft: 16 }}
              >
                12 встреч за 6 месяцев: контроль WIG, Lead/Lag, прожекторы,
                работа с динамикой.
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--core)",
                  marginBottom: 4,
                }}
              >
                5. Экспертные мастермайнды и Совет директоров
              </div>
              <div
                style={{ fontSize: 13, color: "var(--text)", marginLeft: 16 }}
              >
                Точечное усиление стратегии, решений и масштабирования.
              </div>
            </div>

            <div style={{ marginBottom: 0 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--core)",
                  marginBottom: 4,
                }}
              >
                6. Final-CC
              </div>
              <div
                style={{ fontSize: 13, color: "var(--text)", marginLeft: 16 }}
              >
                Фиксация результатов, выводы, формирование нового WIG и переход
                в следующий цикл.
              </div>
            </div>
          </Card>
        </AccordionItem>

        <AccordionItem
          title="1.5. Start-СС (точка запуска)"
          color="var(--core)"
        >
          <Card color="var(--core)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> Стратегическая двухдневная сессия всей
              десятки. На каждого участника 2–3 часа глубокого разбора.
            </p>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--core)",
                marginBottom: 8,
              }}
            >
              Что делаем:
            </div>
            <BulletList
              color="var(--core)"
              items={[
                "Диагностика 6 систем бизнеса",
                "Анализ узких мест",
                "Формирование WIG",
                "Выбор стратегических проектов",
                "Матрица Lead/Lag метрик",
                "6-месячная карта движения",
              ]}
            />
          </Card>
        </AccordionItem>

        <AccordionItem
          title="1.6. Final-СС (точка фиксации)"
          color="var(--core)"
        >
          <Card color="var(--core)">
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              <strong>Суть:</strong> Однодневная стратегическая сессия. Все
              участники проходят по одному протоколу.
            </p>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--core)",
                marginBottom: 8,
              }}
            >
              Задачи:
            </div>
            <BulletList
              color="var(--core)"
              items={[
                "Разбор результатов по WIG",
                "Фиксация изменений",
                "Перенастройка стратегий",
                "Новый цикл и новые WIG",
                "Закрытие 6 месяцев → начало следующего цикла",
              ]}
            />
          </Card>
        </AccordionItem>
      </Accordion>
    </>
  );
}
