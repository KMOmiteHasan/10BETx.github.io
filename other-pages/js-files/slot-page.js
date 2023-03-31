const filterItems = Array.from(document.querySelectorAll(".filter-item"))

filterItems.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault()
        document.querySelectorAll('.filter-item').forEach(i => {
            i.classList.remove('active')
        })
        item.classList.add('active')
    })
})

const bodyFilterBtn = Array.from(document.querySelectorAll(".body-filter-btn"))

bodyFilterBtn.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault()
        document.querySelectorAll('.body-filter-btn').forEach(i => {
            i.classList.remove('active')
        })
        item.classList.add('active')
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // breakpoints: {
    //     640: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     768: {
    //         slidesPerView: 4,
    //         spaceBetween: 40,
    //     },
    //     1024: {
    //         slidesPerView: 5,
    //         spaceBetween: 50,
    //     },
    // },
});