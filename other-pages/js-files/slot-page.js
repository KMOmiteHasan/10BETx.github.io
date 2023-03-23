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