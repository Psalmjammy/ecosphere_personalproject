document.addEventListener('DOMContentLoaded', function () {
 const container = document.querySelector('.prt');
 const scrollLeftButton = document.getElementById('scroll-left');
 const scrollRightButton = document.getElementById('scroll-right');
 const scrollAmount = 700; 

 function scrollContainer(direction) {
     const currentScrollLeft = container.scrollLeft;

     if (direction === 'left') {
         container.scrollLeft -= scrollAmount;
     } else if (direction === 'right') {
         container.scrollLeft += scrollAmount;
     }
     if (container.scrollLeft === 0) {
         container.scrollLeft = container.scrollWidth;
     } else if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
         container.scrollLeft = 0;
     }
 }
 scrollLeftButton.addEventListener('click', function () {
     scrollContainer('left');
 });

 scrollRightButton.addEventListener('click', function () {
     scrollContainer('right');
 });
});



