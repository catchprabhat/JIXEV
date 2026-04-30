/** Ported from Charger on Wheels pitch deck (Elementor HTML widget) — same numeric assumptions. */

export const initialAssumptions = {
  chargerCapacityKwh: 60,
  chargerOutputKw: 60,
  avgEnergyPerSessionKwh: 28,
  electricityCostPerUnit: 6,
  operatingDaysPerMonth: 30,
  sessionsPerRecharge: 15,
  capexPerVan: 2100000,
  driverSalary: 45000,
  maintenance: 7000,
  vanRental: 22600,
  techInfra: 0,
  insuranceMisc: 0,
};

export function formatCurrency(value) {
  if (Math.abs(value) >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)} Cr`;
  }
  if (Math.abs(value) >= 100000) {
    return `₹${(value / 100000).toFixed(2)} L`;
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatSubscriptionLabel(fee) {
  return `₹${(fee / 1000).toFixed(2)} K`;
}

export function performCalculations(numChargers, customersPerCharger, subscriptionFee) {
  const electricityCostPerVan = 70000;
  const totalOpexPerVan =
    electricityCostPerVan +
    initialAssumptions.driverSalary +
    initialAssumptions.maintenance +
    initialAssumptions.vanRental +
    initialAssumptions.techInfra +
    initialAssumptions.insuranceMisc;

  const totalOpexAllVans = totalOpexPerVan * numChargers;

  const annualRevenuePerVan = subscriptionFee * customersPerCharger;
  const monthlyRevenuePerVan = annualRevenuePerVan / 12;
  const totalMonthlyRevenue = monthlyRevenuePerVan * numChargers;
  const totalAnnualRevenue = annualRevenuePerVan * numChargers;

  const monthlyProfitPerVan = monthlyRevenuePerVan - totalOpexPerVan;
  const totalMonthlyProfit = monthlyProfitPerVan * numChargers;
  const totalAnnualProfit = totalMonthlyProfit * 12;
  const monthlyROI = (monthlyProfitPerVan / initialAssumptions.capexPerVan) * 100;
  const annualROI = monthlyROI * 12;

  const totalCapex = initialAssumptions.capexPerVan * numChargers;
  const capexVsProfitData = [
    { name: "Total CAPEX", value: totalCapex },
    { name: "Total Annual Profit", value: totalAnnualProfit > 0 ? totalAnnualProfit : 0 },
  ];

  const opexData = [
    { name: "Electricity", value: electricityCostPerVan },
    { name: "Driver Salary", value: initialAssumptions.driverSalary },
    { name: "Maintenance", value: initialAssumptions.maintenance },
    { name: "Van Rental", value: initialAssumptions.vanRental },
  ];

  const scaleUpScenarios = [
    { chargers: 10, customers: 80 },
    { chargers: 20, customers: 80 },
    { chargers: 30, customers: 80 },
    { chargers: 40, customers: 80 },
    { chargers: 50, customers: 80 },
  ];

  const scaleUpData = scaleUpScenarios.map((s) => {
    const totalCustomers = s.chargers * s.customers;
    const monthlyRev = (subscriptionFee * s.customers) / 12 * s.chargers;
    const totalMonthlyOpex = totalOpexPerVan * s.chargers;
    const monthlyProf = monthlyRev - totalMonthlyOpex;
    const totalCapexForScenario = initialAssumptions.capexPerVan * s.chargers;
    const fundRequirement = totalCapexForScenario + 3 * totalMonthlyOpex;

    return {
      name: `${s.chargers} Chargers`,
      totalCustomers,
      monthlyRevenue: monthlyRev,
      monthlyProfit: monthlyProf,
      annualProfit: monthlyProf * 12,
      fundRequirement,
    };
  });

  return {
    totalMonthlyRevenue,
    totalAnnualRevenue,
    totalOpexAllVans,
    totalMonthlyProfit,
    totalAnnualProfit,
    monthlyROI,
    annualROI,
    opexData,
    scaleUpData,
    monthlyRevenuePerVan,
    totalOpexPerVan,
    totalCapex,
    capexVsProfitData,
  };
}
