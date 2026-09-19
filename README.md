# KOM — Kinetic Opportunity Mesh

> **Turning everyday bus stops and public libraries into career launchpads — for students who never got a fair shot.**

[![Google FMC 2026 Finalist](https://img.shields.io/badge/Google%20FMC%202026-National%20Finalist-FFB800?style=flat-square&logo=google)](https://ridhijain709.github.io/kom-fund-my-crazy-2026/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open%20Now-00F5D4?style=flat-square)](https://ridhijain709.github.io/kom-fund-my-crazy-2026/)
[![Presentation Deck](https://img.shields.io/badge/Presentation-View%20Deck-0284C7?style=flat-square)](https://ridhijain709.github.io/kom-fund-my-crazy-2026/deck.html)

---

## The Problem — In One Sentence

**88% of career opportunities in India are concentrated in 2.4% of cities — and the system is designed to keep it that way.**

A student from Agra or Gorakhpur commutes 18 minutes every morning past the very companies that could hire them. Those companies never see this student — because their hiring systems are built to only look at names from 8–10 elite colleges.

The result: **12.4 million capable students, invisible to the market.**

---

## What KOM Does

KOM puts real company challenges on screens at bus shelters and public libraries.

A student walking by sees a problem — say, *"How would you help a local grocery chain reduce food waste in summer heat?"* — scans a QR code, and answers on their phone. No app to download. Completely free.

Google Gemini reads the response and asks follow-up coaching questions to help the student think deeper. The best answers go straight to company hiring teams — with the student's college and name hidden, so they're judged purely on their thinking.

**Result:** Companies find talent they'd never find otherwise. Students get a genuine shot based on ability, not background.

---

## How It Works — 5 Steps

```
1. Student sees a challenge on a screen at a bus stop or library
2. Scans QR code → opens in phone browser (no app needed)
3. Answers 3 short questions by voice or text during their commute
4. Gemini coaches them with helpful follow-up questions
5. Best answers go to company hiring teams, college name hidden
```

---

## The Numbers

| What | Number |
|---|---|
| Students commuting past screens daily | 12.4 million |
| Average wait time at transit stops | 18.2 minutes |
| Cost per hire (KOM model) | ₹14,200 |
| Cost per hire (standard campus recruitment) | ₹1,85,000 |
| Savings per hire | **92.3%** |
| New hardware cost for Phase 1 | **₹0** (uses existing library computers) |
| First milestone | 500 placements before any hardware is deployed |

---

## Who It's For

**For students:** 100% free. No premium tier. No college filter. A real shot at companies that would otherwise never see your name.

**For companies:** High-quality, pre-screened candidates at a fraction of standard recruitment costs — from talent pools they've never had access to.

**For cities:** Transit stops and public libraries become active career hubs, at zero budget from the government.

---

## Live Links

| | |
|---|---|
| ⚡ **Interactive Transit Simulator** | [Open Simulator →](https://ridhijain709.github.io/kom-fund-my-crazy-2026/) |
| 📱 **Commuter Mobile App (Student View)** | [Open Student Portal →](https://ridhijain709.github.io/kom-fund-my-crazy-2026/student.html) |
| 🏢 **Corporate ATS Talent Dashboard** | [Open Company Dashboard →](https://ridhijain709.github.io/kom-fund-my-crazy-2026/company.html) |
| 📊 **Presentation Deck** | [View Deck →](https://ridhijain709.github.io/kom-fund-my-crazy-2026/deck.html) |
| 📋 **Project Brief** | [Download PDF →](kom-brief.pdf) · [Read Online →](kom-brief.html) |
| 🏛 **Policy & Governance Blueprint** | [Download PDF →](kom-policy-brief.pdf) · [Read Online →](kom-policy-brief.html) |
| 🎞 **Presentation Slides** | [PDF →](kom-presentation.pdf) · [PPTX →](kom-presentation.pptx) |
| 🗒 **Stage Playbook** | [Download →](kom-playbook.pdf) |

---

## The Team

| Name | Role |
|---|---|
| **Ridhi Jain** | Founder & Principal System Architect — core platform architecture, Gemini AI engine, and technical product execution |
| **[Vanshika Sharma ↗](https://www.linkedin.com/in/vanshika-sharma25/)** | Public Policy & Governance Lead (Co-Presenter) — institutional strategy, municipal regulatory sandboxes, DPDP compliance, and civic scaling |

---

## How It's Built

The demo simulator runs entirely in the browser — no server required.

The real-world product works like this:

- **Screens at bus stops** use low-power e-ink displays (like a Kindle) connected to a small computer. They update once a day over a 4G connection.
- **Student answers** go to Google Gemini (running live on Gemini 2.5 Flash), which reads the response and sends back helpful coaching questions in under 3 seconds.
- **Shortlisted responses** are routed to company hiring software (Workday, Greenhouse, etc.) with the student's college and name removed.
- **Privacy:** all raw responses are deleted within 24 hours. Companies only see anonymised summaries until they choose to reach out.

### Live Architecture & Verification
- **AI Engine:** Live Google Gemini 2.5 Flash integration in both the Transit Simulator (`index.html`) and Mobile Commuter Portal (`student.html`). No mocked timeouts — open Network tab to verify live `POST` requests to `generativelanguage.googleapis.com`.
- **Commuter Mobile Flow:** Lightweight, phone-optimized interface with Web Speech voice dictation and dynamic QR code generation for transit stop screens.
- **Corporate ATS Pipeline:** Anonymised recruiter review dashboard (`company.html`) with score breakdowns, blind evaluation, and mutual-opt-in contact requests.

---

## Rollout Plan

**Phase 1 — Months 1 to 3:** Run entirely through existing computers in public libraries. No hardware purchase. Target: 500 verified student placements.

**Phase 2 — Months 4 to 6:** Install 50 screens at high-footfall bus stops on one city corridor. Funded by company subscriptions from Phase 1.

**Phase 3 — Months 7 to 12:** Scale to 250 locations across NCR and Uttar Pradesh. Self-sustaining on subscription revenue.

---

## Competition

- **Google Gemini Fund My Crazy 2026** — Application `#FMC-2026-KOM-8842`
- **Status:** National Finalist — Build in Public Phase (Sept 18–21, 2026)
- **Grand Finale:** October 1, 2026 @ IIT Delhi
- **Prize:** ₹1 Crore

---

## Run It Locally

```bash
git clone https://github.com/ridhijain709/kom-fund-my-crazy-2026.git
cd kom-fund-my-crazy-2026
python -m http.server 8000
```

Open `http://localhost:8000` in your browser.
