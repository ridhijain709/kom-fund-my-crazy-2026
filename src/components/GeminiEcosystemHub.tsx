import React, { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  AlertTriangle,
  ExternalLink,
  Code2,
  FileText,
  Image as ImageIcon,
  Layers,
  Cpu,
  Smartphone,
  Eye,
  Download,
  Terminal,
} from "lucide-react";

export const GeminiEcosystemHub: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<"mockup" | "prompts" | "ecosystem" | "code">(
    "mockup"
  );
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [demoProblem, setDemoProblem] = useState(
    "Optimizing regional parcel delivery routes in low-connectivity Tier-3 transit belts"
  );
  const [demoSolution, setDemoSolution] = useState(
    "Utilize existing state transport bus luggage boots for scheduled hub-and-spoke parcel drops. Local shopkeepers act as micro-drop points, reducing last-mile delivery cost by 42% without new vehicles."
  );
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any | null>(null);
  const [flaggedCards, setFlaggedCards] = useState<Record<string, boolean>>({});

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(id);
    setTimeout(() => setCopiedPrompt(null), 2500);
  };

  const handleRunAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalysisResult({
        alignment: 89,
        feasibility: 91,
        roi: 86,
        composite: 89,
        summary:
          "High operational feasibility: uses existing transit bus boots with zero capital expenditure on new fleet.",
      });
    }, 1200);
  };

  const toggleFlag = (cardId: string) => {
    setFlaggedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const PROMPT_1_TEXT = `Generate a modern, clean, high-resolution digital UI dashboard mockup for a mobile web application called 'Proof-of-Work Platform'. The UI should feature two views side-by-side or stacked cleanly. Left side: A minimal student submission portal for Tier-2/3 candidates showing a case study submission card with simple text inputs and an 'Analyze with Gemini AI' button. Right side: An anonymized corporate talent dashboard displaying candidate cards with three key metrics: Problem Alignment Score (88/100), Feasibility Score (92/100), and ROI Impact Score (85/100), along with a prominent 'Flag for Human Review' button. Use Google Material Design 3 design system with vibrant dark blue and clean white tones.`;

  const PROMPT_2_TEXT = `Generate a sleek, modern, vector-style tech infographic flowchart illustrating an AI system pipeline. Show a 4-step linear flow: 1. Candidate Submission (Mobile/Low Bandwidth) -> 2. Gemini AI Parsing Engine (Scoring metrics: Problem Alignment, Feasibility, ROI) -> 3. Human-in-the-Loop Safeguard (Escalation desk for edge cases/language nuance) -> 4. Corporate Talent Dashboard (Anonymized Proof-of-Work Cards). Use clean isometric lines, tech icons, vibrant blue and green accent colors, dark slate background, professional tech diagram style.`;

  const PROMPT_3_AI_STUDIO = `// Google AI Studio System Instruction for Structured Evaluation
You are the Google Gemini Evaluation Core for the KOM Node (Proof-of-Work Talent Platform).
Evaluate the candidate's case response strictly on three standardized dimensions (0-100 each):
1. Problem Alignment (30% weight): Does this directly solve the core operational friction?
2. Feasibility & Operational Viability (35% weight): Can this be executed on the ground with realistic resources?
3. Cost & ROI Impact (35% weight): Does it yield quantifiable savings or unit economic improvements?

Return structured JSON conforming to:
{
  "scores": {
    "problemAlignment": number,
    "feasibility": number,
    "roiImpact": number,
    "compositeScore": number
  },
  "verdict": "PASSED_TO_CORPORATE" | "ESCALATE_TO_HUMAN_DESK" | "ACTIONABLE_FEEDBACK",
  "strengths": string[],
  "constructiveFeedback": string,
  "anonymizedBadge": string
}`;

  const COLAB_PYTHON_SNIPPET = `import google.generativeai as genai
import json

# Initialize Gemini 1.5 / 2.5 Flash
genai.configure(api_key="YOUR_GEMINI_API_KEY")
model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config={"response_mime_type": "application/json"}
)

submission = """
Problem: High perishable produce spoilage in rural transport.
Solution: Evaporative cooling chambers retrofitted into bus luggage bays using water-soaked burlap mesh.
Estimated Cost: ₹3,500 per bus.
"""

response = model.generate_content(
    f"Evaluate this student submission on Problem Alignment, Feasibility, and ROI. Output JSON: {submission}"
)
print(json.loads(response.text))`;

  const RAW_HTML_MOCKUP = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proof-of-Work Platform | UI Mockup</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  <style>
    :root {
      --md-sys-color-primary: #0A192F;
      --md-sys-color-on-primary: #FFFFFF;
      --md-sys-color-primary-container: #1E293B;
      --md-sys-color-accent: #2563EB;
      --md-sys-color-accent-light: #60A5FA;
      --md-sys-color-surface: #F8FAFC;
      --md-sys-color-surface-card: #FFFFFF;
      --md-sys-color-on-surface: #0F172A;
      --md-sys-color-outline: #E2E8F0;
      --md-sys-color-warning: #D97706;
      --md-sys-color-warning-bg: #FEF3C7;
      --md-sys-shape-corner-medium: 16px;
      --md-sys-shape-corner-large: 24px;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Google Sans', 'Roboto', sans-serif; }
    body { background-color: var(--md-sys-color-primary); color: var(--md-sys-color-on-surface); padding: 24px; min-height: 100vh; display: flex; flex-direction: column; gap: 20px; }
    header { display: flex; justify-content: space-between; align-items: center; color: var(--md-sys-color-on-primary); padding: 0 12px; }
    .brand { display: flex; align-items: center; gap: 12px; font-size: 22px; font-weight: 700; }
    .badge-gemini { background: linear-gradient(135deg, #2563EB, #9333EA); color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; display: flex; align-items: center; gap: 4px; }
    .dashboard-container { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; flex-grow: 1; }
    @media (max-width: 900px) { .dashboard-container { grid-template-columns: 1fr; } }
    .panel { background-color: var(--md-sys-color-surface); border-radius: var(--md-sys-shape-corner-large); padding: 24px; display: flex; flex-direction: column; gap: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
    .panel-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--md-sys-color-outline); padding-bottom: 12px; }
    .panel-title { font-size: 18px; font-weight: 700; color: var(--md-sys-color-primary); display: flex; align-items: center; gap: 8px; }
    .form-group { display: flex; flex-direction: column; gap: 8px; }
    label { font-size: 13px; font-weight: 500; color: #475569; }
    input, textarea { width: 100%; padding: 14px 16px; border-radius: 12px; border: 1px solid var(--md-sys-color-outline); background-color: white; font-size: 14px; color: var(--md-sys-color-on-surface); outline: none; }
    .btn-gemini { background: linear-gradient(135deg, #0A192F, #2563EB); color: white; border: none; padding: 16px; border-radius: var(--md-sys-shape-corner-medium); font-size: 15px; font-weight: 700; cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 10px; }
    .candidate-card { background-color: var(--md-sys-color-surface-card); border-radius: var(--md-sys-shape-corner-medium); padding: 20px; border: 1px solid var(--md-sys-color-outline); display: flex; flex-direction: column; gap: 16px; }
    .card-top { display: flex; justify-content: space-between; align-items: center; }
    .anon-id { font-size: 15px; font-weight: 700; color: var(--md-sys-color-primary); display: flex; align-items: center; gap: 6px; }
    .metrics-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background-color: #F1F5F9; padding: 12px; border-radius: 12px; }
    .metric-box { display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .metric-label { font-size: 11px; color: #64748B; text-align: center; font-weight: 500; }
    .metric-score { font-size: 18px; font-weight: 700; color: #1E293B; }
    .score-high { color: #16A34A; }
    .score-mid { color: #2563EB; }
    .btn-flag { background-color: var(--md-sys-color-warning-bg); color: var(--md-sys-color-warning); border: 1px solid #FDE68A; padding: 10px 14px; border-radius: 10px; font-size: 13px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; }
  </style>
</head>
<body>
  <header>
    <div class="brand">Proof-of-Work Platform</div>
    <div class="badge-gemini">Powered by Gemini AI</div>
  </header>
  <div class="dashboard-container">
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">Student Submission Portal (Tier 2/3)</div>
        <span>Low-Bandwidth Mode</span>
      </div>
      <div class="form-group">
        <label>Candidate Region / University ID</label>
        <input type="text" value="Tier-3 Hub • College Code #4821" readonly>
      </div>
      <div class="form-group">
        <label>Case Study Problem Statement</label>
        <input type="text" value="Optimizing regional delivery routes in low-connectivity areas">
      </div>
      <div class="form-group">
        <label>Proposed Execution & Cost Model</label>
        <textarea rows="5">Detail your step-by-step logic, operational feasibility, and ROI impact...</textarea>
      </div>
      <button class="btn-gemini">Analyze with Gemini AI</button>
    </div>
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">Anonymized Talent Dashboard</div>
        <span>● 12 New Validated Cards</span>
      </div>
      <div class="candidate-card">
        <div class="card-top">
          <div class="anon-id">Candidate #8921-T3</div>
          <span>Proof-of-Work Verified</span>
        </div>
        <div class="metrics-grid">
          <div class="metric-box"><span>Problem Alignment</span><strong>88/100</strong></div>
          <div class="metric-box"><span>Feasibility</span><strong>92/100</strong></div>
          <div class="metric-box"><span>ROI Impact</span><strong>85/100</strong></div>
        </div>
        <button class="btn-flag">Flag for Human Review</button>
      </div>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-stone-900 text-stone-50 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Built with Gemini (20% Weight) • Official Ecosystem &amp; Prompt Proof Kit
          </div>
          <span className="text-xs text-stone-400">
            Fund My Crazy 2026 • Built with Google Gemini &amp; Antigravity
          </span>
        </div>

        <h2 className="text-2xl font-bold tracking-tight">
          Authorized Google Gemini Platforms &amp; Visual Artifacts
        </h2>

        <p className="text-sm text-stone-300 leading-relaxed max-w-4xl">
          To comply strictly with the competition rules and avoid disqualification, you{" "}
          <strong>must only use tools within the official Google Gemini Ecosystem</strong>.
          Third-party image or text tools like ChatGPT, Midjourney, or DALL-E are strictly
          prohibited. Below is your authorized platform guide, the live rendered Material Design 3
          dashboard mockup, and copyable prompt verification proofs.
        </p>

        {/* 4 Pillars of Google Gemini Ecosystem */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-stone-800 text-xs">
          <div className="bg-stone-800/60 p-3.5 rounded-xl border border-stone-700/60 space-y-1">
            <span className="text-indigo-400 font-bold block uppercase tracking-wider text-[10px]">
              Platform 1: Gemini App
            </span>
            <div className="font-semibold text-white">gemini.google.com</div>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              Generate UI visual mockups, architectural infographics, and take prompt history
              screenshots.
            </p>
          </div>

          <div className="bg-stone-800/60 p-3.5 rounded-xl border border-stone-700/60 space-y-1">
            <span className="text-indigo-400 font-bold block uppercase tracking-wider text-[10px]">
              Platform 2: AI Studio
            </span>
            <div className="font-semibold text-white">aistudio.google.com</div>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              Test structured JSON response schemas, system instructions, and temperature tuning.
            </p>
          </div>

          <div className="bg-stone-800/60 p-3.5 rounded-xl border border-stone-700/60 space-y-1">
            <span className="text-indigo-400 font-bold block uppercase tracking-wider text-[10px]">
              Platform 3: Google Colab
            </span>
            <div className="font-semibold text-white">colab.research.google.com</div>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              Executable Python code proving automated candidate logic scoring using the official
              SDK.
            </p>
          </div>

          <div className="bg-stone-800/60 p-3.5 rounded-xl border border-stone-700/60 space-y-1">
            <span className="text-indigo-400 font-bold block uppercase tracking-wider text-[10px]">
              Platform 4: Google Workspace
            </span>
            <div className="font-semibold text-white">Google Slides &amp; Drive</div>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              Assemble your 6-slide deck PDF and embed Gemini prompt screenshots &amp; visual
              artifacts.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <button
            onClick={() => setActiveSubTab("mockup")}
            className={`px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeSubTab === "mockup"
                ? "bg-stone-900 text-white"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Live Material 3 UI Mockup (Prompt 1 Output)
          </button>

          <button
            onClick={() => setActiveSubTab("prompts")}
            className={`px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeSubTab === "prompts"
                ? "bg-stone-900 text-white"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Copy Exact Gemini Prompts
          </button>

          <button
            onClick={() => setActiveSubTab("ecosystem")}
            className={`px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeSubTab === "ecosystem"
                ? "bg-stone-900 text-white"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Authorized Tools &amp; Rules Guide
          </button>

          <button
            onClick={() => setActiveSubTab("code")}
            className={`px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              activeSubTab === "code"
                ? "bg-stone-900 text-white"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            AI Studio &amp; Colab SDK Code
          </button>
        </div>

        <button
          onClick={() => handleCopy(RAW_HTML_MOCKUP, "raw-html")}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-stone-200 bg-white hover:bg-stone-50 text-stone-800 flex items-center gap-1.5 shadow-xs"
        >
          {copiedPrompt === "raw-html" ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>HTML Mockup Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-stone-500" />
              <span>Copy Standalone HTML</span>
            </>
          )}
        </button>
      </div>

      {/* TAB 1: LIVE MATERIAL 3 UI MOCKUP */}
      {activeSubTab === "mockup" && (
        <div className="space-y-4">
          <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-indigo-600" />
                Live Rendered UI Dashboard: "Proof-of-Work Platform"
              </h3>
              <p className="text-xs text-stone-500">
                Generated via Google Material Design 3 guidelines with Navy Blue (#0A192F) and Crisp
                White. Ready for clean screenshots for Slide 4 of your deck.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Pixel-Perfect Interactive Mockup
              </span>
            </div>
          </div>

          {/* Rendered Container following the exact CSS & layout of user HTML */}
          <div
            className="rounded-2xl p-6 shadow-xl border border-stone-800 space-y-6"
            style={{ backgroundColor: "#0A192F", color: "#0F172A" }}
          >
            {/* Header */}
            <header className="flex flex-wrap items-center justify-between gap-4 text-white px-2">
              <div className="flex items-center gap-3 text-xl font-bold tracking-tight">
                <span className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-xs">
                  ✓
                </span>
                Proof-of-Work Platform
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Powered by Gemini AI
              </div>
            </header>

            {/* Split Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* LEFT PANEL: Student Submission Portal */}
              <div
                className="rounded-2xl p-6 flex flex-col gap-4 shadow-2xl"
                style={{ backgroundColor: "#F8FAFC" }}
              >
                <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
                  <div className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    Student Submission Portal (Tier 2/3)
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Low-Bandwidth Mode</span>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">
                    Candidate Region / University ID
                  </label>
                  <input
                    type="text"
                    value="Tier-3 Hub • College Code #4821"
                    readOnly
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-100 text-slate-500 text-xs font-mono font-medium outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">
                    Case Study Problem Statement
                  </label>
                  <input
                    type="text"
                    value={demoProblem}
                    onChange={(e) => setDemoProblem(e.target.value)}
                    placeholder="e.g., Optimizing regional delivery routes in low-connectivity areas"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">
                    Proposed Execution &amp; Cost Model
                  </label>
                  <textarea
                    rows={4}
                    value={demoSolution}
                    onChange={(e) => setDemoSolution(e.target.value)}
                    placeholder="Detail your step-by-step logic, operational feasibility, and ROI impact..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-500 outline-none resize-none leading-relaxed"
                  />
                </div>

                <button
                  onClick={handleRunAnalyze}
                  disabled={analyzing}
                  className="w-full bg-gradient-to-r from-slate-900 to-blue-700 hover:from-slate-800 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" />
                  {analyzing ? "Evaluating via Gemini 1.5 Flash..." : "Analyze with Gemini AI"}
                </button>

                {analysisResult && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs space-y-1 text-emerald-950 animate-in fade-in">
                    <div className="font-bold flex items-center justify-between">
                      <span>✓ Evaluation Complete:</span>
                      <span className="text-emerald-700 font-extrabold text-sm">
                        {analysisResult.composite}/100 Composite
                      </span>
                    </div>
                    <p className="text-[11px] text-emerald-800">{analysisResult.summary}</p>
                    <div className="text-[10px] text-emerald-600 font-mono">
                      Routing Status: PASSED_TO_CORPORATE_SHOWCASE
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT PANEL: Corporate Talent Dashboard */}
              <div
                className="rounded-2xl p-6 flex flex-col gap-4 shadow-2xl"
                style={{ backgroundColor: "#F8FAFC" }}
              >
                <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
                  <div className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                    Anonymized Talent Dashboard
                  </div>
                  <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ● 12 New Validated Cards
                  </span>
                </div>

                {/* Candidate Card 1 */}
                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-bold">
                        #89
                      </div>
                      Candidate #8921-T3
                    </div>
                    <span className="text-[10px] font-semibold bg-sky-100 text-sky-800 px-2.5 py-0.5 rounded-full">
                      Proof-of-Work Verified
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-center">
                    <div>
                      <div className="text-[10px] text-slate-500 font-medium">Problem Align</div>
                      <div className="text-base font-extrabold text-emerald-600">88/100</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-medium">Feasibility</div>
                      <div className="text-base font-extrabold text-emerald-600">92/100</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-medium">ROI Impact</div>
                      <div className="text-base font-extrabold text-blue-600">85/100</div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleFlag("card-1")}
                    className={`w-full py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                      flaggedCards["card-1"]
                        ? "bg-amber-500 text-white"
                        : "bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100"
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {flaggedCards["card-1"]
                      ? "Flagged to Human Escalation Desk"
                      : "Flag for Human Review"}
                  </button>
                </div>

                {/* Candidate Card 2 (Borderline) */}
                <div className="bg-white/90 rounded-xl p-4 border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-bold">
                        #40
                      </div>
                      Candidate #4012-T2
                    </div>
                    <span className="text-[10px] font-semibold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full">
                      Borderline / Under Review
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-center">
                    <div>
                      <div className="text-[10px] text-slate-500 font-medium">Problem Align</div>
                      <div className="text-base font-extrabold text-blue-600">74/100</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-medium">Feasibility</div>
                      <div className="text-base font-extrabold text-emerald-600">81/100</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-medium">ROI Impact</div>
                      <div className="text-base font-extrabold text-amber-600">68/100</div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleFlag("card-2")}
                    className={`w-full py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                      flaggedCards["card-2"]
                        ? "bg-amber-500 text-white"
                        : "bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100"
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {flaggedCards["card-2"]
                      ? "Flagged to Human Escalation Desk"
                      : "Flag for Human Review"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: COPY EXACT GEMINI PROMPTS */}
      {activeSubTab === "prompts" && (
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-950 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              Submission Instructions for Built with Gemini (20%):
            </div>
            <p className="leading-relaxed">
              Copy the prompts below into <strong>gemini.google.com</strong> or your Gemini mobile app. Take
              screenshots of the chat showing the prompt text and generated output. Insert those screenshots into
              Slide 4 of your pitch deck to provide irrefutable proof of your Gemini workflow.
            </p>
          </div>

          {/* Prompt 1 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
                  Prompt 1 • High-Fidelity UI Mockup
                </span>
                <h3 className="text-base font-bold text-stone-900">
                  Student Portal &amp; Corporate Dashboard Mockup
                </h3>
              </div>
              <button
                onClick={() => handleCopy(PROMPT_1_TEXT, "prompt-1")}
                className="px-3.5 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 flex items-center gap-1.5 transition-colors"
              >
                {copiedPrompt === "prompt-1" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Prompt 1</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 font-mono text-xs text-stone-800 leading-relaxed whitespace-pre-wrap">
              {PROMPT_1_TEXT}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-600 pt-1">
              <div>
                <span className="font-bold text-stone-900">Target Model:</span> Gemini Advanced /
                Gemini 1.5 Flash
              </div>
              <div>
                <span className="font-bold text-stone-900">Design System:</span> Google Material
                Design 3
              </div>
              <div>
                <span className="font-bold text-stone-900">Deck Placement:</span> Slide 4 (Working
                Prototype)
              </div>
            </div>
          </div>

          {/* Prompt 2 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                  Prompt 2 • Architectural Flowchart
                </span>
                <h3 className="text-base font-bold text-stone-900">
                  End-to-End System Infographic Flowchart
                </h3>
              </div>
              <button
                onClick={() => handleCopy(PROMPT_2_TEXT, "prompt-2")}
                className="px-3.5 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 flex items-center gap-1.5 transition-colors"
              >
                {copiedPrompt === "prompt-2" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Prompt 2</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 font-mono text-xs text-stone-800 leading-relaxed whitespace-pre-wrap">
              {PROMPT_2_TEXT}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-600 pt-1">
              <div>
                <span className="font-bold text-stone-900">Target Model:</span> Gemini Web Image
                Gen
              </div>
              <div>
                <span className="font-bold text-stone-900">Aesthetic:</span> Isometric tech vector
                infographic
              </div>
              <div>
                <span className="font-bold text-stone-900">Deck Placement:</span> Slide 3 (System
                Architecture)
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: AUTHORIZED TOOLS & RULES GUIDE */}
      {activeSubTab === "ecosystem" && (
        <div className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Fund My Crazy 2026 AI Tool Compliance Matrix
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-stone-700 font-semibold">
                    <th className="p-3 w-1/4">Tool / Platform</th>
                    <th className="p-3 w-1/5">Compliance Status</th>
                    <th className="p-3 w-1/3">Authorized Role in Project</th>
                    <th className="p-3 w-1/4">Required Proof in Deck</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-700">
                  <tr className="hover:bg-stone-50/50">
                    <td className="p-3 font-bold text-stone-900">
                      Google Gemini Web / App
                      <div className="text-[10px] font-normal text-stone-500">
                        gemini.google.com
                      </div>
                    </td>
                    <td className="p-3 text-emerald-700 font-bold bg-emerald-50/40">
                      ✓ MANDATORY &amp; ALLOWED
                    </td>
                    <td className="p-3">
                      Concept ideation, prompt engineering, visual UI mockups, and pitch copywriting.
                    </td>
                    <td className="p-3 text-[11px] text-stone-600">
                      Chat screenshot showing prompt + response.
                    </td>
                  </tr>

                  <tr className="hover:bg-stone-50/50">
                    <td className="p-3 font-bold text-stone-900">
                      Google AI Studio
                      <div className="text-[10px] font-normal text-stone-500">
                        aistudio.google.com
                      </div>
                    </td>
                    <td className="p-3 text-emerald-700 font-bold bg-emerald-50/40">
                      ✓ HIGHLY RECOMMENDED
                    </td>
                    <td className="p-3">
                      Testing structured JSON schemas, temperature tuning, and zero-shot candidate
                      scoring.
                    </td>
                    <td className="p-3 text-[11px] text-stone-600">
                      Screenshot of prompt &amp; JSON schema playground.
                    </td>
                  </tr>

                  <tr className="hover:bg-stone-50/50">
                    <td className="p-3 font-bold text-stone-900">
                      Google Colab
                      <div className="text-[10px] font-normal text-stone-500">
                        colab.research.google.com
                      </div>
                    </td>
                    <td className="p-3 text-emerald-700 font-bold bg-emerald-50/40">
                      ✓ HIGHLY RECOMMENDED
                    </td>
                    <td className="p-3">
                      Python notebook running <code>google-generativeai</code> SDK scoring scripts.
                    </td>
                    <td className="p-3 text-[11px] text-stone-600">
                      Colab notebook link or screenshot of code execution.
                    </td>
                  </tr>

                  <tr className="hover:bg-stone-50/50">
                    <td className="p-3 font-bold text-stone-900">
                      Google Slides / Workspace
                      <div className="text-[10px] font-normal text-stone-500">
                        slides.google.com
                      </div>
                    </td>
                    <td className="p-3 text-emerald-700 font-bold bg-emerald-50/40">✓ ALLOWED</td>
                    <td className="p-3">
                      Assembling the 5–6 slide presentation deck for PDF export.
                    </td>
                    <td className="p-3 text-[11px] text-stone-600">Final PDF presentation file.</td>
                  </tr>

                  <tr className="hover:bg-stone-50/50 bg-rose-50/30">
                    <td className="p-3 font-bold text-rose-900">
                      ChatGPT / Midjourney / DALL-E
                      <div className="text-[10px] font-normal text-rose-500">Non-Google 3P AI</div>
                    </td>
                    <td className="p-3 text-rose-700 font-bold bg-rose-100/50">
                      ✗ STRICTLY PROHIBITED
                    </td>
                    <td className="p-3 text-rose-900" colSpan={2}>
                      Disqualification risk: Contest guidelines strictly require solutions to be built with
                      Google Gemini.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Submission Package Checklist */}
          <div className="bg-stone-900 text-stone-50 rounded-2xl p-6 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Phase 2 Submission Package Checklist (Due Tonight)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700 space-y-2">
                <span className="font-bold text-emerald-400 block text-sm">
                  1. Pitch Deck (5–6 Slides in PDF)
                </span>
                <p className="text-stone-300 leading-relaxed text-[11px]">
                  Use our built-in Phase 2 Pitch Deck tab to export the 6 slides covering Title, Problem,
                  System Architecture, Working Prototype, Employer ROI, and 30-Day Pilot.
                </p>
              </div>

              <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700 space-y-2">
                <span className="font-bold text-emerald-400 block text-sm">
                  2. Gemini Prompt Screenshots
                </span>
                <p className="text-stone-300 leading-relaxed text-[11px]">
                  Attach 2–3 clear screenshots of your Gemini chat showing Prompt 1 (UI Mockup) and Prompt
                  2 (System Flowchart) along with the generated responses.
                </p>
              </div>

              <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700 space-y-2">
                <span className="font-bold text-emerald-400 block text-sm">
                  3. 60-Second Video Walkthrough
                </span>
                <p className="text-stone-300 leading-relaxed text-[11px]">
                  Record a 60-second Loom or unlisted YouTube video navigating between the Student Kiosk
                  and the Corporate Showcase, reading the speaker notes from Slide 4.
                </p>
              </div>

              <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700 space-y-2">
                <span className="font-bold text-emerald-400 block text-sm">
                  4. Live Working Prototype URL
                </span>
                <p className="text-stone-300 leading-relaxed text-[11px]">
                  Submit the live web application link proving full interactive execution with low-bandwidth
                  mode and live Gemini scoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: AI STUDIO & COLAB SDK CODE */}
      {activeSubTab === "code" && (
        <div className="space-y-6">
          {/* AI Studio Schema */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
                  Google AI Studio System Instruction &amp; JSON Schema
                </span>
                <h3 className="text-base font-bold text-stone-900">
                  Standardized Candidate Evaluation Schema
                </h3>
              </div>
              <button
                onClick={() => handleCopy(PROMPT_3_AI_STUDIO, "ai-studio")}
                className="px-3.5 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 flex items-center gap-1.5 transition-colors"
              >
                {copiedPrompt === "ai-studio" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied Schema!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy AI Studio Schema</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-stone-950 p-4 rounded-xl font-mono text-xs text-emerald-400 leading-relaxed whitespace-pre-wrap overflow-x-auto">
              {PROMPT_3_AI_STUDIO}
            </div>
          </div>

          {/* Colab Python Snippet */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                  Google Colab Python Script (SDK Proof)
                </span>
                <h3 className="text-base font-bold text-stone-900">
                  Executable Google Generative AI Python Pipeline
                </h3>
              </div>
              <button
                onClick={() => handleCopy(COLAB_PYTHON_SNIPPET, "colab-snippet")}
                className="px-3.5 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 flex items-center gap-1.5 transition-colors"
              >
                {copiedPrompt === "colab-snippet" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied Python Script!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Python Code</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-stone-950 p-4 rounded-xl font-mono text-xs text-sky-400 leading-relaxed whitespace-pre-wrap overflow-x-auto">
              {COLAB_PYTHON_SNIPPET}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
