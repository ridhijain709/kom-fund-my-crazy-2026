import {
  MicroBrief,
  CandidateSubmission,
  EscalationTicket,
  StakeholderMatrixItem,
  MentorCritiqueTheme,
} from "../types";

export const SAMPLE_MICRO_BRIEFS: MicroBrief[] = [
  {
    id: "brief-logistics-01",
    title: "Tier-3 Omnichannel Last-Mile Delivery Cluster",
    corporateSponsor: "National Retail & Logistics Group (Anonymized)",
    domain: "Supply Chain & Logistics",
    rawBrief:
      "Optimize reverse omnichannel returns and regional fulfillment aggregation in Tier-3 pin codes facing 34% failed delivery attempts and unsustainable per-kilometer transit burn.",
    jargonFreeGoal:
      "Design a way to bundle e-commerce package drops at regional bus terminals so local auto-drivers or neighborhood kirana stores deliver them within 4 hours at under ₹25 per parcel.",
    guidingQuestions: [
      "Where in your town do delivery vans waste the most time stuck or waiting?",
      "How can local tea stalls or bus depot kiosks act as secure parcel pick-up lockers?",
      "What low-bandwidth SMS/WhatsApp prompt can confirm safe delivery without smartphones?",
    ],
    frameworkHint:
      "1. Ground Drop Hub Location -> 2. Local Route Distribution -> 3. Unit Economics & Cost Savings per parcel.",
    difficulty: "Intermediate",
    estimatedTimeMins: 20,
  },
  {
    id: "brief-agri-02",
    title: "Transit-Hub Solar Pre-Cooling Pods for Perishables",
    corporateSponsor: "Pan-India Agri-Supply Network (Anonymized)",
    domain: "Agri-Tech & Cold Chain",
    rawBrief:
      "Mitigate 28% post-harvest spoilage of leafy greens transported via state intercity bus networks from peri-urban smallholders to mandi hubs.",
    jargonFreeGoal:
      "Propose an affordable evaporative or solar cold-pod at rural bus depots so small vegetable farmers can preserve crates overnight before loading onto the 5:00 AM market bus.",
    guidingQuestions: [
      "What low-cost thermal insulation materials are readily sourced in your district?",
      "How should farmers be charged (e.g., ₹12 per crate per night) to guarantee break-even?",
      "Who maintains cleanliness and solar battery security at the depot?",
    ],
    frameworkHint:
      "1. Zero-Power/Solar Cooling Mechanism -> 2. Depot Spatial Layout -> 3. Pay-per-Crate Revenue Model.",
    difficulty: "Intermediate",
    estimatedTimeMins: 25,
  },
  {
    id: "brief-fintech-03",
    title: "Offline Micro-Credit Repayment Verification for Hawkers",
    corporateSponsor: "Regional Small Finance Bank (Anonymized)",
    domain: "Financial Inclusion",
    rawBrief:
      "Establish low-friction daily micro-amortization collection checkpoints for street vendors with unstable mobile data coverage, reducing collection agent field OpEx.",
    jargonFreeGoal:
      "Enable daily street vendors to repay ₹50 micro-installments at municipal transit stops using an automated offline token or soundbox slip, cutting loan recovery agent costs.",
    guidingQuestions: [
      "Why do street vendors fail to make digital UPI payments during crowded evening market hours?",
      "How can a bus shelter conductor or municipal ticket counter act as a trusted collection point?",
      "How does the bank confirm payment receipt instantly without continuous cellular data?",
    ],
    frameworkHint:
      "1. Collection Touchpoint -> 2. Fraud & Reconciliation Safeguard -> 3. Bank OpEx Reduction.",
    difficulty: "Advanced",
    estimatedTimeMins: 30,
  },
];

