const images = [
    'images/banner-1.jpg',
    'images/banner-2.jpg',
    'images/banner-3.jpg',
    'images/banner-4.jpg',
]

let imgIndex = 0;
const carouselImg = document.getElementById('carousel-img');

setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgLink = images[imgIndex];
    // console.log(imgLink);
    carouselImg.setAttribute('src', imgLink);
    imgIndex++;
}, 3000);