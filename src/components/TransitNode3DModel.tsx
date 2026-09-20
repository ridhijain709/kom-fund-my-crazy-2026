import React, { useState } from "react";
import {
  Sun,
  Moon,
  Sparkles,
  Layers,
  Cpu,
  Radio,
  Zap,
  Maximize2,
  Minimize2,
  CheckCircle2,
  Info,
  ExternalLink,
  Volume2,
  Mic,
  Shield,
  ArrowRight,
  Eye,
  Sliders,
  Palette,
  Compass,
  Gauge,
  Activity,
  Layers3,
} from "lucide-react";
import posterImage from "../assets/images/transit_hub_node_1789885397488.jpg";

export type ModelColorProfileId =
  | "kinetic-amber"
  | "cyber-cyan"
  | "vedic-saffron"
  | "emerald-matrix";

interface ModelColorProfile {
  id: ModelColorProfileId;
  name: string;
  tagline: string;
  primaryAccent: string;
  secondaryAccent: string;
  canvasBackdrop: string;
  glowClass: string;
  filterClass: {
    twilight: string;
    day: string;
    night: string;
  };
  pinActiveBg: string;
  pinInactiveBg: string;
  pinBorder: string;
  badgeClass: string;
  borderAccent: string;
  chassisMaterial: string;
}

export const MODEL_COLOR_PROFILES: Record<ModelColorProfileId, ModelColorProfile> = {
  "kinetic-amber": {
    id: "kinetic-amber",
    name: "Solar Obsidian & Kinetic Amber",
    tagline: "Signature FMC 2026 High-Contrast Civic Archetype",
    primaryAccent: "#f59e0b",
    secondaryAccent: "#10b981",
    canvasBackdrop: "from-stone-950 via-stone-900 to-amber-950/40",
    glowClass: "bg-amber-500/30 blur-2xl",
    filterClass: {
      twilight: "brightness-105 contrast-105 saturate-110",
      day: "brightness-110 contrast-100 saturate-105",
      night: "brightness-95 contrast-120 saturate-115 hue-rotate-5",
    },
    pinActiveBg: "bg-amber-400 text-stone-950",
    pinInactiveBg: "bg-stone-900 text-amber-300",
    pinBorder: "border-amber-400",
    badgeClass: "bg-amber-500/15 text-amber-300 border-amber-500/40",
    borderAccent: "border-amber-500/30",
    chassisMaterial: "Anodized Matte Carbon (Zero-Glare)",
  },
  "cyber-cyan": {
    id: "cyber-cyan",
    name: "Cyber Transit & Bioluminescent Cyan",
    tagline: "Electric Neon Night Corridor with High-Visibility E-Paper",
    primaryAccent: "#06b6d4",
    secondaryAccent: "#3b82f6",
    canvasBackdrop: "from-slate-950 via-cyan-950/40 to-slate-950",
    glowClass: "bg-cyan-500/30 blur-2xl",
    filterClass: {
      twilight: "brightness-100 contrast-110 hue-rotate-[170deg] saturate-125",
      day: "brightness-105 contrast-105 hue-rotate-[160deg] saturate-115",
      night: "brightness-90 contrast-125 hue-rotate-[185deg] saturate-140",
    },
    pinActiveBg: "bg-cyan-400 text-slate-950",
    pinInactiveBg: "bg-slate-900 text-cyan-300",
    pinBorder: "border-cyan-400",
    badgeClass: "bg-cyan-500/15 text-cyan-300 border-cyan-500/40",
    borderAccent: "border-cyan-500/30",
    chassisMaterial: "Cobalt Titanium Cladding with Ice-Blue Backlight",
  },
  "vedic-saffron": {
    id: "vedic-saffron",
    name: "Vedic Saffron & Terracotta Sandstone",
    tagline: "Regional North-Indian Corridor (Agra • Gorakhpur • Varanasi)",
    primaryAccent: "#ea580c",
    secondaryAccent: "#f59e0b",
    canvasBackdrop: "from-stone-950 via-amber-950/50 to-orange-950/60",
    glowClass: "bg-orange-500/35 blur-2xl",
    filterClass: {
      twilight: "brightness-105 contrast-110 sepia-[0.35] saturate-135 hue-rotate-[-15deg]",
      day: "brightness-110 contrast-105 sepia-[0.2] saturate-120",
      night: "brightness-90 contrast-120 sepia-[0.45] saturate-140 hue-rotate-[-10deg]",
    },
    pinActiveBg: "bg-orange-500 text-stone-950",
    pinInactiveBg: "bg-stone-900 text-orange-300",
    pinBorder: "border-orange-500",
    badgeClass: "bg-orange-500/15 text-orange-300 border-orange-500/40",
    borderAccent: "border-orange-500/30",
    chassisMaterial: "Brushed Vedic Bronze & Sandstone Polycarbonate",
  },
  "emerald-matrix": {
    id: "emerald-matrix",
    name: "Phosphor Emerald & Tactical Matrix",
    tagline: "Eco-Kinetic Low-Power Architecture with Monochromatic HUD",
    primaryAccent: "#10b981",
    secondaryAccent: "#059669",
    canvasBackdrop: "from-stone-950 via-emerald-950/30 to-stone-950",
    glowClass: "bg-emerald-500/30 blur-2xl",
    filterClass: {
      twilight: "brightness-100 contrast-115 hue-rotate-[90deg] saturate-120",
      day: "brightness-105 contrast-105 hue-rotate-[80deg] saturate-110",
      night: "brightness-85 contrast-130 hue-rotate-[100deg] saturate-135",
    },
    pinActiveBg: "bg-emerald-400 text-stone-950",
    pinInactiveBg: "bg-stone-900 text-emerald-300",
    pinBorder: "border-emerald-400",
    badgeClass: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
    borderAccent: "border-emerald-500/30",
    chassisMaterial: "Recycled Carbon-Graphite Composite (IP67)",
  },
};

