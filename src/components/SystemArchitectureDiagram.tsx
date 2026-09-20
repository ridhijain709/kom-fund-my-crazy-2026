import React, { useState } from "react";
import {
  Layers,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Shield,
  Briefcase,
  Users,
  RefreshCw,
  Info,
} from "lucide-react";

export const SystemArchitectureDiagram: React.FC = () => {
  const [selectedBottleneck, setSelectedBottleneck] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"flowchart" | "causal-loop">("flowchart");

  const bottlenecks = [
    {
      id: 1,
      title: "Bottleneck 1: Recruiter Review Fatigue & Volume Overload",
      problem:
        "HR teams at major corporates receive 10,000+ unstructured student resumes and PDF proposals. They cannot manually read them, leading to default filtering by university prestige tags (Tier-1 bias).",
      intervention:
        "Google Gemini Automated 3D Matrix: Submissions are parsed instantly across Problem Alignment, Feasibility, and Cost/ROI. Produces an objective 0–100 composite score within 5 seconds, eliminating manual first-round screening fatigue.",
      roiImpact: "70% reduction in recruiter candidate screening dwell-time.",
    },
    {
      id: 2,
      title: "Bottleneck 2: AI Contextual Bias & Regional Dialect Friction",
      problem:
        "Pure automated LLM evaluation can unfairly penalize rural candidates who submit in vernacular Hinglish, non-standard English syntax, or informal operational idioms.",
      intervention:
        "Dual-Tier Human-in-the-Loop Escalation Desk: Candidates scoring in borderline bands (40–64) or flagged with heavy vernacular phrases are automatically routed to human regional mentors who validate the authentic ground-level operational logic.",
      roiImpact:
        "Guarantees 100% fairness and prevents false-negative dropouts of brilliant grassroots talent.",
    },
    {
      id: 3,
      title: "Bottleneck 3: Resume Keyword Gaming & Lack of Verified Proof-of-Work",
      problem:
        "Resumes are inflated with AI-generated buzzwords, certificates, and fake claims. Recruiters have zero verifiable evidence of candidate execution capacity.",
      intervention:
        "Anonymized Proof-of-Work Cards: College names, candidate names, and pedigree markers are stripped. Corporates review verified problem-solving prototypes and unit-economic breakdowns.",
      roiImpact:
        "Ensures high-intent hires with 40% lower first-year corporate attrition.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header and Toggle */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-stone-900 flex items-center gap-2">
            <Layers className="w-4 h-4 text-stone-700" />
            System Architecture &amp; Causal Loop Modeling
          </h2>
          <p className="text-xs text-stone-500">
            End-to-end visual mapping of stakeholder feedback loops, closed-loop causal dynamics, and bottleneck interventions.
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg text-xs">
          <button
            onClick={() => setActiveTab("flowchart")}
            className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
              activeTab === "flowchart"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Sequential Flowchart &amp; Bottlenecks
          </button>
          <button
            onClick={() => setActiveTab("causal-loop")}
            className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
              activeTab === "causal-loop"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Causal Loop Dynamics (R1 &amp; B1)
          </button>
        </div>
      </div>

      {activeTab === "flowchart" ? (
        <div className="space-y-6">
          {/* Main Visual Flowchart */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
            {/* Step 1: Candidate Submission */}
            <div className="max-w-2xl mx-auto bg-white border border-stone-300 rounded-xl p-4 shadow-xs text-center space-y-2">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
                Stage 1: Public Transit Touchpoint
              </span>
              <div className="text-sm font-bold text-stone-900 flex items-center justify-center gap-2">
                <Users className="w-4 h-4 text-stone-700" />
                Regional Candidate Submits Solution at KOM Transit Kiosk
              </div>
              <p className="text-xs text-stone-600 max-w-lg mx-auto">
                Commuting Tier-2/3 college students &amp; unemployed youth interact with low-power e-paper screen during 15–45 min bus dwell time.
              </p>
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center justify-center gap-1 text-stone-400">
              <div className="w-0.5 h-6 bg-stone-300"></div>
              <ArrowDown className="w-4 h-4 text-stone-400" />
            </div>

            {/* Bottleneck 1 Intercept Box */}
            <div
              onClick={() => setSelectedBottleneck(1)}
              className={`max-w-3xl mx-auto border rounded-xl p-5 cursor-pointer transition-all ${
                selectedBottleneck === 1
                  ? "bg-white border-stone-900 shadow-md ring-2 ring-stone-900/10"
                  : "bg-white/80 border-stone-200 hover:border-stone-300"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                  BOTTLENECK 1: Recruiter Review Fatigue &amp; High Volume
                </span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ✓ Solution: Google Gemini 3.8 Flash Auto-Scoring
                </span>
              </div>
              <div className="text-xs text-stone-700 space-y-1">
                <p>
                  <strong>Gemini Processing Core:</strong> Parses raw candidate voice/text, strips academic buzzwords, maps logic to 3 Standardized Dimensions (Problem Alignment, Feasibility, Cost/ROI), and generates an automated 0–100 composite score.
                </p>
                <div className="text-[11px] text-stone-500 font-mono">
                  Result: Recruiter screening dwell-time slashed by 70%.
                </div>
              </div>
            </div>

            {/* Branching Down Connector */}
            <div className="flex flex-col items-center justify-center gap-1 text-stone-400">
              <div className="w-0.5 h-6 bg-stone-300"></div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-stone-200/80 px-2.5 py-0.5 rounded-full">
                Tri-Tier Score Routing Threshold
              </div>
              <div className="w-0.5 h-6 bg-stone-300"></div>
            </div>

            {/* 3 Branches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-xs">
              {/* Branch A: Score >= 65 */}
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-emerald-900 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Score ≥ 65: Passed to Corporate
                </div>
                <p className="text-[11px] text-stone-700 leading-relaxed">
                  Automatically generates anonymized Proof-of-Work card with breakdown and pushes to Corporate ATS Dashboard.
                </p>
              </div>

              {/* Branch B: Score 40-64 or Flagged Language */}
              <div
                onClick={() => setSelectedBottleneck(2)}
                className={`border rounded-xl p-4 space-y-2 cursor-pointer transition-all ${
                  selectedBottleneck === 2
                    ? "bg-amber-50/90 border-amber-400 shadow-sm ring-2 ring-amber-400/20"
                    : "bg-amber-50/60 border-amber-200"
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold text-amber-900 text-xs">
                  <Shield className="w-4 h-4 text-amber-600" />
                  Score 40–64: Human Escalation Desk
                </div>
                <p className="text-[11px] text-stone-700 leading-relaxed">
                  <strong>BOTTLENECK 2 INTERVENTION:</strong> Regional field mentors audit edge cases, slang/vernacular phrases, or appeals to prevent AI bias.
                </p>
              </div>

              {/* Branch C: Score < 40 */}
              <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-rose-900 text-xs">
                  <RefreshCw className="w-4 h-4 text-rose-600" />
                  Score &lt; 40: Actionable AI Feedback
                </div>
                <p className="text-[11px] text-stone-700 leading-relaxed">
                  Gemini returns explicit, constructive feedback (e.g. missing unit-cost estimates) guiding the candidate to refine and re-submit.
                </p>
              </div>
            </div>

            {/* Down Connector */}
            <div className="flex flex-col items-center justify-center gap-1 text-stone-400">
              <div className="w-0.5 h-6 bg-stone-300"></div>
              <ArrowDown className="w-4 h-4 text-stone-400" />
            </div>

            {/* Bottleneck 3 Intercept Box */}
            <div
              onClick={() => setSelectedBottleneck(3)}
              className={`max-w-3xl mx-auto border rounded-xl p-5 cursor-pointer transition-all ${
                selectedBottleneck === 3
                  ? "bg-white border-stone-900 shadow-md ring-2 ring-stone-900/10"
                  : "bg-white/80 border-stone-200 hover:border-stone-300"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                  BOTTLENECK 3: Resume Keyword Gaming &amp; Pedigree Gatekeeping
                </span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ✓ Solution: Verified Anonymized Candidate Showcase
                </span>
              </div>
              <div className="text-xs text-stone-700 space-y-1">
                <p>
                  <strong>Corporate ATS Showcase:</strong> Recruiters review ranked, structured project blueprints with verified scores. College names and personal identifiers remain hidden until interview unlocking.
                </p>
                <div className="text-[11px] text-stone-500 font-mono">
                  Result: Level playing field for Tier-2/3 talent; recruiters gain high-retention regional execution leads.
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Selected Bottleneck Deep Dive */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Detailed Bottleneck Intervention Analysis
              </span>
              <span className="text-xs font-bold text-stone-900">
                {bottlenecks.find((b) => b.id === selectedBottleneck)?.title}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-2">
              <div className="bg-rose-50/60 p-3.5 rounded-lg border border-rose-100 space-y-1">
                <span className="font-bold text-rose-900 block text-[11px] uppercase tracking-wider">
                  The Friction / Loopholes Identified:
                </span>
                <p className="text-stone-700 leading-relaxed">
                  {bottlenecks.find((b) => b.id === selectedBottleneck)?.problem}
                </p>
              </div>

              <div className="bg-emerald-50/60 p-3.5 rounded-lg border border-emerald-100 space-y-1 md:col-span-2">
                <span className="font-bold text-emerald-900 block text-[11px] uppercase tracking-wider">
                  The KOM Node Intervention &amp; Impact:
                </span>
                <p className="text-stone-700 leading-relaxed mb-2">
                  {bottlenecks.find((b) => b.id === selectedBottleneck)?.intervention}
                </p>
                <div className="bg-white p-2 rounded border border-emerald-200 text-[11px] text-emerald-900 font-semibold">
                  Quantifiable Outcome:{" "}
                  {bottlenecks.find((b) => b.id === selectedBottleneck)?.roiImpact}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Causal Loop Diagram Tab */
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="space-y-2 max-w-3xl">
            <h3 className="text-base font-bold text-stone-900">
              System Dynamics &amp; Causal Feedback Loops
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Causal Loop Diagram illustrating how transit commuters, enterprise talent desks, and civic transit authorities interact and self-reinforce social mobility and corporate ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Loop R1: The Proof-of-Work Flywheel */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
                <span className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                  <RefreshCw className="w-4 h-4 text-emerald-600" />
                  Reinforcing Loop R1: The Talent Sourcing Flywheel
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  REINFORCING
                </span>
              </div>

              <div className="space-y-2 text-stone-700 font-mono text-[11px]">
                <div className="p-2.5 bg-white rounded-lg border border-stone-200/70">
                  (+) Tier-2/3 Student Transit Submissions
                </div>
                <div className="text-center text-stone-400 font-bold">↓ (+)</div>
                <div className="p-2.5 bg-white rounded-lg border border-stone-200/70">
                  (+) Verified Proof-of-Work Candidate Pool
                </div>
                <div className="text-center text-stone-400 font-bold">↓ (+)</div>
                <div className="p-2.5 bg-white rounded-lg border border-stone-200/70">
                  (+) Corporate Sourcing ROI &amp; Screening Time Reduction
                </div>
                <div className="text-center text-stone-400 font-bold">↓ (+)</div>
                <div className="p-2.5 bg-white rounded-lg border border-stone-200/70">
                  (+) Corporate Brief Offloading &amp; Platform Sponsorship Fees
                </div>
                <div className="text-center text-stone-400 font-bold">↓ (+)</div>
                <div className="p-2.5 bg-white rounded-lg border border-stone-200/70">
                  (+) Re-investment in Municipal Transit Node Hardware &amp; Student Mentorship
                </div>
              </div>

              <p className="text-[11px] text-stone-500 italic">
                *Every verified hire drives more corporate operational briefs into the mesh, attracting higher student participation at bus shelters.*
              </p>
            </div>

            {/* Loop B1: The Quality Control Balancing Loop */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
                <span className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-amber-600" />
                  Balancing Loop B1: Quality &amp; Trust Equilibrium
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                  BALANCING
                </span>
              </div>

              <div className="space-y-2 text-stone-700 font-mono text-[11px]">
                <div className="p-2.5 bg-white rounded-lg border border-stone-200/70">
                  (+) Volume of Raw Edge-Case / Vernacular Proposals
                </div>
                <div className="text-center text-stone-400 font-bold">↓ (+)</div>
                <div className="p-2.5 bg-white rounded-lg border border-stone-200/70">
                  (+) Flagging to Human-in-the-Loop Escalation Desk
                </div>
                <div className="text-center text-stone-400 font-bold">↓ (+)</div>
                <div className="p-2.5 bg-white rounded-lg border border-stone-200/70">
                  (+) Regional Logic &amp; Dialect Normalization
                </div>
                <div className="text-center text-stone-400 font-bold">↓ (-)</div>
                <div className="p-2.5 bg-white rounded-lg border border-stone-200/70">
                  (-) Reduction in False-Negative Candidate Dropouts
                </div>
                <div className="text-center text-stone-400 font-bold">↓ (+)</div>
                <div className="p-2.5 bg-white rounded-lg border border-stone-200/70">
                  (=) Long-term Recruiter Trust &amp; Hiring Consistency
                </div>
              </div>

              <p className="text-[11px] text-stone-500 italic">
                *The Human Escalation Desk prevents AI hallucination or dialect bias from deteriorating corporate trust, keeping evaluation standards rigorously balanced.*
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
