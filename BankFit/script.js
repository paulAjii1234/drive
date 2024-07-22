const controllerBtns = document.querySelector(".testimonials__controllers")
const testimonialCards = document.querySelectorAll(".testimonial__card")

const totalCards = testimonialCards.length

let currentIndex = 0

const showCard = (index) => {
    testimonialCards.forEach(card => {
        card.style.display = "none"
        testimonialCards[index].style.display = "flex"
    })
}

const nextItem = () => {
    currentIndex = (currentIndex + 1) % totalCards
    showCard(currentIndex)
}

const previousItem = () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards
    showCard(currentIndex)
}

controllerBtns.querySelector(".left__controller").addEventListener("click", previousItem)

controllerBtns.querySelector(".right__controller").addEventListener("click", nextItem)

showCard(currentIndex)

setInterval(nextItem, 5000)

window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    if (window.scrollY > 60) {
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)'
    } else {
        header.style.boxShadow = 'none'
    }
})