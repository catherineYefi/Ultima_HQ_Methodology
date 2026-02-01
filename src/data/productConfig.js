// productConfig.js - Конфигурация продуктов ULTIMA 9.0

export const CONFIG = {
  season8: {
    participants: 46,
    revenue: 19120000,
    avgCheck: 415652,
    conversionRate: 0.383,
  },

  capacity: {
    ultima: {
      standard: {
        trackers: ["Лозовая", "Лобойко"],
        maxGroupsPerTracker: 1,
      },
      premium: {
        trackers: ["Гор", "Шпак", "Дубровин"],
        maxGroupsPerTracker: 1,
      },
      ak: {
        trackers: ["Андрей Калашников"],
        maxGroupsPerTracker: 1,
      },
    },
    ss: {
      perTracker: { min: 10, max: 15 },
      totalTrackers: 5,
      ak: 1,
      totalPerYear: { min: 64, max: 96 },
    },
  },

  averageGroupSize: {
    standard: 10,
    premium: 9,
    ak: 5,
  },

  margins: {
    ssGroup: 0.38,
    ssCompany: 0.36,
    ssAK: 0.4,
    ssAKCompany: 0.65,
    diagnostics: 0.575,
    diagnosticsAK: 0.625,
    ultimaStandard: 0.275,
    ultimaPremium: 0.3,
    ultimaAK: 0.275,
    greyTrackers: 1.0,
  },

  renewals: {
    standard: 0.15,
    premium: 0.15,
    ak: 0.15,
  },

  pricing: {
    ultima: {
      standard: {
        label: "Ultima Standard (Лозовая / Лобойко)",
        oneTime: 700000,
        installments: {
          months: 3,
          monthly: 280000,
          total: 840000,
          markupPercent: 20,
        },
      },
      premium: {
        label: "Ultima Premium (Гор / Шпак / Дубровин)",
        oneTime: 900000,
        installments: {
          months: 3,
          monthly: 350000,
          total: 1050000,
          markupPercent: 16.7,
        },
      },
      ak: {
        label: "Ultima AK (Калашников)",
        oneTime: 2000000,
        installments: {
          months: 3,
          monthly: 700000,
          total: 2100000,
          markupPercent: 5,
        },
      },
    },
  },

  products: {
    diagnostics: [
      {
        code: "DIAG_STD",
        name: "Diagnostics Standard",
        tier: "entry",
        price: 50000,
        duration: "3 часа онлайн",
        facilitator: "Трекеры",
        conversionToSS: 0.3,
        conversionToUltima: 0.28,
        creditDays: 30,
        includes: [
          "Разбор 6 систем бизнеса",
          "3-5 гипотез роста",
          "Зачёт 50К в СС/Ultima (30 дней)",
        ],
      },
      {
        code: "DIAG_AK",
        name: "Diagnostics AK",
        tier: "entry",
        price: 200000,
        duration: "4 часа",
        facilitator: "Ведёт АК",
        conversionToSS: 0.4,
        conversionToUltima: 0.5,
        creditDays: 60,
        isPremium: true,
        includes: [
          "Глубокий аудит",
          "Персональная стратегия",
          "Зачёт до 200К в Ultima AK (60 дней)",
        ],
      },
    ],

    ss: {
      groups: [
        {
          code: "SS_1",
          name: "1 СС",
          tier: "core",
          price: 800000,
          duration: "12 мес (1 СС — только START)",
          format: "2 дня офлайн",
          biHours: 4,
          margin: 0.38,
          summary: "Быстрый результат, низкий вход",
        },
        {
          code: "SS_2",
          name: "2 СС",
          tier: "core",
          price: 1200000,
          duration: "12 мес (2 СС — Start + Final)",
          format: "2×2 дня офлайн",
          biHours: 8,
          margin: 0.38,
          summary: "Быстрый результат, низкий вход",
        },
        {
          code: "SS_3",
          name: "3 СС",
          tier: "core",
          price: 1600000,
          duration: "12 мес (3 СС — Start + Mid + Final)",
          format: "3×2 дня офлайн",
          biHours: 12,
          margin: 0.38,
          summary: "Быстрый результат, низкий вход",
        },
      ],
      companies: {
        code: "SS_COMP",
        name: "СС компании",
        price: 600000,
        format: "2 дня офлайн",
        biHours: 6,
        margin: 0.36,
      },
      ak: {
        groups: [
          {
            code: "SS_AK_1",
            name: "1 СС АК",
            price: 1500000,
            duration: "12 мес (1 СС)",
            format: "2 дня офлайн",
            biHours: 6,
            margin: 0.4,
          },
          {
            code: "SS_AK_2",
            name: "2 СС АК",
            price: 2500000,
            duration: "12 мес (2 СС — Start + Final)",
            format: "2×2 дня офлайн",
            biHours: 12,
            margin: 0.4,
          },
          {
            code: "SS_AK_3",
            name: "3 СС АК",
            price: 3500000,
            duration: "12 мес (3 СС — Start + Mid + Final)",
            format: "3×2 дня офлайн",
            biHours: 18,
            margin: 0.4,
          },
        ],
        company: {
          code: "SS_AK_COMP",
          name: "СС АК компании",
          price: 2000000,
          format: "2 дня",
          margin: 0.65,
        },
      },
    },

    ultima: [
      {
        code: "ULTIMA_STD",
        name: "Ultima Standard",
        tier: "premium",
        price: 700000,
        duration: "6 месяцев. Start-СС включена.",
        trackers: "Лозовая, Лобойко",
        groupSize: 10,
        margin: 0.275,
        renewalDiscount: 0.15,
        includes: [
          "1 СС Start",
          "12 встреч с трекером",
          "12 встреч с лидером",
          "2 слёта(орг.взносы) включены",
        ],
        capacity: "1 группа/трекер",
      },
      {
        code: "ULTIMA_PREM",
        name: "Ultima Premium",
        tier: "premium",
        price: 900000,
        duration: "6 месяцев. Start-СС включена.",
        trackers: "Гор, Шпак, Дубровин",
        groupSize: 9,
        margin: 0.3,
        renewalDiscount: 0.15,
        includes: [
          "1 СС Start",
          "12 встреч с трекером",
          "12 встреч с лидером",
          "2 слёта включены",
        ],
        capacity: "1 группа/трекер",
      },
      {
        code: "ULTIMA_AK",
        name: "Ultima AK",
        tier: "premium",
        price: 2000000,
        duration: "6 месяцев. Start-СС включена.",
        trackers: "Андрей Калашников",
        groupSize: 5,
        margin: 0.275,
        renewalDiscount: 0.15,
        includes: [
          "1 СС Start",
          "12 встреч с АК",
          "12 встреч с лидером",
          "2 слёта включены",
          "Персональная стратегия",
        ],
        capacity: "макс 1 группа",
      },
    ],

    greyTrackers: {
      code: "GREY",
      name: "Серые трекеры",
      tier: "grey",
      priceRange: "100K – 300K / сессия",
      margin: 1.0,
      description:
        "Корпоративные сессии, разовые консультации, работа с крупными компаниями. Полная маржа — нет фиксированных расходов.",
      use_cases: [
        "Корпоративные СС (200-300K)",
        "Разовые консультации (100-150K)",
        "Индивидуальные стратсессии (150-200K)",
      ],
    },

    ultimaCommon: {
      included: [
        "Start-СС включена",
        "12 встреч с трекером",
        "12 встреч с лидером",
        "2 слёта включены",
      ],
    },

    additional: {
      recordings: {
        name: "Recordings of SS",
        price: 100000,
        status: "discussion",
        description:
          "Записи всех стратегических сессий за год для самостоятельного изучения.",
      },
      network: {
        name: "Network Access",
        price: 50000,
        status: "discussion",
        description:
          "Доступ к закрытой сети предпринимателей Ultima на 12 месяцев.",
      },
    },
  },
};
