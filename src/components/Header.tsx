import React from "react";
import {
  Compass,
  Cpu,
  Layers,
  FileText,
  Wifi,
  WifiOff,
  Sparkles,
  Mic,
  GitBranch,
} from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isLowBandwidth: boolean;
  setIsLowBandwidth: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isLowBandwidth,
  setIsLowBandwidth,
}) => {
  const navItems = [
    {
      id: "pitch-deck",
      label: "5 Official Pitch Pages",
      icon: FileText,
      featured: true,
    },
    { id: "civic-entry", label: "Official FMC Entry", icon: Compass },
    { id: "shelter-3d", label: "3D Shelter Concept", icon: Sparkles },
    { id: "prototype", label: "Live Node Prototype", icon: Cpu },
    { id: "voice-live", label: "Voice Live Agent", icon: Mic },
    { id: "visual-artifact", label: "Visual Artifacts", icon: Layers },
    { id: "pdf-docs", label: "PDF Briefs & Flow", icon: FileText },
    { id: "deployment", label: "Deployment", icon: GitBranch },
  ];

  return (
    <header className="border-b border-stone-200 bg-stone-50/90 backdrop-blur-md sticky top-0 z-50">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-stone-200/60">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-bold bg-amber-500 text-stone-950 shadow-xs">
            Fund My Crazy 2026
          </span>
          <span className="text-stone-300">•</span>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold border border-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            Team: Ridhi Jain (Leader) &amp; Vanshika (Core Teammate)
          </div>
          <span className="text-stone-300">•</span>
          <span className="inline-flex items-center gap-1 text-stone-600 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Live on Vercel
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsLowBandwidth(!isLowBandwidth)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
              isLowBandwidth
                ? "bg-amber-100 text-amber-900 border border-amber-300"
                : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-100"
            }`}
            title="Simulate Low-Bandwidth E-Paper Transit Mode (Optimized for 2G/3G Regional Stations)"
          >
            {isLowBandwidth ? (
              <>
                <WifiOff className="w-3.5 h-3.5 text-amber-700" />
                <span>Low-Bandwidth E-Paper Mode: ON</span>
              </>
            ) : (
              <>
                <Wifi className="w-3.5 h-3.5 text-emerald-600" />
                <span>Standard Web UI</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Brand Title & Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-stone-900 text-stone-50 flex items-center justify-center font-extrabold text-sm tracking-wider shadow-sm border border-stone-700">
              KOM
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-stone-900 tracking-tight flex items-center gap-2">
                UnBias AI <span className="text-stone-400 font-normal">• KOM Node</span>
                <span className="text-[11px] font-mono font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                  Ridhi &amp; Vanshika
                </span>
              </h1>
              <p className="text-xs text-stone-600 font-medium">
                AI-Driven Proof-of-Work Regional Talent Infrastructure • Powered by Google Gemini
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            const isFeatured = (item as any).featured;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? isFeatured
                      ? "bg-amber-500 text-stone-950 font-extrabold shadow-sm ring-1 ring-amber-600"
                      : "bg-stone-900 text-stone-50 shadow-sm"
                    : isFeatured
                    ? "bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 font-bold"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/60"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    isActive
                      ? isFeatured
                        ? "text-stone-950"
                        : "text-stone-200"
                      : isFeatured
                      ? "text-amber-700"
                      : "text-stone-400"
                  }`}
                />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
