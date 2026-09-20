import React, { useState } from "react";
import {
  MicroBrief,
  CandidateSubmission,
  EscalationTicket,
  GeminiEvaluation,
} from "../types";
import {
  SAMPLE_MICRO_BRIEFS,
  INITIAL_CANDIDATE_SUBMISSIONS,
  INITIAL_ESCALATION_TICKETS,
} from "../data/mockData";
import {
  Sparkles,
  Send,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  Briefcase,
  UserCheck,
  Languages,
  Shield,
  Clock,
  ArrowRight,
  TrendingDown,
  Lock,
  Eye,
  Sliders,
  Award,
  RefreshCw,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Layers,
  ChevronRight,
  Mic,
} from "lucide-react";
import confetti from "canvas-confetti";
import { VoiceLiveFeedbackAgent } from "./VoiceLiveFeedbackAgent";

interface LiveNodePrototypeProps {
  isLowBandwidth: boolean;
}

export const LiveNodePrototype: React.FC<LiveNodePrototypeProps> = ({
  isLowBandwidth,
}) => {
  const [subTab, setSubTab] = useState<
    "student" | "voice-mentor" | "evaluation" | "escalation" | "corporate"
  >("student");
  const [showVoiceMentor, setShowVoiceMentor] = useState(false);

  const handleApplyTip = (tip: string) => {
    setSolutionText((prev) => (prev ? `${prev}\n\n- ${tip}` : tip));
  };

  // Student portal state
  const [selectedBriefId, setSelectedBriefId] = useState<string>(
    SAMPLE_MICRO_BRIEFS[0].id
  );
  const [language, setLanguage] = useState<"en" | "hi" | "hinglish">("en");
  const [studentRegion, setStudentRegion] = useState("Tier-3 Mirzapur Corridor, UP");
  const [solutionText, setSolutionText] = useState("");
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showScaffolding, setShowScaffolding] = useState(true);

  // Evaluations and submissions list
  const [submissions, setSubmissions] = useState<CandidateSubmission[]>(
    INITIAL_CANDIDATE_SUBMISSIONS
  );
  const [currentEvaluation, setCurrentEvaluation] =
    useState<GeminiEvaluation | null>(INITIAL_CANDIDATE_SUBMISSIONS[0].evaluation);
  const [activeSubmission, setActiveSubmission] =
    useState<CandidateSubmission | null>(INITIAL_CANDIDATE_SUBMISSIONS[0]);

  // Escalation Tickets state
  const [escalations, setEscalations] = useState<EscalationTicket[]>(
    INITIAL_ESCALATION_TICKETS
  );

  // Corporate Portal Filters
  const [filterDomain, setFilterDomain] = useState<string>("All");
  const [minScore, setMinScore] = useState<number>(65);
  const [selectedCandidateDossier, setSelectedCandidateDossier] =
    useState<CandidateSubmission | null>(null);
  const [unlockedCandidates, setUnlockedCandidates] = useState<string[]>([
    "sub-101",
  ]);

  // Mobile accordion state for Student Kiosk
  const [mobileAccordion, setMobileAccordion] = useState<{
    briefs: boolean;
    scaffolding: boolean;
    submission: boolean;
  }>({
    briefs: false,
    scaffolding: false,
    submission: true,
  });

  const toggleAccordion = (
    section: "briefs" | "scaffolding" | "submission"
  ) => {
    setMobileAccordion((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const activeBrief =
    SAMPLE_MICRO_BRIEFS.find((b) => b.id === selectedBriefId) ||
    SAMPLE_MICRO_BRIEFS[0];

  // Helper renderers for clean responsive sharing between mobile accordion & desktop grid
  const renderBriefList = (isMobile = false) => (
    <div className="space-y-3">
      {!isMobile && (
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
            Select Corporate Micro-Brief
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded-md bg-stone-200 text-stone-700">
            {SAMPLE_MICRO_BRIEFS.length} Live Briefs
          </span>
        </div>
      )}

      <div className="space-y-2">
        {SAMPLE_MICRO_BRIEFS.map((b) => {
          const isSelected = selectedBriefId === b.id;
          return (
            <button
              key={b.id}
              onClick={() => {
                setSelectedBriefId(b.id);
                setSolutionText("");
              }}
              className={`w-full text-left p-3 rounded-lg border text-xs transition-all ${
                isSelected
                  ? "bg-white border-stone-900 shadow-sm ring-1 ring-stone-900"
                  : "bg-white/60 border-stone-200 hover:bg-white hover:border-stone-300"
              }`}
            >
              <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                <span className="font-semibold text-stone-700">{b.domain}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {b.estimatedTimeMins} mins
                </span>
              </div>
              <div className="font-semibold text-stone-900 text-sm mb-1 flex items-center justify-between">
                <span>{b.title}</span>
                {isSelected && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-900 text-white font-medium">
                    Selected
                  </span>
                )}
              </div>
              <div className="text-stone-500 line-clamp-2 text-[11px]">
                {b.jargonFreeGoal}
              </div>
            </button>
          );
        })}
      </div>

      {isMobile && (
        <div className="pt-2 flex items-center justify-between gap-2 border-t border-stone-100">
          <span className="text-[11px] text-stone-500">
            Tap brief to select &amp; update live prompt
          </span>
          <button
            onClick={() =>
              setMobileAccordion({ briefs: false, scaffolding: false, submission: true })
            }
            className="px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors flex items-center gap-1"
          >
            Go to Solution
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );

  const renderScaffoldingContent = (isMobile = false) => (
    <div
      className={
        isMobile
          ? "space-y-3"
          : "bg-gradient-to-br from-indigo-50/80 to-blue-50/50 border border-indigo-100 rounded-xl p-4 space-y-3"
      }
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-900">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          Gemini Logic Scaffolding Engine
        </div>
        {!isMobile && (
          <button
            onClick={() => setShowScaffolding(!showScaffolding)}
            className="text-[11px] text-indigo-600 hover:text-indigo-800 underline"
          >
            {showScaffolding ? "Hide Guidance" : "Show Guidance"}
          </button>
        )}
      </div>

      <p className="text-xs text-indigo-950/80 leading-relaxed">
        Gemini translates complex, elitist corporate case briefs into accessible ground-level micro-questions for regional candidates:
      </p>

      {(showScaffolding || isMobile) && (
        <div className="space-y-2.5 pt-1 text-xs">
          <div className="bg-white/90 p-2.5 rounded-lg border border-indigo-100/80 shadow-xs">
            <span className="font-semibold text-indigo-900 block mb-1">
              🎯 Plain-English Operational Goal:
            </span>
            <p className="text-stone-700 text-xs">{activeBrief.jargonFreeGoal}</p>
          </div>

          <div className="bg-white/90 p-2.5 rounded-lg border border-indigo-100/80 shadow-xs">
            <span className="font-semibold text-indigo-900 block mb-1">
              💡 3 Guiding Questions (Answer these in your proposal):
            </span>
            <ul className="list-disc list-inside space-y-1 text-stone-700 text-[11px]">
              {activeBrief.guidingQuestions.map((q, idx) => (
                <li key={idx}>{q}</li>
              ))}
            </ul>
          </div>

          <div className="bg-indigo-100/60 p-2 rounded-md text-[11px] text-indigo-900 font-medium">
            ⚡ Framework Suggestion: {activeBrief.frameworkHint}
          </div>

          {isMobile && (
            <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-indigo-100/60">
              <button
                onClick={() => {
                  const questionsOutline = `1. Target Location Setup: (e.g. State bus depot counter / local quadrangle)\n2. Operational Workflow: (e.g. Empty return transit coordination)\n3. Cost & Safety Controls: (e.g. Unit savings and SMS dual-verification)`;
                  setSolutionText(questionsOutline);
                  setMobileAccordion({ briefs: false, scaffolding: false, submission: true });
                }}
                className="text-[11px] font-semibold text-indigo-700 hover:text-indigo-900 underline"
              >
                + Insert Question Outline to Draft
              </button>

              <button
                onClick={() =>
                  setMobileAccordion({ briefs: false, scaffolding: false, submission: true })
                }
                className="px-3 py-1.5 rounded-lg bg-indigo-900 text-white text-xs font-semibold hover:bg-indigo-800 transition-colors flex items-center gap-1"
              >
                Proceed to Terminal
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );

  const renderSubmissionForm = (isMobile = false) => (
    <div className="space-y-4">
      <div className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-3">
          <div>
            <h2 className="text-base font-bold text-stone-900">
              KOM Transit E-Paper Interface
            </h2>
            <p className="text-xs text-stone-500">
              Physical Bus Stop &amp; Public Quadrangle Submission Terminal
            </p>
          </div>

          {/* Language & Region Toggles */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-md text-xs">
              <Languages className="w-3.5 h-3.5 text-stone-500 ml-1" />
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  language === "en"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("hinglish")}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  language === "hinglish"
                    ? "bg-white text-stone-900 shadow-xs"
                    : "text-stone-600"
                }`}
              >
                Hinglish / Regional
              </button>
            </div>
          </div>
        </div>

        {/* Fast Presets Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200/60 text-xs">
          <span className="text-stone-500 text-[11px] font-medium shrink-0">
            Quick Testing Presets:
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => handleLoadPreset("high-score")}
              className="px-2 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-[11px] font-medium hover:bg-emerald-100 transition-colors"
            >
              High-Score (95%)
            </button>
            <button
              onClick={() => handleLoadPreset("borderline-vernacular")}
              className="px-2 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded text-[11px] font-medium hover:bg-amber-100 transition-colors"
            >
              Hinglish (~60%)
            </button>
            <button
              onClick={() => handleLoadPreset("incomplete")}
              className="px-2 py-1 bg-stone-100 text-stone-700 border border-stone-200 rounded text-[11px] font-medium hover:bg-stone-200 transition-colors"
            >
              Incomplete (&lt;40%)
            </button>
          </div>
        </div>

        {/* Active Context Header */}
        <div className="p-3 bg-stone-50 rounded-lg text-xs space-y-1">
          <div className="font-semibold text-stone-800">
            Target Brief: {activeBrief.title}
          </div>
          <div className="text-stone-600 text-[11px] flex flex-wrap items-center justify-between gap-1">
            <span>Sponsor: {activeBrief.corporateSponsor}</span>
            <span className="text-stone-500">Domain: {activeBrief.domain}</span>
          </div>
        </div>

        {/* Solution Text Area */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
            <label className="block text-xs font-semibold text-stone-700">
              Candidate Structural Proposal (Voice or Text Input):
            </label>
            <button
              type="button"
              onClick={() => setShowVoiceMentor(!showVoiceMentor)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                showVoiceMentor
                  ? "bg-amber-500 text-stone-950 font-bold shadow-xs"
                  : "bg-stone-900 text-amber-300 hover:bg-stone-800"
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>{showVoiceMentor ? "Hide Voice Mentor" : "🎤 Transit Voice Mentor Loop"}</span>
            </button>
          </div>

          {/* Embedded Voice Mentor Feedback Loop */}
          {showVoiceMentor && (
            <div className="mb-3.5 animate-in fade-in duration-200">
              <VoiceLiveFeedbackAgent
                isCompact={true}
                briefTitle={activeBrief.title}
                briefGoal={activeBrief.jargonFreeGoal || activeBrief.rawBrief}
                currentDraft={solutionText}
                onApplyTacticalTip={handleApplyTip}
              />
            </div>
          )}

          <textarea
            rows={isMobile ? 7 : 9}
            value={solutionText}
            onChange={(e) => setSolutionText(e.target.value)}
            placeholder={`Write your step-by-step operational solution here...
Example:
1. Ground Location: Where in the transit node will you set up?
2. Execution: How does it work with local transport and low-bandwidth phones?
3. Cost Impact: What are the exact savings per unit or per day?`}
            className={`w-full p-3 rounded-lg border text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-stone-900 transition-all ${
              isLowBandwidth
                ? "bg-amber-50/40 border-stone-400 font-mono text-stone-900"
                : "bg-white border-stone-300 text-stone-900"
            }`}
          />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-stone-500 mt-1">
            <span>
              Word count: {solutionText.trim() ? solutionText.trim().split(/\s+/).length : 0} words
            </span>
            <span>
              Pedigree/College names are automatically stripped before review.
            </span>
          </div>
        </div>

        {/* Submission Button */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-[11px] text-stone-500 flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Blind Merit Routing: No Resume/College Filter</span>
          </div>

          <button
            disabled={isEvaluating || !solutionText.trim()}
            onClick={handleEvaluate}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white transition-all shadow-sm ${
              isEvaluating || !solutionText.trim()
                ? "bg-stone-400 cursor-not-allowed"
                : "bg-stone-900 hover:bg-stone-800 active:scale-98"
            }`}
          >
            {isEvaluating ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                Evaluating via Gemini Core...
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                Submit to KOM Processing Core
              </>
            )}
          </button>
        </div>
      </div>

      {/* Accessibility & Low Bandwidth Info Card */}
      <div className="p-3 bg-stone-100 rounded-lg text-[11px] text-stone-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>
          💡 <strong>Civic Inclusion Safeguard:</strong> Submissions in regional Hindi/Hinglish dialects are parsed by Gemini for structural logic without penalizing spelling or grammar.
        </span>
        <span className="font-semibold text-stone-800 shrink-0">
          100% Free Public Utility
        </span>
      </div>
    </div>
  );

  // Presets for quick evaluation testing
  const handleLoadPreset = (
    type: "high-score" | "borderline-vernacular" | "incomplete"
  ) => {
    if (type === "high-score") {
      setLanguage("en");
      setSolutionText(`1. Centralized Hub: Negotiate with State Depot to reserve a 60 sq.ft cage beside existing parcel counter at zero incremental CapEx.
2. Route Optimization: Tap 8 morning passenger auto drivers on regular routes between 6:00 AM - 9:00 AM. Each takes 12 parcels during empty return legs.
3. Cost Impact: Eliminates ₹65/parcel third-party courier rate. Driver receives ₹20/drop, depot gets ₹4 handling fee. Net ₹24/parcel (63% cost reduction).
4. Safety: Dual-token SMS code sent to recipient and verified at depot ledger.`);
    } else if (type === "borderline-vernacular") {
      setLanguage("hinglish");
      setSolutionText(`Depot ke counter ke pass soundbox lagayein jisme auto wale daily parcels scan kar sakein. 
Auto wale jab wapas aate hain toh unka empty route hota hai, toh woh kirana dukan pe drop karenge. 
Kirana dukan wale ko har parcel pe ₹3 commission milega aur auto wale ko ₹15. Customer ko doorstep mil jayega. 
Problem ye hai ki agar customer ghar pe na ho toh kirana dukan pe rakhna hoga.`);
    } else {
      setLanguage("en");
      setSolutionText(
        `We should make a mobile app for tracking buses and deliver items through students.`
      );
    }
  };

  // Submit to Gemini API / Server
  const handleEvaluate = async () => {
    if (!solutionText.trim()) return;

    setIsEvaluating(true);
    try {
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: "Regional Candidate",
          location: studentRegion,
          briefTitle: activeBrief.title,
          problemStatement: activeBrief.jargonFreeGoal,
          proposedSolution: solutionText,
          language,
        }),
      });

      const responseData = await res.json();
      const evalResult: GeminiEvaluation = responseData.data;

      const newSubmission: CandidateSubmission = {
        id: `sub-${Date.now()}`,
        briefId: activeBrief.id,
        briefTitle: activeBrief.title,
        studentPseudoId: `CANDIDATE #KOM-${Math.floor(1000 + Math.random() * 9000)}`,
        regionalCluster: studentRegion,
        educationType: "State Polytechnic / Tier-2 Regional Univ",
        language,
        rawInput: solutionText,
        evaluation: evalResult,
        status:
          evalResult.decision === "PASSED_TO_CORPORATE"
            ? "Passed"
            : evalResult.decision === "BORDERLINE_HUMAN_REVIEW"
            ? "Escalated"
            : "Revised",
      };

      setSubmissions((prev) => [newSubmission, ...prev]);
      setCurrentEvaluation(evalResult);
      setActiveSubmission(newSubmission);

      // If borderline, add to escalation queue
      if (evalResult.decision === "BORDERLINE_HUMAN_REVIEW") {
        const newTicket: EscalationTicket = {
          id: `esc-${Date.now()}`,
          submissionId: newSubmission.id,
          candidateCode: newSubmission.studentPseudoId,
          region: newSubmission.regionalCluster,
          language: language === "hinglish" ? "Hinglish / Regional" : "English",
          compositeScore: evalResult.compositeScore,
          flagReason:
            evalResult.compositeScore >= 45 && evalResult.compositeScore <= 64
              ? "Borderline Score (40-64)"
              : "Regional Vernacular Phrasing",
          geminiRationale: evalResult.actionableFeedback,
          rawStudentExcerpt: solutionText.slice(0, 160) + "...",
        };
        setEscalations((prev) => [newTicket, ...prev]);
      } else if (evalResult.decision === "PASSED_TO_CORPORATE") {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 },
        });
      }

      setSubTab("evaluation");
    } catch (err) {
      console.error(err);
    } finally {
      setIsEvaluating(false);
    }
  };

  // Human Auditor resolves escalation ticket
  const handleAuditorResolve = (
    ticketId: string,
    action: "approve" | "clarify" | "feedback",
    notes: string
  ) => {
    setEscalations((prev) =>
      prev.map((t) => {
        if (t.id === ticketId) {
          return {
            ...t,
            humanResolution:
              action === "approve"
                ? "Approved for Corporate Showcase"
                : action === "clarify"
                ? "Clarification Requested"
                : "Constructive Feedback Sent",
            humanAuditorNotes: notes,
            resolvedAt: new Date().toISOString(),
          };
        }
        return t;
      })
    );

    if (action === "approve") {
      const ticket = escalations.find((t) => t.id === ticketId);
      if (ticket) {
        setSubmissions((prev) =>
          prev.map((s) => {
            if (s.id === ticket.submissionId) {
              return {
                ...s,
                status: "Passed",
                evaluation: {
                  ...s.evaluation,
                  compositeScore: Math.max(68, s.evaluation.compositeScore + 10),
                  decision: "PASSED_TO_CORPORATE",
                },
                humanReviewNotes: notes,
              };
            }
            return s;
          })
        );
      }
    }
  };

  // Unlock candidate profile
  const handleUnlockCandidate = (subId: string) => {
    if (!unlockedCandidates.includes(subId)) {
      setUnlockedCandidates((prev) => [...prev, subId]);
      confetti({
        particleCount: 40,
        spread: 50,
      });
    }
  };

  return (
    <div className={`space-y-6 ${isLowBandwidth ? "font-mono" : ""}`}>
      {/* Sub Tab Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3">
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg text-xs overflow-x-auto max-w-full">
          <button
            onClick={() => setSubTab("student")}
            className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              subTab === "student"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-stone-200 text-stone-800 inline-flex items-center justify-center text-[10px] font-bold">
              1
            </span>
            Student Transit Kiosk
          </button>

          <button
            onClick={() => setSubTab("voice-mentor")}
            className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              subTab === "voice-mentor"
                ? "bg-amber-500 text-stone-950 font-bold shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Mic className="w-3.5 h-3.5 text-amber-500" />
            Live Voice Mentor Loop
            <span className="ml-1 px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 text-[10px] font-semibold">
              Audio
            </span>
          </button>

          <button
            onClick={() => setSubTab("evaluation")}
            className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              subTab === "evaluation"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-stone-200 text-stone-800 inline-flex items-center justify-center text-[10px] font-bold">
              2
            </span>
            Gemini AI Scoring Engine
            {currentEvaluation && (
              <span className="ml-1 px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                {currentEvaluation.compositeScore}/100
              </span>
            )}
          </button>

          <button
            onClick={() => setSubTab("escalation")}
            className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              subTab === "escalation"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-stone-200 text-stone-800 inline-flex items-center justify-center text-[10px] font-bold">
              3
            </span>
            Human-in-the-Loop Desk
            <span className="ml-1 px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[10px] font-semibold">
              {escalations.filter((e) => !e.humanResolution).length} Active
            </span>
          </button>

          <button
            onClick={() => setSubTab("corporate")}
            className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              subTab === "corporate"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-stone-200 text-stone-800 inline-flex items-center justify-center text-[10px] font-bold">
              4
            </span>
            Corporate ATS Showcase
            <span className="ml-1 px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-800 text-[10px] font-semibold">
              {submissions.filter((s) => s.status === "Passed" || s.status === "Hired").length} Vetted
            </span>
          </button>
        </div>

        <div className="text-xs text-stone-500 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Node Status: Live &amp; Connected to Municipal Mesh</span>
        </div>
      </div>

      {/* VIEW 1: STUDENT TRANSIT KIOSK */}
      {subTab === "student" && (
        <div className="space-y-6">
          {/* Mobile Vertical Accordion Structure (Visible on < lg screens) */}
          <div className="lg:hidden space-y-3">
            {/* Quick Accordion Toolbar */}
            <div className="flex items-center justify-between bg-stone-100/90 border border-stone-200/80 px-3.5 py-2.5 rounded-xl text-xs">
              <div className="flex items-center gap-2 min-w-0">
                <Layers className="w-4 h-4 text-stone-600 shrink-0" />
                <div className="min-w-0">
                  <span className="font-bold text-stone-800">Mobile Accordion</span>
                  <span className="text-stone-400 mx-1.5">•</span>
                  <span className="text-stone-600 text-[11px] truncate">
                    {activeBrief.domain}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setMobileAccordion({ briefs: true, scaffolding: true, submission: true })
                  }
                  className="px-2.5 py-1 rounded bg-white text-stone-700 font-medium border border-stone-200 shadow-xs hover:bg-stone-50 transition-colors"
                >
                  Expand All
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setMobileAccordion({ briefs: false, scaffolding: false, submission: true })
                  }
                  className="px-2.5 py-1 rounded bg-stone-900 text-white font-medium shadow-xs hover:bg-stone-800 transition-colors"
                >
                  Focus Terminal
                </button>
              </div>
            </div>

            {/* Accordion Item 1: Brief Selection */}
            <div
              className={`bg-white border rounded-xl overflow-hidden shadow-xs transition-all ${
                mobileAccordion.briefs
                  ? "border-stone-900 ring-1 ring-stone-900/10"
                  : "border-stone-200"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion("briefs")}
                className="w-full p-3.5 sm:p-4 flex items-center justify-between text-left bg-stone-50/90 hover:bg-stone-100 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      mobileAccordion.briefs
                        ? "bg-stone-900 text-white"
                        : "bg-stone-200 text-stone-800"
                    }`}
                  >
                    1
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                        1. Select Corporate Micro-Brief
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-200 text-stone-700 font-medium">
                        {SAMPLE_MICRO_BRIEFS.length} Briefs
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-600 truncate mt-0.5">
                      Active: <strong className="text-stone-900">{activeBrief.title}</strong>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  <span className="text-[11px] font-medium text-stone-500 hidden sm:inline-block">
                    {mobileAccordion.briefs ? "Collapse" : "Change"}
                  </span>
                  {mobileAccordion.briefs ? (
                    <ChevronUp className="w-4 h-4 text-stone-700" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-700" />
                  )}
                </div>
              </button>

              {mobileAccordion.briefs && (
                <div className="p-3.5 sm:p-4 border-t border-stone-200 bg-white">
                  {renderBriefList(true)}
                </div>
              )}
            </div>

            {/* Accordion Item 2: Gemini Operational Scaffolding */}
            <div
              className={`bg-white border rounded-xl overflow-hidden shadow-xs transition-all ${
                mobileAccordion.scaffolding
                  ? "border-indigo-300 ring-1 ring-indigo-500/20"
                  : "border-indigo-100"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion("scaffolding")}
                className="w-full p-3.5 sm:p-4 flex items-center justify-between text-left bg-gradient-to-r from-indigo-50/90 to-blue-50/60 hover:from-indigo-100/70 hover:to-blue-100/50 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white inline-flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-indigo-950 uppercase tracking-wider">
                        2. Gemini Scaffolding &amp; Questions
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 font-semibold">
                        3 Questions
                      </span>
                    </div>
                    <p className="text-[11px] text-indigo-900/80 truncate mt-0.5">
                      {activeBrief.jargonFreeGoal}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  <span className="text-[11px] font-medium text-indigo-700 hidden sm:inline-block">
                    {mobileAccordion.scaffolding ? "Hide" : "Review"}
                  </span>
                  {mobileAccordion.scaffolding ? (
                    <ChevronUp className="w-4 h-4 text-indigo-700" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-indigo-700" />
                  )}
                </div>
              </button>

              {mobileAccordion.scaffolding && (
                <div className="p-3.5 sm:p-4 border-t border-indigo-100 bg-white">
                  {renderScaffoldingContent(true)}
                </div>
              )}
            </div>

            {/* Accordion Item 3: Interactive Submission Terminal */}
            <div
              className={`bg-white border rounded-xl overflow-hidden shadow-xs transition-all ${
                mobileAccordion.submission
                  ? "border-stone-900 ring-1 ring-stone-900/10"
                  : "border-stone-200"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion("submission")}
                className="w-full p-3.5 sm:p-4 flex items-center justify-between text-left bg-stone-50/90 hover:bg-stone-100 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      mobileAccordion.submission
                        ? "bg-stone-900 text-white"
                        : "bg-stone-200 text-stone-800"
                    }`}
                  >
                    3
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                        3. Solution Terminal &amp; Evaluation
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                        {solutionText.trim()
                          ? `${solutionText.trim().split(/\s+/).length} words`
                          : "Ready to Draft"}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-600 truncate mt-0.5">
                      {language === "hinglish" ? "Hinglish / Regional Dialect" : "English Mode"} • Blind Merit Scoring
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  <span className="text-[11px] font-medium text-stone-500 hidden sm:inline-block">
                    {mobileAccordion.submission ? "Collapse" : "Open"}
                  </span>
                  {mobileAccordion.submission ? (
                    <ChevronUp className="w-4 h-4 text-stone-700" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-700" />
                  )}
                </div>
              </button>

              {mobileAccordion.submission && (
                <div className="p-3.5 sm:p-4 border-t border-stone-200 bg-white">
                  {renderSubmissionForm(true)}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Side-by-Side Dashboard Layout (Visible on lg+ screens) */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-6">
            {/* Left Column: Brief Selection & Scaffolding */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-4">
                {renderBriefList(false)}
              </div>
              {renderScaffoldingContent(false)}
            </div>

            {/* Right Column: Interactive Submission Form */}
            <div className="lg:col-span-7 space-y-4">
              {renderSubmissionForm(false)}
            </div>
          </div>
        </div>
      )}

      {/* VIEW: VOICE LIVE FEEDBACK AGENT */}
      {subTab === "voice-mentor" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
            <div className="space-y-0.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Active Context
              </span>
              <h3 className="text-sm font-bold text-stone-900 pt-1">
                Target Challenge: {activeBrief.title}
              </h3>
              <p className="text-xs text-stone-500">
                Corporate Sponsor: {activeBrief.corporateSponsor} • {activeBrief.domain}
              </p>
            </div>

            <button
              onClick={() => setSubTab("student")}
              className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span>Back to Proposal Editor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <VoiceLiveFeedbackAgent
            briefTitle={activeBrief.title}
            briefGoal={activeBrief.jargonFreeGoal || activeBrief.rawBrief}
            currentDraft={solutionText}
            onApplyTacticalTip={(tip) => {
              handleApplyTip(tip);
              setSubTab("student");
            }}
          />
        </div>
      )}

      {/* VIEW 2: GEMINI AI SCORING ENGINE SIMULATOR */}
      {subTab === "evaluation" && currentEvaluation && (
        <div className="space-y-6">
          {/* Top Score Banner */}
          <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-stone-100 pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-stone-100 text-stone-700">
                    Standardized 3D Evaluation Matrix
                  </span>
                  <span className="text-xs text-stone-400">•</span>
                  <span className="text-xs text-stone-500 font-mono">
                    {currentEvaluation.aiModel}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-stone-900">
                  {activeSubmission?.briefTitle || "Regional Operational Solution"}
                </h2>
                <p className="text-xs text-stone-500">
                  Candidate ID:{" "}
                  <strong className="text-stone-800">
                    {activeSubmission?.studentPseudoId}
                  </strong>{" "}
                  • Anonymized Cluster: {activeSubmission?.regionalCluster}
                </p>
              </div>

              {/* Composite Score Circle & Status */}
              <div className="flex items-center gap-5 bg-stone-50 p-4 rounded-xl border border-stone-200/80">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-stone-900 tracking-tight">
                    {currentEvaluation.compositeScore}
                    <span className="text-sm font-normal text-stone-500">/100</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">
                    Composite Score
                  </span>
                </div>

                <div className="h-10 w-px bg-stone-200"></div>

                <div>
                  <div className="text-xs font-medium text-stone-500 mb-1">
                    Decision Status
                  </div>
                  {currentEvaluation.decision === "PASSED_TO_CORPORATE" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      <CheckCircle className="w-3.5 h-3.5" />
                      PASSED TO CORPORATE
                    </span>
                  )}
                  {currentEvaluation.decision === "BORDERLINE_HUMAN_REVIEW" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      HUMAN DESK REVIEW
                    </span>
                  )}
                  {currentEvaluation.decision === "NEEDS_IMPROVEMENT" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">
                      <HelpCircle className="w-3.5 h-3.5" />
                      NEEDS REFINEMENT
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Formula Explanation Note */}
            <div className="mt-4 p-3 bg-stone-50 rounded-lg text-xs text-stone-600 flex flex-wrap items-center justify-between gap-2">
              <span>
                📐 <strong>Standardized Formula:</strong> Composite = ((Problem Alignment × 30%) + (Feasibility × 35%) + (Cost/ROI Impact × 35%)) / 5 × 100.
              </span>
              <span className="text-[11px] text-stone-500">
                Cutoff for Corporate ATS routing: ≥ 65%
              </span>
            </div>
          </div>

          {/* 3 Standardized Dimensions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Dimension 1: Problem Alignment */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Dimension 1 (30%)
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-800">
                  {currentEvaluation.problemAlignment.score} / 5
                </span>
              </div>
              <h3 className="text-sm font-bold text-stone-900">
                Problem Alignment
              </h3>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-stone-900 h-full rounded-full transition-all"
                  style={{
                    width: `${(currentEvaluation.problemAlignment.score / 5) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentEvaluation.problemAlignment.explanation}
              </p>
            </div>

            {/* Dimension 2: Feasibility & Operational Viability */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Dimension 2 (35%)
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-800">
                  {currentEvaluation.feasibility.score} / 5
                </span>
              </div>
              <h3 className="text-sm font-bold text-stone-900">
                Feasibility &amp; Viability
              </h3>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-stone-900 h-full rounded-full transition-all"
                  style={{
                    width: `${(currentEvaluation.feasibility.score / 5) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentEvaluation.feasibility.explanation}
              </p>
            </div>

            {/* Dimension 3: Cost / ROI Impact */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Dimension 3 (35%)
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-800">
                  {currentEvaluation.costRoiImpact.score} / 5
                </span>
              </div>
              <h3 className="text-sm font-bold text-stone-900">
                Cost &amp; ROI Impact
              </h3>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-stone-900 h-full rounded-full transition-all"
                  style={{
                    width: `${(currentEvaluation.costRoiImpact.score / 5) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentEvaluation.costRoiImpact.explanation}
              </p>
            </div>
          </div>

          {/* Qualitative Insights & Actionable Feedback */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Strengths & Improvement Areas */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4 shadow-xs">
              <div>
                <h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Identified Operational Strengths
                </h3>
                <ul className="space-y-1.5 text-xs text-stone-700">
                  {currentEvaluation.strengths.map((str, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-stone-100 pt-3">
                <h3 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Recommended Refinements
                </h3>
                <ul className="space-y-1.5 text-xs text-stone-700">
                  {currentEvaluation.improvementAreas.map((imp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {currentEvaluation.regionalContextDetected && (
                <div className="border-t border-stone-100 pt-3 text-xs bg-indigo-50/50 p-2.5 rounded-lg border border-indigo-100 text-indigo-950">
                  <span className="font-semibold block mb-0.5">
                    🌐 Regional Dialect Normalization Applied:
                  </span>
                  <span className="text-[11px] text-indigo-900">
                    {currentEvaluation.regionalContextNotes ||
                      "Gemini preserved raw problem-solving logic and parsed vernacular grammar without score penalties."}
                  </span>
                </div>
              )}
            </div>

            {/* Actionable Student Feedback & Recruiter Summary */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4 shadow-xs">
              <div>
                <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  Actionable Feedback (Returned to Candidate)
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200/60">
                  {currentEvaluation.actionableFeedback}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-stone-600" />
                  Anonymized Recruiter Dossier Card
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-200/60 font-mono text-[11px]">
                  {currentEvaluation.anonymizedSummary}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSubTab("corporate")}
                  className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors flex items-center gap-1.5"
                >
                  View in Corporate ATS Showcase
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {currentEvaluation.decision === "BORDERLINE_HUMAN_REVIEW" && (
                  <button
                    onClick={() => setSubTab("escalation")}
                    className="px-4 py-2 bg-amber-100 text-amber-900 border border-amber-300 rounded-lg text-xs font-semibold hover:bg-amber-200 transition-colors flex items-center gap-1.5"
                  >
                    Open in Human Escalation Desk
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: HUMAN-IN-THE-LOOP ESCALATION DESK */}
      {subTab === "escalation" && (
        <div className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
              <div>
                <h2 className="text-base font-bold text-stone-900 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-600" />
                  Human-in-the-Loop Escalation &amp; Safeguard Desk
                </h2>
                <p className="text-xs text-stone-500">
                  Resolves AI edge-case errors, non-metro dialects, and borderline scores (40–64) before corporate decisioning.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 font-semibold border border-amber-200">
                  {escalations.filter((e) => !e.humanResolution).length} Pending Review
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
                  {escalations.filter((e) => e.humanResolution).length} Resolved
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-600 mt-3">
              Mentors &amp; field evaluators audit flagged submissions to ensure dialect barriers or unconventional rural operational frameworks aren't unfairly penalized by LLM tokens.
            </p>
          </div>

          {/* Ticket Queue */}
          <div className="space-y-4">
            {escalations.map((ticket) => (
              <div
                key={ticket.id}
                className={`bg-white border rounded-xl p-5 shadow-xs space-y-4 transition-all ${
                  ticket.humanResolution
                    ? "border-emerald-200 bg-emerald-50/20"
                    : "border-stone-200 hover:border-stone-300"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-stone-900 text-sm font-mono">
                      {ticket.candidateCode}
                    </span>
                    <span className="text-xs text-stone-400">•</span>
                    <span className="text-xs text-stone-600">
                      {ticket.region}
                    </span>
                    <span className="text-xs text-stone-400">•</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-mono">
                      {ticket.language}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-stone-800 bg-stone-100 px-2 py-0.5 rounded">
                      Score: {ticket.compositeScore}/100
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                      {ticket.flagReason}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {/* Raw Student Input Excerpt */}
                  <div className="bg-stone-50 p-3 rounded-lg border border-stone-200/60 space-y-1">
                    <span className="font-semibold text-stone-700 block text-[11px] uppercase tracking-wider">
                      Original Regional Submission Excerpt:
                    </span>
                    <p className="text-stone-700 italic leading-relaxed">
                      "{ticket.rawStudentExcerpt}"
                    </p>
                  </div>

                  {/* Gemini Rationale */}
                  <div className="bg-stone-50 p-3 rounded-lg border border-stone-200/60 space-y-1">
                    <span className="font-semibold text-stone-700 block text-[11px] uppercase tracking-wider">
                      Gemini Auto-Scoring Rationale:
                    </span>
                    <p className="text-stone-600 leading-relaxed">
                      {ticket.geminiRationale}
                    </p>
                  </div>
                </div>

                {/* Resolution State or Action Controls */}
                {ticket.humanResolution ? (
                  <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-900 flex flex-wrap items-center justify-between gap-2">
                    <div className="space-y-0.5">
                      <span className="font-bold flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        Human Resolution: {ticket.humanResolution}
                      </span>
                      {ticket.humanAuditorNotes && (
                        <p className="text-[11px] text-emerald-800">
                          Auditor Notes: {ticket.humanAuditorNotes}
                        </p>
                      )}
                    </div>
                    <span className="text-[10px] text-emerald-700 font-mono">
                      Resolved {ticket.resolvedAt ? new Date(ticket.resolvedAt).toLocaleTimeString() : ""}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-100">
                    <span className="text-[11px] text-stone-500">
                      Select Human Auditor Action:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() =>
                          handleAuditorResolve(
                            ticket.id,
                            "approve",
                            "Dialect & context validated by regional mentor. Logic verified as operationally sound. +10 uplift."
                          )
                        }
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-xs"
                      >
                        Approve for Corporate Showcase (+10 Uplift)
                      </button>

                      <button
                        onClick={() =>
                          handleAuditorResolve(
                            ticket.id,
                            "clarify",
                            "SMS sent asking candidate for 1-sentence budget estimate."
                          )
                        }
                        className="px-3 py-1.5 rounded-lg bg-stone-100 text-stone-800 border border-stone-300 text-xs font-semibold hover:bg-stone-200 transition-colors"
                      >
                        Request SMS Clarification
                      </button>

                      <button
                        onClick={() =>
                          handleAuditorResolve(
                            ticket.id,
                            "feedback",
                            "Detailed mentorship feedback sent explaining cost modeling missing steps."
                          )
                        }
                        className="px-3 py-1.5 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold hover:bg-amber-200 transition-colors"
                      >
                        Send Mentorship Notes
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 4: CORPORATE PROOF-OF-WORK SHOWCASE */}
      {subTab === "corporate" && (
        <div className="space-y-6">
          {/* Header ROI Banner */}
          <div className="bg-stone-900 text-stone-50 rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-xl">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                Verified Talent Curation Dashboard
              </div>
              <h2 className="text-xl font-bold tracking-tight">
                Anonymized Proof-of-Work Candidate Pipeline
              </h2>
              <p className="text-xs text-stone-300 leading-relaxed">
                Evaluating real problem-solving proposals rather than bloated CVs. Cuts initial candidate screening time by <strong>70%</strong> and eliminates campus placement travel overhead.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
              <div className="bg-stone-800/80 p-3 rounded-lg border border-stone-700">
                <div className="text-lg font-bold text-white">70%</div>
                <div className="text-[10px] text-stone-400 uppercase tracking-wider">
                  Screening Time Saved
                </div>
              </div>
              <div className="bg-stone-800/80 p-3 rounded-lg border border-stone-700">
                <div className="text-lg font-bold text-emerald-400">100%</div>
                <div className="text-[10px] text-stone-400 uppercase tracking-wider">
                  Pedigree Bias Free
                </div>
              </div>
              <div className="bg-stone-800/80 p-3 rounded-lg border border-stone-700 col-span-2 sm:col-span-1">
                <div className="text-lg font-bold text-white">₹14 Lakhs</div>
                <div className="text-[10px] text-stone-400 uppercase tracking-wider">
                  Avg. CapEx Saved / Drive
                </div>
              </div>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-semibold text-stone-700">Filter by Domain:</span>
              {["All", "Supply Chain", "Agri-Tech", "Financial Inclusion"].map(
                (dom) => (
                  <button
                    key={dom}
                    onClick={() => setFilterDomain(dom)}
                    className={`px-3 py-1 rounded-md font-medium transition-colors ${
                      filterDomain === dom
                        ? "bg-stone-900 text-white"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    {dom}
                  </button>
                )
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-stone-500">Min Composite Score:</span>
              <input
                type="range"
                min={50}
                max={95}
                step={5}
                value={minScore}
                onChange={(e) => setMinScore(Number(e.target.value))}
                className="accent-stone-900 cursor-pointer"
              />
              <span className="font-bold text-stone-900 w-8">{minScore}+</span>
            </div>
          </div>

          {/* Candidate Dossier Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {submissions
              .filter(
                (s) =>
                  s.evaluation.compositeScore >= minScore &&
                  (filterDomain === "All" ||
                    s.briefTitle.toLowerCase().includes(filterDomain.toLowerCase()))
              )
              .map((candidate) => {
                const isUnlocked = unlockedCandidates.includes(candidate.id);
                return (
                  <div
                    key={candidate.id}
                    className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-4 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                        <div>
                          <span className="text-xs font-mono font-bold text-stone-900 block">
                            {candidate.studentPseudoId}
                          </span>
                          <span className="text-[11px] text-stone-500">
                            {candidate.regionalCluster}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-base font-extrabold text-stone-900">
                            {candidate.evaluation.compositeScore}
                          </span>
                          <span className="text-[10px] text-stone-400 block font-semibold uppercase">
                            Score / 100
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider block">
                          Micro-Brief Addressed:
                        </span>
                        <div className="text-xs font-bold text-stone-800 line-clamp-1">
                          {candidate.briefTitle}
                        </div>
                      </div>

                      {/* 3D Score Pill Mini-Grid */}
                      <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                        <div className="bg-stone-50 p-1.5 rounded border border-stone-100">
                          <div className="font-bold text-stone-800">
                            {candidate.evaluation.problemAlignment.score}/5
                          </div>
                          <div className="text-stone-400">Alignment</div>
                        </div>
                        <div className="bg-stone-50 p-1.5 rounded border border-stone-100">
                          <div className="font-bold text-stone-800">
                            {candidate.evaluation.feasibility.score}/5
                          </div>
                          <div className="text-stone-400">Feasibility</div>
                        </div>
                        <div className="bg-stone-50 p-1.5 rounded border border-stone-100">
                          <div className="font-bold text-stone-800">
                            {candidate.evaluation.costRoiImpact.score}/5
                          </div>
                          <div className="text-stone-400">Cost/ROI</div>
                        </div>
                      </div>

                      {/* Anonymized Dossier Summary */}
                      <div className="bg-stone-50 p-3 rounded-lg border border-stone-200/60 text-xs text-stone-700 leading-relaxed font-sans line-clamp-3">
                        {candidate.evaluation.anonymizedSummary}
                      </div>

                      {candidate.evaluation.regionalContextDetected && (
                        <div className="text-[10px] text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-medium">
                          ✓ Ground Context &amp; Vernacular Logic Verified
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-stone-100 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <button
                          onClick={() => setSelectedCandidateDossier(candidate)}
                          className="flex-1 py-1.5 px-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          Inspect Dossier
                        </button>

                        <button
                          onClick={() => handleUnlockCandidate(candidate.id)}
                          className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                            isUnlocked
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                              : "bg-stone-900 hover:bg-stone-800 text-white shadow-xs"
                          }`}
                        >
                          {isUnlocked ? (
                            <>
                              <UserCheck className="w-3.5 h-3.5" />
                              Profile Unlocked
                            </>
                          ) : (
                            <>
                              <Lock className="w-3.5 h-3.5" />
                              Unlock Profile
                            </>
                          )}
                        </button>
                      </div>

                      {isUnlocked && (
                        <div className="text-[10px] text-emerald-700 text-center font-medium bg-emerald-50 py-1 rounded">
                          ATS Routing Direct to Interview • Saved 3.5 Recruiter Hours
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Candidate Dossier Detail Modal */}
          {selectedCandidateDossier && (
            <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-5 max-h-[90vh] overflow-y-auto shadow-xl">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 font-mono">
                      {selectedCandidateDossier.studentPseudoId}
                    </h3>
                    <p className="text-xs text-stone-500">
                      Cluster: {selectedCandidateDossier.regionalCluster} • Status:{" "}
                      {selectedCandidateDossier.status}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCandidateDossier(null)}
                    className="p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100 text-lg font-bold"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                      Brief Problem Statement:
                    </span>
                    <p className="p-3 bg-stone-50 rounded-lg text-stone-800">
                      {selectedCandidateDossier.briefTitle}
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                      Candidate Original Solution:
                    </span>
                    <pre className="p-3 bg-stone-50 rounded-lg text-stone-800 whitespace-pre-wrap font-sans text-xs leading-relaxed">
                      {selectedCandidateDossier.rawInput}
                    </pre>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 bg-stone-100 rounded-lg text-center">
                      <div className="font-bold text-sm text-stone-900">
                        {selectedCandidateDossier.evaluation.problemAlignment.score}/5
                      </div>
                      <div className="text-[10px] text-stone-500">Problem Alignment</div>
                    </div>
                    <div className="p-2.5 bg-stone-100 rounded-lg text-center">
                      <div className="font-bold text-sm text-stone-900">
                        {selectedCandidateDossier.evaluation.feasibility.score}/5
                      </div>
                      <div className="text-[10px] text-stone-500">Feasibility</div>
                    </div>
                    <div className="p-2.5 bg-stone-100 rounded-lg text-center">
                      <div className="font-bold text-sm text-stone-900">
                        {selectedCandidateDossier.evaluation.costRoiImpact.score}/5
                      </div>
                      <div className="text-[10px] text-stone-500">Cost/ROI Impact</div>
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                      Gemini Verified Evaluation Summary:
                    </span>
                    <p className="p-3 bg-stone-50 rounded-lg text-stone-700 leading-relaxed">
                      {selectedCandidateDossier.evaluation.anonymizedSummary}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500">
                    Bypasses degree credential gates with verified execution proof.
                  </span>
                  <button
                    onClick={() => {
                      handleUnlockCandidate(selectedCandidateDossier.id);
                      setSelectedCandidateDossier(null);
                    }}
                    className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
                  >
                    Unlock Candidate &amp; Direct Schedule
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