export const INITIAL_CANDIDATE_SUBMISSIONS: CandidateSubmission[] = [
  {
    id: "sub-101",
    briefId: "brief-logistics-01",
    briefTitle: "Tier-3 Omnichannel Last-Mile Delivery Cluster",
    studentPseudoId: "CANDIDATE #KOM-8421",
    regionalCluster: "Tier-3 Gorakhpur-Basti Corridor, UP",
    educationType: "State Autonomous Polytechnic Institute",
    language: "en",
    rawInput: `1. Hub Setup: Instead of renting warehouse space, partner with the existing MSRTC/State Depot parcel booking counter. Packages arriving via intercity night buses at 4:30 AM are offloaded into a 100 sq.ft cage.
2. Distribution: Train 6 morning passenger auto-rickshaw drivers who already ply the 3 main town arterial routes. They carry 15 parcels each during empty return trips.
3. Cost Breakdown: Delivery cost drops from ₹68/parcel (third-party courier) to ₹22/parcel paid to auto drivers, with ₹5 depot handling fee. Total cost ₹27, saving 60%.
4. Safeguard: Dual OTP generated at depot handover and customer doorstep.`,
    evaluation: {
      problemAlignment: {
        score: 5,
        explanation:
          "Perfect grasp of regional transit infrastructure; utilizes existing empty backhauls of morning commuter autos.",
      },
      feasibility: {
        score: 5,
        explanation:
          "Zero new infrastructure required. High operational feasibility utilizing existing state depot facilities and registered autorickshaws.",
      },
      costRoiImpact: {
        score: 5,
        explanation:
          "Explicit ₹27 vs ₹68 calculation delivering 60.2% unit cost reduction on last-mile fulfillment.",
      },
      compositeScore: 95,
      decision: "PASSED_TO_CORPORATE",
      strengths: [
        "Identified negative-cost backhaul capacity in regional auto-rickshaws.",
        "Clear unit-economic viability with 60% savings.",
        "Zero real-estate CapEx footprint.",
      ],
      improvementAreas: [
        "Add bad-weather contingency protocol during monsoon road flooding.",
      ],
      actionableFeedback:
        "Outstanding operational architecture. Your solution demonstrates top 1% regional execution capability. Anonymized card routed directly to corporate logistics hiring partner.",
      anonymizedSummary:
        "Proposes a zero-CapEx depot aggregation model repurposing morning commuter auto backhauls to reduce last-mile courier burn from ₹68 to ₹27 per drop.",
      regionalContextDetected: true,
      regionalContextNotes:
        "Applied deep contextual familiarity with state transport depot operations.",
      evaluatedAt: "2026-09-19T14:20:00Z",
      aiModel: "gemini-3.8-flash (Standardized 3D Matrix)",
    },
    status: "Hired",
  },
  {
    id: "sub-102",
    briefId: "brief-agri-02",
    briefTitle: "Transit-Hub Solar Pre-Cooling Pods for Perishables",
    studentPseudoId: "CANDIDATE #KOM-9104",
    regionalCluster: "Tier-2 Kolhapur Agro Belt, Maharashtra",
    educationType: "Regional Government College of Engineering",
    language: "hinglish",
    rawInput: `Hamare area me farmers subah 5 baje bus se mandi bhindi aur methi le jaate hain. Problem ye hai ki raat ko kata hua maal subah tak wilt ho jata hai.
Solution: Bus stand ke shed ke piche 8x10 charcoal and wet-khus (evaporative) wall cooler banaya jaye. 
Isme daytime me 40W solar panel se water pump chalega jo khus ko geela rakhega. Inside temperature drops by 8 to 11 degrees Celsius without expensive compressor.
Charging model: ₹10 per crate for overnight keeping (8pm to 5am). 50 crates capacity = ₹500 daily revenue. Bus depot guard gets ₹150 for night monitoring. Farmer gets ₹3 extra per kg in morning mandi because produce is fresh.`,
    evaluation: {
      problemAlignment: {
        score: 5,
        explanation:
          "Addresses exact perishability timeline (harvest at dusk, transit at dawn) facing regional vegetable smallholders.",
      },
      feasibility: {
        score: 4,
        explanation:
          "Evaporative charcoal/khus cooling is robust and locally serviceable. Low electrical requirement runs easily on 40W panel.",
      },
      costRoiImpact: {
        score: 5,
        explanation:
          "Rigorous daily P&L calculation: ₹500 revenue, ₹150 guard incentive, and ₹3/kg farmer price premium.",
      },
      compositeScore: 88,
      decision: "PASSED_TO_CORPORATE",
      strengths: [
        "Zero refrigerant gas risk; uses passive evaporative cooling proven in hot/dry climates.",
        "Incentivizes depot security guards to maintain overnight monitoring.",
        "Quantified bottom-line farmer income uplift.",
      ],
      improvementAreas: [
        "Include water consumption estimates during peak summer months.",
      ],
      actionableFeedback:
        "Excellent grassroots engineering. Gemini recognized your Hinglish submission and parsed the underlying thermodynamic and economic logic cleanly.",
      anonymizedSummary:
        "Designed a solar-assisted 40W evaporative pre-cooling shelter for depot transit hubs yielding ₹3/kg farmer margin enhancement with ₹10/crate user economics.",
      regionalContextDetected: true,
      regionalContextNotes:
        "Hinglish syntax parsed without bias. Technical merit scored purely on operational thermodynamics and financial feasibility.",
      evaluatedAt: "2026-09-19T16:45:00Z",
      aiModel: "gemini-3.8-flash (Standardized 3D Matrix)",
    },
    status: "Passed",
  },
  {
    id: "sub-103",
    briefId: "brief-fintech-03",
    briefTitle: "Offline Micro-Credit Repayment Verification for Hawkers",
    studentPseudoId: "CANDIDATE #KOM-7320",
    regionalCluster: "Tier-3 Salem Rural District, Tamil Nadu",
    educationType: "Rural Affiliated Arts & Science College",
    language: "en",
    rawInput: `Vendors cannot stop work to scan QR codes because hands are oily or phone battery dead.
We place a punch-card soundbox at the bus shelter newspaper stand. Vendor inserts token or RFID badge, drops ₹50 cash with the vendor. The paper seller gets 50 paise per collection.
At end of day, bank collects money and syncs device via GSM.`,
    evaluation: {
      problemAlignment: {
        score: 4,
        explanation:
          "Understands why conventional digital QR codes fail for street vendors during peak operating hours.",
      },
      feasibility: {
        score: 3,
        explanation:
          "Involves cash custody with newspaper stall vendor which introduces minor audit/leakage risk without bonded insurance.",
      },
      costRoiImpact: {
        score: 3,
        explanation:
          "Good micro-incentive (50 paise/transaction), but cash transit insurance cost was not accounted for.",
      },
      compositeScore: 58,
      decision: "BORDERLINE_HUMAN_REVIEW",
      strengths: [
        "Strong human-centered insight regarding greasy hands and dead mobile phone batteries.",
        "Low-friction vendor interaction.",
      ],
      improvementAreas: [
        "Needs fraud and cash reconciliation safeguard between newspaper vendor and bank agent.",
        "Clarify regulatory compliance for third-party cash handling.",
      ],
      actionableFeedback:
        "Submission shows genuine empathy for informal vendors. Re-routed to Human Escalation Desk to evaluate local banking correspondent viability.",
      anonymizedSummary:
        "Proposes RFID bus depot newspaper-stall collection point for informal vendors. Flagged for Human Desk to assess cash reconciliation safeguards.",
      regionalContextDetected: true,
      regionalContextNotes:
        "Borderline score (58) automatically routed to Human Escalation Desk per standard protocol.",
      evaluatedAt: "2026-09-19T18:10:00Z",
      aiModel: "gemini-3.8-flash (Standardized 3D Matrix)",
    },
    status: "Escalated",
  },
];

