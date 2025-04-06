const stars = document.querySelectorAll('.star');
const ratingText = document.getElementById('rating-value');
let selectedRating = 0;

stars.forEach((star, index) => {
  star.addEventListener('mouseover', () => {
    highlightStars(index);
  });

  star.addEventListener('mouseout', () => {
    highlightStars(selectedRating - 1); 
  });

  star.addEventListener('click', () => {
    selectedRating = index + 1;
    ratingText.textContent = `Rating: ${selectedRating}`;
    highlightStars(index);
  });
});

function highlightStars(index) {
  stars.forEach((star, i) => {
    star.classList.toggle('hover', i <= index);
    star.classList.toggle('selected', i < selectedRating);
  });
}
