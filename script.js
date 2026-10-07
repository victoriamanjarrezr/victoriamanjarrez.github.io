document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const filterSelect = document.getElementById('filterSelect');
  const mainGrid = document.getElementById('mainGrid');
  if (!searchInput || !filterSelect || !mainGrid) return;

  const items = mainGrid.querySelectorAll('.project-card');

  function filterItems() {
    const searchVal = searchInput.value.toLowerCase();
    const filterVal = filterSelect.value;

    items.forEach((card) => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const category = card.dataset.category; // e.g. 'featured' or 'publication'

      const matchesSearch = title.includes(searchVal);
      const matchesFilter = filterVal === 'all' || category === filterVal;

      if (matchesSearch && matchesFilter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  searchInput.addEventListener('input', filterItems);
  filterSelect.addEventListener('change', filterItems);
});
