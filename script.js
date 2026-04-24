/* ---------- SIDEBAR NAVIGATION ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const sidebarItems = document.querySelectorAll(".sidebar li[data-target]");
  const sections = document.querySelectorAll(".docs-content");

  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetId = item.dataset.target;

      // Active state
      sidebarItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      // Show section
      sections.forEach(section => {
        section.classList.toggle("hidden", section.id !== targetId);
      });
    });
  });
});


/* ---------- SYNTAX & CODE LOGIC ---------- */
document.addEventListener("DOMContentLoaded", () => {

  const sidebarItems = document.querySelectorAll(".sidebar li[data-target]");
  const sections = document.querySelectorAll(".docs-content");

  const syntaxParent = document.querySelector('.sidebar li[data-target="syntax"]');
  const syntaxItems = document.querySelectorAll(".sidebar .sub-list li[data-syntax]");
  const syntaxBlocks = document.querySelectorAll(".syntax-block");

  let lastActiveSyntax = null;

  if (!syntaxParent) return;

  /* Toggle Syntax dropdown */
  syntaxParent.addEventListener("click", () => {
    syntaxParent.classList.toggle("open");

    if (!syntaxParent.classList.contains("open") && lastActiveSyntax) {
      syntaxBlocks.forEach(block =>
        block.classList.toggle(
          "active",
          block.dataset.syntax === lastActiveSyntax
        )
      );
    }
  });

  /* Sub-item click */
  syntaxItems.forEach(item => {
    item.addEventListener("click", e => {
      e.stopPropagation();

      const target = item.dataset.syntax;
      lastActiveSyntax = target;

      // Switch to syntax section
      sections.forEach(section =>
        section.classList.toggle("hidden", section.id !== "syntax")
      );

      sidebarItems.forEach(i => i.classList.remove("active"));
      syntaxParent.classList.add("active");

      syntaxParent.classList.add("open");

      // Activate correct block
      syntaxBlocks.forEach(block =>
        block.classList.toggle(
          "active",
          block.dataset.syntax === target
        )
      );
    });
  });
});


/* ---------- HASH BASED NAVIGATION ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;

  if (hash) {
    document.querySelectorAll(".docs-content").forEach(sec => {
      sec.classList.add("hidden");
      sec.classList.remove("active");
    });

    const target = document.querySelector(hash);
    if (target) {
      target.classList.remove("hidden");
      target.classList.add("active");
    }
  }
});


/* ---------- FEEDBACK (GOOGLE SHEETS) ---------- */
const API_KEY = 'AIzaSyBtJVHnrrWWYzGZICqlEMWtakEqBe_uteA'; 
const SHEET_ID = '188-NcqN4pOCVA9jO6DivizquXt-5FW66sldx9cBEsJw';
const RANGE = 'Form Responses 1!A2:AG100'; 

const BLOCKED_NAMES = [
  "Bloom Graphics Solution",
  "Arun N Gawande",
  "Ms. Pallavi Patil",
  "Preeti Samdani"
];

async function fetchFeedbackData() {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
    );
    const data = await response.json();

    if (data.values) {
      renderFeedbackCards(data.values.reverse());
    }
  } catch (error) {
    console.error("Error connecting to Google Sheets:", error);
  }
}

function renderFeedbackCards(rows) {
  const container = document.getElementById('feedback-container');
  if (!container) return;

  let count = 0;

  for (const row of rows) {
    if (count >= 12) break;

    const name = row[2] || row[7] || row[13] || row[18] || "Contributor";
    const rating = parseInt(row[21]) || 0;
    const timestamp = row[0] || "";
    const role = row[1] || "User";
    const feedback1 = row[28] || "";
    const feedback2 = row[29] || "";

    if (BLOCKED_NAMES.includes(name.trim())) continue;
    if (rating < 2) continue;

    // ❗ skip empty feedback
    if (!feedback1.trim() && !feedback2.trim()) continue;

    const card = `
      <div class="hcl-card">
        <div class="hcl-card-header">
          <div>
            <h4>${name}</h4>
            <span>${role}</span>
          </div>
          <span>${timestamp.split(' ')[0]}</span>
        </div>

        <div class="hcl-stars">
          ${'★'.repeat(Math.min(5, rating))}${'☆'.repeat(Math.max(0, 5 - rating))}
        </div>

        ${feedback1 ? `<p>"${feedback1}"</p>` : ''}
        ${feedback2 ? `<p>"${feedback2}"</p>` : ''}
      </div>
    `;

    container.insertAdjacentHTML("beforeend", card);
    count++;
  }
}

document.addEventListener("DOMContentLoaded", fetchFeedbackData);


/* ---------- MOBILE NAV MENU ---------- */
function initMobileMenu() {
  const menuBtn = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-menu");
  const overlay = document.querySelector(".mobile-overlay");

  if (!menuBtn || !mobileMenu || !closeBtn || !overlay) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
}

document.addEventListener("DOMContentLoaded", initMobileMenu);


/* ---------- MOBILE DOC DROPDOWN ---------- */
document.addEventListener("DOMContentLoaded", () => {

  const dropdown = document.querySelector(".mobile-docs-dropdown");
  const selected = document.querySelector(".dropdown-selected");
  const options = document.querySelectorAll(".dropdown-options > li");
  const sections = document.querySelectorAll(".docs-content");
  const syntaxBlocks = document.querySelectorAll(".syntax-block");

  let lastSyntax = "print";

  if (!dropdown) return;

  /* Toggle dropdown */
  selected.addEventListener("click", (e) => {
    e.stopPropagation();

    const isOpen = dropdown.classList.toggle("open");

    if (isOpen) {
      document.querySelectorAll(".mobile-docs-dropdown li").forEach(li => {
        li.classList.remove("open");
      });
    }
  });

  /* Close when clicking outside */
  window.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");

      document.querySelectorAll(".mobile-docs-dropdown li").forEach(li => {
        li.classList.remove("open");
      });
    }
  });

  /* Main options */
  options.forEach(option => {
    const parent = option.querySelector(".mobile-parent");

    if (parent) {
      parent.addEventListener("click", e => {
        e.stopPropagation();
        option.classList.toggle("open");
      });
    } else {
      option.addEventListener("click", () => {
        const target = option.dataset.target;

        selected.textContent = option.textContent;

        sections.forEach(section =>
          section.classList.toggle("hidden", section.id !== target)
        );

        dropdown.classList.remove("open");
      });
    }
  });

  /* Sub-list clicks */
  document.querySelectorAll(".mobile-sub-list li").forEach(item => {
    item.addEventListener("click", e => {
      e.stopPropagation();

      const syntax = item.dataset.syntax;
      lastSyntax = syntax;

      sections.forEach(section =>
        section.classList.toggle("hidden", section.id !== "syntax")
      );

      syntaxBlocks.forEach(block =>
        block.classList.toggle(
          "active",
          block.dataset.syntax === syntax
        )
      );

      selected.textContent = `Syntax → ${item.textContent}`;

      dropdown.classList.remove("open");

      document.querySelectorAll(".mobile-docs-dropdown li").forEach(li => {
        li.classList.remove("open");
      });
    });
  });

});