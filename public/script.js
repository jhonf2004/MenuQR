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
  '/images/menu2.jpg',
  '/images/menu3.jpg'
];

// Estado actual
let currentImages = bebidasImages;
let currentIndex = 0;

const imageElement = document.getElementById('menu-image');

function showImage(index) {
  currentIndex = (index + currentImages.length) % currentImages.length;
  imageElement.src = currentImages[currentIndex];
}

function showNextImage() {
  showImage(currentIndex + 1);
}

function showPreviousImage() {
  showImage(currentIndex - 1);
}

// Detectar clic izquierdo o derecho en la imagen
imageElement.addEventListener('click', (e) => {
  const clickX = e.offsetX;
  const width = imageElement.clientWidth;

  if (clickX < width / 2) {
    showPreviousImage();
  } else {
    showNextImage();
  }
});

// Soporte para deslizar (swipe)
let startX = 0;

imageElement.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

imageElement.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX > endX + 30) {
    showNextImage();
  } else if (startX < endX - 30) {
    showPreviousImage();
  }
});

// Botones de navegación
document.getElementById('prev-button').addEventListener('click', (e) => {
  e.stopPropagation();
  showPreviousImage();
});

document.getElementById('next-button').addEventListener('click', (e) => {
  e.stopPropagation();
  showNextImage();
});

// Tabs de navegación
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

// Estilo activo
function setActiveTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

// Mostrar imagen inicial
showImage(currentIndex);
