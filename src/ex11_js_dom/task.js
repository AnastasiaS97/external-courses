function setupImages() {
  const setup = ['asset/cave.jpg', 'asset/forest.jpg', 'asset/lake.jpg', 'asset/sea.jpg', 'asset/snow.jpg'];
  const alt = ['cave', 'forest', 'lake', 'sea', 'snow'];
  for (let index = 0; index < setup.length; index += 1) {
    const newImage = document.createElement('img');
    newImage.classList.add('slider-img');
    newImage.setAttribute('src', setup[index]);
    newImage.setAttribute('alt', alt[index]);
    if (index === 0) {
      newImage.classList.add('current');
    }
    document.getElementById('slider-img-wrp').appendChild(newImage);
  }

  return 0;
}

setupImages();

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
