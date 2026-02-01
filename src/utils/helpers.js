// utils/helpers.js

// Форматирование чисел
export const fmt = (n) => `${Number(n).toLocaleString("ru-RU")} ₽`;

export const fmtShort = (n) => {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}М`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(0)}К`;
  return n;
};

// Расчёт capacity Ultima
export function calcUltimaCapacity(cfg) {
  const std = cfg.capacity.ultima.standard;
  const prem = cfg.capacity.ultima.premium;
  const ak = cfg.capacity.ultima.ak;

  const standardCapacity = std.trackers.length * std.maxGroupsPerTracker;
  const premiumCapacity = prem.trackers.length * prem.maxGroupsPerTracker;
  const akCapacity = ak.trackers.length * ak.maxGroupsPerTracker;
  const totalCapacity = standardCapacity + premiumCapacity + akCapacity;

  return { standardCapacity, premiumCapacity, akCapacity, totalCapacity };
}

// Скачивание CSV
export function downloadCSV(filename, rows) {
  const header = Object.keys(rows[0]).join(",");
  const csv =
    header +
    "\n" +
    rows
      .map((r) =>
        Object.values(r)
          .map((v) => `"${String(v).replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Получение цен Ultima
export function getUltimaPricing(cfg, code) {
  if (!cfg.pricing || !cfg.pricing.ultima) return null;
  switch (code) {
    case "ULTIMA_STD":
      return cfg.pricing.ultima.standard;
    case "ULTIMA_PREM":
      return cfg.pricing.ultima.premium;
    case "ULTIMA_AK":
      return cfg.pricing.ultima.ak;
    default:
      return null;
  }
}
