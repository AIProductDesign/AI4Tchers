/**
 * AI 4 T'chers — Main rendering & UI logic
 * Depends on: js/sessions.js (must be loaded first)
 */

document.addEventListener("DOMContentLoaded", function () {
  renderSessions();
  renderResources();
  renderProjects();
  initNavScroll();
  initActiveLinks();
});

/* ─── SESSIONS ─────────────────────────────────────────────────────────── */

function renderSessions() {
  var container = document.getElementById("sessions-container");
  if (!container) return;
  if (!SESSIONS || SESSIONS.length === 0) {
    container.innerHTML =
      '<p class="empty-state">No sessions yet. Add entries to the SESSIONS array in js/sessions.js.</p>';
    return;
  }

  var html = "";
  SESSIONS.forEach(function (s) {
    var isUpcoming = s.status === "upcoming";
    var cardClass = isUpcoming ? "session-card session-card--upcoming" : "session-card session-card--past";

    /* Badge */
    var badge = '<span class="session-badge">' + (isUpcoming ? "Coming Soon" : "Sessie " + s.number) + "</span>";

    /* Status label */
    var statusLabel = isUpcoming
      ? '<span class="session-status session-status--upcoming">Upcoming</span>'
      : '<span class="session-status session-status--past">Past</span>';

    /* Presenters */
    var presentersHtml = "";
    if (s.presenters && s.presenters.length > 0) {
      presentersHtml =
        '<div class="session-presenters">' +
        s.presenters.map(function (p) { return '<span class="presenter-tag">' + escHtml(p) + "</span>"; }).join("") +
        "</div>";
    }

    /* Topics */
    var topicsHtml = "";
    if (s.topics && s.topics.length > 0) {
      topicsHtml =
        '<ul class="session-topics">' +
        s.topics.map(function (t) { return "<li>" + escHtml(t) + "</li>"; }).join("") +
        "</ul>";
    }

    /* Action buttons (past only) */
    var actionsHtml = "";
    if (!isUpcoming) {
      var btns = "";
      if (s.slides) {
        btns +=
          '<a href="' + escHtml(s.slides) + '" target="_blank" rel="noopener" class="btn btn-secondary">' +
          '<svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>' +
          "Slides (PDF)</a>";
      } else {
        btns += '<span class="btn btn-disabled">Slides — Soon</span>';
      }
      if (s.video) {
        btns +=
          '<a href="' + escHtml(s.video) + '" target="_blank" rel="noopener" class="btn btn-primary">' +
          '<svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/></svg>' +
          "Watch Recording</a>";
      } else {
        btns += '<span class="btn btn-disabled">Recording — Soon</span>';
      }
      actionsHtml = '<div class="session-actions">' + btns + "</div>";
    }

    html +=
      '<article class="' + cardClass + '">' +
      "  <div class=\"session-card-header\">" +
      "    <div class=\"session-meta\">" +
      badge +
      statusLabel +
      "    </div>" +
      '    <span class="session-date">' + escHtml(s.date) + "</span>" +
      "  </div>" +
      '  <h3 class="session-title">' + escHtml(s.title) + "</h3>" +
      presentersHtml +
      topicsHtml +
      actionsHtml +
      "</article>";
  });

  container.innerHTML = html;
}

/* ─── RESOURCES ─────────────────────────────────────────────────────────── */

function renderResources() {
  var container = document.getElementById("resources-container");
  if (!container) return;
  if (!RESOURCES || RESOURCES.length === 0) {
    container.innerHTML =
      '<p class="empty-state">No resources yet. Add entries to the RESOURCES array in js/sessions.js.</p>';
    return;
  }

  var html = "";
  RESOURCES.forEach(function (cat) {
    var itemsHtml = cat.items
      .map(function (item) {
        var isExternal = item.url && item.url !== "#";
        var linkAttrs = isExternal ? ' target="_blank" rel="noopener"' : "";
        return (
          '<a href="' + escHtml(item.url) + '"' + linkAttrs + ' class="resource-item">' +
          '  <div class="resource-item-title">' + escHtml(item.title) +
          (isExternal
            ? ' <svg class="external-icon" viewBox="0 0 20 20" fill="currentColor" width="12" height="12"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/></svg>'
            : "") +
          "</div>" +
          '  <p class="resource-item-desc">' + escHtml(item.desc) + "</p>" +
          "</a>"
        );
      })
      .join("");

    html +=
      '<div class="resource-category">' +
      '  <h3 class="resource-category-title">' + escHtml(cat.category) + "</h3>" +
      '  <div class="resource-grid">' + itemsHtml + "</div>" +
      "</div>";
  });

  container.innerHTML = html;
}

/* ─── PROJECTS ─────────────────────────────────────────────────────────── */

function renderProjects() {
  var container = document.getElementById("projects-container");
  if (!container) return;

  if (!PROJECTS || PROJECTS.length === 0) {
    container.innerHTML =
      '<div class="project-placeholder">' +
      '  <div class="project-placeholder-icon">' +
      '    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>' +
      "  </div>" +
      '  <h3 class="project-placeholder-title">No projects yet — be the first!</h3>' +
      '  <p class="project-placeholder-text">Share your AI experiments with the group. To add a project:</p>' +
      '  <ol class="project-placeholder-steps">' +
      "    <li>Create a GitHub repo for your project</li>" +
      "    <li>Open <code>js/sessions.js</code> in this repository</li>" +
      "    <li>Add an entry to the <code>PROJECTS</code> array at the bottom of the file</li>" +
      "    <li>Commit and push — the site updates automatically</li>" +
      "  </ol>" +
      '  <a href="https://github.com/AIProductDesign/AI4Tchers" target="_blank" rel="noopener" class="btn btn-github">' +
      '    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>' +
      "    Open GitHub repo to contribute" +
      "  </a>" +
      "</div>";
    return;
  }

  var html = '<div class="projects-grid">';
  PROJECTS.forEach(function (p) {
    var repoName = p.repo ? p.repo.replace(/\/$/, "").split("/").slice(-2).join("/") : p.name;
    html +=
      '<article class="project-card">' +
      '  <div class="project-card-header">' +
      '    <svg class="project-repo-icon" viewBox="0 0 16 16" fill="currentColor" width="16" height="16"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>' +
      '    <a href="' + escHtml(p.repo || "#") + '" target="_blank" rel="noopener" class="project-repo-name">' +
      escHtml(repoName) +
      "    </a>" +
      "  </div>" +
      '  <p class="project-desc">' + escHtml(p.desc || "") + "</p>" +
      '  <div class="project-card-footer">' +
      '    <span class="project-author-tag">' + escHtml(p.author || "") + "</span>" +
      (p.lang
        ? '<span class="project-lang-badge"><span class="project-lang-dot"></span>' + escHtml(p.lang) + "</span>"
        : "") +
      "  </div>" +
      "</article>";
  });
  html += "</div>";
  container.innerHTML = html;
}

/* ─── NAV SCROLL EFFECT ─────────────────────────────────────────────────── */

function initNavScroll() {
  var header = document.querySelector("header");
  if (!header) return;
  function onScroll() {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ─── ACTIVE NAV LINK HIGHLIGHTING ─────────────────────────────────────── */

function initActiveLinks() {
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav-link");
  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    var scrollY = window.scrollY;
    var active = null;
    sections.forEach(function (sec) {
      var top = sec.offsetTop - 100;
      if (scrollY >= top) {
        active = sec.id;
      }
    });
    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === "#" + active) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ─── UTILITY ────────────────────────────────────────────────────────────── */

function escHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
