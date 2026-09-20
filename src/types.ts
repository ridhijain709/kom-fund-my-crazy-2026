export interface MicroBrief {
  id: string;
  title: string;
  corporateSponsor: string;
  domain: string;
  rawBrief: string;
  jargonFreeGoal: string;
  guidingQuestions: string[];
  frameworkHint: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTimeMins: number;
}

export interface GeminiDimensionScore {
  score: number; // 1 - 5
  explanation: string;
}

export interface GeminiEvaluation {
  problemAlignment: GeminiDimensionScore;
  feasibility: GeminiDimensionScore;
  costRoiImpact: GeminiDimensionScore;
  compositeScore: number; // 0 - 100
  decision: "PASSED_TO_CORPORATE" | "BORDERLINE_HUMAN_REVIEW" | "NEEDS_IMPROVEMENT";
  strengths: string[];
  improvementAreas: string[];
  actionableFeedback: string;
  anonymizedSummary: string;
  regionalContextDetected?: boolean;
  regionalContextNotes?: string;
  evaluatedAt: string;
  aiModel: string;
}

export interface CandidateSubmission {
  id: string;
  briefId: string;
  briefTitle: string;
  studentPseudoId: string;
  regionalCluster: string; // e.g., "Tier-3 Varanasi-Mirzapur Belt"
  educationType: string; // e.g., "State Govt Engineering College"
  language: "en" | "hi" | "hinglish";
  rawInput: string;
  evaluation: GeminiEvaluation;
  status: "Passed" | "Escalated" | "Revised" | "Hired";
  isLowBandwidthMode?: boolean;
  humanReviewNotes?: string;
  appealed?: boolean;
}

export interface EscalationTicket {
  id: string;
  submissionId: string;
  candidateCode: string;
  region: string;
  language: string;
  compositeScore: number;
  flagReason: "Borderline Score (40-64)" | "Regional Vernacular Phrasing" | "Candidate Appeal" | "Unusual Constraint Model";
  geminiRationale: string;
  rawStudentExcerpt: string;
  humanResolution?: "Approved for Corporate Showcase" | "Clarification Requested" | "Constructive Feedback Sent";
  humanAuditorNotes?: string;
  resolvedAt?: string;
}

export interface StakeholderMatrixItem {
  stakeholder: string;
  role: string;
  corePainPoint: string;
  incentiveToParticipate: string;
  monetizationOrValueImpact: string;
}

export interface MentorCritiqueTheme {
  id: string;
  title: string;
  criticPoints: {
    pointNumber: string;
    critique: string;
    rootCause: string;
    komSolution: string;
    geminiRole: string;
  }[];
}
