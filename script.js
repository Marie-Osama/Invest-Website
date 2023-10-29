document.addEventListener("DOMContentLoaded",function(){
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar ul");

    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("show");
    })
})


// const header = document.querySelector('header');

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 10) {
//     header.style.backgroundColor = 'rgb(255, 255, 255)'; // Change the background color when scrolled
//   } else {
//     header.style.backgroundColor = 'rgb(240, 236, 236)'; // Restore the initial background color
//   }
// });
