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
            // 1. Reverse the rows so the newest (bottom of sheet) come first
            const latestFirst = data.values.reverse();
            renderFeedbackCards(latestFirst);
        } else {
            document.getElementById('feedback-container').innerHTML = '<p style="color: var(--muted); text-align: center;">No feedback available yet.</p>';
        }
    } catch (error) {
        console.error("Error connecting to Google Sheets:", error);
    }
}

function renderFeedbackCards(rows) {
    const container = document.getElementById('feedback-container');
    container.innerHTML = ''; 

    let displayedCount = 0; // Counter to track how many cards we've shown

    for (const row of rows) {
        // Stop once we have reached 6 cards
        if (displayedCount >= 6) break;

        const rating = parseInt(row[15]) || 0;

        // Filter: Only 3 stars or higher
        if (rating < 3) continue;

        // Data Extraction
        const timestamp = row[0] || "";
        const role = row[1] || "User";
        const name = row[2] || row[7] || row[13] || "Contributor";
        const comment = row[25] || "No additional comments provided.";

        // Build the Card
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
                ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}
            </div>

            <p class="hcl-comment">"${comment}"</p>

            <ul class="hcl-metadata">
                ${row[3] ? `<li><strong>College:</strong> ${row[3]}</li>` : ''}
                ${row[18] ? `<li><strong>Compiler Acc:</strong> ${row[18]}/5</li>` : ''}
            </ul>
        `;
        
        container.appendChild(card);
        displayedCount++; // Increment the counter
    }

    if (container.innerHTML === '') {
        container.innerHTML = '<p style="color: var(--muted); text-align: center;">Latest reviews are being moderated.</p>';
    }
}

document.addEventListener('DOMContentLoaded', fetchFeedbackData);