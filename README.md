# AI 4 T'chers

**A learning community for AI tools in product development education.**  
Universiteit Antwerpen · Productontwikkeling

> *Bridge the Gap · Learning by Doing · Organic but Fast*

---

## What is AI 4 T'chers?

AI is evolving faster than any course can keep up with. AI 4 T'chers (AI for Teachers) is a community of product development educators at UA who experiment with AI tools — together, in practice, at speed. We share what we learn: sessions, slides, prompts, code, failures and wins.

The ambition: **build your own AI agent within 6 months.**

The goal is not to replace teaching judgement, but to close the gap between where our students already are and where we, as educators, need to be.

---

## Website

The site is hosted on GitHub Pages:  
**https://aiproductdesign.github.io/AI4Tchers/**

It covers:
- **Sessions** — monthly sessions with slides, recordings and notes
- **Resources** — curated tools, learning materials and external links
- **Projects** — AI experiments shared by colleagues
- **About** — context and goals of the initiative

---

## Sessions

| # | Date | Topics |
|---|------|--------|
| 1 | 27 april 2026 | Gen AI & RAG · Agents & Agentic AI (API + MCP) · Skills & Claude Design · AI in our education programme · AI DIY challenge workshop |
| 2 | 19 mei 2026 | *(upcoming)* |

---

## Repository Structure

```
AI4Tchers/
├── index.html          # Single-page website
├── css/
│   └── style.css       # UA-branded stylesheet
├── js/
│   ├── sessions.js     # ← EDIT THIS to add sessions, resources, projects
│   └── main.js         # Rendering logic (don't edit unless you know JS)
├── slides/             # Place PDF slide decks here
│   └── AI_4_Tchers_Sessie_1.pdf
└── README.md
```

No build step, no framework, no npm. Pure HTML + CSS + vanilla JavaScript. Anyone can open `index.html` locally in a browser and it works.

---

## How to Contribute

### Add a new session

Open [`js/sessions.js`](js/sessions.js) and add an object to the `SESSIONS` array:

```js
{
  number: 3,
  date: "16 juni 2026",
  status: "past",           // "past" or "upcoming"
  title: "Your Session Title",
  presenters: ["Your Name"],
  topics: [
    "Topic 1",
    "Topic 2",
  ],
  slides: "slides/AI_4_Tchers_Sessie_3.pdf",  // or null
  video: "https://youtube.com/...",            // or null
}
```

Then place the PDF in the `slides/` folder with the matching filename.

---

### Add a project or experiment

Add an entry to the `PROJECTS` array in [`js/sessions.js`](js/sessions.js):

```js
{
  name: "My AI Feedback Tool",
  repo: "https://github.com/yourname/your-repo",
  author: "Your Name",
  desc: "One sentence describing what you built or are experimenting with."
}
```

This will automatically appear as a card in the Projects section of the website.

---

### Add a resource link

Add an item to an existing category (or create a new category) in the `RESOURCES` array in [`js/sessions.js`](js/sessions.js):

```js
{
  title: "Tool or Resource Name",
  url: "https://...",
  desc: "One sentence description."
}
```

---

### Upload slides

Place your PDF file in the `slides/` folder and reference it in the `slides` field of the corresponding session in `sessions.js`. GitHub will serve it automatically.

---

### Embed a video

Set the `video` field of a session to a YouTube or Vimeo URL. The site will render a link to it alongside the slides button.

---

## Enabling GitHub Pages

If GitHub Pages is not yet active:

1. Go to **Settings** → **Pages** in this repository
2. Under *Source*, select **Deploy from a branch**
3. Branch: `main` · Folder: `/ (root)`
4. Click **Save** — the site goes live within ~1 minute

---

## Learning Goals

After the AI 4 T'chers trajectory, participants can:

- Use **Gen AI tools** for research, ideation, concept development, prototyping, communication and project management
- Work with **Agentic AI systems** — define tasks, organise workflows, integrate tools, evaluate results
- Develop products and services that integrate AI in a meaningful, ethical, technically feasible and human-centred way
- Critically assess AI on desirability, feasibility, safety, privacy, sustainability and social impact
- Justify their use of AI in a professional and well-reasoned way

---

## Team

| Name | Role |
|------|------|
| Alexis | Initiative lead |
| Jelle Saldien | AI overview & technical sessions |
| Elke | AI in the education programme |
| Kristof | Workshop facilitation |
| Hilde | Workshop facilitation |

---

## Contact

Universiteit Antwerpen · Faculteit Toegepaste Ingenieurswetenschappen  
Departement Productontwikkeling  
[www.uantwerpen.be](https://www.uantwerpen.be)
