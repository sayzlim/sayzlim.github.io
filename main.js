const themeManager = {
  storageKey: "user-color-scheme",
  query: window.matchMedia("(prefers-color-scheme: dark)"),
  normalize(preference) {
    return preference === "light" || preference === "dark"
      ? preference
      : "system";
  },
  getStoredPreference() {
    try {
      return this.normalize(window.localStorage.getItem(this.storageKey));
    } catch {
      return "system";
    }
  },
  getResolvedTheme(preference) {
    return preference === "system"
      ? this.query.matches
        ? "dark"
        : "light"
      : preference;
  },
  applyTheme(preference) {
    const normalizedPreference = this.normalize(preference);
    const resolvedTheme = this.getResolvedTheme(normalizedPreference);
    const root = document.documentElement;

    root.setAttribute("data-theme-preference", normalizedPreference);
    root.setAttribute("data-site-theme", resolvedTheme);
    this.syncControls(normalizedPreference);
  },
  persistPreference(preference) {
    const normalizedPreference = this.normalize(preference);

    try {
      if (normalizedPreference === "system") {
        window.localStorage.removeItem(this.storageKey);
      } else {
        window.localStorage.setItem(this.storageKey, normalizedPreference);
      }
    } catch {
      return;
    }
  },
  setPreference(preference) {
    const normalizedPreference = this.normalize(preference);
    this.persistPreference(normalizedPreference);
    this.applyTheme(normalizedPreference);
  },
  syncControls(preference) {
    document.querySelectorAll("[data-theme-option]").forEach((button) => {
      const isActive = button.getAttribute("data-theme-option") === preference;
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  },
  bindControls() {
    document.querySelectorAll("[data-theme-option]").forEach((button) => {
      if (button.dataset.themeBound === "true") return;

      button.addEventListener("click", () => {
        const preference = button.getAttribute("data-theme-option");
        this.setPreference(preference);
      });
      button.dataset.themeBound = "true";
    });
  },
  handleSystemChange() {
    if (this.getStoredPreference() === "system") {
      this.applyTheme("system");
    }
  },
  init() {
    this.applyTheme(this.getStoredPreference());
    this.bindControls();
    this.query.addEventListener("change", () => this.handleSystemChange());
  },
};

// Observer for Related Posts

function toggleElement(el) {
  el = document.querySelector(el);

  let isToggleAble =
    !el.hasAttribute("show") && !sessionStorage.getItem(el.className);

  if (isToggleAble) {
    el.toggleAttribute("show");
  }
}

function setObserver() {
  const relatedPostWrapper = document.querySelectorAll(".related-posts")[0];
  const observer = new IntersectionObserver(function (entries) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      toggleElement(".hello");
    }
  });

  if (relatedPostWrapper !== undefined) observer.observe(relatedPostWrapper);
}

// Page Visibility API
const _carbonOptimize = {
  isRefreshAble: function () {
    return !(
      typeof document.addEventListener === "undefined" ||
      this.browserSupport().hidden === undefined
    );
  },
  browserSupport: function () {
    let hidden;
    let visibilityChange;
    if (typeof document.hidden !== "undefined") {
      // Opera 12.10 and Firefox 18 and later support
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }
    return {
      hidden: hidden,
      visibilityChange: visibilityChange,
    };
  },
  handleVisibilityChange: function () {
    const isElementInViewport = function (el) {
      let element = document.querySelector(el);
      let bounding = element.getBoundingClientRect();
      let isVisible;

      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= window.innerWidth &&
        bounding.bottom <= window.innerHeight
      ) {
        isVisible = true;
      } else {
        isVisible = false;
      }
      return isVisible;
    };

    if (!document.hidden) {
      if (
        typeof _carbonads !== "undefined" &&
        isElementInViewport("#carbonads")
      ) {
        _carbonads.refresh();
      }
    }
  },
  init: function () {
    if (this.isRefreshAble()) {
      document.addEventListener(
        this.browserSupport().visibilityChange,
        this.handleVisibilityChange,
        false,
      );
    }
  },
};

