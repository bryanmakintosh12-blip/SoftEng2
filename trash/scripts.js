// Navigation buttons and section toggling
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and sections
    navButtons.forEach(b => b.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    // Add active class to clicked button and corresponding section
    btn.classList.add('active');
    const targetSection = document.getElementById(btn.dataset.section);
    targetSection.classList.add('active');
  });
});

// Utility function to filter table rows based on search input
function setupSearch(inputId, tableId) {
  const input = document.getElementById(inputId);
  const table = document.getElementById(tableId);
  input.addEventListener('input', () => {
    const filter = input.value.toLowerCase();
    const rows = table.tBodies[0].rows;
    for (let row of rows) {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(filter) ? '' : 'none';
    }
  });
}

// Setup searches for all searchable tables
setupSearch('itemSearch', 'itemTable');
setupSearch('carSearch', 'carTable');
setupSearch('borrowedItemSearch', 'borrowedItemTable');
setupSearch('borrowedCarSearch', 'borrowedCarTable');

// Dummy handlers for action buttons (Add, Edit, Delete, Borrow, etc.)
// For demo, these just alert the action and item id
document.querySelectorAll('.action-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    alert(`Action: ${btn.textContent.trim()}`);
  });
});
