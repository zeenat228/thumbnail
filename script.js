// const hamburger = document.getElementById(".hamburger");
// const navLinks = document.getElementById(".navLinks");

// hamburger.addEventListener("click", () => {
//     nav-links.classList.toggle("active");
// });




// Toggle navigation menu on small screens
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});