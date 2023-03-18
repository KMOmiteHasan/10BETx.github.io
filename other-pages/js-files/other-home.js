let navbarSupportedContent = document.getElementById("navbarSupportedContent")
let navbarToggler = document.querySelector(".navbar-toggler")
const navbar = document.querySelector(".navbar");


if (window.innerWidth <= 990) {
    navbarToggler.addEventListener("click", () => {
        if (navbarSupportedContent.classList.contains("hide")) {
            navbarSupportedContent.classList.remove("hide")
            navbarSupportedContent.classList.add("show")
        } else {
            navbarSupportedContent.classList.add("hide")
            navbarSupportedContent.classList.remove("show")
        }
    })
    navbar.classList.remove("sticky-navbar");

}
else {
    navbarSupportedContent.classList.add("hide")
    navbarSupportedContent.classList.remove("show")
    navbar.classList.add("sticky-navbar");
}
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add("sticky-navbar");
    } else {
        navbar.classList.remove("sticky-navbar");
    }
});
