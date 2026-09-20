import React, { useState } from "react";
import { BUS_VS_METRO_COMPARISON } from "../data/mockData";
import {
  MapPin,
  Clock,
  Smartphone,
  TrendingUp,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  AlertCircle,
  BarChart3,
  DollarSign,
} from "lucide-react";

export const DemographicAnalysis: React.FC = () => {
  const [nodeCount, setNodeCount] = useState<number>(10);
  const [avgCommutersPerStop, setAvgCommutersPerStop] = useState<number>(450);
  const [avgWaitMins, setAvgWaitMins] = useState<number>(22);

  // Dwell Time Attention Math
  const totalDailyCommuters = nodeCount * avgCommutersPerStop;
  const totalDailyDwellHours = (totalDailyCommuters * avgWaitMins) / 60;
  const monthlyEngagedHours = Math.round(totalDailyDwellHours * 30);
  const estimatedSolutionsPerMonth = Math.round(totalDailyCommuters * 30 * 0.035); // 3.5% conversion to submitted micro-brief

  return (
    <div className="space-y-6">
      {/* Hero Reframing Header */}
      <div className="bg-stone-900 text-stone-50 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
            <Clock className="w-4 h-4 text-emerald-400" />
            Demographic Reality &amp; Dwell-Time Economics
          </div>
          <span className="text-xs text-stone-400">
            Empirical Transit Flow Study: Non-Metro Regional Hubs
          </span>
        </div>

        <h2 className="text-2xl font-bold tracking-tight">
          Why Bus Stops Over Metro Stations?
        </h2>

        <p className="text-sm text-stone-300 leading-relaxed max-w-4xl">
          The assumption that bus stops only attract low-income individuals without time or ambition misunderstands transport realities in Tier-2 and Tier-3 regions. In non-metro cities, bus shelters are the primary mobility arteries for college students, polytechnic youth, and aspiring job seekers who possess <strong>15 to 45 minutes of passive dwell time</strong>—creating an unprecedented "Waiting Time Dividend" that fast-paced metro turnstiles simply cannot match.
        </p>

        {/* 3 Core Demographic Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-stone-800 text-xs">
          <div className="bg-stone-800/60 p-4 rounded-xl border border-stone-700/60 space-y-1">
            <span className="text-emerald-400 font-bold block uppercase tracking-wider text-[10px]">
              Fact 1: Demographic Reality
            </span>
            <div className="font-semibold text-white">
              The Aspirational Regional Middle Class
            </div>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              68% of regional bus commuters carry 4G/5G smartphones, use UPI daily, and are enrolled in degree/diploma programs.
            </p>
          </div>

          <div className="bg-stone-800/60 p-4 rounded-xl border border-stone-700/60 space-y-1">
            <span className="text-emerald-400 font-bold block uppercase tracking-wider text-[10px]">
              Fact 2: Dwell Time Economics
            </span>
            <div className="font-semibold text-white">
              Captive Attention vs. Metro Velocity
            </div>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              Metros are high-velocity transit tubes (2–4 min dwell); regional bus stops have 15–45 min idle waiting periods with zero distractions.
            </p>
          </div>

          <div className="bg-stone-800/60 p-4 rounded-xl border border-stone-700/60 space-y-1">
            <span className="text-emerald-400 font-bold block uppercase tracking-wider text-[10px]">
              Fact 3: Capital Expenditure
            </span>
            <div className="font-semibold text-white">
              Decentralized Low-Cost Retrofitting
            </div>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              Bus shelter e-paper panels cost under ₹60,000 to deploy, vs ₹15+ Lakhs for complex metro station concessionaire retrofits.
            </p>
          </div>
        </div>
      </div>

      {/* Head-to-Head Comparison Matrix */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-stone-900">
              Comparative Analysis: Bus Stops vs. Metro Rail Stations
            </h3>
            <p className="text-xs text-stone-500">
              Evaluating transit infrastructure against candidate cognitive availability and regional reach.
            </p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-stone-100 text-stone-700 font-semibold">
            Tier-2 &amp; Tier-3 Regional Hub Focus
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-600 font-semibold">
                <th className="p-3 w-1/4">Evaluation Dimension</th>
                <th className="p-3 w-1/3 text-emerald-900 bg-emerald-50/50">
                  Public Bus Stops &amp; Library Quadrangles (KOM)
                </th>
                <th className="p-3 w-1/3 text-stone-500">
                  Metro Rail Stations (Tier-1 Only)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              {BUS_VS_METRO_COMPARISON.map((row, idx) => (
                <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                  <td className="p-3 font-semibold text-stone-900 align-top">
                    {row.dimension}
                  </td>
                  <td className="p-3 bg-emerald-50/20 text-stone-900 align-top leading-relaxed font-medium">
                    {row.busStops}
                    <div className="mt-1 text-[11px] text-emerald-800 font-semibold">
                      ✓ {row.advantage}
                    </div>
                  </td>
                  <td className="p-3 text-stone-500 align-top leading-relaxed">
                    {row.metroStations}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Dwell-Time Economics Calculator */}
      <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200/80 pb-4">
          <div>
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-stone-700" />
              The "Waiting Time Dividend" Calculator
            </h3>
            <p className="text-xs text-stone-500">
              Model how idle waiting time at regional bus stops converts into productive problem-solving hours.
            </p>
          </div>
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-white border border-stone-300 text-stone-800">
            Interactive Model
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-4 bg-white p-5 rounded-xl border border-stone-200">
            <div>
              <div className="flex justify-between font-semibold text-stone-800 mb-1">
                <span>Number of Retrofitted Transit Nodes:</span>
                <span className="font-bold text-stone-900">{nodeCount} Nodes</span>
              </div>
              <input
                type="range"
                min={5}
                max={50}
                step={5}
                value={nodeCount}
                onChange={(e) => setNodeCount(Number(e.target.value))}
                className="w-full accent-stone-900 cursor-pointer"
              />
              <span className="text-[10px] text-stone-400">
                Recommended pilot corridor: 10 bus shelters near polytechnic colleges.
              </span>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-stone-800 mb-1">
                <span>Avg. Daily Commuter Volume per Stop:</span>
                <span className="font-bold text-stone-900">
                  {avgCommutersPerStop} Commuters
                </span>
              </div>
              <input
                type="range"
                min={200}
                max={1000}
                step={50}
                value={avgCommutersPerStop}
                onChange={(e) => setAvgCommutersPerStop(Number(e.target.value))}
                className="w-full accent-stone-900 cursor-pointer"
              />
              <span className="text-[10px] text-stone-400">
                Tier-2/3 student clusters average 400–600 peak boarders daily.
              </span>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-stone-800 mb-1">
                <span>Average Passive Waiting Dwell Time:</span>
                <span className="font-bold text-stone-900">
                  {avgWaitMins} Minutes
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={40}
                step={2}
                value={avgWaitMins}
                onChange={(e) => setAvgWaitMins(Number(e.target.value))}
                className="w-full accent-stone-900 cursor-pointer"
              />
              <span className="text-[10px] text-stone-400">
                Regional transit scheduling creates an average 18–30 min idle gap.
              </span>
            </div>
          </div>

          {/* Calculated Output Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-stone-200 flex flex-col justify-between">
              <span className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">
                Total Daily Footfall
              </span>
              <div className="text-2xl font-extrabold text-stone-900 my-2">
                {totalDailyCommuters.toLocaleString()}
              </div>
              <span className="text-[11px] text-stone-500">
                Commuters passing through the {nodeCount}-node network daily.
              </span>
            </div>

            <div className="bg-white p-5 rounded-xl border border-stone-200 flex flex-col justify-between">
              <span className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">
                Monthly Idle Dwell Time
              </span>
              <div className="text-2xl font-extrabold text-stone-900 my-2">
                {monthlyEngagedHours.toLocaleString()}{" "}
                <span className="text-xs font-normal text-stone-500">Hours</span>
              </div>
              <span className="text-[11px] text-stone-500">
                Captive attention hours available for micro-brief engagement.
              </span>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl col-span-2 flex flex-col justify-between">
              <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-800 block">
                Projected Verified Submissions (30 Days)
              </span>
              <div className="text-3xl font-extrabold text-emerald-950 my-1">
                {estimatedSolutionsPerMonth.toLocaleString()} Case Solutions
              </div>
              <span className="text-xs text-emerald-800 leading-relaxed">
                Even at a conservative 3.5% conversion rate, 10 regional nodes yield <strong>{estimatedSolutionsPerMonth} verified problem-solving blueprints</strong> every month—generating more actionable talent data than 5 full-time recruiters traveling to physical campuses.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
