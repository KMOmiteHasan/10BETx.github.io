const tabLinks = document.querySelectorAll(".tablinks")
let tabContents = document.querySelectorAll(".tabcontent");
// for (i = 0; i < tabContent.length; i++) {
//     tabContent[i].style.display = "none";
// }

tabLinks.forEach((tab, index) => {
    tab.addEventListener('click', event => {
        tabContents.forEach(content => {
            content.classList.remove("active")
        })
        tabLinks.forEach(tab => {
            tab.classList.remove('active')
        })
        tabContents[index].classList.add('active')
        tabLinks[index].classList.add('active')
        // console.log(item.dataset.rulesname)
        // // tabContent.id = item.dataset.rulesname
        // console.log(tabContent.id)
        // // if (item.dataset.rulesname == tabContent.id) {
        // //     return
        // // }
        // // else {
        // //     tabContent.id = item.dataset.rulesname
        // // }
        // tabContent.style.display = "block"
    })
})