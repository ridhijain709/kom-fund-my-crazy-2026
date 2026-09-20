import React, { useState } from "react";
import { Header } from "./components/Header";
import { LiveNodePrototype } from "./components/LiveNodePrototype";
import { VisualArtifact } from "./components/VisualArtifact";
import { CivicSubmissionDossier } from "./components/CivicSubmissionDossier";
import { GeminiEcosystemHub } from "./components/GeminiEcosystemHub";
import { TransitNode3DModel } from "./components/TransitNode3DModel";
import { VoiceLiveFeedbackAgent } from "./components/VoiceLiveFeedbackAgent";
import { GitHubDeploymentStatus } from "./components/GitHubDeploymentStatus";
import { ExecutiveBriefDocuments } from "./components/ExecutiveBriefDocuments";
import {
  ExternalLink,
  ShieldCheck,
  Sparkles,
  GitBranch,
  Layers,
  Cpu,
  Compass,
  Mic,
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("civic-entry");
  const [isLowBandwidth, setIsLowBandwidth] = useState<boolean>(false);

  return (
    <div
      className={`min-h-screen flex flex-col bg-stone-100/60 text-stone-900 ${
        isLowBandwidth ? "grayscale-20" : ""
      }`}
    >
      {/* Global Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLowBandwidth={isLowBandwidth}
        setIsLowBandwidth={setIsLowBandwidth}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {activeTab === "civic-entry" && (
          <CivicSubmissionDossier onNavigateTab={setActiveTab} />
        )}

        {activeTab === "shelter-3d" && (
          <TransitNode3DModel
            onActivateVoiceAgent={() => setActiveTab("voice-live")}
            onExploreBriefs={() => setActiveTab("prototype")}
          />
        )}

        {activeTab === "prototype" && (
          <LiveNodePrototype isLowBandwidth={isLowBandwidth} />
        )}

        {activeTab === "voice-live" && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 p-6 sm:p-7 rounded-2xl border border-stone-800 text-stone-100 shadow-xl flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
                  <Mic className="w-3.5 h-3.5 text-amber-400" />
                  Voice Live Agent Feedback Loop
                </div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Conversational Transit Audio Mentor for Students
                </h1>
                <p className="text-xs sm:text-sm text-stone-300">
                  Speak directly with the Gemini-powered voice mentor. Ask queries in Hindi, Hinglish, or English to test unit economics, translate corporate micro-briefs, or rehearse operational proposals out loud.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("prototype")}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all shadow-sm"
                >
                  Go to Live Kiosk Prototype →
                </button>
              </div>
            </div>

            <VoiceLiveFeedbackAgent
              briefTitle="Cold-Storage Staging at Transit Corridors"
              briefGoal="Enable smallholder farmers to store perishable agri-produce at bus depots before early-morning freight departures at under ₹15 per crate."
              currentDraft="1. Ground Location: Convert unused luggage depot at Gorakhpur bus stand into an evaporative cooling bay. 2. Operations: Local transport drivers collect crates at 5 AM. 3. Cost: ₹10 per crate holding fee, saving 40% in spoilage."
            />
          </div>
        )}

        {(activeTab === "visual-artifact" ||
          activeTab === "causal-loop" ||
          activeTab === "demographics" ||
          activeTab === "roi-matrix" ||
          activeTab === "pilot" ||
          activeTab === "pitch-deck") && <VisualArtifact />}

        {activeTab === "deployment" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                <GitBranch className="w-4 h-4 text-emerald-600" />
                Repository &amp; Production Deployment Telemetry
              </div>
              <h2 className="text-xl font-bold text-stone-900 mt-1">
                Continuous Integration &amp; Cloud Deployment Health
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Direct verification of commit history, repository contributors, and issue status from the official project repository.
              </p>
            </div>

            <GitHubDeploymentStatus variant="full-section" />
          </div>
        )}

        {activeTab === "pdf-docs" && <ExecutiveBriefDocuments />}

        {activeTab === "gemini-hub" && <GeminiEcosystemHub />}
      </main>

      {/* Global Footer with Dynamic Deployment Badge & Repository Telemetry */}
      <footer className="border-t border-stone-200 bg-white pt-8 pb-6 text-xs text-stone-500 mt-12 space-y-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Dynamically Updated Badge Displaying Commit Status, Contributor Count & Issue Status */}
          <div className="mb-6">
            <GitHubDeploymentStatus variant="footer-embedded" />
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-stone-900">KOM Node</span>
              <span>•</span>
              <span>Fund My Crazy 2026 Submission</span>
              <span>•</span>
              <span className="text-emerald-700 font-medium flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Built with Google Gemini &amp; Antigravity
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setActiveTab("pdf-docs")}
                className="flex items-center gap-1.5 text-stone-700 hover:text-stone-950 font-medium transition-colors cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-indigo-600" />
                <span>Executive PDF Briefs &amp; Flow</span>
              </button>
              <span>•</span>
              <button
                onClick={() => setActiveTab("deployment")}
                className="flex items-center gap-1.5 text-stone-700 hover:text-stone-950 font-medium transition-colors cursor-pointer"
              >
                <GitBranch className="w-3.5 h-3.5 text-emerald-600" />
                <span>Dedicated Deployment Section</span>
              </button>
              <span>•</span>
              <a
                href="https://github.com/ridhijain709/kom-fund-my-crazy-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-stone-700 hover:text-stone-950 font-medium transition-colors"
              >
                <GitBranch className="w-3.5 h-3.5" />
                <span>GitHub: ridhijain709/kom-fund-my-crazy-2026</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
