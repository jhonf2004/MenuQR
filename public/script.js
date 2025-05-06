const images = [
    '/images/carta1.jpg',
    '/images/carta2.jpg',
    '/images/carta3.jpg',
    '/images/carta4.jpg',
    '/images/carta5.jpg',
    '/images/carta6.jpg',
    '/images/carta7.jpg'
  ];
  
  let currentIndex = 0;
  const imageElement = document.getElementById('menu-image');
  
  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
  }
  
  imageElement.addEventListener('click', showNextImage);
  
  // Opcional: soporte para deslizar (swipe)
  let startX = 0;
  
  imageElement.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  
  imageElement.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX > endX + 30) {
      showNextImage();
    }
  });
  