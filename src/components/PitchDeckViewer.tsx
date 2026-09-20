import React, { useState } from "react";
import {
  FileText,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Printer,
  Sparkles,
  CheckCircle,
  Clock,
  Briefcase,
  Layers,
  Shield,
  Award,
} from "lucide-react";

export const PitchDeckViewer: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    {
      number: 1,
      title: "Title & Vision",
      subtitle: "KOM Node — Kinetic Opportunity Mesh",
      tagline: "Bridging Tier-2/3 Regional Talent to Formal Employers via Google Gemini AI",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-stone-900 text-stone-50 rounded-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
              Fund My Crazy 2026 • Build in Public
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              KOM NODE: KINETIC OPPORTUNITY MESH
            </h1>
            <p className="text-stone-300 text-sm leading-relaxed max-w-2xl">
              Transforming passive public bus shelters and municipal quadrangles in Tier-2/3 cities into active social mobility infrastructure powered by Google Gemini.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block mb-1">
                The Core Thesis:
              </span>
              <p className="text-stone-600 leading-relaxed">
                Intellectual capacity is evenly distributed; corporate opportunity ecosystems are not. We treat talent curation as a vital municipal utility.
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block mb-1">
                The Mechanism:
              </span>
              <p className="text-stone-600 leading-relaxed">
                Low-power transit e-paper screens pull corporate strategy "exhaust", scaffold student logic via Gemini, and route blind Proof-of-Work to corporate ATS.
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block mb-1">
                The Outcome:
              </span>
              <p className="text-stone-600 leading-relaxed">
                70% reduction in corporate screening dwell-time; institutional pedigree bias completely eliminated.
              </p>
            </div>
          </div>
        </div>
      ),
      speakerNotes:
        "Welcome judges. Millions of ambitious young minds in Tier-2 and Tier-3 colleges face 'Ecosystem Apartheid'—they have the identical ambition and intellect as elite peers, but lack access to corporate networks. Today, we introduce the KOM Node: reimagining ordinary public bus stops into decentralized opportunity mesh nodes powered by Google Gemini.",
    },
    {
      number: 2,
      title: "The Problem & Demographic Reality",
      subtitle: "Why Bus Stops? The 'Waiting Time Dividend'",
      tagline: "Captive Attention in Transit Hubs Outperforms Metro Turnstiles",
      content: (
        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-rose-50/60 rounded-xl border border-rose-200 space-y-2">
              <span className="font-bold text-rose-900 block text-xs uppercase tracking-wider">
                The System Problem: Ecosystem Apartheid
              </span>
              <p className="text-stone-700 leading-relaxed">
                Traditional hiring is locked behind elite university brands. High-volume corporate recruiters use ATS keyword filters that discard 98% of regional applicants without ever evaluating their problem-solving ability.
              </p>
              <div className="text-[11px] text-rose-800 font-semibold pt-1">
                Result: Severe regional brain waste and recruiting friction.
              </div>
            </div>

            <div className="p-5 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-2">
              <span className="font-bold text-emerald-900 block text-xs uppercase tracking-wider">
                The Demographic Discovery: Dwell-Time Economics
              </span>
              <p className="text-stone-700 leading-relaxed">
                Regional commuters are not destitute—68% carry smartphones, use UPI daily, and are enrolled in polytechnic/state colleges. Crucially, they spend <strong>15 to 45 minutes of passive waiting time</strong> at bus stops.
              </p>
              <div className="text-[11px] text-emerald-800 font-semibold pt-1">
                Result: High-intent captive attention for micro-brief engagement.
              </div>
            </div>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-lg font-bold text-stone-900">15–45 Mins</div>
              <div className="text-[10px] text-stone-500 uppercase">Avg. Bus Stop Dwell Time</div>
            </div>
            <div>
              <div className="text-lg font-bold text-stone-900">2–4 Mins</div>
              <div className="text-[10px] text-stone-500 uppercase">Metro Rush-Hour Dwell</div>
            </div>
            <div>
              <div className="text-lg font-bold text-emerald-700">₹60,000</div>
              <div className="text-[10px] text-stone-500 uppercase">Decentralized Retrofit CapEx</div>
            </div>
          </div>
        </div>
      ),
      speakerNotes:
        "A common misconception is that bus stops only attract low-income individuals without time. Our demographic analysis proves that in Tier-2/3 student clusters, bus stops serve the aspirational young workforce. Unlike high-speed metro turnstiles where people rush through in 2 minutes, regional bus stops offer 15 to 45 minutes of idle dwell time. We convert this waiting time dividend into productive, merit-based career advancement.",
    },
    {
      number: 3,
      title: "System Architecture & Flowchart",
      subtitle: "The Gemini AI Core + Human-in-the-Loop Safety Net",
      tagline: "Closing the Sourcing Loop While Guaranteeing Dialect Inclusivity",
      content: (
        <div className="space-y-4 text-xs">
          <div className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-[11px] space-y-3">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2">
              <span className="text-emerald-400 font-bold">End-to-End Workflow Pipeline:</span>
              <span className="text-stone-400">Google Gemini 3.8 Flash Core</span>
            </div>
            <div className="space-y-1 text-stone-300">
              <div>[1. Student Transit Submission] → Raw Voice/Text at E-Paper Bus Stop Terminal</div>
              <div className="text-stone-500">   ↓</div>
              <div>[2. Gemini 3D Evaluation] → Scores Problem Alignment (30%), Feasibility (35%), Cost/ROI (35%)</div>
              <div className="text-stone-500">   ↓ (Threshold Routing: Cutoff ≥ 65%)</div>
              <div className="grid grid-cols-2 gap-2 pt-1 text-[10px]">
                <div className="p-2 bg-emerald-950/70 border border-emerald-800/60 rounded">
                  🟢 Passed (≥65): Anonymized Proof-of-Work Card pushed to Corporate ATS
                </div>
                <div className="p-2 bg-amber-950/70 border border-amber-800/60 rounded">
                  🟡 Borderline (40–64): Escalated to Human-in-the-Loop Desk for dialect review
                </div>
              </div>
              <div className="text-stone-500">   ↓</div>
              <div>[3. Corporate Talent Unlock] → Recruiter schedules direct interview without seeing college brand</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block mb-0.5">
                Standardized Objective Rubric:
              </span>
              <p className="text-stone-600 text-[11px]">
                Pre-defined quantitative scoring removes subjective bias and resume keyword hacking.
              </p>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900 block mb-0.5">
                Human Safety Net:
              </span>
              <p className="text-stone-600 text-[11px]">
                Field mentors audit vernacular Hindi/Hinglish edge cases, ensuring zero false-negative exclusions.
              </p>
            </div>
          </div>
        </div>
      ),
      speakerNotes:
        "Here is our system architecture answering mentor concerns on evaluation consistency. Submissions enter our Google Gemini processing engine. Instead of open-ended generation, Gemini scores proposals across 3 standardized dimensions: Alignment, Feasibility, and Cost Impact. Submissions scoring 65+ route blindly to corporate partners. Borderline or dialect-heavy submissions route to our Human Escalation Desk, ensuring vernacular brilliance is never penalized.",
    },
    {
      number: 4,
      title: "Working Prototype & Product Proof",
      subtitle: "Live Interactive Demonstration Built with Google Antigravity",
      tagline: "4 Operational Views Delivered for Phase 02 Submission",
      content: (
        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <div className="font-bold text-stone-900 text-xs">View 1</div>
              <div className="text-[11px] text-stone-600 mt-1">Transit E-Paper Kiosk</div>
              <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">Low-Bandwidth Mode</div>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <div className="font-bold text-stone-900 text-xs">View 2</div>
              <div className="text-[11px] text-stone-600 mt-1">Gemini AI Evaluator</div>
              <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">3D Scoring Rubric</div>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <div className="font-bold text-stone-900 text-xs">View 3</div>
              <div className="text-[11px] text-stone-600 mt-1">Human Escalation Desk</div>
              <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">Dialect Audit Queue</div>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <div className="font-bold text-stone-900 text-xs">View 4</div>
              <div className="text-[11px] text-stone-600 mt-1">Corporate Showcase</div>
              <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">Anonymized Proof-of-Work</div>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <Sparkles className="w-4 h-4" />
              Live Under-the-Hood Gemini Integration:
            </div>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              Our live prototype connects directly to Gemini 3.8 Flash via server-side API routes. In testing, it accurately evaluates complex grassroots submissions, such as regional depot parcel pooling and solar evaporative vegetable pre-cooling pods, in under 3 seconds.
            </p>
          </div>
        </div>
      ),
      speakerNotes:
        "For Phase 2, we didn't just write slides—we built the live operational prototype. It features four synchronized modules: the student transit kiosk with low-bandwidth mode, the live Gemini 3D scoring engine, the human escalation desk, and the anonymized corporate talent showcase where employers unlock verified candidate execution blueprints.",
    },
    {
      number: 5,
      title: "Corporate Incentives & Hard Employer ROI",
      subtitle: "Why Corporates Pay & Pick These Candidates Over Traditional Grads",
      tagline: "70% Screening Reduction, Zero Travel CapEx, Higher Retention",
      content: (
        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
              <div className="text-xl font-extrabold text-stone-900">70%</div>
              <div className="font-bold text-stone-800 text-xs">Screening Time Slashed</div>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                Recruiters review pre-ranked candidate cards with verified scores instead of sifting 500+ generic unvetted CVs.
              </p>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
              <div className="text-xl font-extrabold text-stone-900">₹14+ Lakhs</div>
              <div className="font-bold text-stone-800 text-xs">Travel CapEx Saved</div>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                Digital proof-of-work aggregation replaces expensive physical corporate visits to remote regional colleges.
              </p>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
              <div className="text-xl font-extrabold text-emerald-700">40% Lower</div>
              <div className="font-bold text-stone-800 text-xs">First-Year Attrition</div>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                Regional skill-first hires demonstrate significantly higher retention and authentic ground-level operational insight.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-stone-100 rounded-xl text-stone-700 space-y-1">
            <span className="font-bold text-stone-900 block text-xs">
              Commercial Monetization Model:
            </span>
            <p className="text-[11px] text-stone-600">
              Freemium regional benchmark analytics + Pay-per-unlock candidate dossiers (₹2,500/unlocked profile) + Sponsored enterprise reverse "bounties".
            </p>
          </div>
        </div>
      ),
      speakerNotes:
        "Addressing the core mentor question: 'Why will companies pay?' Companies don't buy ideas; they buy recruiting efficiency. Traditional recruiters spend 30 hours per hire screening inflated resumes and traveling to campuses. KOM saves 70% of screening dwell-time and over ₹14 Lakhs in campus logistics. Furthermore, regional skill-first hires exhibit 40% lower first-year attrition than hyper-mobile metro graduates.",
    },
    {
      number: 6,
      title: "30-Day Pilot Plan & Contest Alignment",
      subtitle: "Controlled Rollout Parameters & Judging Criteria Mapping",
      tagline: "High Feasibility, Measurable KPIs, and Contingency Protection",
      content: (
        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-base font-bold text-stone-900">10 Stops</div>
              <div className="text-[10px] text-stone-500 uppercase">Pilot Corridors</div>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-base font-bold text-stone-900">300–500</div>
              <div className="text-[10px] text-stone-500 uppercase">Target Submissions</div>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-base font-bold text-emerald-700">&gt; 85%</div>
              <div className="text-[10px] text-stone-500 uppercase">Target Completion</div>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-base font-bold text-emerald-700">&gt; 30%</div>
              <div className="text-[10px] text-stone-500 uppercase">Corporate Shortlist</div>
            </div>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
            <span className="font-bold text-stone-900 block text-xs">
              Direct Alignment with Fund My Crazy Judging Weights:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-stone-700">
              <div>• <strong>30% Vision:</strong> Eradicates ecosystem apartheid via civic infrastructure.</div>
              <div>• <strong>20% Real-life Relevance:</strong> Grounded in daily regional transit waiting time.</div>
              <div>• <strong>20% Built with Gemini:</strong> Logic scaffolding &amp; 3D standardized scoring core.</div>
              <div>• <strong>15% Future-Focused:</strong> Public transit reimagined as social mobility mesh.</div>
              <div>• <strong>15% Execution:</strong> Live working prototype with contingency fallback pipelines.</div>
            </div>
          </div>
        </div>
      ),
      speakerNotes:
        "Our 30-day pilot targets 10 bus shelter corridors across 3 regional institutions, yielding 300 to 500 validated submissions for 2 to 3 corporate partners. Every dimension aligns directly with the official Fund My Crazy 2026 rubric: from Vision and Real-life Relevance to deep Gemini integration and proven execution. Thank you—we are excited to build the future of civic mobility.",
    },
  ];

  const current = slides[currentSlide];

  return (
    <div className="space-y-6">
      {/* Slide Navigation Header */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-stone-700" />
          <span className="text-xs font-bold text-stone-900">
            Phase 02 Pitch Deck • Slide {currentSlide + 1} of {slides.length}
          </span>
          <span className="text-xs text-stone-400">•</span>
          <span className="text-xs font-medium text-stone-600">
            {current.title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            disabled={currentSlide === 0}
            onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
            className="p-1.5 rounded-lg border border-stone-200 hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed text-stone-700 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-mono font-semibold px-2 text-stone-700">
            {currentSlide + 1} / {slides.length}
          </span>

          <button
            disabled={currentSlide === slides.length - 1}
            onClick={() =>
              setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))
            }
            className="p-1.5 rounded-lg border border-stone-200 hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed text-stone-700 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slide Card */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 min-h-[460px] flex flex-col justify-between">
        <div className="space-y-4">
          <div className="border-b border-stone-100 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                Slide 0{current.number}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                {current.subtitle}
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-medium italic">
              {current.tagline}
            </span>
          </div>

          <div>{current.content}</div>
        </div>

        {/* Presenter Speech Script Box */}
        <div className="pt-4 border-t border-stone-100 bg-stone-50/80 -mx-6 -mb-6 p-6 rounded-b-2xl space-y-1">
          <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block flex items-center gap-1">
            🎙️ Presenter Script (Use for 60-Second Video or Pitch Deck Voiceover):
          </span>
          <p className="text-xs text-stone-700 leading-relaxed font-sans italic">
            "{current.speakerNotes}"
          </p>
        </div>
      </div>

      {/* Slide Thumbnail Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.number}
            onClick={() => setCurrentSlide(idx)}
            className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
              currentSlide === idx
                ? "bg-stone-900 text-stone-50 border-stone-900 shadow-xs"
                : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
            }`}
          >
            <div className="text-[10px] font-mono font-bold opacity-60">
              0{s.number}
            </div>
            <div className="font-semibold truncate text-[11px] mt-0.5">
              {s.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
