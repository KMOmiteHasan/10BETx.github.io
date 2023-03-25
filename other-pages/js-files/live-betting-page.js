const centerBtnContainer = document.querySelector(".center-btn-container")
const centerBtnContainerButtons = Array.from(centerBtnContainer.querySelectorAll("button"))

centerBtnContainerButtons.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault()
        centerBtnContainer.querySelectorAll("button").forEach(i => {
            i.classList.remove('active-border')
        })
        item.classList.add('active-border')
    })
})

const searchBtnContainer = document.querySelector(".search-btn-container")
const searchBtnContainerButton = Array.from(searchBtnContainer.querySelectorAll("button"))

searchBtnContainerButton.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault()
        searchBtnContainer.querySelectorAll("button").forEach(i => {
            i.classList.remove('active-border')
        })
        item.classList.add('active-border')
    })
})