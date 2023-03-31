let navbarSupportedContent = document.getElementById("navbarSupportedContent")
let navbarToggler = document.querySelector(".navbar-toggler")
const navbar = document.querySelector(".navbar");
const stickyNavbar = document.querySelector(".sticky-navbar")
const show = document.querySelector(".show-nav")

if (window.innerWidth <= 990) {
    navbarToggler.addEventListener("click", () => {
        if (navbarSupportedContent.classList.contains("hide")) {
            navbarSupportedContent.classList.remove("hide")
            navbarSupportedContent.classList.add("show-nav")
            navbar.classList.add("sticky-navbar-height")
        } else {
            navbarSupportedContent.classList.add("hide")
            navbarSupportedContent.classList.remove("show-nav")
            navbar.classList.remove("sticky-navbar-height")
        }
    })
    navbar.classList.remove("sticky-navbar");
}
else {
    navbarSupportedContent.classList.add("hide")
    navbarSupportedContent.classList.remove("show-nav")
    navbar.classList.add("sticky-navbar");
}
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > 0) {
        navbar.classList.add("sticky-navbar");
    } else {
        navbar.classList.remove("sticky-navbar");
    }
});