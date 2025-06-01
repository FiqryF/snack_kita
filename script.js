const slider = document.getElementById('slider');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

const cardWidth = 280 + 20; // width + margin/gap

leftBtn.addEventListener('click', () => {
  slider.parentElement.scrollLeft -= cardWidth;
});

rightBtn.addEventListener('click', () => {
  slider.parentElement.scrollLeft += cardWidth;
});
