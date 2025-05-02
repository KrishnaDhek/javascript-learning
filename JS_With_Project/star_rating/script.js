const stars = document.querySelectorAll('.star');
const ratingText = document.getElementById('rating-display');
let selectedRating = 0;

stars.forEach((star, index) => {
  star.addEventListener('mouseover', () => {
    updateStars(index, 'hover');
  });

  star.addEventListener('mouseout', () => {
    updateStars(selectedRating - 1, 'hover');
  });

  star.addEventListener('click', () => {
    selectedRating = index + 1;
    ratingText.textContent = `Rating: ${selectedRating}`;
    updateStars(index, 'select');
  });
});

function updateStars(index, type) {
  stars.forEach((star, i) => {
    if (type === 'hover') {
      star.classList.toggle('hovered', i <= index);
    }
    if (type === 'select') {
      star.classList.toggle('selected', i <= index);
    }
    // Clean up extra class when type is hover
    if (type === 'hover' && i > index) {
      star.classList.remove('hovered');
    }
    // Clean up extra class when type is select
    if (type === 'select' && i > index) {
      star.classList.remove('selected');
    }
  });
}