export const INITIAL_ESCALATION_TICKETS: EscalationTicket[] = [
  {
    id: "esc-301",
    submissionId: "sub-103",
    candidateCode: "CANDIDATE #KOM-7320",
    region: "Tier-3 Salem Rural District, TN",
    language: "English (Regional dialect)",
    compositeScore: 58,
    flagReason: "Borderline Score (40-64)",
    geminiRationale:
      "Score is 58 (Cutoff is 65). Strong empathy and local kiosk distribution logic, but missed banking cash reconciliation safety rules.",
    rawStudentExcerpt:
      "Vendors cannot stop work to scan QR codes because hands are oily... We place a punch-card soundbox at the bus shelter newspaper stand...",
    humanResolution: undefined,
  },
  {
    id: "esc-302",
    submissionId: "sub-104",
    candidateCode: "CANDIDATE #KOM-6112",
    region: "Tier-3 Bilaspur Industrial Belt, CG",
    language: "Hindi / Chhattisgarhi mixed",
    compositeScore: 61,
    flagReason: "Regional Vernacular Phrasing",
    geminiRationale:
      "Gemini detected heavy localized mining transport idioms ('dumper-parchi system'). Feasibility is high, but score fell slightly below 65 due to colloquial nomenclature.",
    rawStudentExcerpt:
      "Coal depot ke pass dumper parchi system jaisa QR token print hona chahiye jisse diesel chori ruk sake bus stand petrol bunk pe...",
    humanResolution: "Approved for Corporate Showcase",
    humanAuditorNotes:
      "Audited: 'Dumper parchi' refers to time-tested trip-sheet token systems in mining hubs. Highly effective operational logic. Normalized to corporate brief and upgraded score to 72.",
    resolvedAt: "2026-09-19T19:30:00Z",
  },
];

