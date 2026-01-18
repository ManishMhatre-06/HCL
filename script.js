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
