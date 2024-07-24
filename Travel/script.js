window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    if (window.scrollY > 60) {
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)'
    } else {
        header.style.boxShadow = 'none'
    }
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach(el => observer.observe(el))

// ** TESTIMONIAL CAROUSEL **
const controlBtns = document.querySelectorAll(".control__btn")
const carousel = document.querySelector(".testimonial__carousel")
const carouselItems = carousel.querySelectorAll(".testimonial__card")
let currentIndex = 1
const cardsToShow = 3

// Get Total Width of Each Item
const getTotalWidth = (element, gap) => {
    const width = element.offsetWidth

    const totalWidth = width + gap
    return totalWidth
}

const cardWidth = getTotalWidth(carouselItems[0], 5)

const updateCarousel = (items, w, i) => {
    items.forEach(item => {
        item.style.transform = `translateX(-${ i * w }px)`
    })
}

const prev = () => {
    if (currentIndex > 0) {
        currentIndex--
    } else {
        currentIndex = carouselItems.length - 1
    }
}

const next = () => {
    if (currentIndex < carouselItems.lenghth - cardsToShow) {
        currentIndex++
        updateCarousel(carouselItems, cardWidth, currentIndex)
    } else {
        currentIndex = 0
        console.log("let us go")
        updateCarousel(carouselItems, cardWidth, currentIndex)
    }
}

setInterval(() => {
    if (currentIndex < carouselItems.length - cardsToShow) {
        currentIndex++
        carouselItems[currentIndex].classList.add("active")
    } else {
        carouselItems[currentIndex].classList.remove("active")
        currentIndex = 0
        carouselItems[currentIndex].classList.add("active")
    }
    updateCarousel(carouselItems, cardWidth, currentIndex)
}, 5000)

controlBtns[0].addEventListener("click", () => prev())
controlBtns[1].addEventListener("click", next)

document.querySelector(".copyright .date").textContent = new Date().getFullYear()

// Contact Modal
const modalBtn = document.querySelector(".contact__btn")
const modal = document.querySelector(".modal")

modalBtn.addEventListener("click", () => {
    modal.style.display = "flex"
})

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none"
    }
})