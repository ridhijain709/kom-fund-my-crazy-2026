# Project KOM — Kinetic Opportunity Mesh

**Google Gemini "Fund My Crazy 2026" — National Finalist**
Application ID: `#FMC-2026-KOM-8842`

---

## About the Project

Every day, millions of college students across India commute past the very opportunities that could change their careers — they just can't see them.

**Project KOM** puts real-world company challenges on screens at everyday bus stops and public libraries. Students scan a QR code, answer a short challenge on their phone during the commute, and get fair consideration for internships and jobs — based purely on their thinking, not their college name.

No app needed. No premium subscription. No pedigree filter.

---

## The Problem

More than **12.4 million students** commute on public transit daily, spending an average of **18.2 minutes** waiting at transit stops with nothing to show for it.

Meanwhile, companies in major cities only recruit from the top 2% of colleges. A capable student in Kanpur or Agra never gets a fair look — not because they lack ability, but because the system is built to only see certain names.

KOM fixes that by bringing the opportunity to where students already are.

---

## How It Works — 5 Simple Steps

1. **Student spots a challenge** on a display screen at a bus shelter or library.
2. **Scans a QR code** — opens on their phone browser instantly, no app required.
3. **Answers 3 short questions** by typing or recording a voice note during their commute.
4. **Gemini provides coaching** — not scores, but helpful follow-up questions to sharpen their thinking.
5. **Best responses go directly to company hiring teams**, with the student's name and college hidden so they're judged purely on their ideas.

---

## Who Benefits

| For Students | For Companies | For Cities |
|---|---|---|
| 100% free access to real company challenges and direct hiring opportunities | High-quality candidates at 92% lower cost than traditional campus recruitment | Transit shelters become community learning hubs at zero public budget |

---

## Live Links

| What | Link |
|---|---|
| ⚡ Interactive Simulator | [Open Live Demo →](https://ridhijain709.github.io/kom-fund-my-crazy-2026/) |
| 📊 Presentation Deck | [View Deck →](https://ridhijain709.github.io/kom-fund-my-crazy-2026/deck.html) |
| 📋 Project Brief (PDF) | [Download →](kom-brief.pdf) • [View Online →](kom-brief.html) |
| 🗂 Presentation (PDF) | [Download →](kom-presentation.pdf) |
| 🗂 Presentation (PPTX) | [Download →](kom-presentation.pptx) |
| 📋 Stage Playbook (PDF) | [Download →](kom-playbook.pdf) |

---

## The Team

| Name | Role |
|---|---|
| **Ridhi Jain** | Founder & System Architect — built the full platform, technical design, and product concept |
| **[Vanshika Sharma](https://www.linkedin.com/in/vanshika-sharma25/)** | Co-Presenter & Collaborator — stage delivery, narrative, and audience communication |

---

## How It's Built

The simulator runs entirely in the browser — no backend server required for the demo.

Under the hood, the real product would work like this:

- **Display screens** at bus shelters run on low-power electronic ink panels (like e-readers) attached to a small computer. They update once a day over a basic mobile network connection.
- **Student submissions** are processed by Google Gemini, which reads the response and generates helpful follow-up coaching questions.
- **Shortlisted answers** are packaged into a clean summary and routed to company hiring software (like Workday or Greenhouse), with the student's identifying details removed.
- **Data privacy**: student submissions are deleted from our system within 24 hours and are never stored in raw form on company servers.

---

## Phase-by-Phase Rollout

**Phase 1 (Months 1–3):** Start using existing computers in public libraries — no new hardware needed. Goal: 500 verified student placements.

**Phase 2 (Months 4–6):** Install 50 display units at high-footfall student bus stops along one pilot city corridor.

**Phase 3 (Months 7–12):** Expand to 250 locations across NCR and Uttar Pradesh, funded by company subscription revenue.

---

## Competition Details

- **Competition:** Google Gemini Fund My Crazy 2026
- **Application ID:** `#FMC-2026-KOM-8842`
- **Status:** National Finalist — Build in Public Phase
- **Grand Finale:** October 1, 2026 @ IIT Delhi
- **Prize Pool:** ₹1 Crore

---

## Running Locally

```bash
git clone https://github.com/ridhijain709/kom-fund-my-crazy-2026.git
cd kom-fund-my-crazy-2026
python -m http.server 8000
```

Open `http://localhost:8000` in your browser.
