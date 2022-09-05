
const hamburger = document.querySelector(".menu-btn")
const navMenu = document.querySelector(".nav-menu-ul")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

