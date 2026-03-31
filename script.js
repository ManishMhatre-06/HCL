// It loads the side bar contents and toggles the content sections based on user interaction.
document.addEventListener("DOMContentLoaded", () => {
  const sidebarItems = document.querySelectorAll(".sidebar li[data-target]");
  const sections = document.querySelectorAll(".docs-content");

  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetId = item.dataset.target;

      // Update sidebar active state
      sidebarItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      // Toggle sections
      sections.forEach(section => {
        section.classList.toggle(
          "hidden",
          section.id !== targetId
        );
      });
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const syntaxParent = document.querySelector(
    '.sidebar li[data-target="syntax"]'
  );
  const syntaxSubList = syntaxParent?.querySelector(".sub-list");
  const syntaxItems = document.querySelectorAll(
    ".sidebar .sub-list li[data-syntax]"
  );
  const syntaxBlocks = document.querySelectorAll(".syntax-block");

  let lastActiveSyntax = null;

  /* ---------- Syntax & Code parent toggle ---------- */
  if (syntaxParent) {
    syntaxParent.addEventListener("click", () => {
      syntaxParent.classList.toggle("open");

      // If collapsing, keep last visited syntax block visible
      if (!syntaxParent.classList.contains("open") && lastActiveSyntax) {
        syntaxBlocks.forEach(block =>
          block.classList.toggle(
            "active",
            block.dataset.syntax === lastActiveSyntax
          )
        );
      }
    });
  }

  /* ---------- Syntax sub-item clicks ---------- */
  syntaxItems.forEach(item => {
    item.addEventListener("click", e => {
      e.stopPropagation();
    
      const target = item.dataset.syntax;
      lastActiveSyntax = target;
    
      /* ---- FORCE SWITCH TO SYNTAX SECTION ---- */
      sections.forEach(section =>
        section.classList.toggle("hidden", section.id !== "syntax")
      );
    
      sidebarItems.forEach(i => i.classList.remove("active"));
      syntaxParent.classList.add("active");
    
      /* ---- KEEP SUB-LIST OPEN ---- */
      syntaxParent.classList.add("open");
    
      /* ---- ACTIVATE SELECTED SYNTAX BLOCK ---- */
      syntaxBlocks.forEach(block =>
        block.classList.toggle(
          "active",
          block.dataset.syntax === target
        )
      );
    });
  });


  /* ---------- When navigating BACK to Syntax section ---------- */
  const sidebarItems = document.querySelectorAll(".sidebar li[data-target]");
  const sections = document.querySelectorAll(".docs-content");

  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetId = item.dataset.target;

      sections.forEach(section =>
        section.classList.toggle("hidden", section.id !== targetId)
      );

      // Restore last syntax block when returning to Syntax section
      if (targetId === "syntax" && lastActiveSyntax) {
        syntaxBlocks.forEach(block =>
          block.classList.toggle(
            "active",
            block.dataset.syntax === lastActiveSyntax
          )
        );
      }
    });
  });
});

const API_KEY = 'AIzaSyAGTkFxuoKAWUJPOSy-RFLNdOqs_QJRavo'; 
const SHEET_ID = '1ObZaSCYjn0sooa8s4zzzDSxWFOMte4tQDYDapN2yiuY';
const RANGE = 'Form Responses 1!A2:Z100'; 

async function fetchFeedbackData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.values) {
            renderFeedbackCards(data.values);
        } else {
            console.warn("No feedback data found.");
        }
    } catch (error) {
        console.error("Error connecting to Google Sheets:", error);
    }
}

function renderFeedbackCards(rows) {
    const container = document.getElementById('feedback-container');
    container.innerHTML = ''; 

    rows.forEach(row => {
        // Mapping columns from your specific sheet
        const timestamp = row[0] || "";
        const role = row[1] || "User";
        const name = row[2] || row[7] || row[13] || "Contributor"; // Checks all role name columns
        const rating = parseInt(row[15]) || 0;
        const comment = row[25] || "No additional comments provided.";

        // Creating the Card Element
        const card = document.createElement('div');
        card.className = 'hcl-card';

        card.innerHTML = `
            <div class="hcl-card-header">
                <div>
                    <h4 class="hcl-user-name">${name}</h4>
                    <span class="hcl-user-role">${role}</span>
                </div>
                <span class="hcl-timestamp">${timestamp.split(' ')[0]}</span>
            </div>

            <div class="hcl-stars">
                ${'★'.repeat(Math.max(0, Math.min(5, rating)))}${'☆'.repeat(Math.max(0, 5 - rating))}
            </div>

            <p class="hcl-comment">"${comment}"</p>

            <ul class="hcl-metadata">
                ${row[3] ? `<li><strong>College:</strong> ${row[3]}</li>` : ''}
                ${row[18] ? `<li><strong>Compiler Acc:</strong> ${row[18]}/5</li>` : ''}
                ${row[22] ? `<li><strong>Key Strength:</strong> ${row[22]}</li>` : ''}
            </ul>
        `;
        container.appendChild(card);
    });
}

// Start the fetch process
document.addEventListener('DOMContentLoaded', fetchFeedbackData);