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


// Sidebar nested items open on click, but do not close again.
document.querySelectorAll(".sidebar .has-children").forEach(item => {
  item.addEventListener("click", () => {
    // Open once, never close until reload
    if (!item.classList.contains("open")) {
      item.classList.add("open");
    }
  });
});

// Syntax & Code sub-section switching
const syntaxItems = document.querySelectorAll(".sidebar .sub-list li[data-syntax]");
const syntaxBlocks = document.querySelectorAll(".syntax-block");

syntaxItems.forEach(item => {
  item.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent parent menu interference

    const target = item.dataset.syntax;

    // Hide all syntax blocks
    syntaxBlocks.forEach(block => {
      block.classList.remove("active");
    });

    // Show selected syntax block
    const activeBlock = document.querySelector(
      `.syntax-block[data-syntax="${target}"]`
    );

    if (activeBlock) {
      activeBlock.classList.add("active");
    }
  });
});
