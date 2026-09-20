import React, { useState } from "react";
import { SystemArchitectureDiagram } from "./SystemArchitectureDiagram";
import { PitchDeckViewer } from "./PitchDeckViewer";
import { DemographicAnalysis } from "./DemographicAnalysis";
import { EmployerRoiCalculator } from "./EmployerRoiCalculator";
import { GeminiEcosystemHub } from "./GeminiEcosystemHub";
import { ExecutiveBriefDocuments } from "./ExecutiveBriefDocuments";
import { TransitNode3DModel } from "./TransitNode3DModel";
import {
  Layers,
  FileText,
  MapPin,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Printer,
  Cpu,
} from "lucide-react";

export const VisualArtifact: React.FC = () => {
  const [subView, setSubView] = useState<
    "3d-model" | "architecture" | "pitch-deck" | "demographics" | "roi" | "gemini" | "pdf-docs"
  >("3d-model");

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Visual Artifact Header */}
      <div className="bg-stone-900 text-stone-50 rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
            <Layers className="w-4 h-4 text-emerald-400" />
            Fund My Crazy 2026 • Official Visual Artifacts
          </div>
          <span className="text-xs text-stone-400 font-mono">
            3D Shelter Concept • Interactive Architecture • Causal Loops • 6-Slide Deck
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Visual Artifact &amp; System Dynamics
          </h1>
          <p className="text-sm text-stone-300 leading-relaxed max-w-3xl">
            Complete visual representation of the KOM Node ecosystem: 3D retrofitted transit shelter concept, end-to-end data pipelines,
            reinforcing causal feedback loops, Tier-2 transit dwell times, and employer unit economics.
          </p>
        </div>

        {/* Sub-view Navigation Controls */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSubView("3d-model")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              subView === "3d-model"
                ? "bg-amber-500 text-stone-950 shadow-md font-bold"
                : "bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            3D Shelter Concept &amp; Poster
          </button>

          <button
            onClick={() => setSubView("architecture")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              subView === "architecture"
                ? "bg-emerald-500 text-stone-950 shadow-md font-bold"
                : "bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            System Architecture &amp; Causal Loops
          </button>

          <button
            onClick={() => setSubView("pitch-deck")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              subView === "pitch-deck"
                ? "bg-emerald-500 text-stone-950 shadow-md font-bold"
                : "bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            6-Slide Visual Pitch Deck
          </button>

          <button
            onClick={() => setSubView("demographics")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              subView === "demographics"
                ? "bg-emerald-500 text-stone-950 shadow-md font-bold"
                : "bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            Demographics: Bus Stops vs Metros
          </button>

          <button
            onClick={() => setSubView("roi")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              subView === "roi"
                ? "bg-emerald-500 text-stone-950 shadow-md font-bold"
                : "bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white"
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Employer ROI &amp; Economics
          </button>

          <button
            onClick={() => setSubView("gemini")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              subView === "gemini"
                ? "bg-emerald-500 text-stone-950 shadow-md font-bold"
                : "bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Built with Gemini (20% Rubric)
          </button>

          <button
            onClick={() => setSubView("pdf-docs")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              subView === "pdf-docs"
                ? "bg-indigo-400 text-stone-950 shadow-md font-bold"
                : "bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Executive Briefs &amp; PDF Export
          </button>
        </div>
      </div>

      {/* Render Selected Visual Sub-Artifact */}
      <div>
        {subView === "3d-model" && <TransitNode3DModel />}
        {subView === "architecture" && <SystemArchitectureDiagram />}
        {subView === "pitch-deck" && <PitchDeckViewer />}
        {subView === "demographics" && <DemographicAnalysis />}
        {subView === "roi" && <EmployerRoiCalculator />}
        {subView === "gemini" && <GeminiEcosystemHub />}
        {subView === "pdf-docs" && <ExecutiveBriefDocuments />}
      </div>
    </div>
  );
};
