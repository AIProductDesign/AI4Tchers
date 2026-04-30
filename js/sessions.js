/**
 * AI 4 T'chers — Session & Resource Data
 * ========================================
 * NON-TECHNICAL EDITING GUIDE
 *
 * SESSIONS: Add a new session object to the SESSIONS array below.
 *   - number:     session number (integer)
 *   - date:       display date string, e.g. "27 april 2026"
 *   - status:     "past" or "upcoming"
 *   - title:      session title
 *   - presenters: array of presenter name strings
 *   - topics:     array of topic strings shown as bullets
 *   - slides:     relative path to PDF in the slides/ folder, e.g. "slides/AI_4_Tchers_Sessie_1.pdf"
 *                 or null if not yet available
 *   - video:      URL to recording (YouTube, etc.) or null
 *
 * RESOURCES: Add items to an existing category or add a new category object.
 *   - category: category heading string
 *   - items:    array of { title, url, desc } objects
 *
 * PROJECTS: Add your project/repo here. Each entry becomes a card on the site.
 *   - name:   project display name
 *   - repo:   full GitHub URL
 *   - author: your name
 *   - desc:   one-sentence description of the experiment or project
 *
 * PDF FILES: Place PDF slide decks in the slides/ folder and reference them
 *            in the slides field above (e.g. "slides/My_Session.pdf").
 */

const SESSIONS = [
  {
    number: 1,
    date: "27 april 2026",
    status: "past",
    title: "The State of AI in 2026",
    presenters: ["Alexis", "Jelle Saldien", "Elke", "Kristof"],
    topics: [
      "Gen AI & RAG",
      "Agents & Agentic AI (API + MCP)",
      "Skills & Claude Design",
      "AI in our education programme",
      "AI DIY challenge workshop"
    ],
    slides: "slides/AI_4_Tchers_Sessie_1.pdf",
    video: null,
  },
  {
    number: 2,
    date: "19 mei 2026",
    status: "upcoming",
    title: "Sessie 2",
    presenters: [],
    topics: [],
    slides: null,
    video: null,
  }
];

const RESOURCES = [
  {
    category: "Within UA",
    items: [
      {
        title: "Infocenter AI – UA",
        url: "https://pintra.uantwerpen.be/webapps/ua-pintrasite-BBLEARN/module/index.jsp?course_id=_200_1&l=nl_PINTRA",
        desc: "AI guidelines, tools register, and training resources from Universiteit Antwerpen"
      },
      {
        title: "AI Leerlijn Productontwikkeling",
        url: "#",
        desc: "SharePoint: PO Home > Alles over Onderwijs > Onderwijsvisie > Leerlijnen > AI"
      },
    ]
  },
  {
    category: "National",
    items: [
      {
        title: "VAIA – Vlaamse AI Academie",
        url: "https://www.vaia.be/nl/",
        desc: "Flemish AI Academy — courses and resources from all Flemish universities, Agoria, Voka & UNIZO"
      },
    ]
  },
  {
    category: "Podcasts",
    items: [
      {
        title: "AI, je nieuwe collega",
        url: "#",
        desc: "Practical Dutch podcast on AI in the workplace — concrete use cases, no hype"
      },
      {
        title: "Bits & Atomen",
        url: "#",
        desc: "Dutch tech and design podcast"
      },
    ]
  },
  {
    category: "Tools to Try",
    items: [
      {
        title: "Claude",
        url: "https://claude.ai",
        desc: "Agent + Skills — conversational AI and design partner (claude.ai/design)"
      },
      {
        title: "ChatGPT Agent Mode",
        url: "https://chatgpt.com",
        desc: "OpenAI agentic AI — also try Custom GPTs and Agent Builder"
      },
      {
        title: "OpenAI Agent Builder",
        url: "https://platform.openai.com/agent-builder",
        desc: "Visual workflow builder for multi-step agentic systems"
      },
      {
        title: "Cursor",
        url: "https://cursor.sh",
        desc: "AI-powered coding environment — great for technically advanced students"
      },
      {
        title: "Figma Make",
        url: "https://www.figma.com/make/",
        desc: "Design-to-code AI from Figma"
      },
      {
        title: "v0",
        url: "https://v0.dev",
        desc: "Prototype generator from Vercel — describe what you want, get working code"
      },
      {
        title: "NotebookLM",
        url: "https://notebooklm.google.com",
        desc: "Google's RAG tool — upload your course materials, ask questions"
      },
    ]
  }
];

const PROJECTS = [
  // Add colleague project repos here. Example:
  // {
  //   name: "My AI Tool",
  //   repo: "https://github.com/jsaldien/my-ai-tool",
  //   author: "Jelle Saldien",
  //   desc: "Description of the experiment or project."
  // }
];
