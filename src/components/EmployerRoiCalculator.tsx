import React, { useState } from "react";
import { STAKEHOLDER_MATRIX } from "../data/mockData";
import {
  TrendingUp,
  DollarSign,
  Clock,
  Briefcase,
  Users,
  ShieldCheck,
  CheckCircle,
  Building2,
  PieChart,
} from "lucide-react";

export const EmployerRoiCalculator: React.FC = () => {
  const [annualHires, setAnnualHires] = useState<number>(30);
  const [recruiterHourlyRateINR, setRecruiterHourlyRateINR] = useState<number>(1200);
  const [campusesVisitedPerSeason, setCampusesVisitedPerSeason] = useState<number>(15);

  // ROI Calculations
  // Traditional screening: 45 mins (0.75 hrs) per resume x 40 resumes per open role = 30 hrs per hire
  const traditionalScreeningHoursPerHire = 30;
  const totalTraditionalScreeningHours = annualHires * traditionalScreeningHoursPerHire;
  
  // KOM Node Proof-of-Work: Recruiters only review top 5 pre-screened cards per hire x 15 mins = 1.25 hrs (+ interview time = 8 hrs total)
  // 70% screening reduction
  const hoursSavedPerHire = traditionalScreeningHoursPerHire * 0.70;
  const totalHoursSaved = Math.round(annualHires * hoursSavedPerHire);
  const recruiterSalarySavingsINR = totalHoursSaved * recruiterHourlyRateINR;

  // Campus travel CapEx savings: ~₹75,000 per campus visit (flights, hotels, logistics, per-diem)
  const campusVisitCostINR = 75000;
  const totalTravelSavingsINR = campusesVisitedPerSeason * campusVisitCostINR;

  // First year retention savings: Tier-1 attrition is ~32%, regional skill-first attrition is ~14%
  const attritionImprovementSavingsINR = annualHires * 0.18 * 250000; // replacement cost ~₹2.5L

  const totalAnnualSavingsINR =
    recruiterSalarySavingsINR + totalTravelSavingsINR + attritionImprovementSavingsINR;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-stone-900 text-stone-50 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            Hard Employer ROI &amp; Incentive Modeling
          </div>
          <span className="text-xs text-stone-400">
            Addressing Mentor Theme 4: Why Corporates Pay &amp; Hire Here
          </span>
        </div>

        <h2 className="text-2xl font-bold tracking-tight">
          Why Companies Pay: Time Savings, Proof-of-Work, &amp; Retention
        </h2>

        <p className="text-sm text-stone-300 leading-relaxed max-w-4xl">
          Companies do not invest in "student ideas"—they invest in <strong>cost cutting, time reduction, and risk mitigation</strong>. Traditional campus placement drives to non-metro colleges are logistically prohibitive, while open job portals result in 500+ unvetted PDFs. KOM acts as a digital virtual campus drive, delivering pre-scored Proof-of-Work dossiers at a fraction of traditional recruitment CapEx.
        </p>
      </div>

      {/* Interactive ROI Calculator */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4">
          <div>
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-stone-700" />
              Corporate Sourcing &amp; Screening Savings Calculator
            </h3>
            <p className="text-xs text-stone-500">
              Calculate quantifiable annual cost reductions for corporate recruitment teams.
            </p>
          </div>
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-stone-100 text-stone-800">
            Enterprise Model
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs">
          {/* Inputs */}
          <div className="lg:col-span-5 space-y-4 bg-stone-50 p-5 rounded-xl border border-stone-200/80">
            <div>
              <div className="flex justify-between font-semibold text-stone-800 mb-1">
                <span>Annual Regional Entry-Level Hires:</span>
                <span className="font-bold text-stone-900">{annualHires} Candidates</span>
              </div>
              <input
                type="range"
                min={5}
                max={150}
                step={5}
                value={annualHires}
                onChange={(e) => setAnnualHires(Number(e.target.value))}
                className="w-full accent-stone-900 cursor-pointer"
              />
              <span className="text-[10px] text-stone-500">
                Operations, logistics, regional sales, software, analytics roles.
              </span>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-stone-800 mb-1">
                <span>Senior Recruiter Cost / Hour:</span>
                <span className="font-bold text-stone-900">₹{recruiterHourlyRateINR} / hr</span>
              </div>
              <input
                type="range"
                min={600}
                max={3000}
                step={200}
                value={recruiterHourlyRateINR}
                onChange={(e) => setRecruiterHourlyRateINR(Number(e.target.value))}
                className="w-full accent-stone-900 cursor-pointer"
              />
              <span className="text-[10px] text-stone-500">
                Hourly cost of HR talent acquisition partner.
              </span>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-stone-800 mb-1">
                <span>Physical Campuses Avoided (Digital Aggregation):</span>
                <span className="font-bold text-stone-900">
                  {campusesVisitedPerSeason} Colleges
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={40}
                step={1}
                value={campusesVisitedPerSeason}
                onChange={(e) => setCampusesVisitedPerSeason(Number(e.target.value))}
                className="w-full accent-stone-900 cursor-pointer"
              />
              <span className="text-[10px] text-stone-500">
                Saves travel flights, hotel accommodations, and physical booth fees.
              </span>
            </div>
          </div>

          {/* Outputs */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                Recruiter Dwell-Time Saved
              </span>
              <div className="text-2xl font-extrabold text-stone-900">
                {totalHoursSaved.toLocaleString()}{" "}
                <span className="text-xs font-normal text-stone-500">Hours</span>
              </div>
              <p className="text-[11px] text-stone-600">
                70% screening cut via pre-ranked 3D Gemini scoring rubrics.
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                Physical Campus Travel Saved
              </span>
              <div className="text-2xl font-extrabold text-stone-900">
                ₹{(totalTravelSavingsINR / 100000).toFixed(1)}{" "}
                <span className="text-xs font-normal text-stone-500">Lakhs</span>
              </div>
              <p className="text-[11px] text-stone-600">
                Eliminates physical travel logistics to non-metro districts.
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                Attrition Risk Reduction
              </span>
              <div className="text-2xl font-extrabold text-emerald-700">
                ₹{(attritionImprovementSavingsINR / 100000).toFixed(1)}{" "}
                <span className="text-xs font-normal text-stone-500">Lakhs</span>
              </div>
              <p className="text-[11px] text-stone-600">
                Regional skill-first hires exhibit 40% lower first-year churn.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl space-y-1 flex flex-col justify-between">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                Total Annual Value Generated
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-950">
                ₹{(totalAnnualSavingsINR / 100000).toFixed(1)} Lakhs
              </div>
              <p className="text-[11px] text-emerald-800 font-medium">
                Annual net savings for a mid-market recruitment team.
              </p>
            </div>
          </div>
        </div>

        {/* Commercial Monetization Model */}
        <div className="border-t border-stone-100 pt-5 space-y-3">
          <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
            Platform Commercial &amp; Monetization Architecture:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1">
              <span className="font-bold text-stone-900 block">
                1. Freemium Analytics Tier:
              </span>
              <p className="text-stone-600 leading-relaxed text-[11px]">
                Corporates access high-level regional skill benchmarks, cohort analytics, and aggregated problem-solving trends for free.
              </p>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1">
              <span className="font-bold text-stone-900 block">
                2. Pay-per-Unlock / Subscription:
              </span>
              <p className="text-stone-600 leading-relaxed text-[11px]">
                Recruiters pay a flat fee (e.g. ₹2,500/profile) or monthly enterprise subscription to unlock candidate contact details and schedule direct interviews.
              </p>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1">
              <span className="font-bold text-stone-900 block">
                3. Reverse "Bounty" Brief Sponsorship:
              </span>
              <p className="text-stone-600 leading-relaxed text-[11px]">
                Enterprises sponsor custom operational challenges to crowdsource solutions from 50+ regional nodes, creating immediate operational ROI.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stakeholder Incentive Structure Analysis Matrix */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-stone-900">
              Stakeholder Incentive Structure Analysis Matrix
            </h3>
            <p className="text-xs text-stone-500">
              Multi-party alignment creating sustainable unit economics and structural incentives across stakeholders.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-semibold">
                <th className="p-3 w-1/5">Stakeholder</th>
                <th className="p-3 w-1/4">Core Pain Point</th>
                <th className="p-3 w-1/3">Incentive to Participate in KOM</th>
                <th className="p-3 w-1/4">Monetization &amp; Economic Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              {STAKEHOLDER_MATRIX.map((item, idx) => (
                <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                  <td className="p-3 font-bold text-stone-900 align-top">
                    {item.stakeholder}
                    <div className="text-[10px] font-normal text-stone-500">
                      {item.role}
                    </div>
                  </td>
                  <td className="p-3 text-stone-600 align-top leading-relaxed">
                    {item.corePainPoint}
                  </td>
                  <td className="p-3 text-stone-900 align-top leading-relaxed font-medium bg-emerald-50/20">
                    {item.incentiveToParticipate}
                  </td>
                  <td className="p-3 text-stone-600 align-top leading-relaxed text-[11px]">
                    {item.monetizationOrValueImpact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
