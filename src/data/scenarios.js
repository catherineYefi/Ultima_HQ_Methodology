// data/scenarios.js - Сценарии для Logic & Economics

export const SCENARIOS = {
  conservative: {
    label: "Conservative",
    tooltip: "Минимальный прогноз: 80 диагностик, 80 СС, 4 группы Ultima",
    diagnosticsStd: 80,
    diagnosticsAK: 10,
    ssGroups1: 15,
    ssGroups2: 15,
    ssGroups3: 8,
    ssCompanies: 8,
    ssAKGroups1: 1,
    ssAKGroups2: 1,
    ssAKGroups3: 1,
    ssAKCompanies: 1,
    ultimaStd: 2,
    ultimaPrem: 2,
    ultimaAK: 0,
    greyGroups: 5,
    retentionRate: 0.6,
  },
  realistic: {
    label: "Realistic",
    tooltip: "Текущий прогноз: 100 диагностик, 100 СС, 6 групп Ultima",
    diagnosticsStd: 100,
    diagnosticsAK: 15,
    ssGroups1: 20,
    ssGroups2: 30,
    ssGroups3: 20,
    ssCompanies: 15,
    ssAKGroups1: 2,
    ssAKGroups2: 3,
    ssAKGroups3: 2,
    ssAKCompanies: 2,
    ultimaStd: 2,
    ultimaPrem: 3,
    ultimaAK: 1,
    greyGroups: 10,
    retentionRate: 0.7,
  },
  ambitious: {
    label: "Ambitious",
    tooltip: "Рост: 150 диагностик, 150 СС, 8 групп Ultima",
    diagnosticsStd: 150,
    diagnosticsAK: 25,
    ssGroups1: 30,
    ssGroups2: 45,
    ssGroups3: 30,
    ssCompanies: 25,
    ssAKGroups1: 3,
    ssAKGroups2: 4,
    ssAKGroups3: 3,
    ssAKCompanies: 3,
    ultimaStd: 2,
    ultimaPrem: 3,
    ultimaAK: 1,
    greyGroups: 15,
    retentionRate: 0.85,
  },
};

// Функция расчёта totals на основе сценария
export function calculateTotals(scenario, config) {
  const {
    diagnosticsStd,
    diagnosticsAK,
    ssGroups1,
    ssGroups2,
    ssGroups3,
    ssCompanies,
    ssAKGroups1,
    ssAKGroups2,
    ssAKGroups3,
    ssAKCompanies,
    ultimaStd,
    ultimaPrem,
    ultimaAK,
    greyGroups,
  } = scenario;

  // Revenue расчёты
  const diagRevenue =
    diagnosticsStd * config.products.diagnostics[0].price +
    diagnosticsAK * config.products.diagnostics[1].price;

  const ssRevenue =
    ssGroups1 * config.products.ss.groups[0].price +
    ssGroups2 * config.products.ss.groups[1].price +
    ssGroups3 * config.products.ss.groups[2].price +
    ssCompanies * config.products.ss.companies.price +
    ssAKGroups1 * config.products.ss.ak.groups[0].price +
    ssAKGroups2 * config.products.ss.ak.groups[1].price +
    ssAKGroups3 * config.products.ss.ak.groups[2].price +
    ssAKCompanies * config.products.ss.ak.company.price;

  const ultimaRevenue =
    ultimaStd * config.products.ultima[0].price +
    ultimaPrem * config.products.ultima[1].price +
    ultimaAK * config.products.ultima[2].price;

  const greyRevenue = greyGroups * 150000 * 6; // 150K/мес * 6 мес

  const totalRevenue = diagRevenue + ssRevenue + ultimaRevenue + greyRevenue;

  // Profit расчёты (упрощённые)
  const diagProfit =
    diagnosticsStd *
      config.products.diagnostics[0].price *
      config.margins.diagnostics +
    diagnosticsAK *
      config.products.diagnostics[1].price *
      config.margins.diagnosticsAK;

  const ssProfit = ssRevenue * 0.38; // средняя маржа СС

  const ultimaProfit =
    ultimaStd *
      config.products.ultima[0].price *
      config.margins.ultimaStandard +
    ultimaPrem *
      config.products.ultima[1].price *
      config.margins.ultimaPremium +
    ultimaAK * config.products.ultima[2].price * config.margins.ultimaAK;

  const greyProfit = greyRevenue * 0.3; // комиссия 30%

  const totalProfit = diagProfit + ssProfit + ultimaProfit + greyProfit;
  const totalMargin = totalRevenue > 0 ? totalProfit / totalRevenue : 0;

  // Capacity
  const totalSS =
    ssGroups1 +
    ssGroups2 +
    ssGroups3 +
    ssCompanies +
    ssAKGroups1 +
    ssAKGroups2 +
    ssAKGroups3 +
    ssAKCompanies;

  const totalUltima = ultimaStd + ultimaPrem + ultimaAK;
  const maxUltima = 2 + 3 + 1; // capacity limits

  const capacityUsage = (totalUltima / maxUltima) * 100;

  return {
    totalRevenue,
    totalProfit,
    totalMargin,
    totalSS,
    totalUltima,
    capacityUsage,
    diagRevenue,
    ssRevenue,
    ultimaRevenue,
    greyRevenue,
  };
}
