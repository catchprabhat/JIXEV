import React, { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { formatCurrency, performCalculations, formatSubscriptionLabel } from "@/lib/investorsFinancials";
import { TrendingUp, Zap, Truck, Users, IndianRupee, BatteryCharging, Briefcase, Scale } from "lucide-react";

const COLORS = {
  primary: "#3b82f6",
  secondary: "#10b981",
  accent: "#f97316",
  indigo: "#6366f1",
};

const PIE_COLORS = [COLORS.primary, COLORS.secondary, COLORS.accent, "#38bdf8", "#fbbf24"];
const CAPEX_PIE_COLORS = [COLORS.accent, COLORS.secondary];

function MoneyTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-md">
      {label && <p className="font-semibold text-slate-800">{label}</p>}
      {payload.map((p) => (
        <p key={p.dataKey} className="text-slate-600">
          {p.name}: {formatCurrency(p.value)}
        </p>
      ))}
    </div>
  );
}

const InvestorsFinancialDashboard = () => {
  const [numChargers, setNumChargers] = useState(4);
  const [customersPerCharger, setCustomersPerCharger] = useState(60);
  const [subscriptionFee, setSubscriptionFee] = useState(37500);

  const isDenseNetwork = numChargers >= 10;

  useEffect(() => {
    if (numChargers >= 10) {
      setCustomersPerCharger((c) => (c < 80 ? 80 : Math.min(c, 80)));
    } else {
      setCustomersPerCharger((c) => Math.min(c, 60));
    }
  }, [numChargers]);

  const calculations = useMemo(
    () => performCalculations(numChargers, customersPerCharger, subscriptionFee),
    [numChargers, customersPerCharger, subscriptionFee]
  );

  const barData = useMemo(
    () =>
      calculations.scaleUpData.map((d) => ({
        name: d.name,
        profit: d.monthlyProfit,
        fund: d.fundRequirement,
      })),
    [calculations.scaleUpData]
  );

  return (
    <section id="financials" className="py-10">
      <div className="mb-10 text-left">
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          A Profitable &amp; Scalable Business Model
        </h2>
        <p className="text-base text-gray-600 sm:text-lg">
          Our subscription-based model ensures predictable revenue, high ROI, and a clear path to expansion.
        </p>
      </div>

      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Charger on Wheels</h3>
          <p className="mt-1 text-slate-500">Interactive Business Metrics Framework</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
          <Zap className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span>Powered by Subscription Model</span>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <Label className="flex items-center gap-2 font-semibold text-slate-600">
            <Truck className="h-4 w-4 text-blue-500" />
            Number of Chargers
          </Label>
          <div className="mt-3 flex items-center gap-4">
            <Slider
              min={1}
              max={50}
              step={1}
              value={[numChargers]}
              onValueChange={(v) => setNumChargers(v[0])}
              className="flex-1"
            />
            <span className="w-12 text-center font-bold text-blue-600">{numChargers}</span>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <Label className="flex items-center gap-2 font-semibold text-slate-600">
            <Users className="h-4 w-4 text-emerald-500" />
            Customers per Charger
          </Label>
          <div className="mt-3 flex items-center gap-4">
            <Slider
              min={40}
              max={isDenseNetwork ? 80 : 60}
              step={10}
              value={[customersPerCharger]}
              onValueChange={(v) => setCustomersPerCharger(v[0])}
              className="flex-1"
            />
            <span className="w-12 text-center font-bold text-emerald-600">{customersPerCharger}</span>
          </div>
          {isDenseNetwork && (
            <p className="mt-2 text-xs text-slate-500">Max capacity (80) unlocked with 10+ chargers.</p>
          )}
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md md:col-span-2 lg:col-span-1">
          <Label className="flex items-center gap-2 font-semibold text-slate-600">
            <IndianRupee className="h-4 w-4 text-orange-500" />
            Annual Subscription
          </Label>
          <div className="mt-3 flex items-center gap-4">
            <Slider
              min={25000}
              max={50000}
              step={500}
              value={[subscriptionFee]}
              onValueChange={(v) => setSubscriptionFee(v[0])}
              className="flex-1"
            />
            <span className="w-24 shrink-0 text-center font-bold text-orange-600">
              {formatSubscriptionLabel(subscriptionFee)}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
        <StatCard
          icon={<TrendingUp className="h-6 w-6 text-blue-600" />}
          title="Total Monthly Revenue"
          value={formatCurrency(calculations.totalMonthlyRevenue)}
          color={COLORS.primary}
        />
        <StatCard
          icon={<IndianRupee className="h-6 w-6 text-emerald-600" />}
          title="Total Monthly Profit"
          value={formatCurrency(calculations.totalMonthlyProfit)}
          color={COLORS.secondary}
        />
        <StatCard
          icon={<Scale className="h-6 w-6 text-orange-600" />}
          title="Total Annual Profit"
          value={formatCurrency(calculations.totalAnnualProfit)}
          color={COLORS.accent}
        />
        <StatCard
          icon={<Zap className="h-6 w-6 text-blue-600" />}
          title="Monthly ROI"
          value={`${calculations.monthlyROI.toFixed(2)}%`}
          subtitle="Per Van"
          color={COLORS.primary}
        />
        <StatCard
          icon={<Zap className="h-6 w-6 text-emerald-600" />}
          title="Annual ROI"
          value={`${calculations.annualROI.toFixed(2)}%`}
          subtitle="Per Van"
          color={COLORS.secondary}
        />
      </div>

      <div className="mb-8 rounded-2xl bg-white p-6 shadow-md">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-800">
          <TrendingUp className="h-5 w-5 text-blue-500" />
          Scale-Up Potential &amp; Funding Requirements
        </h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="5 5" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis
                yAxisId="left"
                tickFormatter={(v) => formatCurrency(v).replace("₹", "")}
                tick={{ fontSize: 11 }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickFormatter={(v) => formatCurrency(v).replace("₹", "")}
                tick={{ fontSize: 11 }}
              />
              <Tooltip content={<MoneyTooltip />} />
              <Legend />
              <Bar yAxisId="left" dataKey="profit" name="Monthly Profit" fill={COLORS.secondary} radius={4} />
              <Bar yAxisId="right" dataKey="fund" name="Fund Requirement" fill={COLORS.indigo} radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50">
              <tr className="border-b border-slate-200">
                <th className="p-3 font-semibold text-slate-500">Chargers</th>
                <th className="p-3 text-right font-semibold text-slate-500">Total Customers</th>
                <th className="p-3 text-right font-semibold text-slate-500">Monthly Revenue</th>
                <th className="p-3 text-right font-semibold text-slate-500">Monthly Profit</th>
                <th className="p-3 text-right font-semibold text-slate-500">Fund Requirement (CAPEX + 3mo OPEX)</th>
              </tr>
            </thead>
            <tbody>
              {calculations.scaleUpData.map((row) => (
                <tr key={row.name} className="border-b border-slate-200 last:border-0 hover:bg-slate-50">
                  <td className="p-3 font-medium">{row.name}</td>
                  <td className="p-3 text-right font-mono">{row.totalCustomers}</td>
                  <td className="p-3 text-right font-mono text-blue-600">{formatCurrency(row.monthlyRevenue)}</td>
                  <td className="p-3 text-right font-mono text-emerald-600">{formatCurrency(row.monthlyProfit)}</td>
                  <td className="p-3 text-right font-mono font-bold text-indigo-600">
                    {formatCurrency(row.fundRequirement)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-800">
            <BatteryCharging className="h-5 w-5 text-orange-500" />
            Monthly OPEX Breakdown (Per Van)
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={calculations.opexData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name }) => name}
                >
                  {calculations.opexData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => formatCurrency(v)} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-800">
            <Briefcase className="h-5 w-5 text-indigo-500" />
            Total CAPEX vs. Annual Profit
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={calculations.capexVsProfitData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name }) => name}
                >
                  {calculations.capexVsProfitData.map((_, i) => (
                    <Cell key={i} fill={CAPEX_PIE_COLORS[i % CAPEX_PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => formatCurrency(v)} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-md">
        <h3 className="mb-4 text-lg font-bold text-slate-800">Current Fleet Financial Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-3 font-semibold text-slate-500">Metric</th>
                <th className="p-3 text-right font-semibold text-slate-500">Per Van</th>
                <th className="p-3 text-right font-semibold text-slate-500">
                  Total ({numChargers} Vans)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Monthly Revenue</td>
                <td className="p-3 text-right font-mono">{formatCurrency(calculations.monthlyRevenuePerVan)}</td>
                <td className="p-3 text-right font-mono font-semibold text-blue-600">
                  {formatCurrency(calculations.totalMonthlyRevenue)}
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-medium">Monthly OPEX</td>
                <td className="p-3 text-right font-mono">{formatCurrency(calculations.totalOpexPerVan)}</td>
                <td className="p-3 text-right font-mono font-semibold text-orange-600">
                  {formatCurrency(calculations.totalOpexAllVans)}
                </td>
              </tr>
              <tr className="rounded-b-lg bg-emerald-50">
                <td className="p-3 font-bold">Monthly Profit</td>
                <td className="p-3 text-right font-mono font-bold">
                  {formatCurrency(calculations.monthlyRevenuePerVan - calculations.totalOpexPerVan)}
                </td>
                <td className="p-3 text-right font-mono text-lg font-bold text-emerald-600">
                  {formatCurrency(calculations.totalMonthlyProfit)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

function StatCard({ icon, title, value, subtitle, color, className = "" }) {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md transition-transform hover:scale-[1.02] hover:bg-emerald-50/50 ${className}`}
    >
      <div className="rounded-full p-3" style={{ backgroundColor: `${color}20` }}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <p className="text-xl font-bold text-slate-800">{value}</p>
        {subtitle ? <p className="text-xs text-slate-400">{subtitle}</p> : null}
      </div>
    </div>
  );
}

export default InvestorsFinancialDashboard;
