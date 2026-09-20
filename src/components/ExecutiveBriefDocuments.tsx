import React, { useState } from "react";
import {
  Printer,
  FileText,
  Download,
  Copy,
  Check,
  Share2,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  Cpu,
  Database,
  Building2,
  Compass,
  CheckCircle2,
  Terminal,
} from "lucide-react";

export const ExecutiveBriefDocuments: React.FC = () => {
  const [activeDoc, setActiveDoc] = useState<"flow-diagram" | "gemini-brief">(
    "flow-diagram"
  );
  const [copied, setCopied] = useState<string | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = (docId: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(docId);
    setTimeout(() => setCopied(null), 2500);
  };

  const flowDiagramMarkdown = `# SYSTEM DATA FLOW & ARCHITECTURE DIAGRAM
Document Type: System Engineering Overview
Date: September 20, 2026

## 1. Executive Summary
This document provides a structured visual and technical overview of the candidate journey within the KOM Node ecosystem, tracing data flow from the physical transit bus stop to automated Gemini AI evaluation and final recruiter talent unlocking.

## 2. End-to-End System Flow (ASCII Architecture)

+-------------------------------------------------------------------------------+
|                        PHASE 1: TRANSIT HUB DISCOVERY                         |
|  [Commuter at Bus Stop] ---> [Scans QR on Kiosk/Poster or SMS Trigger]        |
+---------------------------------------+---------------------------------------+
                                        |
                                        v
+-------------------------------------------------------------------------------+
|                     PHASE 2: MOBILE CLIENT / WEB APP LANDING                  |
|  - Ultra-lightweight Web App (<35KB) loaded in browser                        |
|  - Candidate selects Business Problem Brief (Logistics / Supply Chain / Retail)|
|  - Reviews plain-language Gemini Scaffolding & 3 Guiding Questions            |
+---------------------------------------+---------------------------------------+
                                        |
                                        v
+-------------------------------------------------------------------------------+
|                       PHASE 3: OPERATIONAL PROPOSAL INPUT                     |
|  - Candidate drafts structured, unit-economic proposal (100+ words)           |
|  - Plain English or Hinglish/Vernacular regional dialect                      |
|  - Pedigree/College identifiers automatically sanitized                       |
+---------------------------------------+---------------------------------------+
                                        |
                                        v
+-------------------------------------------------------------------------------+
|                       PHASE 4: INTELLIGENT SYSTEM ROUTING                     |
|                   [API Health & Connectivity Check]                           |
|                    /                             \\                           |
|       (Online / Healthy)                 (Offline / Low-Bandwidth)            |
|              v                                      v                         |
|   [Google Gemini 2.5 Flash]              [Local Heuristic Fallback]           |
|   - Strict JSON Schema                   - Multi-token semantic density       |
|   - Zero Temperature (Deterministic)     - Lexical entropy & anti-gaming      |
|   - Vernacular logic de-jargonizing      - Flagged for Human Escalation Audit |
+---------------------------------------+---------------------------------------+
                                        |
                                        v
+-------------------------------------------------------------------------------+
|                      PHASE 5: STANDARDIZED 3D SCORING MATRIX                  |
|  1. Problem Alignment (30%): Strategic intent and core objective match       |
|  2. Operational Feasibility (35%): Execution steps, local constraints          |
|  3. Cost & ROI Logic (35%): Quantitative unit economics, margin defense       |
|  --> Output: Composite Score (0-100%) + Actionable Growth Feedback            |
+---------------------------------------+---------------------------------------+
                                        |
                                        v
+-------------------------------------------------------------------------------+
|                      PHASE 6: PROOF-OF-WORK PROFILE GENERATION                |
|  - Verifiable Candidate Record generated (Hash ID + Rubric Breakdown)        |
|  - Blind merit profile: Zero pedigree, zero gender/caste indicators           |
+---------------------------------------+---------------------------------------+
                                        |
                                        v
+-------------------------------------------------------------------------------+
|                      PHASE 7: ENTERPRISE RECRUITER DASHBOARD                  |
|  - High-scoring candidates (>=75%) syndicated to regional talent pipeline     |
|  - Enterprise recruiters inspect logic breakdowns, cost models, & summaries   |
|  - Direct interview invites dispatched; 70% screening cycle reduction        |
+-------------------------------------------------------------------------------+

## 3. Itemized Step-by-Step Explanation
1. User at Transit Hub / Bus Stop: Commuter engages with the physical node during 15-45 min dwell time and scans the QR code on the solar kiosk or printed transit shelter hoarding.
2. Mobile Web App Landing: Launches lightweight, zero-install client where the candidate reviews sponsor-backed micro-briefs and Gemini-powered plain-language question scaffolding.
3. Candidate Submits Proposal: Candidate inputs step-by-step operational proposal in English or Hinglish; candidate pedigree and institutional names are scrubbed.
4. System API Check: Checks network connectivity and API latency; routes to Google Gemini 2.5 Flash via strict JSON schema or the local offline fallback heuristic.
5. Standardized 3D Scoring Matrix: Evaluates Proposal on Problem Alignment (30%), Operational Feasibility (35%), and Cost & Logic (35%).
6. Candidate Proof-of-Work Profile: Anonymized digital portfolio card created with verifiable cryptographic submission hash and score badges.
7. Enterprise Recruiter Dashboard: Unlocks pre-screened, high-scoring regional talent for verified operational and logistics roles.`;

  const geminiBriefMarkdown = `# TECHNICAL BRIEF: PLATFORM AI ARCHITECTURE & GEMINI INTEGRATION
Document Title: Technical Brief: Platform AI Architecture & Gemini Integration
Prepared by: Technical Implementation Team
Date: September 20, 2026
Document Type: System Architecture & Integration Guide

## 1. Core Purpose of Gemini in Our Platform
Google Gemini acts as our automated, objective evaluation engine. Instead of relying on manual resume reviews or basic keyword matching, Gemini processes open-ended business proposals submitted by candidates and evaluates the practical quality of their reasoning.

## 2. Key Areas of Usage
- Structure & Clarity Analysis: Verifies actionable steps, operational logic, and realistic resource estimates without requiring consulting jargon.
- Local Context Assessment: Validates regional constraints (Tier-2/3 supply chain realities, infrastructure, local cost numbers).
- Objective Scoring Breakdown: Evaluates Problem Alignment (30%), Operational Feasibility (35%), and Cost & Logic (35%).
- Actionable Feedback Generation: Generates 2-3 brief, constructive feedback pointers highlighting candidate strengths and growth areas.
- API Resilience & Safeguards: Details temperature controls for deterministic scoring, JSON schema enforcement, and fail-safe queuing to local fallback engines during network drops.

## 3. Architectural Specifications
- Primary Model: models/gemini-2.5-flash
- Protocol: Server-side Express API Proxy (/api/evaluate)
- Temperature: 0.1 (Strict deterministic calibration)
- Output Enforcement: responseMimeType: "application/json" with structured responseSchema`;

  return (
    <div className="space-y-6">
      {/* Top Document Controls (Screen Only) */}
      <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 print:hidden">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-800 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5 text-indigo-600" />
            Official Internal Memorandum &amp; Technical Briefs
          </div>
          <h2 className="text-xl font-bold text-stone-900">
            Print-Ready Executive Documents
          </h2>
          <p className="text-xs text-stone-600">
            Standardized single-page executive briefs formatted for direct PDF export, team distribution, or review.
          </p>
        </div>

        {/* Tab & Export Actions */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="bg-stone-100 p-1 rounded-xl flex items-center gap-1 text-xs">
            <button
              onClick={() => setActiveDoc("flow-diagram")}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeDoc === "flow-diagram"
                  ? "bg-white text-stone-900 shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Prompt 2: Data Flow Diagram
            </button>
            <button
              onClick={() => setActiveDoc("gemini-brief")}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeDoc === "gemini-brief"
                  ? "bg-white text-stone-900 shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Prompt 3: Gemini AI Brief
            </button>
          </div>

          <button
            onClick={() =>
              handleCopyMarkdown(
                activeDoc,
                activeDoc === "flow-diagram"
                  ? flowDiagramMarkdown
                  : geminiBriefMarkdown
              )
            }
            className="px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-stone-700 text-xs font-semibold hover:bg-stone-50 flex items-center gap-1.5 transition-colors shadow-xs"
          >
            {copied === activeDoc ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                Copied Markdown
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-stone-500" />
                Copy Raw Text
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-1.5 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            Save as PDF / Print
          </button>
        </div>
      </div>

      {/* DOCUMENT 1: SYSTEM DATA FLOW & ARCHITECTURE DIAGRAM */}
      {activeDoc === "flow-diagram" && (
        <article className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-sm max-w-4xl mx-auto font-sans text-stone-900 print:border-none print:shadow-none print:p-0">
          {/* Header Metadata Bar */}
          <div className="border-b-2 border-stone-900 pb-5 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-wider text-stone-500 mb-2">
              <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Document Type: System Engineering Overview
              </span>
              <span>Date: September 20, 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950">
              System Data Flow &amp; Architecture Diagram
            </h1>
            <p className="text-sm text-stone-600 mt-1 font-medium">
              Kinetic Opportunity Mesh (KOM Node) • Candidate Journey from Transit Discovery to Enterprise ATS Placement
            </p>
          </div>

          {/* Executive Overview Callout */}
          <div className="bg-stone-50 border-l-4 border-stone-900 p-4 rounded-r-xl mb-8 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-800 block">
              1. Executive Architecture Summary
            </span>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              This document outlines the operational data pipeline of the KOM Node platform. It illustrates how physical transit touchpoints in Tier-2/3 transit hubs connect seamlessly with an ultra-lightweight mobile web client, an objective Google Gemini 2.5 Flash evaluation engine (with local heuristic failover), a standardized 3D scoring matrix, and a direct enterprise recruiter discovery dashboard.
            </p>
          </div>

          {/* Clean ASCII Flow Chart */}
          <section className="mb-8 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold tracking-wide uppercase text-stone-900 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-stone-700" />
                2. Visual System Data Flow
              </h2>
              <span className="text-[11px] font-mono text-stone-500">
                Format: Clean Structural Flow Diagram
              </span>
            </div>

            <div className="bg-stone-950 text-stone-100 rounded-xl p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto shadow-inner border border-stone-800">
              <pre className="whitespace-pre">
{`+-------------------------------------------------------------------------------+
|                       STEP 1: TRANSIT HUB DISCOVERY                           |
|  [Commuter at Bus Stop] ---> [Scans QR on Kiosk / Transit Shelter Poster]     |
+---------------------------------------+---------------------------------------+
                                        | (HTTPS / Instant Mobile Launch)
                                        v
+-------------------------------------------------------------------------------+
|                    STEP 2: MOBILE WEB APP LANDING PAGE                        |
|  * Lightweight PWA (<35KB bundle) loads in mobile browser                     |
|  * Candidate selects Corporate Problem Brief (Logistics / Retail / Agritech)  |
|  * Reads Gemini Logic Scaffolding (Jargon-free goals & 3 guiding questions)   |
+---------------------------------------+---------------------------------------+
                                        |
                                        v
+-------------------------------------------------------------------------------+
|                    STEP 3: CANDIDATE OPERATIONAL PROPOSAL                     |
|  * Writes actionable step-by-step proposal (Text/Voice in English or Hinglish)|
|  * Automatic anonymization: College/pedigree identifiers stripped             |
+---------------------------------------+---------------------------------------+
                                        |
                                        v
+-------------------------------------------------------------------------------+
|                    STEP 4: INTELLIGENT SYSTEM ROUTING                         |
|                   [API Health & Connectivity Check]                           |
|                    /                             \\                           |
|       (Online / Normal Network)             (Offline / Low-Bandwidth Drop)    |
|              v                                      v                         |
|   [Google Gemini 2.5 Flash Engine]       [Local Heuristic Fallback Engine]    |
|   * Strict JSON Schema Validation        * Lexical entropy & TTR verification |
|   * Temperature: 0.1 (Deterministic)     * Anti-gaming keyword density check  |
|   * Vernacular de-jargonizing parser     * Flagged for Human Escalation Desk  |
+---------------------------------------+---------------------------------------+
                                        |
                                        v
+-------------------------------------------------------------------------------+
|                   STEP 5: STANDARDIZED 3D SCORING MATRIX                      |
|  [1] Problem Alignment (30%): Strategic intent match & goal resolution        |
|  [2] Operational Feasibility (35%): Ground execution, realistic constraints   |
|  [3] Cost & Logic (35%): Unit economics, margin defense, resource calculus    |
|  --> Computes Composite Score (0-100%) + 2-3 Actionable Growth Pointers       |
+---------------------------------------+---------------------------------------+
                                        |
                                        v
+-------------------------------------------------------------------------------+
|                   STEP 6: CANDIDATE PROOF-OF-WORK PROFILE                     |
|  * Verifiable credential record generated with tamper-evident submission hash |
|  * Anonymized merit badge: Zero pedigree bias, pure demonstration of logic    |
+---------------------------------------+---------------------------------------+
                                        |
                                        v
+-------------------------------------------------------------------------------+
|                   STEP 7: ENTERPRISE RECRUITER DASHBOARD                      |
|  * High-scoring candidates (>=75%) syndicated to regional talent pipeline     |
|  * Corporate HR reviews logic breakdowns, cost models, & verified summaries   |
|  * Direct interview invites dispatched; 70% reduction in screening cycles    |
+-------------------------------------------------------------------------------+`}
              </pre>
            </div>
          </section>

          {/* Itemized Step-by-Step Breakdown */}
          <section className="space-y-4 mb-8">
            <h2 className="text-sm font-bold tracking-wide uppercase text-stone-900 border-b border-stone-200 pb-2">
              3. Itemized Step-by-Step Architectural Walkthrough
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/70 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h3 className="text-xs font-bold text-stone-900">
                    User at Transit Hub / Bus Stop
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pl-7">
                  Commuters capitalize on the <strong>15–45 minute transit waiting dividend</strong> at State Road Transport Corporation (SRTC) stops by scanning high-contrast QR codes on kiosks or hoardings.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/70 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h3 className="text-xs font-bold text-stone-900">
                    Mobile Web App Landing Page
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pl-7">
                  Instantly renders an ultra-low-bandwidth client (&lt;35KB). Candidate browses live sponsor dilemmas and receives plain-language scaffolding generated by Gemini.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/70 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h3 className="text-xs font-bold text-stone-900">
                    Operational Proposal Submission
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pl-7">
                  Candidate writes a structured proposal detailing location setup, logistics workflow, and unit economics. All institutional and gender identifiers are scrubbed.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/70 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h3 className="text-xs font-bold text-stone-900">
                    Dual-Path System API Routing
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pl-7">
                  The API verifies network latency. If connected, payload passes to <strong>Google Gemini 2.5 Flash</strong>; in low-bandwidth scenarios, it triggers the anti-gaming fallback with human audit queuing.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/70 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h3 className="text-xs font-bold text-stone-900">
                    Standardized 3D Scoring Matrix
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pl-7">
                  Evaluates Problem Alignment (30%), Feasibility (35%), and Cost Logic (35%) to return an objective composite score (0–100%) and targeted constructive feedback.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/70 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h3 className="text-xs font-bold text-stone-900">
                    Candidate Proof-of-Work Profile
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pl-7">
                  Creates an unalterable candidate portfolio entry that reflects demonstrated practical logic rather than resume keywords or university tiering.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-emerald-50/60 text-emerald-950 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h3 className="text-xs font-bold text-emerald-900">
                  Enterprise Recruiter Dashboard Syndication
                </h3>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed pl-7">
                Corporate talent acquisition teams in supply chain, logistics, and retail directly filter top-performing candidates by region, domain mastery, and score. Employers contact candidates directly, cutting corporate screening overhead by over 70%.
              </p>
            </div>
          </section>

          {/* Key Executive Takeaways */}
          <div className="border-t border-stone-200 pt-5 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700">
              Key Executive Takeaways
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-600">
              <li className="flex items-start gap-1.5 bg-stone-50 p-2.5 rounded-lg border border-stone-200/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Zero-CapEx Deployment:</strong> Leverages existing transit QR posters &amp; commuter smartphones.</span>
              </li>
              <li className="flex items-start gap-1.5 bg-stone-50 p-2.5 rounded-lg border border-stone-200/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Anti-Gaming Logic:</strong> Multi-token entropy and schema enforcement eliminate keyword stuffing.</span>
              </li>
              <li className="flex items-start gap-1.5 bg-stone-50 p-2.5 rounded-lg border border-stone-200/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>70% Screening Reduction:</strong> Delivers pre-vetted candidates based on verified operational proof.</span>
              </li>
            </ul>
          </div>
        </article>
      )}

      {/* DOCUMENT 2: TECHNICAL BRIEF: PLATFORM AI ARCHITECTURE & GEMINI INTEGRATION */}
      {activeDoc === "gemini-brief" && (
        <article className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-sm max-w-4xl mx-auto font-sans text-stone-900 print:border-none print:shadow-none print:p-0">
          {/* Header Metadata */}
          <div className="border-b-2 border-stone-900 pb-5 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-wider text-stone-500 mb-2">
              <span className="font-semibold text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                Document Type: System Architecture &amp; Integration Guide
              </span>
              <span>Date: September 20, 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950">
              Technical Brief: Platform AI Architecture &amp; Gemini Integration
            </h1>
            <div className="flex flex-wrap items-center justify-between gap-2 mt-2 text-xs text-stone-600 font-medium">
              <span>Prepared by: Technical Implementation Team</span>
              <span className="font-mono text-stone-500">Core Engine: Google Gemini 2.5 Flash</span>
            </div>
          </div>

          {/* Section 1: Core Purpose */}
          <section className="mb-8 space-y-3">
            <div className="flex items-center gap-2 border-b border-stone-200 pb-1.5">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <h2 className="text-sm font-bold tracking-wide uppercase text-stone-900">
                1. Core Purpose of Gemini in Our Platform
              </h2>
            </div>
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 text-xs sm:text-sm text-stone-800 leading-relaxed space-y-2">
              <p>
                <strong>Google Gemini acts as our automated, objective evaluation engine.</strong> Rather than relying on manual resume screening, keyword filtering, or institutional prestige, Gemini analyzes open-ended business proposals submitted by Tier-2/3 candidates and evaluates the practical rigor of their operational reasoning.
              </p>
              <p className="text-stone-600 text-xs">
                By translating raw unstructured submissions into verified competence metrics, Gemini bridges the information gap between grassroots problem solvers and national corporate recruiters.
              </p>
            </div>
          </section>

          {/* Section 2: Key Areas of Usage */}
          <section className="mb-8 space-y-4">
            <h2 className="text-sm font-bold tracking-wide uppercase text-stone-900 border-b border-stone-200 pb-1.5">
              2. Key Areas of Usage &amp; Algorithmic Responsibilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="border border-stone-200 rounded-xl p-4 bg-stone-50/50 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-xs">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  Structure &amp; Clarity Analysis
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Verifies that the candidate provides <strong>actionable steps</strong>, <strong>operational sequencing</strong>, and <strong>realistic resource allocations</strong>. Evaluates underlying causal logic without penalizing candidates for colloquial phrasing or lack of consulting jargon.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border border-stone-200 rounded-xl p-4 bg-stone-50/50 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  Local Context &amp; Reality Assessment
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Validates ground-level feasibility against <strong>Tier-2/3 logistics constraints</strong> (e.g., auto-rickshaw union charges, inter-state bus schedule lags, local warehousing rates, and rural power availability).
                </p>
              </div>

              {/* Card 3 */}
              <div className="border border-stone-200 rounded-xl p-4 bg-stone-50/50 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-xs">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  Objective 3D Scoring Breakdown
                </div>
                <div className="text-xs text-stone-600 space-y-1">
                  <p>Mathematical scoring enforced across three standardized dimensions:</p>
                  <ul className="list-disc list-inside text-[11px] space-y-0.5 pl-1 font-medium text-stone-700">
                    <li><strong>Problem Alignment (30%):</strong> Fit to core micro-brief.</li>
                    <li><strong>Operational Feasibility (35%):</strong> Execution validity.</li>
                    <li><strong>Cost &amp; Logic (35%):</strong> Quantitative unit economics.</li>
                  </ul>
                </div>
              </div>

              {/* Card 4 */}
              <div className="border border-stone-200 rounded-xl p-4 bg-stone-50/50 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-xs">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  Actionable Feedback Generation
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Generates <strong>2–3 concise, highly actionable feedback points</strong>. Highlights key candidate analytical strengths while pinpointing operational gaps for continuous skill development.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: API Resilience & Safeguards */}
          <section className="mb-8 space-y-3">
            <h2 className="text-sm font-bold tracking-wide uppercase text-stone-900 border-b border-stone-200 pb-1.5 flex items-center justify-between">
              <span>3. API Resilience &amp; Deterministic Safeguards</span>
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Production Ready
              </span>
            </h2>

            <div className="bg-stone-900 text-stone-100 rounded-xl p-5 space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-b border-stone-800 pb-3 text-stone-300">
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase">Sampling Temperature</span>
                  <span className="text-emerald-400 font-bold text-sm">0.1</span>
                  <p className="text-[10px] text-stone-400 mt-0.5">Strict deterministic scoring</p>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase">Payload Schema</span>
                  <span className="text-emerald-400 font-bold text-sm">Strict JSON Schema</span>
                  <p className="text-[10px] text-stone-400 mt-0.5">Validated against TypeSchema</p>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase">Failover Mechanism</span>
                  <span className="text-emerald-400 font-bold text-sm">Dual-Tier Fallback</span>
                  <p className="text-[10px] text-stone-400 mt-0.5">Heuristic + Human escalation</p>
                </div>
              </div>

              <div className="space-y-2 text-[11px] leading-relaxed text-stone-300">
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Server-Side Proxy Security:</strong> All Gemini API credentials reside strictly in the Express Node.js environment (`process.env.GEMINI_API_KEY`). Browser clients never receive API keys.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Deterministic Calibration:</strong> Temperature set to 0.1 ensures that identical candidate proposals yield consistent, repeatable rubric scores across multiple evaluation cycles.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Fail-Safe Queuing:</strong> Transient network drops instantly trigger the offline heuristic engine. Submissions with scores above 65% are flagged for Human Review escalation to eliminate false positives.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Signoff Footer */}
          <div className="border-t-2 border-stone-200 pt-4 flex flex-wrap items-center justify-between text-xs text-stone-500">
            <span>Platform Integration Version 2.4.0 • Google AI Studio Ready</span>
            <span className="font-mono">Audit Status: Verified for FMC 2026 Submission</span>
          </div>
        </article>
      )}
    </div>
  );
};