interface Hotspot {
  id: string;
  title: string;
  tag: string;
  x: number; // percentage from left
  y: number; // percentage from top
  summary: string;
  specs: { [key: string]: string };
  actionLabel?: string;
  actionId?: string;
}

interface TransitNode3DModelProps {
  onActivateVoiceAgent?: () => void;
  onExploreBriefs?: () => void;
}

export const TransitNode3DModel: React.FC<TransitNode3DModelProps> = ({
  onActivateVoiceAgent,
  onExploreBriefs,
}) => {
  const [colorProfileId, setColorProfileId] = useState<ModelColorProfileId>("kinetic-amber");
  const [lightingMode, setLightingMode] = useState<"twilight" | "day" | "night">("twilight");
  const [selectedHotspot, setSelectedHotspot] = useState<string>("kiosk-terminal");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showColorCustomizer, setShowColorCustomizer] = useState(false);
  const [solarBloomIntensity, setSolarBloomIntensity] = useState<"subtle" | "high" | "overdrive">("high");
  const [activeTab, setActiveTab] = useState<"interactive-model" | "poster-breakdown" | "specs-matrix">("interactive-model");

  const currentTheme = MODEL_COLOR_PROFILES[colorProfileId];

  const hotspots: Hotspot[] = [
    {
      id: "epaper-screens",
      title: "Low-Power Dual E-Paper Opportunity Displays",
      tag: "Dynamic Visual Interface",
      x: 38,
      y: 46,
      summary:
        "High-contrast, zero-glare e-paper panels powered by ambient light. Displays de-jargonized 80-word corporate micro-briefs refreshed every 15 minutes without eye strain in direct tropical sunlight.",
      specs: {
        "Power Draw": "1.8W (Bistable E-Ink)",
        "Readability": "Full Sunlight Direct Contrast (300 PPI)",
        "Refresh Cycle": "15-minute dwell interval sync",
        "Cost": "₹12,400 per dual display module",
      },
      actionLabel: "Explore Live Briefs",
      actionId: "briefs",
    },
    {
      id: "kiosk-terminal",
      title: "Interactive Voice & Touch Terminal",
      tag: "Gemini Live Audio Interface",
      x: 52,
      y: 62,
      summary:
        "Featuring 'TAP OR SPEAK TO EXPLORE BRIEFS'. Commuting students converse directly with the Gemini Voice Live Agent to clarify operational logic, check unit economics, or record proposals in Hindi and English.",
      specs: {
        "Voice Engine": "Google Gemini 2.5 Flash Live API",
        "Input": "Directional Noise-Canceling Mic Array",
        "Dialects": "Hindi, Hinglish, Indian English",
        "Offline Buffer": "Local flash cache for 2G/3G outages",
      },
      actionLabel: "Launch Live Voice Mentor",
      actionId: "voice",
    },
    {
      id: "solar-pillar",
      title: "Solar Kinetic Energy Core & Thermal Battery",
      tag: "Zero-Grid Autonomy",
      x: 64,
      y: 50,
      summary:
        "Center ambient amber pillar combining transparent rooftop solar trickle collectors with a safe LiFePO4 battery pack. Keeps the transit shelter self-powered 24/7 without drawing a single watt from the municipal grid.",
      specs: {
        "Storage Capacity": "480 Wh LiFePO4 Battery Buffer",
        "Solar Yield": "120W Rooftop Translucent Glass",
        "Autonomy": "72 hours continuous operation in monsoon clouds",
        "Safety Rating": "IP67 Weatherproof & Vandal-Resistant",
      },
    },
    {
      id: "mesh-antenna",
      title: "Corporate Exhaust Cloud Receiver & 4G/SMS Bridge",
      tag: "Data Pipeline",
      x: 72,
      y: 28,
      summary:
        "Lightweight low-bandwidth edge gateway that pulls unfilled problem statements directly from Tier-1 corporate supply chains and translates them on-the-fly via Google Gemini.",
      specs: {
        "Protocol": "MQTT / Low-Power Cellular IoT",
        "Bandwidth": "< 50 KB daily per node (SMS Fallback)",
        "Latency": "< 450ms for live voice audio queries",
        "Encryption": "End-to-end tokenized anonymization",
      },
    },
    {
      id: "dwell-zone",
      title: "Commuter Transit Shelter & Dwell Zone",
      tag: "Spatial Infrastructure",
      x: 28,
      y: 72,
      summary:
        "Converts 15 to 45 minutes of wasted transit waiting time into verified career capital. Non-metro youth solve real-world industry challenges on their journey to college or work.",
      specs: {
        "Daily Footfall": "800 – 1,800 commuting passengers",
        "Mean Dwell Time": "22.4 minutes",
        "Conversion": "14.2% active problem engagement",
        "Municipal Approval": "Retrofits existing SRTC bus shelters",
      },
    },
  ];

  const activeHotspotData = hotspots.find((h) => h.id === selectedHotspot) || hotspots[1];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Header & Customizer Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2.5 rounded-2xl border border-stone-200 shadow-xs">
        {/* Navigation Sub-Tabs */}
        <div className="flex items-center gap-1 flex-wrap">
          <button
            onClick={() => setActiveTab("interactive-model")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "interactive-model"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>3D Physical Concept &amp; Model Explorer</span>
          </button>
          <button
            onClick={() => setActiveTab("poster-breakdown")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "poster-breakdown"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-indigo-500" />
            <span>Official Concept Poster &amp; Philosophy</span>
          </button>
          <button
            onClick={() => setActiveTab("specs-matrix")}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "specs-matrix"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-emerald-500" />
            <span>CapEx &amp; Engineering Specs</span>
          </button>
        </div>

        {/* Unique Model Color & Lighting Customization Controls */}
        {activeTab === "interactive-model" && (
          <div className="flex items-center gap-2 flex-wrap">
            {/* Unique Color Profile Quick Selector */}
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl border border-stone-200/80">
              <span className="text-[10px] text-stone-500 font-mono px-1 uppercase font-bold flex items-center gap-1">
                <Palette className="w-3 h-3 text-stone-600" />
                Colorway:
              </span>
              {(Object.keys(MODEL_COLOR_PROFILES) as ModelColorProfileId[]).map((pid) => {
                const p = MODEL_COLOR_PROFILES[pid];
                const isActive = pid === colorProfileId;
                return (
                  <button
                    key={pid}
                    onClick={() => setColorProfileId(pid)}
                    title={`${p.name} - ${p.tagline}`}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      isActive
                        ? "bg-stone-900 text-white shadow-xs ring-1 ring-stone-700"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/60"
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full ring-1 ring-white/50"
                      style={{ backgroundColor: p.primaryAccent }}
                    />
                    <span className="hidden sm:inline">
                      {pid === "kinetic-amber"
                        ? "Amber"
                        : pid === "cyber-cyan"
                        ? "Cyber Cyan"
                        : pid === "vedic-saffron"
                        ? "Saffron"
                        : "Emerald"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Lighting Mode Selector */}
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl text-xs border border-stone-200/80">
              <button
                onClick={() => setLightingMode("twilight")}
                className={`px-2 py-1 rounded-lg text-xs font-medium transition-all ${
                  lightingMode === "twilight"
                    ? "bg-amber-500 text-stone-950 font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                Twilight
              </button>
              <button
                onClick={() => setLightingMode("day")}
                className={`px-2 py-1 rounded-lg text-xs font-medium transition-all ${
                  lightingMode === "day"
                    ? "bg-white text-stone-900 font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                Day
              </button>
              <button
                onClick={() => setLightingMode("night")}
                className={`px-2 py-1 rounded-lg text-xs font-medium transition-all ${
                  lightingMode === "night"
                    ? "bg-stone-900 text-amber-300 font-bold shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                Night
              </button>
            </div>

            {/* Customizer Drawer Toggle */}
            <button
              onClick={() => setShowColorCustomizer(!showColorCustomizer)}
              title="Open Advanced Material & Color Customizer"
              className={`p-2 rounded-xl text-xs font-medium border transition-colors flex items-center gap-1 ${
                showColorCustomizer
                  ? "bg-stone-900 text-white border-stone-800"
                  : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Materials</span>
            </button>
          </div>
        )}
      </div>

      {/* Advanced Materials & Colorway Drawer */}
      {activeTab === "interactive-model" && showColorCustomizer && (
        <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 shadow-xl space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between border-b border-stone-800 pb-2">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-xs uppercase tracking-wider text-stone-200">
                Architectural Digital Twin: Material Finishes &amp; Optical Atmosphere
              </span>
            </div>
            <span className="text-[11px] font-mono text-amber-400">
              Active: {currentTheme.name}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            {/* Setting 1: Theme Archetype */}
            <div className="space-y-1.5 bg-stone-950/60 p-3 rounded-xl border border-stone-800">
              <span className="text-[10px] uppercase font-mono text-stone-400 font-bold">
                1. Structural Color Profile
              </span>
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                {(Object.keys(MODEL_COLOR_PROFILES) as ModelColorProfileId[]).map((pid) => {
                  const p = MODEL_COLOR_PROFILES[pid];
                  return (
                    <button
                      key={pid}
                      onClick={() => setColorProfileId(pid)}
                      className={`p-1.5 rounded-lg text-left text-[11px] font-medium border transition-all ${
                        colorProfileId === pid
                          ? "bg-stone-800 border-amber-400 text-white"
                          : "bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: p.primaryAccent }}
                        />
                        <span className="truncate">{p.name.split(" ")[0]}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Setting 2: Solar Core Luminescence Bloom */}
            <div className="space-y-1.5 bg-stone-950/60 p-3 rounded-xl border border-stone-800">
              <span className="text-[10px] uppercase font-mono text-stone-400 font-bold">
                2. Solar Core Luminescence
              </span>
              <div className="flex items-center gap-1.5 pt-1">
                {(["subtle", "high", "overdrive"] as const).map((intensity) => (
                  <button
                    key={intensity}
                    onClick={() => setSolarBloomIntensity(intensity)}
                    className={`flex-1 py-1 px-2 rounded-lg text-center text-[11px] font-medium border capitalize transition-colors ${
                      solarBloomIntensity === intensity
                        ? "bg-stone-800 border-amber-400 text-amber-300 font-bold"
                        : "bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200"
                    }`}
                  >
                    {intensity}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-stone-400 pt-1 font-mono">
                {solarBloomIntensity === "subtle"
                  ? "25% Photon glow • Minimum battery drain"
                  : solarBloomIntensity === "high"
                  ? "75% Optimized illumination • Direct sunlight"
                  : "100% Maximum twilight beacon • High visibility"}
              </p>
            </div>

            {/* Setting 3: Chassis Material Coating */}
            <div className="space-y-1.5 bg-stone-950/60 p-3 rounded-xl border border-stone-800">
              <span className="text-[10px] uppercase font-mono text-stone-400 font-bold">
                3. Physical Cladding Spec
              </span>
              <p className="font-semibold text-stone-200 text-xs">
                {currentTheme.chassisMaterial}
              </p>
              <div className="flex items-center justify-between text-[11px] text-stone-400 pt-1">
                <span>Thermal dissipation: 18°C</span>
                <span className="font-mono text-emerald-400">IP67 Waterproof</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 1: 3D SHELTER CONCEPT EXPLORER */}
      {activeTab === "interactive-model" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Visual Stage with Hotspots */}
          <div
            className={`lg:col-span-8 bg-gradient-to-br ${currentTheme.canvasBackdrop} rounded-2xl border ${currentTheme.borderAccent} overflow-hidden shadow-2xl relative group transition-colors duration-500`}
          >
            {/* Top Toolbar with Holographic HUD */}
            <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between gap-2 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-950/85 backdrop-blur-md text-xs font-semibold border border-stone-700/80 pointer-events-auto shadow-md">
                <span
                  className="w-2 h-2 rounded-full animate-ping"
                  style={{ backgroundColor: currentTheme.primaryAccent }}
                />
                <span className="text-white font-bold">KOM Node 3D Digital Twin</span>
                <span className="text-stone-400">•</span>
                <span
                  className="text-[11px] font-mono hidden sm:inline"
                  style={{ color: currentTheme.primaryAccent }}
                >
                  {currentTheme.name}
                </span>
              </div>

              <div className="flex items-center gap-2 pointer-events-auto">
                {/* HUD Telemetry Coordinate Badge */}
                <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-950/80 border border-stone-800 text-[10px] font-mono text-stone-400 backdrop-blur-md">
                  <Compass className="w-3 h-3 text-stone-400" />
                  <span>26.76°N, 83.37°E • GKP-04</span>
                </div>

                <button
                  onClick={() => setIsLightboxOpen(true)}
                  title="View full-resolution poster"
                  className="px-2.5 py-1.5 rounded-lg bg-stone-900/90 text-stone-300 hover:text-white border border-stone-700 text-xs flex items-center gap-1 backdrop-blur-md transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Poster View</span>
                </button>
              </div>
            </div>

            {/* Image Canvas with Ambient Lighting Filter & Dynamic Color Tint */}
            <div
              className={`relative overflow-hidden transition-all duration-700 ${
                currentTheme.filterClass[lightingMode]
              }`}
            >
              <img
                src={posterImage}
                alt="Retrofitted Transit Shelter Concept for KOM Node"
                className="w-full h-auto max-h-[640px] object-cover select-none"
              />

              {/* Ambient Glowing Solar Core Pulse Overlay with Dynamic Hue & Bloom */}
              <div
                style={{ left: "62%", top: "48%" }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-1000 ${
                  solarBloomIntensity === "subtle"
                    ? "w-28 h-28 opacity-40 blur-xl"
                    : solarBloomIntensity === "high"
                    ? "w-44 h-44 opacity-80 blur-2xl"
                    : "w-60 h-60 opacity-95 blur-3xl"
                } ${currentTheme.glowClass}`}
              />

              {/* Secondary Corner Photon Flare */}
              <div
                className="absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none blur-xl"
                style={{
                  left: "38%",
                  top: "45%",
                  backgroundColor: currentTheme.secondaryAccent,
                  opacity: lightingMode === "night" ? 0.6 : 0.25,
                }}
              />

              {/* Hotspot Interactive Markers */}
              {hotspots.map((h) => {
                const isSelected = h.id === selectedHotspot;
                return (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHotspot(h.id)}
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group/pin z-30 focus:outline-none"
                    title={h.title}
                  >
                    <span className="relative flex h-8 w-8 items-center justify-center">
                      <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                        style={{
                          backgroundColor: isSelected
                            ? currentTheme.primaryAccent
                            : currentTheme.secondaryAccent,
                        }}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-6 w-6 items-center justify-center font-bold text-[10px] shadow-lg border-2 transition-transform duration-200 group-hover/pin:scale-125 ${
                          isSelected
                            ? `${currentTheme.pinActiveBg} border-white scale-110`
                            : `${currentTheme.pinInactiveBg} ${currentTheme.pinBorder}`
                        }`}
                      >
                        {h.id === "kiosk-terminal" ? (
                          <Mic className="w-3 h-3" />
                        ) : h.id === "solar-pillar" ? (
                          <Zap className="w-3 h-3" />
                        ) : (
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: currentTheme.primaryAccent }}
                          />
                        )}
                      </span>
                    </span>

                    {/* Tooltip on Hover */}
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/pin:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-950/95 text-stone-100 text-[11px] font-semibold whitespace-nowrap border border-stone-700 shadow-xl pointer-events-none">
                      <span>{h.title}</span>
                    </span>
                  </button>
                );
              })}

              {/* Holographic Radar / Grid Watermark Overlay */}
              <div className="absolute bottom-16 right-4 pointer-events-none hidden md:flex flex-col items-end text-[9px] font-mono text-white/50 space-y-0.5 bg-black/40 backdrop-blur-xs p-2 rounded-lg border border-white/10">
                <div className="flex items-center gap-1 text-emerald-400">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>GRID HARVEST: 120W SOLAR</span>
                </div>
                <span>E-PAPER DRAW: 1.8W PASSIVE</span>
                <span>CHASSIS: {currentTheme.chassisMaterial.split(" ")[0]}</span>
              </div>
            </div>

            {/* Bottom Floating Bar */}
            <div className="p-4 bg-gradient-to-t from-stone-950 via-stone-950/95 to-transparent text-xs text-stone-300 flex flex-wrap items-center justify-between gap-3 border-t border-stone-800/80">
              <div className="flex items-center gap-2">
                <span
                  className="font-semibold flex items-center gap-1"
                  style={{ color: currentTheme.primaryAccent }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Interactive Architectural Hotspots:
                </span>
                <span className="text-stone-400 hidden sm:inline">
                  Click pins on the shelter to inspect component engineering
                </span>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                {hotspots.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHotspot(h.id)}
                    className={`px-2 py-1 rounded-md text-[11px] font-medium transition-colors ${
                      h.id === selectedHotspot
                        ? "text-stone-950 font-bold"
                        : "bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800"
                    }`}
                    style={
                      h.id === selectedHotspot
                        ? { backgroundColor: currentTheme.primaryAccent }
                        : {}
                    }
                  >
                    {h.title.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Component Deep-Dive Inspection Panel */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-5">
            <div className="space-y-1 border-b border-stone-100 pb-4">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border inline-block"
                  style={{
                    backgroundColor: `${currentTheme.primaryAccent}15`,
                    color: currentTheme.primaryAccent,
                    borderColor: `${currentTheme.primaryAccent}40`,
                  }}
                >
                  {activeHotspotData.tag}
                </span>
                <span className="text-[10px] font-mono text-stone-400">
                  {currentTheme.name.split(" ")[0]} Finish
                </span>
              </div>

              <h3 className="text-lg font-bold text-stone-900 pt-1">
                {activeHotspotData.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {activeHotspotData.summary}
            </p>

            {/* Engineering Specifications Card */}
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/70 space-y-2.5 text-xs">
              <span className="text-[11px] font-mono text-stone-500 uppercase font-bold block">
                Technical Specifications:
              </span>
              <div className="space-y-2">
                {Object.entries(activeHotspotData.specs).map(([key, val]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between border-b border-stone-200/50 pb-1.5"
                  >
                    <span className="text-stone-500">{key}</span>
                    <span className="font-semibold text-stone-900 font-mono text-right">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Action Button for Voice / Briefs */}
            {activeHotspotData.actionId === "voice" && onActivateVoiceAgent && (
              <button
                onClick={onActivateVoiceAgent}
                className="w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md text-stone-950"
                style={{
                  backgroundColor: currentTheme.primaryAccent,
                }}
              >
                <Mic className="w-4 h-4" />
                <span>Open Live Voice Feedback Agent</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {activeHotspotData.actionId === "briefs" && onExploreBriefs && (
              <button
                onClick={onExploreBriefs}
                className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Layers className="w-4 h-4" />
                <span>Simulate E-Paper Micro-Briefs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Quick Context Callout */}
            <div
              className="p-3.5 rounded-xl border text-xs space-y-1"
              style={{
                backgroundColor: `${currentTheme.primaryAccent}0d`,
                borderColor: `${currentTheme.primaryAccent}30`,
              }}
            >
              <span
                className="font-bold flex items-center gap-1 text-[11px]"
                style={{ color: currentTheme.primaryAccent }}
              >
                <Shield className="w-3.5 h-3.5" />
                Civic Utility Zero-CapEx Architecture:
              </span>
              <p className="text-[11px] text-stone-700 leading-relaxed">
                Rather than replacing municipal bus shelters at ₹18,00,000 each, KOM Node installs as a modular ₹42,000 retrofit clamp-on kit with zero civil excavation required.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: POSTER & PHILOSOPHY BREAKDOWN (THE 'WHAT' & THE 'WHY') */}
      {activeTab === "poster-breakdown" && (
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-8 shadow-sm">
          {/* Header */}
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              Fund My Crazy 2026 • Municipal Partnership
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-stone-900">
              KOM Node (Kinetic Opportunity Mesh) Official Concept Poster
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Deconstructing the structural thesis presented in the official 2026 architectural poster: bridging Ecosystem Apartheid by treating opportunity distribution as vital municipal infrastructure.
            </p>
          </div>

          {/* Full Poster Display with Zoom Lightbox Trigger */}
          <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-950 group">
            <img
              src={posterImage}
              alt="KOM Node Official Concept Poster"
              className="w-full h-auto max-h-[580px] object-contain mx-auto"
            />
            <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-white text-stone-900 font-bold text-xs shadow-xl flex items-center gap-2 hover:bg-stone-100 transition-transform scale-95 group-hover:scale-100"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Open Full-Resolution Lightbox</span>
              </button>
            </div>
          </div>

          {/* Side-by-Side The "WHAT" vs The "WHY" (As verbatim printed in the poster) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The WHAT */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
              <div className="flex items-center gap-2 text-indigo-700">
                <Cpu className="w-5 h-5" />
                <h3 className="text-base font-bold uppercase tracking-wider text-stone-900">
                  THE "WHAT": REIMAGINED FORM &amp; FUNCTION
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Retrofitted Transit Shelters:</strong> Ordinary bus stops fitted with dynamic, embedded e-paper screens powered by solar energy.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Corporate Exhaust Pipeline:</strong> Pulls real, unfilled business challenges and operational case studies from high-end corporate hubs.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Google Gemini De-Jargonizer:</strong> Removes elitist consulting jargon to create accessible 80-word "Micro-Briefs".
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Live Analyst Scaffolding:</strong> Commuting students interact via speech or text, and Gemini scaffolds logical reasoning in real-time.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Blind Merit-Based Routing:</strong> Routes verified solutions directly into enterprise recruiter systems, completely bypassing pedigree and college tier bias.
                  </span>
                </li>
              </ul>
            </div>

            {/* The WHY */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-4">
              <div className="flex items-center gap-2 text-amber-800">
                <Shield className="w-5 h-5" />
                <h3 className="text-base font-bold uppercase tracking-wider text-stone-900">
                  THE "WHY": CRITICAL PROBLEM ADDRESSED
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Ecosystem Apartheid:</strong> Combats concentrated career access where top-tier metro institutions monopolize 84% of high-wage corporate placements.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Spatial Inequality:</strong> Non-Tier-1 students face geographic isolation and severe lack of structural industry exposure despite immense latent potential.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Absence of Casual Mentorship:</strong> Regional students have no alumni networks, informal executive coffee chats, or family corporate connections.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Failure of Passive Portals:</strong> Traditional online job boards fail because automated ATS algorithms filter out non-metro degrees before human review.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Opportunity as a Municipal Utility:</strong> Treating opportunity distribution with the same civic dignity as clean drinking water, electricity, and public transport.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CAPEX & ENGINEERING MATRIX */}
      {activeTab === "specs-matrix" && (
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Unit Economics &amp; Hardware Feasibility
            </span>
            <h3 className="text-xl font-bold text-stone-900">
              KOM Modular Retrofit Kit vs. Traditional Smart Transit Kiosk
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Why previous municipal smart city kiosks failed in India, and how KOM Node’s ultra-low-power, passive architecture solves durability and power outages.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-stone-300 bg-stone-100 text-stone-800">
                  <th className="p-3 font-bold">Parameter</th>
                  <th className="p-3 font-bold text-rose-700 bg-rose-50/50">Traditional Smart City Kiosk</th>
                  <th className="p-3 font-bold text-emerald-800 bg-emerald-50">KOM Node Retrofit Kit</th>
                  <th className="p-3 font-bold text-stone-600">Engineering Justification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr>
                  <td className="p-3 font-semibold text-stone-900">CapEx per Bus Stop</td>
                  <td className="p-3 text-rose-700 bg-rose-50/30">₹14,00,000 – ₹18,00,000</td>
                  <td className="p-3 font-bold text-emerald-700 bg-emerald-50/40">₹42,000</td>
                  <td className="p-3">Clamp-on retrofit kit onto existing SRTC structural steel frame; zero civil digging.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-stone-900">Continuous Power Draw</td>
                  <td className="p-3 text-rose-700 bg-rose-50/30">450W – 800W (Backlit LCDs)</td>
                  <td className="p-3 font-bold text-emerald-700 bg-emerald-50/40">1.8W Average (Bistable E-Paper)</td>
                  <td className="p-3">E-paper requires zero electrical current to maintain an image; power only needed on refresh.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-stone-900">Grid Dependency</td>
                  <td className="p-3 text-rose-700 bg-rose-50/30">Heavy (Dies during load-shedding)</td>
                  <td className="p-3 font-bold text-emerald-700 bg-emerald-50/40">100% Solar Autonomy</td>
                  <td className="p-3">480Wh LiFePO4 battery pack charged by rooftop glass ensures 72-hour monsoon resilience.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-stone-900">Sunlight Visibility</td>
                  <td className="p-3 text-rose-700 bg-rose-50/30">Unreadable glare in midday sun</td>
                  <td className="p-3 font-bold text-emerald-700 bg-emerald-50/40">Reflective Contrast (Improves in sun)</td>
                  <td className="p-3">Utilizes natural ambient sunlight rather than competing against it with power-hungry backlights.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-stone-900">Vandalism &amp; Maintenance</td>
                  <td className="p-3 text-rose-700 bg-rose-50/30">Fragile glass touchscreens (Broken in 6 mos)</td>
                  <td className="p-3 font-bold text-emerald-700 bg-emerald-50/40">Polycarbonate Shield + QR/Voice</td>
                  <td className="p-3">Students interact via voice array or personal phones via localized QR mesh.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Full Resolution Concept Poster */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-6xl flex items-center justify-between text-white pb-3 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-sm">
                KOM Node Official Concept Proposal Poster (Fund My Crazy 2026)
              </span>
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs flex items-center gap-1"
            >
              <Minimize2 className="w-3.5 h-3.5" />
              <span>Close Lightbox</span>
            </button>
          </div>

          <div className="flex-1 w-full max-w-6xl flex items-center justify-center overflow-auto p-2">
            <img
              src={posterImage}
              alt="KOM Node Official Concept Proposal Poster Full View"
              className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl border border-stone-800"
            />
          </div>
        </div>
      )}
    </div>
  );
};
