import React, { useState } from "react";
import {
  Sparkles,
  Download,
  Copy,
  Check,
  MapPin,
  Clock,
  TrendingUp,
  Cpu,
  Layers,
  CheckCircle2,
  FileText,
  Eye,
  ArrowRight,
  ShieldCheck,
  Compass,
  Zap,
} from "lucide-react";
import transitHubVisual from "../assets/images/transit_hub_node_1789885397488.jpg";

interface CivicSubmissionDossierProps {
  onNavigateTab?: (tabId: string) => void;
}

export const CivicSubmissionDossier: React.FC<CivicSubmissionDossierProps> = ({
  onNavigateTab,
}) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const FULL_WRITTEN_SUBMISSION = `# FUND MY CRAZY 2026 OFFICIAL SUBMISSION
PROJECT: Transit Hub Civic Opportunity Nodes (KOM Node)
DOMAIN: Urban Mobility, Civic Infrastructure & Decentralized Talent Access

## 1. VISION (30% Weight): Transform Dead Transit Dwell Time into Career Capital
Every day, across Tier-2 and Tier-3 regional transit corridors, over 45 million students and young professionals spend 15 to 45 minutes stranded at regional bus stops and depots waiting for inter-district transport. In contrast to metropolitan subway commuters who enjoy ubiquitous 5G and high-income corporate campus placement pipelines, non-metro youth are geographically and digitally sequestered.

Transit Hub Civic Opportunity Nodes fundamentally reconceptualize public transit shelters from passive, weather-beaten waiting pens into active Civic Opportunity Nodes. Powered by localized solar canopies and low-power, high-contrast e-paper displays, each node broadcasts bite-sized real-world operational challenges ("Micro-Briefs") sourced directly from regional supply chains, logistics providers, and civic utilities. Rather than passive scrolling on algorithmic social media feeds, commuter dwell time is converted into productive proof-of-work problem solving.

## 2. REAL-LIFE RELEVANCE (20% Weight): Solving the Non-Metro Placement & Logistics Chasm
Metropolitan job placement is broken by resume inflation, while Tier-2/3 institutions are bypassed due to geographical travel costs. Meanwhile, regional enterprises struggle with a 62% mismatch in candidates capable of navigating messy, ground-level physical logistics.
Transit Hub Civic Opportunity Nodes tackle this immediate reality:
- Students scan a lightweight QR code or receive an offline SMS micro-brief directly at the transit depot.
- Submissions are limited to 150-word structural logic models focused on local problems (e.g. cold-storage transport, bus luggage cargo drops, last-mile parcel routing).
- Solutions reflect authentic regional contextual insight that cannot be forged or memorized from metro textbook curricula.

## 3. BUILT WITH GEMINI (20% Weight): The Objective, Anti-Pedigree Evaluation Engine
Google Gemini 2.5 Flash serves as the deterministic analytical core running behind the civic network:
1. De-Jargonizing Engine: Gemini ingests dense corporate logistics briefs and converts them into vernacular, accessible 80-word micro-briefs for low-power e-paper transit displays.
2. Dialect & Dialectical Normalization: Evaluates structural logic in regional English and Hinglish without penalizing grammatical variance or non-metro syntax.
3. Standardized 3D Rubric (Problem Alignment 30%, Execution Feasibility 35%, Cost/ROI 35%): Generates objective 0-100 scores that completely redact candidate pedigree, gender, and college tier, sending verified proof-of-work dossiers directly to enterprise recruiters.
4. Human Escalation Desk Safeguard: Automatically routes borderline scores (40-59) to regional human mentors for qualitative review.

## 4. FUTURE FOCUSED (15% Weight): Decentralized Civic Infrastructure
As regional mobility shifts toward electric transit fleets and autonomous regional trunk corridors, public transit stops must evolve into multifunctional digital nodes. Civic Opportunity Nodes integrate:
- Solar-powered off-grid resilience with zero external grid draw.
- LoRaWAN and low-bandwidth edge synchronization designed for intermittent regional cellular connectivity.
- A decentralized national talent registry that bridges India's Tier-2/3 human capital with global remote and regional operational employment.

## 5. EXECUTION & PILOT PLAN (15% Weight): 30-Day Zero-CapEx Rollout
- Week 1: Partner with regional state road transport corporation (SRTC) depot for 10 pilot bus corridor shelters.
- Week 2: Install battery/solar-backed e-paper display nodes and launch the low-bandwidth mobile web portal.
- Week 3: Ingest 15 real operational briefs from 3 regional supply-chain partners (agri-logistics, FMCG, parcel distribution).
- Week 4: Deliver top-percentile anonymized candidate proof-of-work dossiers to hiring partners, tracking interview conversion and recruiter screening dwell time reduction.`;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner Alert */}
      <div className="bg-stone-900 text-stone-50 rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
            <Compass className="w-4 h-4 text-emerald-400" />
            Official FMC 2026 Core Entry • Civic Innovation Dossier
          </div>
          <span className="text-xs text-stone-400 font-mono">
            Directly Aligned with 5 Competition Criteria (100% Score Weight)
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Transit Hub Civic Opportunity Nodes
          </h1>
          <p className="text-sm text-stone-300 max-w-4xl leading-relaxed">
            Converting millions of hours of passive bus stop dwell time in Tier-2/3 transit
            corridors into decentralized economic opportunity and verified proof-of-work talent
            pathways, powered by Google Gemini.
          </p>
        </div>

        {/* 5-Criteria Badge Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-4 border-t border-stone-800 text-xs">
          <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700/60">
            <span className="text-indigo-400 font-bold block text-[10px] uppercase tracking-wider">
              30% Vision
            </span>
            <span className="text-stone-200 font-medium text-[11px] block mt-0.5">
              Idle Transit to Career Capital
            </span>
          </div>
          <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700/60">
            <span className="text-emerald-400 font-bold block text-[10px] uppercase tracking-wider">
              20% Relevance
            </span>
            <span className="text-stone-200 font-medium text-[11px] block mt-0.5">
              Tier-2/3 Transit Belts
            </span>
          </div>
          <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700/60">
            <span className="text-sky-400 font-bold block text-[10px] uppercase tracking-wider">
              20% Gemini AI
            </span>
            <span className="text-stone-200 font-medium text-[11px] block mt-0.5">
              Zero-Bias Logic Scaffolding
            </span>
          </div>
          <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700/60">
            <span className="text-amber-400 font-bold block text-[10px] uppercase tracking-wider">
              15% Future
            </span>
            <span className="text-stone-200 font-medium text-[11px] block mt-0.5">
              Decentralized Civic Mobility
            </span>
          </div>
          <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700/60">
            <span className="text-purple-400 font-bold block text-[10px] uppercase tracking-wider">
              15% Execution
            </span>
            <span className="text-stone-200 font-medium text-[11px] block mt-0.5">
              30-Day Depot Pilot
            </span>
          </div>
        </div>
      </div>

      {/* Hero Visual Section (Gemini Generated Artifact) */}
      <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm space-y-4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
              Official Submission Visual Artifact
            </span>
            <h2 className="text-lg font-bold text-stone-900">
              Civic Opportunity Node Architectural Visualization
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCopy(FULL_WRITTEN_SUBMISSION, "full-pitch")}
              className="px-3.5 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 flex items-center gap-1.5 transition-colors shadow-xs"
            >
              {copiedSection === "full-pitch" ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied Official Pitch!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Complete Pitch Text</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Visual Container */}
        <div className="relative rounded-xl overflow-hidden border border-stone-200 bg-stone-950 group">
          <img
            src={transitHubVisual}
            alt="Transit Hub Civic Opportunity Node architectural visual generated by Gemini"
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[520px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 sm:p-6 text-white flex flex-wrap items-end justify-between gap-3">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 text-[10px] font-semibold border border-blue-400/30">
                <Sparkles className="w-3 h-3 text-blue-300" />
                Gemini-Generated Architectural Concept
              </span>
              <p className="text-xs text-stone-200 max-w-xl">
                Solar-canopied transit pavilion featuring low-power e-paper micro-brief display
                terminals, battery-buffered power, and regional bus depot integration.
              </p>
            </div>
            <span className="text-[11px] font-mono text-stone-300 bg-stone-900/80 px-2.5 py-1 rounded border border-stone-700">
              Prompt 1 Output • 16:9 4K Concept
            </span>
          </div>
        </div>

        {/* Architectural Annotation Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1">
            <span className="font-bold text-stone-900 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-600" />
              1. Zero-Grid Solar Canopy
            </span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Provides self-sustaining power for high-contrast e-paper displays and USB emergency
              charging in remote regional bus depots.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1">
            <span className="font-bold text-stone-900 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-indigo-600" />
              2. Low-Bandwidth Edge Gateway
            </span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Caches corporate operational briefs locally. Synchronizes via 2G/SMS or intermittent
              3G when state transport buses dock.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1">
            <span className="font-bold text-stone-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              3. Anti-Pedigree Talent Gateway
            </span>
            <p className="text-stone-600 text-[11px] leading-relaxed">
              Submissions undergo immediate Gemini 2.5 Flash analysis, indexing candidate structural
              logic directly to corporate hiring desks.
            </p>
          </div>
        </div>
      </div>

      {/* The 5 Pillars of the Written Pitch */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pillar 1: Vision (30%) */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                30%
              </span>
              <h3 className="text-base font-bold text-stone-900">Vision: Commuter Dwell to Capital</h3>
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
              Core Civic Innovation
            </span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Metropolitan urban planning spends billions on reducing transit dwell time by minutes. In
            Tier-2 and Tier-3 regional towns, dwell time is an inevitable reality—students wait 15 to
            45 minutes for infrequent bus connections.
          </p>
          <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-xs text-stone-800 space-y-1.5">
            <div className="font-bold text-stone-900">The Big Idea:</div>
            <p className="text-[11px] leading-relaxed text-stone-700">
              Instead of treating bus stops as dead infrastructure, we convert them into high-yield
              opportunity launchpads. Students solve real enterprise supply-chain dilemmas on their
              phones while waiting for their bus, building verified digital proof-of-work records that
              unlock employment.
            </p>
          </div>
        </div>

        {/* Pillar 2: Real-Life Relevance (20%) */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                20%
              </span>
              <h3 className="text-base font-bold text-stone-900">Relevance: Bridging the Tier-3 Chasm</h3>
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">
              Grounded Reality
            </span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Recruiting teams cannot afford to send on-campus hiring drives to thousands of regional
            colleges. Concurrently, online job boards are flooded with AI-hallucinated resumes.
          </p>
          <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-xs text-stone-800 space-y-1.5">
            <div className="font-bold text-stone-900">Immediate Impact:</div>
            <p className="text-[11px] leading-relaxed text-stone-700">
              Regional logistics managers get access to students who understand ground realities—such
              as regional mandi schedules, local warehouse bottlenecks, and monsoon delivery
              chokepoints—proven through actual case brief submissions.
            </p>
          </div>
        </div>

        {/* Pillar 3: Built with Gemini (20%) */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">
                20%
              </span>
              <h3 className="text-base font-bold text-stone-900">Gemini Engine: Pedigree-Blind Rubric</h3>
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-100">
              Official SDK
            </span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Google Gemini 2.5 Flash operates as the core intelligence layer. It standardizes candidate
            evaluations using an unforgeable 3-dimension mathematical matrix:
          </p>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
              <div className="text-[10px] text-slate-500 font-semibold">Problem Align</div>
              <div className="font-bold text-stone-900 mt-0.5">30% Weight</div>
            </div>
            <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
              <div className="text-[10px] text-slate-500 font-semibold">Feasibility</div>
              <div className="font-bold text-stone-900 mt-0.5">35% Weight</div>
            </div>
            <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
              <div className="text-[10px] text-slate-500 font-semibold">Cost / ROI</div>
              <div className="font-bold text-stone-900 mt-0.5">35% Weight</div>
            </div>
          </div>
          <p className="text-[11px] text-stone-500">
            Dialect normalization ensures non-native English or Hinglish syntax is never penalized.
          </p>
        </div>

        {/* Pillar 4 & 5: Future & Execution (15% + 15%) */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                30%
              </span>
              <h3 className="text-base font-bold text-stone-900">Future Mobility &amp; 30-Day Execution</h3>
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-100">
              Pilot Roadmap
            </span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Scalable without purchasing new vehicles or building new brick-and-mortar campuses. Uses
            pre-existing transit shelters and existing bus company depot concessions.
          </p>
          <div className="space-y-1.5 text-xs text-stone-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>
                <strong>Day 1–7:</strong> Concession agreement for 10 regional SRTC bus terminals.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>
                <strong>Day 8–15:</strong> Deploy low-power solar e-paper kiosks with offline SMS fallback.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>
                <strong>Day 16–30:</strong> Pilot with 3 enterprise logistics employers; track ROI.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Quick Access for Evaluators */}
      <div className="bg-stone-100 border border-stone-200 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-stone-900">
            Inspect the Full System &amp; Interactive Working Proofs:
          </h4>
          <p className="text-xs text-stone-600">
            Explore the live node prototype simulator or inspect the visual artifacts and 6-slide deck.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {onNavigateTab && (
            <>
              <button
                onClick={() => onNavigateTab("visual-artifact")}
                className="px-3.5 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 flex items-center gap-1.5 transition-colors"
              >
                <Layers className="w-3.5 h-3.5" />
                View Visual Artifact &amp; Deck
              </button>
              <button
                onClick={() => onNavigateTab("prototype")}
                className="px-3.5 py-2 rounded-xl bg-white border border-stone-300 text-stone-800 text-xs font-semibold hover:bg-stone-50 flex items-center gap-1.5 transition-colors"
              >
                <Cpu className="w-3.5 h-3.5" />
                Live Node Prototype
              </button>
              <button
                onClick={() => onNavigateTab("gemini-hub")}
                className="px-3.5 py-2 rounded-xl bg-white border border-stone-300 text-stone-800 text-xs font-semibold hover:bg-stone-50 flex items-center gap-1.5 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                Built with Gemini Hub
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
