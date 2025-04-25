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

  // No smooth scrolling JavaScript needed as we're using CSS scroll-behavior
  // The browser will automatically handle anchor links with built-in smooth scrolling
});
