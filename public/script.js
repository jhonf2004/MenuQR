const bebidasImages = [
  '/images/carta1.jpg',
  '/images/carta2.jpg',
  '/images/carta3.jpg',
  '/images/carta4.jpg',
  '/images/carta5.jpg',
  '/images/carta6.jpg',
  '/images/carta7.jpg'
];

const menuImages = [
  '/images/menu1.jpg',
  '/images/menu2.jpg'
];

let currentImages = menuImages;
let currentIndex = 0;

const imageElement = document.getElementById('menu-image');

function showImage(index) {
  currentIndex = (index + currentImages.length) % currentImages.length;
  imageElement.src = currentImages[currentIndex];
}
imageElement.addEventListener('contextmenu', (e) => {
  e.preventDefault(); // Evita la opción de descargar imagen
});

function showNextImage() {
  showImage(currentIndex + 1);
}

function showPreviousImage() {
  showImage(currentIndex - 1);
}

// Navegación táctil y clic
imageElement.addEventListener('click', (e) => {
  const clickX = e.offsetX;
  const width = imageElement.clientWidth;
  if (clickX < width / 2) showPreviousImage();
  else showNextImage();
});

let startX = 0;
imageElement.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
imageElement.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX > endX + 30) showNextImage();
  else if (startX < endX - 30) showPreviousImage();
});

document.getElementById('prev-button').addEventListener('click', (e) => {
  e.stopPropagation();
  showPreviousImage();
});
document.getElementById('next-button').addEventListener('click', (e) => {
  e.stopPropagation();
  showNextImage();
});

document.getElementById('tab-bebidas').addEventListener('click', () => {
  currentImages = bebidasImages;
  currentIndex = 0;
  showImage(currentIndex);
  setActiveTab('tab-bebidas');
});

document.getElementById('tab-menu').addEventListener('click', () => {
  currentImages = menuImages;
  currentIndex = 0;
  showImage(currentIndex);
  setActiveTab('tab-menu');
});

function setActiveTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

document.getElementById('tab-menu').click();

// Mostrar loader por 3 segundos y luego notificación
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.display = 'none';

    const notice = document.getElementById('notice');
    if (notice) {
      notice.textContent = 'Toca o desliza la imagen para navegar';
    }
  }, 3000); // 3 segundos
});
