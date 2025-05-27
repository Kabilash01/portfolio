function downloadResume() {
  const link = document.createElement('a');
  link.href = 'resume.pdf';
  link.download = 'Kabilash_Resume.pdf';
  link.click();
}

// Scroll reveal animation
function revealSectionsOnScroll() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
}

window.addEventListener("scroll", revealSectionsOnScroll);
document.addEventListener("DOMContentLoaded", revealSectionsOnScroll);

// Theme switcher
document.getElementById("themeSwitcher").addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
