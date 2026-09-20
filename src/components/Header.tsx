import React from "react";
import {
  Compass,
  Cpu,
  Layers,
  MapPin,
  TrendingUp,
  Shield,
  FileText,
  Wifi,
  WifiOff,
  CheckCircle2,
  Sparkles,
  Mic,
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
    { id: "civic-entry", label: "Official FMC Entry", icon: Compass },
    { id: "shelter-3d", label: "3D Shelter Concept", icon: Sparkles },
    { id: "prototype", label: "Live Node Prototype", icon: Cpu },
    { id: "voice-live", label: "Voice Live Agent", icon: Mic },
    { id: "visual-artifact", label: "Visual Artifacts", icon: Layers },
  ];

  return (
    <header className="border-b border-stone-200 bg-stone-50/90 backdrop-blur-md sticky top-0 z-50">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-stone-200/60">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full font-semibold bg-emerald-100 text-emerald-800">
            Fund My Crazy 2026
          </span>
          <span className="text-stone-300">•</span>
          <span className="inline-flex items-center gap-1 text-stone-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Powered by Google Gemini 2.5 Flash
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
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-stone-900 text-stone-50 flex items-center justify-center font-bold text-sm tracking-wider shadow-sm">
              KOM
            </div>
            <div>
              <h1 className="text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
                KOM NODE
                <span className="text-xs font-normal text-stone-500 hidden sm:inline">
                  (Kinetic Opportunity Mesh)
                </span>
              </h1>
              <p className="text-xs text-stone-500">
                AI-Driven Proof-of-Work Talent Infrastructure Reimagining Public Transit
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-stone-900 text-stone-50 shadow-sm"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/60"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-stone-200" : "text-stone-400"}`} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