export const MENTOR_CRITIQUE_THEMES: MentorCritiqueTheme[] = [
  {
    id: "theme-1",
    title: "Theme 1: System Mapping & Bottleneck Identification",
    criticPoints: [
      {
        pointNumber: "1.1 & 1.2",
        critique: "Need a Causal Loop or Stock-and-Flow diagram to map stakeholder interactions visually.",
        rootCause: "Reviewers need to see the closed-loop economic dynamics rather than isolated claims.",
        komSolution: "Interactive dynamic Causal Loop diagram detailing: Candidate Submission -> Gemini Parsing & Logic Scaffold -> Human Escalation Desk -> Anonymized Proof-of-Work ATS Push -> Corporate Unlock Fee -> Municipal Utility Fund.",
        geminiRole: "Gemini serves as the automated routing engine that breaks the talent discovery feedback loop."
      },
      {
        pointNumber: "1.3 & 1.4",
        critique: "Show exact system bottlenecks, loopholes, and operational friction points where your solution intervenes.",
        rootCause: "Traditional job portals create recruiter review fatigue with 500+ unvetted PDFs, while candidates face pedigree filters.",
        komSolution: "Three explicit intervention points: Bottleneck 1 (Review Fatigue) solved by 3D Gemini scoring; Bottleneck 2 (AI Bias & Language) solved by Human Escalation Desk; Bottleneck 3 (Resume Keyword Gaming) solved by Anonymized Proof-of-Work dossiers.",
        geminiRole: "Standardizes scoring into quantitative metrics, bypassing the need for manual resume reading."
      }
    ]
  },
  {
    id: "theme-2",
    title: "Theme 2: Target Audience & Demographic Realities",
    criticPoints: [
      {
        pointNumber: "2.1 & 2.2",
        critique: "Clarify demographic focus: Why bus stops? Aren't bus stops mostly used by people from low-economic backgrounds with no time?",
        rootCause: "Misconception that regional bus stops only serve destitute commuters without digital access or ambition.",
        komSolution: "Demographic data proves Tier-2/3 bus stops are primary mobility hubs for college students, polytechnic youth, and young job seekers (60-70% smartphone & UPI adoption). Commuters have 15-45 mins of passive dwell time ('The Waiting Time Dividend'), unlike high-speed metro turnstiles where people rush through.",
        geminiRole: "Gemini provides low-bandwidth interactive micro-briefs optimized for e-paper displays and mobile web forms."
      }
    ]
  },
  {
    id: "theme-3",
    title: "Theme 3: Market Differentiation vs. LinkedIn & Unstop",
    criticPoints: [
      {
        pointNumber: "3.1 & 3.2",
        critique: "How does this platform differ from Unstop, LinkedIn, or open hackathons?",
        rootCause: "Unstop and LinkedIn are saturated with pedigree bias (IIT/IIM tags) and generic resume keywords. Hackathons require pre-existing networks and high-spec hardware.",
        komSolution: "1. Blind Proof-of-Work: College names and resumes are completely hidden. 2. Active AI Logic Scaffolding: Gemini mentors students on-site to break down complex corporate briefs. 3. Physical Civic Integration: Embedded in daily transit routines instead of hidden behind digital paywalls.",
        geminiRole: "De-jargonizes corporate strategy exhaust into accessible micro-briefs and guides candidates like a senior consultant."
      }
    ]
  },
  {
    id: "theme-4",
    title: "Theme 4: Corporate Incentives & Hard Employer ROI",
    criticPoints: [
      {
        pointNumber: "4.1, 4.2 & 4.3",
        critique: "Why will companies pay or put money into this? Why choose these candidates over traditional pedigree applicants?",
        rootCause: "Corporates don't pay for 'student ideas'; they pay for recruiting cost reduction, lower time-to-hire, and high retention.",
        komSolution: "1. 70% Screening Time Reduction: Hiring managers review ranked 3D metric cards instead of sifting 500+ generic CVs. 2. Zero-Travel Campus Drive: Companies save ₹12-18 Lakhs per hiring cycle in campus travel. 3. High Retention & Ground Insight: Regional hires show 40% lower first-year attrition and superior local operational understanding. 4. Monetization: Freemium cohort analytics + Pay-per-unlock candidate dossiers.",
        geminiRole: "Generates standardized 0-100 scores and anonymized executive summaries that integrate cleanly with corporate ATS pipelines."
      }
    ]
  },
  {
    id: "theme-5",
    title: "Theme 5: Standardized Evaluation & AI+Human Safety Net",
    criticPoints: [
      {
        pointNumber: "5.1, 5.2, 5.3 & 5.4",
        critique: "How to prevent AI hallucination, language bias, and rejection friction? Need standardized scoring rubrics.",
        rootCause: "Pure AI filtering can penalize non-native English speakers or miss regional operational context.",
        komSolution: "Standardized 3D Matrix: Problem Alignment (30%), Feasibility (35%), Cost/ROI (35%). Tri-tier decisioning: Score >= 65 passes directly to corporate showcase; Score 40-64 triggers Human Escalation Desk audit; Score < 40 returns automated constructive feedback detailing specific missing data points.",
        geminiRole: "Scores pure structural logic while regional prompt-tuning ignores vernacular spelling errors; flags edge cases for human review."
      }
    ]
  },
  {
    id: "theme-6",
    title: "Theme 6: Pilot Testing Plan & Operational Logistics",
    criticPoints: [
      {
        pointNumber: "6.1, 6.2, 6.3 & 6.4",
        critique: "Provide concrete sample sizes, KPIs, and contingency workflows for tight deadlines or unresponsive channels.",
        rootCause: "Vague implementation timelines weaken investor and judge credibility.",
        komSolution: "30-Day Pilot Parameters: 10 high-density bus shelter corridors in a representative Tier-2 city (e.g. Varanasi or Bhopal) near 3 regional polytechnic/state colleges. Target: 300-500 candidate submissions, 2-3 mid-sized corporate partners. KPIs: >85% completion rate, <24h AI turnaround, >30% corporate interview shortlist rate. Contingency: Offline fallback Google Form + scheduled batch Gemini script evaluations.",
        geminiRole: "Enables instant 24/7 automated evaluation so pilots run with zero administrative backlogs."
      }
    ]
  }
];

