import React, { useState, useEffect, useRef } from "react";
import {
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Send,
  MessageSquare,
  HelpCircle,
  TrendingUp,
  Languages,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Zap,
  Radio,
  Copy,
  Check,
} from "lucide-react";

interface VoiceAgentResponse {
  spokenResponse: string;
  hinglishAlternative: string;
  tacticalTip: string;
  quickPillOptions: string[];
  modelUsed?: string;
}

interface VoiceLiveFeedbackAgentProps {
  briefTitle?: string;
  briefGoal?: string;
  currentDraft?: string;
  onApplyTacticalTip?: (tip: string) => void;
  isCompact?: boolean;
}

export const VoiceLiveFeedbackAgent: React.FC<VoiceLiveFeedbackAgentProps> = ({
  briefTitle = "Decentralized Depot Logistics",
  briefGoal = "Organize last-mile delivery using existing bus terminal infrastructure and local transport",
  currentDraft = "",
  onApplyTacticalTip,
  isCompact = false,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [inputText, setInputText] = useState("");
  const [mode, setMode] = useState<"feedback" | "clarify" | "economics" | "vernacular">("feedback");
  const [language, setLanguage] = useState<"hinglish" | "en" | "hi">("hinglish");
  const [lastResponse, setLastResponse] = useState<VoiceAgentResponse | null>(null);
  const [history, setHistory] = useState<
    Array<{
      sender: "student" | "agent";
      text: string;
      hinglish?: string;
      tip?: string;
      timestamp: string;
    }>
  >([]);
  const [copiedTip, setCopiedTip] = useState(false);

  // Recognition ref
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize Web Speech API & Synthesis
  useEffect(() => {
    if (typeof window !== "undefined") {
      synthRef.current = window.speechSynthesis;

      // Speech Recognition setup
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = language === "hi" ? "hi-IN" : "en-IN";

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onresult = (event: any) => {
          let current = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            current += event.results[i][0].transcript;
          }
          setTranscript(current);
          setInputText(current);
        };

        recognition.onerror = (event: any) => {
          console.warn("Speech recognition error:", event.error);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (_) {}
      }
    };
  }, [language]);

  // Handle Vocal Speech Playback via SpeechSynthesis
  const speakText = (text: string) => {
    if (!synthRef.current) return;

    synthRef.current.cancel(); // Stop any active speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.05;

    // Pick a natural voice if available
    const voices = synthRef.current.getVoices();
    const indianVoice = voices.find(
      (v) =>
        v.lang.includes("IN") ||
        v.name.includes("India") ||
        v.name.includes("Google") ||
        v.name.includes("Natural")
    );
    if (indianVoice) {
      utterance.voice = indianVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  };

  const togglePauseSpeech = () => {
    if (!synthRef.current) return;
    if (isPaused) {
      synthRef.current.resume();
      setIsPaused(false);
    } else {
      synthRef.current.pause();
      setIsPaused(true);
    }
  };

  // Toggle Microphone
  const toggleListening = () => {
    if (isListening) {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (_) {}
      }
      setIsListening(false);
    } else {
      stopSpeaking();
      setTranscript("");
      if (recognitionRef.current) {
        try {
          recognitionRef.current.lang = language === "hi" ? "hi-IN" : "en-IN";
          recognitionRef.current.start();
        } catch (e) {
          console.warn("Could not start speech recognition:", e);
          setIsListening(true);
        }
      } else {
        // Fallback for browsers without speech recognition
        setIsListening(true);
      }
    }
  };

  // Send Query to Voice Agent Backend
  const handleSendVoiceQuery = async (queryText?: string) => {
    const textToSend = (queryText || inputText || transcript).trim();
    if (!textToSend && mode !== "feedback") return;

    const actualQuery = textToSend || (mode === "feedback" ? "Please critique my operational proposal draft out loud." : "Explain this micro-brief.");

    setIsLoading(true);
    stopSpeaking();
    setIsListening(false);

    // Add student query to history
    const studentEntry = {
      sender: "student" as const,
      text: actualQuery,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setHistory((prev) => [...prev, studentEntry]);
    setInputText("");
    setTranscript("");

    try {
      const res = await fetch("/api/voice-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentSpeech: actualQuery,
          briefTitle,
          briefGoal,
          currentDraft,
          mode,
          language,
        }),
      });

      const json = await res.json();
      if (json.success && json.data) {
        const resp: VoiceAgentResponse = json.data;
        setLastResponse(resp);

        // Add agent response to history
        setHistory((prev) => [
          ...prev,
          {
            sender: "agent",
            text: resp.spokenResponse,
            hinglish: resp.hinglishAlternative,
            tip: resp.tacticalTip,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);

        // Auto speak the response aloud
        speakText(resp.spokenResponse);
      }
    } catch (err) {
      console.error("Voice Query error:", err);
      const fallbackText =
        "Your proposal has strong intuition. Make sure to specify exact numbers for auto driver compensation and local kirana storage fees to pass the feasibility check.";
      speakText(fallbackText);
    } finally {
      setIsLoading(false);
    }
  };

  // Pre-configured Student Quick Chips
  const quickChips = [
    { label: "🎤 Critique My Draft Aloud", mode: "feedback", query: "Can you orally critique my current proposal draft and highlight what is missing?" },
    { label: "🇮🇳 Explain in Hindi / Hinglish", mode: "vernacular", query: "Is problem ko aasan Hinglish mein samjha dijiye." },
    { label: "💰 Unit Economics Math Check", mode: "economics", query: "What is a realistic cost per package for local auto-rickshaws in a Tier-2 bus depot?" },
    { label: "🚌 Depot Staging Bottlenecks", mode: "clarify", query: "Where do delivery vans face the longest wait time at an Indian transit bus stand?" },
  ];

  return (
    <div className={`bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 shadow-xl overflow-hidden ${isCompact ? "p-4" : "p-6 sm:p-7"}`}>
      {/* Header with Live Status & Mode Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              isSpeaking
                ? "bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/30 scale-105"
                : isListening
                ? "bg-rose-500 text-white animate-pulse"
                : "bg-stone-800 text-amber-400 border border-stone-700"
            }`}>
              {isSpeaking ? (
                <Volume2 className="w-5 h-5 animate-bounce" />
              ) : isListening ? (
                <Mic className="w-5 h-5" />
              ) : (
                <Headphones className="w-5 h-5" />
              )}
            </div>
            {(isSpeaking || isListening) && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-stone-900 animate-ping" />
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                KOM Transit Voice Mentor
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-semibold border border-amber-500/30">
                  Live Audio Feedback Loop
                </span>
              </h3>
            </div>
            <p className="text-xs text-stone-400">
              Speak or ask queries out loud • Gemini guides logic like a senior operations analyst
            </p>
          </div>
        </div>

        {/* Dialect Selector */}
        <div className="flex items-center gap-2 text-xs">
          <Languages className="w-3.5 h-3.5 text-stone-400" />
          <div className="bg-stone-800 p-0.5 rounded-lg flex items-center border border-stone-700 text-[11px]">
            <button
              onClick={() => setLanguage("hinglish")}
              className={`px-2.5 py-1 rounded-md transition-all font-medium ${
                language === "hinglish"
                  ? "bg-amber-500 text-stone-950 font-bold"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              Hinglish
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-md transition-all font-medium ${
                language === "en"
                  ? "bg-amber-500 text-stone-950 font-bold"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("hi")}
              className={`px-2.5 py-1 rounded-md transition-all font-medium ${
                language === "hi"
                  ? "bg-amber-500 text-stone-950 font-bold"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              हिंदी
            </button>
          </div>
        </div>
      </div>

      {/* Center Interactive Visual: Glowing Solar Core & Audio Waveform */}
      <div className="my-5 p-5 rounded-xl bg-stone-950 border border-stone-800/90 relative overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Ambient Backlight matching the poster's glowing core */}
        <div className={`absolute inset-0 bg-gradient-to-r from-amber-600/10 via-orange-500/20 to-amber-600/10 blur-xl pointer-events-none transition-opacity duration-500 ${
          isSpeaking || isListening ? "opacity-100" : "opacity-30"
        }`} />

        {/* Pulsing Core & Status Indicator */}
        <div className="relative z-10 flex flex-col items-center space-y-3">
          <div className="relative">
            {/* Concentric rings */}
            <div className={`w-20 h-20 rounded-full border-2 border-dashed flex items-center justify-center transition-all duration-700 ${
              isSpeaking
                ? "border-amber-400/80 animate-spin scale-110"
                : isListening
                ? "border-rose-400 animate-pulse scale-105"
                : "border-stone-700"
            }`}>
              <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
                isSpeaking
                  ? "bg-gradient-to-br from-amber-400 to-orange-600 text-stone-950 shadow-orange-500/50"
                  : isListening
                  ? "bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-rose-500/50 animate-pulse"
                  : "bg-stone-800 text-amber-400"
              }`}>
                {isSpeaking ? (
                  <Radio className="w-6 h-6 animate-pulse" />
                ) : isListening ? (
                  <Mic className="w-6 h-6 animate-bounce" />
                ) : (
                  <Sparkles className="w-6 h-6" />
                )}
              </div>
            </div>
          </div>

          {/* Dynamic Audio Visualizer Bars */}
          <div className="flex items-center gap-1.5 h-6">
            {[40, 75, 20, 90, 50, 100, 30, 85, 60, 95, 45, 70].map((h, i) => (
              <span
                key={i}
                style={{
                  height: isSpeaking || isListening ? `${h}%` : "15%",
                  transition: "height 0.15s ease-in-out",
                  animationDelay: `${i * 0.08}s`,
                }}
                className={`w-1 rounded-full ${
                  isSpeaking
                    ? "bg-amber-400"
                    : isListening
                    ? "bg-rose-400"
                    : "bg-stone-700"
                }`}
              />
            ))}
          </div>

          {/* Status Text & Instruction */}
          <div className="space-y-1">
            <span className="text-xs font-mono font-medium text-stone-300">
              {isListening
                ? "Listening to student speech... (Speak clearly into your microphone)"
                : isSpeaking
                ? "KOM Voice Mentor is speaking aloud..."
                : isLoading
                ? "Gemini 2.5 Flash analyzing operational logic..."
                : "Tap Speak or Choose an Interactive Voice Query"}
            </span>
            <p className="text-[11px] text-stone-500">
              Matches "TAP OR SPEAK TO EXPLORE BRIEFS" kiosk interface from official 2026 concept
            </p>
          </div>

          {/* Audio Controls Bar (If speaking) */}
          {isSpeaking && (
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={togglePauseSpeech}
                className="px-3 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs flex items-center gap-1.5 border border-stone-700"
              >
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                <span>{isPaused ? "Resume" : "Pause"}</span>
              </button>
              <button
                onClick={stopSpeaking}
                className="px-3 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-rose-400 text-xs flex items-center gap-1.5 border border-stone-700"
              >
                <VolumeX className="w-3.5 h-3.5" />
                <span>Mute / Stop</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Quick Interactive Spoken Query Chips */}
      <div className="space-y-2 mb-4">
        <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block">
          Suggested Voice Inquiries (One-Tap Speak):
        </span>
        <div className="flex flex-wrap gap-2">
          {quickChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => {
                setMode(chip.mode as any);
                handleSendVoiceQuery(chip.query);
              }}
              disabled={isLoading}
              className="px-3 py-1.5 rounded-lg bg-stone-800/90 hover:bg-stone-700 border border-stone-700/80 text-xs text-stone-200 hover:text-white transition-all flex items-center gap-1.5 shadow-xs disabled:opacity-50"
            >
              <span>{chip.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input / Speak Bar */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 bg-stone-950 p-2 rounded-xl border border-stone-800 focus-within:border-amber-500/70 transition-colors">
          <button
            onClick={toggleListening}
            title={isListening ? "Stop listening" : "Start speaking via microphone"}
            className={`p-2.5 rounded-lg transition-all ${
              isListening
                ? "bg-rose-600 text-white animate-pulse"
                : "bg-amber-500 text-stone-950 hover:bg-amber-400"
            }`}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>

          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendVoiceQuery()}
            placeholder={
              isListening
                ? "Listening... Speak your operational question..."
                : "Speak into mic or type: e.g., 'Review my delivery cost calculation out loud'..."
            }
            className="flex-1 bg-transparent border-none text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none px-2"
          />

          <button
            onClick={() => handleSendVoiceQuery()}
            disabled={isLoading || (!inputText.trim() && !transcript.trim())}
            className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold flex items-center gap-1.5 disabled:opacity-40 transition-colors"
          >
            {isLoading ? (
              <span className="animate-spin w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full" />
            ) : (
              <>
                <span>Ask</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>

        {/* Live Tactical Tip Callout from the Agent */}
        {lastResponse && (
          <div className="bg-stone-800/80 border border-amber-500/30 rounded-xl p-4 space-y-3 animate-in fade-in duration-300">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Tactical Proposal Edit:
                </span>
              </div>
              <button
                onClick={() => speakText(lastResponse.spokenResponse)}
                className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1 font-mono"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Replay Voice
              </button>
            </div>

            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-medium">
              "{lastResponse.tacticalTip}"
            </p>

            {/* Hinglish Translation Card */}
            {lastResponse.hinglishAlternative && (
              <div className="p-2.5 rounded-lg bg-stone-900/90 border border-stone-700/60 text-xs text-stone-300 space-y-1">
                <span className="text-[10px] uppercase font-bold text-stone-400 block">
                  Vernacular Summary (Hinglish):
                </span>
                <p className="italic text-amber-200/90">
                  {lastResponse.hinglishAlternative}
                </p>
              </div>
            )}

            {/* Quick Actions for Candidate */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-stone-700/60 text-xs">
              <span className="text-[10px] text-stone-400 font-mono">
                Model: {lastResponse.modelUsed || "Gemini 2.5 Flash"}
              </span>

              {onApplyTacticalTip && (
                <button
                  onClick={() => {
                    onApplyTacticalTip(lastResponse.tacticalTip);
                    setCopiedTip(true);
                    setTimeout(() => setCopiedTip(false), 2000);
                  }}
                  className="px-3 py-1 rounded-lg bg-amber-500 text-stone-950 font-bold hover:bg-amber-400 flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  {copiedTip ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added to Your Proposal!</span>
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-3.5 h-3.5" />
                      <span>Insert Directly into Draft</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Transcript Log Drawer (Collapsible) */}
      {history.length > 0 && (
        <div className="mt-5 pt-4 border-t border-stone-800 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
            <span>Recent Voice Exchanges ({history.length})</span>
            <button
              onClick={() => setHistory([])}
              className="text-stone-500 hover:text-stone-300"
            >
              Clear Log
            </button>
          </div>

          <div className="max-h-48 overflow-y-auto space-y-2 pr-1 text-xs">
            {history.slice(-4).map((h, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl ${
                  h.sender === "agent"
                    ? "bg-stone-800/70 border border-stone-700/60 text-stone-200"
                    : "bg-stone-950 border border-stone-800 text-amber-300"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-stone-500 mb-1">
                  <span className="font-bold uppercase tracking-wider">
                    {h.sender === "agent" ? "KOM Transit Mentor" : "Student Query"}
                  </span>
                  <span>{h.timestamp}</span>
                </div>
                <p className="leading-relaxed">{h.text}</p>
                {h.sender === "agent" && (
                  <button
                    onClick={() => speakText(h.text)}
                    className="mt-1.5 text-[10px] text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <Volume2 className="w-3 h-3" />
                    Speak aloud
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
