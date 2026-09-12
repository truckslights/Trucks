console.log('Hello World');

const video = document.querySelector('.bannerVideo');
const video2 = document.querySelector('.bannerVideo2');

video.addEventListener('pause', () => {
  video.play();
});

video.addEventListener('click', (event) => {
    event.preventDefault();
});

video2.addEventListener('pause', () => {
    video.play();
});
  
video2.addEventListener('click', (event) => {
    event.preventDefault();
});