function loadInits() {
  themeManager.init();
  _carbonOptimize.init();
  setObserver();
  initPostToc();
  initCodeCopy();
  initArchiveTimeline();
}

document.addEventListener("DOMContentLoaded", loadInits);

function syncPostToc() {
  const toc = document.querySelector(".post-toc");
  if (!toc) return;

  if (window.innerWidth >= 980) {
    toc.setAttribute("open", "");
  } else {
    toc.removeAttribute("open");
  }
}

function initPostToc() {
  const toc = document.querySelector(".post-toc");
  if (!toc) return;

  syncPostToc();
  window.addEventListener("resize", syncPostToc, { passive: true });
  setupTocSpy(toc);
  setupTocInteractions(toc);
}

function setActiveTocLink(toc, id) {
  const links = toc.querySelectorAll(".toc a");
  links.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function setupTocSpy(toc) {
  const headings = Array.from(
    document.querySelectorAll(".post-body h2[id], .post-body h3[id]"),
  );
  if (headings.length === 0) return;

  let activeId = headings[0].id;
  setActiveTocLink(toc, activeId);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

      if (visible && visible.target.id && visible.target.id !== activeId) {
        activeId = visible.target.id;
        setActiveTocLink(toc, activeId);
      }
    },
    {
      rootMargin: "-18% 0px -70% 0px",
      threshold: [0, 1],
    },
  );

  headings.forEach((heading) => observer.observe(heading));
}

function setupTocInteractions(toc) {
  const links = toc.querySelectorAll(".toc a");
  if (links.length === 0) return;

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 980) {
        toc.removeAttribute("open");
      }
    });
  });
}

function initCodeCopy() {
  const blocks = document.querySelectorAll(".post-body pre, .prose-page pre");
  if (blocks.length === 0 || !navigator.clipboard) return;

  blocks.forEach((block) => {
    if (block.querySelector(".code-copy")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "code-copy";
    button.textContent = "Copy";
    button.setAttribute("aria-label", "Copy code to clipboard");

    const status = document.createElement("span");
    status.className = "sr-only";
    status.setAttribute("aria-live", "polite");
    status.setAttribute("aria-atomic", "true");
    button.append(status);

    button.addEventListener("click", async () => {
      const code = block.querySelector("code");
      const text = (code ? code.innerText : block.innerText).replace(/\n$/, "");
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "Copied";
        button.dataset.copied = "true";
        button.append(status);
        status.textContent = "Code copied to clipboard";
        window.setTimeout(() => {
          button.textContent = "Copy";
          delete button.dataset.copied;
          button.append(status);
          status.textContent = "";
        }, 1400);
      } catch {
        button.textContent = "Failed";
        button.append(status);
        status.textContent = "Copy failed";
        window.setTimeout(() => {
          button.textContent = "Copy";
          button.append(status);
          status.textContent = "";
        }, 1400);
      }
    });

    block.prepend(button);
  });
}

function initArchiveTimeline() {
  const groups = Array.from(
    document.querySelectorAll("[data-archive-year-group]"),
  );
  const nav = document.querySelector(".archive-jump-nav");
  if (groups.length === 0 || !nav) return;

  nav.querySelectorAll("[data-year-link]").forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");
      if (!href) return;
      const id = href.replace("#", "");
      const target = document.getElementById(id);
      if (!target) return;

      window.requestAnimationFrame(() => {
        target.scrollIntoView({ block: "start" });
      });
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!visible) return;

      const year = visible.target.getAttribute("data-archive-year-group");
      if (!year) return;

      nav.querySelectorAll("[data-year-link]").forEach((link) => {
        const isActive = link.getAttribute("data-year-link") === year;
        if (isActive) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    {
      rootMargin: "-12% 0px -78% 0px",
      threshold: [0, 1],
    },
  );

  groups.forEach((group) => {
    observer.observe(group);
  });
}
