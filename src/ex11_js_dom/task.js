const images = document.getElementsByClassName('slider-img');
const dots = document.getElementsByClassName('nav-dot');
let imageCurrent = 0;

function imageChange(dest) {
  let destCurrent = dest;
  if (dest >= images.length) {
    destCurrent = 0;
  }
  if (dest < 0) {
    destCurrent = images.length - 1;
  }
  images[imageCurrent].classList.toggle('current');
  dots[imageCurrent].classList.toggle('current');
  images[destCurrent].classList.toggle('current');
  dots[destCurrent].classList.toggle('current');
  imageCurrent = destCurrent;

  return 0;
}

document.getElementById('arrow-prev').addEventListener('click', () => {
  imageChange(imageCurrent - 1);
});
document.getElementById('arrow-next').addEventListener('click', () => {
  imageChange(imageCurrent + 1);
});

document.querySelectorAll('.nav-dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    if (imageCurrent !== index) {
      imageChange(index);
    }
  });
});