export const STAKEHOLDER_MATRIX: StakeholderMatrixItem[] = [
  {
    stakeholder: "Tier-2/3 Students & Regional Youth",
    role: "Solution Creators & Job Seekers",
    corePainPoint:
      "Institutional pedigree bias, geographic isolation from major corporate hiring hubs, lack of case mentorship.",
    incentiveToParticipate:
      "Direct access to real operational briefs, on-site Gemini logic scaffolding, blind merit-based routing to hiring ATS.",
    monetizationOrValueImpact:
      "Free access at public transit kiosks; unlocks high-paying formal career pathways without coaching fees.",
  },
  {
    stakeholder: "Corporates & Mid-Sized Tech/Logistics Firms",
    role: "Talent Recruiters & Operational Brief Sponsors",
    corePainPoint:
      "Exorbitant campus recruitment logistics costs (₹15L+ per season), resume fraud, 60% review fatigue, high Tier-1 attrition.",
    incentiveToParticipate:
      "Offloads strategy 'exhaust' into micro-briefs; receives pre-vetted, high-retention regional problem-solvers.",
    monetizationOrValueImpact:
      "Subscription / Pay-per-unlock model (e.g., ₹2,500 per unlocked verified candidate profile). 70% screening time reduction.",
  },
  {
    stakeholder: "Municipal Corporations & Smart City SPVs",
    role: "Infrastructure & Concessionaire Partners",
    corePainPoint:
      "Underutilized, passive transit shelters vandalized or generating marginal static hoarding revenue.",
    incentiveToParticipate:
      "Converts passive street furniture into active civic social mobility infrastructure; fulfills national Smart City youth skilling mandates.",
    monetizationOrValueImpact:
      "Revenue share on corporate platform unlock fees (15% concessionaire dividend) + municipal job creation index.",
  },
  {
    stakeholder: "Local Kiosk / Transit Concessionaires",
    role: "On-Ground Facility Operators",
    corePainPoint:
      "Low footfall engagement at newspaper/tea kiosks during off-peak hours.",
    incentiveToParticipate:
      "Increased commuter dwell time and potential micro-commissions for physical assistance.",
    monetizationOrValueImpact:
      "Higher ancillary footfall retail sales (tea, snacks, mobile recharges) driven by 20+ minute dwell time.",
  },
];

