// Custom JavaScript for Collete Restaurant

// Function to handle date field dateInput clicks
document.addEventListener("DOMContentLoaded", function () {
  // Find all date field containers
  const dateInputs = document.querySelectorAll("input[type='date']");

  // Add click event listener to each dateInput
  dateInputs.forEach(function (dateInput) {
    // Set minimum date to today using proper YYYY-MM-DD format
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const day = String(today.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    dateInput.setAttribute("min", formattedDate);

    dateInput.addEventListener("click", function (e) {
      dateInput.showPicker();
    });
  });

  document.querySelectorAll("#menu-primary-menu .menu-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default behavior

      const link = this.querySelector("a");
      if (link) {
        const targetId = link.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            smoothScrollTo(targetSection, 500); // 👈 800 milliseconds duration
          }
        } else if (link.getAttribute("href")) {
          window.location.href = link.getAttribute("href");
        }
      }
    });
  });

  // Smooth Scroll Function with custom duration
  function smoothScrollTo(target, duration) {
    const startPosition = window.pageYOffset;
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Ease Function (easeInOutQuad for smooth feeling)
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
});
