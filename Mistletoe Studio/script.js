const animatableBox = document.querySelectorAll(".animatable")

const sessionModalBtns = document.querySelectorAll(".session__modal-btn")
const sessionModal = document.querySelector(".session__modal")

// Footer Date
document.querySelector(".date").innerHTML = new Date().getFullYear()

// Animation Function
const scrollAnimatableBoxes = () => {
    const targetPoint = window.innerHeight / 5 * 4

    animatableBox.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < targetPoint) {
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    })
}

// Scroll Animation
window.addEventListener("scroll", scrollAnimatableBoxes)

// Modal Functions 
const openModal = (elem) => {
    elem.style.display = "flex"
}

const closeModal = (elem) => {
    elem.style.display = "none"
}

// Book a Session Modal
sessionModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        openModal(sessionModal)
    })
})

window.addEventListener("click", (e) => {
    if (e.target === sessionModal) {
        closeModal(sessionModal)
    }
})