export const BUS_VS_METRO_COMPARISON = [
  {
    dimension: "Commuter Dwell Time (Waiting)",
    busStops: "15 to 45 minutes of passive waiting (Idle Attention Dividend)",
    metroStations: "2 to 5 minutes of high-velocity movement through turnstiles",
    advantage: "Bus stops create focused time for reading micro-briefs & drafting solutions."
  },
  {
    dimension: "Demographic Target & Geographic Reach",
    busStops: "High penetration across Tier-2/3 cities, polytechnic colleges, rural districts",
    metroStations: "Exclusively Tier-1 metros and ultra-dense corporate corridors",
    advantage: "Directly reaches the exact underserved demographic suffering from Ecosystem Apartheid."
  },
  {
    dimension: "Digital Adoption & Device Ownership",
    busStops: "68% have 4G/5G smartphones, 74% active UPI users, consume daily short-form content",
    metroStations: "95% smartphone penetration, but high digital noise & earphone immersion",
    advantage: "High digital capability combined with physical accessibility."
  },
  {
    dimension: "Capital Infrastructure & Retrofit Cost",
    busStops: "Low-cost e-paper retrofits on existing steel/glass shelter frames (₹45,000 - ₹80,000/node)",
    metroStations: "High-security fare zones, complex concessionaire tenders, high CapEx (₹10L+/station)",
    advantage: "Decentralized rapid rollout across 10-50 nodes within weeks."
  },
  {
    dimension: "Commuter Mindset & Friction",
    busStops: "Receptive to low-stress upskilling while waiting for irregular regional bus arrivals",
    metroStations: "Rushing to catch tightly scheduled trains; zero tolerance for station dwell",
    advantage: "Captive audience eager to monetize or productively use idle waiting time."
  }
];
