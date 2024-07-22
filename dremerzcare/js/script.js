const accordionTitles = document.querySelectorAll(".accordion__title")
const accordionPanels = document.querySelectorAll(".accordion__panel")
const accordionBtns = document.querySelectorAll(".bx")
const upBtn = document.querySelector(".up__btn")

accordionTitles.forEach(accordionTitle => {
    accordionTitle.addEventListener("click", (e) => {
        const childrenElem = e.target.closest(".accordion__heading, .bx")

        if (childrenElem || accordionTitle) {
            const panel = accordionTitle.nextElementSibling
            panel.classList.toggle("show__panel")

            if (panel.classList.contains("show__panel")) {
                accordionTitle.querySelector(".bx").className = "bx bx-minus"
            } else {
                accordionTitle.querySelector(".bx").className = "bx bx-plus"
            }

            accordionPanels.forEach((accordionPanel, i) => {
                if (accordionPanel !== panel) {
                    accordionPanel.classList.remove("show__panel")
                    accordionBtns[i].className = "bx bx-plus"
                }
            })
        }
    })
})

document.querySelector(".date").innerText = new Date().getFullYear()

upBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0
    })
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    if (window.scrollY > 60) {
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)'
    } else {
        header.style.boxShadow = 'none'
    }
})