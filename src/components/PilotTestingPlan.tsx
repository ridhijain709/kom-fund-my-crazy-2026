import React, { useState } from "react";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Target,
  AlertTriangle,
  Building,
  Users,
  Briefcase,
  FileText,
  Mail,
  RefreshCw,
} from "lucide-react";

export const PilotTestingPlan: React.FC = () => {
  const [contingencyActive, setContingencyActive] = useState(false);

  const kpis = [
    {
      label: "Submission Completion Rate",
      target: "> 85%",
      benchmark: "15% on open hackathons",
      rationale:
        "Short 20-min micro-briefs with real-time Gemini logic scaffolding minimize student drop-off during dwell time.",
    },
    {
      label: "AI Evaluation Turnaround Time",
      target: "< 24 Hours (Instant in demo)",
      benchmark: "3–4 weeks for traditional HR",
      rationale:
        "Gemini 3.8 Flash parses submissions within seconds, returning actionable guidance immediately.",
    },
    {
      label: "Candidate Corporate Shortlist Rate",
      target: "> 30% of Passed Cohort",
      benchmark: "Under 2% on LinkedIn / Job Boards",
      rationale:
        "Standardized 3D matrix (Alignment, Feasibility, ROI) ensures only high-intent, rigorously vetted talent reaches recruiters.",
    },
    {
      label: "System Usability across Vernacular Inputs",
      target: "> 90% Accuracy in Dialect Parsing",
      benchmark: "Poor (generic LLMs penalize Hindi/Hinglish)",
      rationale:
        "Dual-tier safety net routes borderline scores and regional idioms to the Human Escalation Desk.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-stone-900 text-stone-50 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
            <Calendar className="w-4 h-4 text-emerald-400" />
            30-Day Controlled Pilot Blueprint &amp; Statistical Scope
          </div>
          <span className="text-xs text-stone-400">
            Field Implementation Protocol &amp; Operational Contingencies
          </span>
        </div>

        <h2 className="text-2xl font-bold tracking-tight">
          30-Day Municipal Corridors Pilot Deployment
        </h2>

        <p className="text-sm text-stone-300 leading-relaxed max-w-4xl">
          To transition from concept to empirical validation, we define an exact 30-day pilot framework centered on 10 high-density student transit shelters in a representative Tier-2 city, coupled with a robust contingency workflow addressing tight deadlines and potential system bottlenecks.
        </p>

        {/* 4 Quantitative Scope Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-stone-800 text-xs text-center">
          <div className="bg-stone-800/60 p-3.5 rounded-xl border border-stone-700/60">
            <div className="text-xl font-bold text-white">10 Nodes</div>
            <div className="text-[10px] text-stone-400 uppercase tracking-wider mt-1">
              High-Density Corridors
            </div>
          </div>
          <div className="bg-stone-800/60 p-3.5 rounded-xl border border-stone-700/60">
            <div className="text-xl font-bold text-emerald-400">300–500</div>
            <div className="text-[10px] text-stone-400 uppercase tracking-wider mt-1">
              Active Student Submissions
            </div>
          </div>
          <div className="bg-stone-800/60 p-3.5 rounded-xl border border-stone-700/60">
            <div className="text-xl font-bold text-white">3 Colleges</div>
            <div className="text-[10px] text-stone-400 uppercase tracking-wider mt-1">
              Regional Partner Institutions
            </div>
          </div>
          <div className="bg-stone-800/60 p-3.5 rounded-xl border border-stone-700/60">
            <div className="text-xl font-bold text-white">2–3 Corporates</div>
            <div className="text-[10px] text-stone-400 uppercase tracking-wider mt-1">
              Mid-Market Testing Partners
            </div>
          </div>
        </div>
      </div>

      {/* Target KPIs Grid */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-stone-900">
              Measurable Key Performance Indicators (KPIs)
            </h3>
            <p className="text-xs text-stone-500">
              Quantitative success gates required to greenlight Phase 3 municipal expansion.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {kpis.map((kpi, idx) => (
            <div
              key={idx}
              className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-stone-900">{kpi.label}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-xs">
                  {kpi.target}
                </span>
              </div>
              <div className="text-[11px] text-stone-500">
                Industry Benchmark: <strong>{kpi.benchmark}</strong>
              </div>
              <p className="text-stone-700 text-[11px] leading-relaxed">
                {kpi.rationale}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contingency Workflow Box */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Contingency Workflow &amp; Immediate Deadline Execution
            </h3>
            <p className="text-xs text-stone-500">
              Operational readiness protocols: resolving offline kiosk sync, tight deadline submissions, and recruiter SLA failovers.
            </p>
          </div>

          <button
            onClick={() => setContingencyActive(!contingencyActive)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              contingencyActive
                ? "bg-amber-100 text-amber-900 border border-amber-300"
                : "bg-stone-900 text-white hover:bg-stone-800"
            }`}
          >
            {contingencyActive ? "Hide Operational Checklist" : "View Contingency Checklist"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-stone-700" />
              1. Fallback Collection Layer
            </span>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              If official submission portals experience downtime, submissions automatically buffer locally via indexed offline storage or lightweight Google Form webhook with instant timestamped receipts.
            </p>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 flex items-center gap-1.5">
              <RefreshCw className="w-4 h-4 text-stone-700" />
              2. Asynchronous Batch Pipeline
            </span>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Batch Gemini 3.8 Flash evaluation scripts execute asynchronously via server queue to eliminate rate-limit bottlenecks and ensure no candidate proposal remains unparsed.
            </p>
          </div>

          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-stone-700" />
              3. Direct Escalation Alias
            </span>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Single point-of-contact support channel (dedicated WhatsApp desk and automated email verification) guarantees immediate acknowledgment for participants if mentor assignments stall.
            </p>
          </div>
        </div>

        {contingencyActive && (
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-2">
            <div className="font-bold flex items-center gap-1.5 text-amber-900">
              <CheckCircle2 className="w-4 h-4 text-amber-700" />
              Immediate Phase 2 Submission Action Plan for Tonight:
            </div>
            <ul className="list-disc list-inside space-y-1 text-amber-900/90 text-[11px]">
              <li>
                <strong>Export Pitch Deck:</strong> Switch to the "Phase 2 Pitch Deck" tab and review the 6 ready-to-present investor slides.
              </li>
              <li>
                <strong>Capture Demo Artifacts:</strong> Record a 60-second walkthrough of the "Live Node Prototype" tab showing candidate submission passing through the 3D Gemini evaluator.
              </li>
              <li>
                <strong>Verify Judging Criteria:</strong> 30% Vision, 20% Real-life Relevance, 20% Built with Gemini, 15% Future Focused, 15% Execution—all directly highlighted across our defense matrices.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
