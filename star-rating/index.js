const starRatings = document.querySelector('.star-rating');
const stars = starRatings.querySelectorAll('.star');
const title = document.querySelector('.container h1 span');

let currentRating = 0;

function selectStar(ref) {
  ref.classList.add('fa-solid');
  ref.classList.remove('fa-regular');
}

function deselectStar(ref) {
  ref.classList.add('fa-regular');
  ref.classList.remove('fa-solid');
}

function toggleStars(index) {
  if(index < 0 || index > stars.length || isNaN(index)) {
    return;
  }

  stars.forEach((star, idx) => {
    if(idx < index) {
      selectStar(star.querySelector('.fa-star'));
    } else {
      deselectStar(star.querySelector('.fa-star'));
    }
  });
}

starRatings.addEventListener('click', (e) => {
  if(e.target.nodeName === 'I') {
    const index = Number(e.target.dataset.index);
    currentRating = index;
    title.innerText = `: ${index}`;
    toggleStars(index);
  }
});

starRatings.addEventListener('mouseover', (e) => {
  if(e.target.nodeName === 'I') {
    const index = Number(e.target.dataset.index);
    toggleStars(index);
  }
});

starRatings.addEventListener('mouseleave', (e) => {
  toggleStars(currentRating);
});