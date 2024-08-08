const animatableBox = document.querySelectorAll(".animatable")

const sessionModalBtns = document.querySelectorAll(".session__modal-btn")
const sessionModal = document.querySelector(".session__modal")

// Gallery Modal
const galleryModal = document.querySelector(".gallery__modal")
const leftArrow = document.querySelector(".gallery__modal .bxs-left-arrow")
const rightArrow = document.querySelector(".gallery__modal .bxs-right-arrow")
const galleryImgs = document.querySelectorAll(".gallery__wrapper img")

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

    if (e.target === galleryModal) {
        closeModal(galleryModal)
    }
})

// Gallery Modal Functioning
let currentIndex = 0
const totalImgs = galleryImgs.length

const showGalleryModal = (i) => {
    const modalImgs = document.querySelectorAll(".gallery__img")
    modalImgs.forEach(img => {
        img.style.opacity = "0"
    })
    modalImgs[i].style.opacity = "1"
}

galleryImgs.forEach((galleryImg, index) => {
    galleryImg.addEventListener("click", (e) => {
        currentIndex = index
        openModal(galleryModal)
        showGalleryModal(currentIndex)
    })
})

rightArrow.addEventListener("click", () => {
    if (currentIndex < (totalImgs - 1)) {
        currentIndex++
        showGalleryModal(currentIndex)
    }
})

leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--
        showGalleryModal(currentIndex)
    }
})