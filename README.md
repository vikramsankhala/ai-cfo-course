# AI for CFOs: Strategic and Operational Mastery

A comprehensive web application presenting the AI for CFOs bootcamp course outline. Built for deployment on Netlify.

## Features

- **Course Overview** – Bootcamp framing, key details, Bloom's taxonomy distribution, success metrics
- **Modules** – Detailed lesson plans for Module 1 (AI Fundamentals) and Module 2 (Hands-On Applications)
- **5-Day Schedule** – Hour-by-hour schedule with Bloom level alignment
- **Capstone Project** – Deliverables, rubric, sample topics, submission guidelines
- **Resources** – Pre-work, datasets, CFO Copilot prompt library, external links
- **Governance** – Finance AI Risk Matrix, governance checklist, Three Lines of Defense
- **Question Bank** – 50+ assessment items by Bloom level
- **Instructor** – Profile and preparation checklist

## Visualizations

- Module hours distribution (bar chart)
- Assessment breakdown (pie chart)
- Bloom's taxonomy distribution
- Impact vs Effort prioritization matrix
- Capstone grading rubric chart
- Interactive question bank by Bloom level

## Tech Stack

- React 18
- React Router 6
- Recharts (visualizations)
- Vite (build tool)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
```

Output is in the `dist` folder.

## Deploy to Netlify

### Option 1: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Option 2: Connect Git Repository

1. Push this project to GitHub/GitLab/Bitbucket
2. Log in to [Netlify](https://netlify.com)
3. Add new site → Import from Git
4. Select your repository
5. Build settings (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy

### Option 3: Drag & Drop

1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder

## Configuration

`netlify.toml` configures:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects: all routes → `/index.html`
- Node version: 18

## Course Information

- **Instructor:** Vikram Singh Sankhala
- **Instructor photo:** `public/instructor-photo.png` displays on the Instructor page
- **WhatsApp number:** Update `src/config/leads.js` with your actual number (e.g. `919876543210`)

## Lead Capture

The site includes 4 entry points for lead generation:

1. **Primary CTA:** "Get CFO AI Playbook" / "Get Detailed Curriculum & Fees" → `/get-playbook` (gated form). After form submission, users get a direct download link to `public/cfo-ai-playbook.html` (12-section, 25+ page playbook; users can Print to PDF)
2. **Secondary CTA:** "Join Info Session (Free)" → `/info-session` (webinar/Zoom registration)
3. **WhatsApp CTA:** "Chat on WhatsApp with Programme Advisor" (click-to-chat) in hero, footer, and sidebar
4. **Header CTA:** "Get Playbook" in the main navigation

Forms use **Netlify Forms**. To connect to Google Sheets:

1. Deploy to Netlify
2. In Netlify: Forms → select form → Add notification → Outgoing webhook (Zapier/Make)
3. Or use Zapier: Trigger "New Form Submission in Netlify" → Action "Google Sheets: Create Row"

Lead scoring logic is in `netlify/functions/lead-scoring.js` (Role + Company Size + Goal). Configure as a form webhook if needed.
- **Duration:** 40 contact hours (5-day bootcamp)
- **Target:** CFOs, Finance Directors, Controllers, FP&A Leaders
- **Date:** February 17, 2026
