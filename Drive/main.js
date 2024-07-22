const carousel = document.querySelector(".reviews__carousel")
const carouselItems = carousel.querySelectorAll(".carousel__item")
const pagination = document.querySelector(".pagination")
const noOfItems = carouselItems.length

const cardsToShow = 2
let currentIndex = 0

for (let i = 1; i < noOfItems; i++) {
    const dot = document.createElement("span")
    dot.classList.add("dot")
    if (i === 1)
        dot.classList.add("active__dot")
    
    pagination.appendChild(dot)
}

document.querySelector(".date").innerText = new Date().getFullYear()

const getTotalWidth = (element) => {
    const style = window.getComputedStyle(element)

    const width = element.offsetWidth

    const gap = parseFloat(style.gap)

    const totalWidth = width + gap + 63
    return totalWidth
}

const cardWidth = getTotalWidth(carouselItems[0])

const updateCarousel = () => {
    carouselItems.forEach(item => {
        item.style.transform = `translateX(-${ currentIndex * cardWidth }px)`
    })
}

const updatePagination = () => {
    const dots = pagination.querySelectorAll("span")

    dots.forEach((dot, index) => {
        if (index === currentIndex)
            dot.classList.add("active__dot")
        else {
            dot.classList.remove("active__dot")
        }
    })
}

setInterval(() => {
    if (currentIndex < carouselItems.length - cardsToShow) {
        ++currentIndex
    } else {
        currentIndex = 0
    }
    updateCarousel()
    updatePagination()
}, 5000)

// Custom Btns
const passportBtn = document.querySelector(".passImg .custom__btn")
const idBtn = document.querySelector(".id .custom__btn")
const signBtn = document.querySelector(".signature .custom__btn")

const randomBtn = (elem, msg) => {
    const input = elem.querySelector("input")
    const randomText = elem.querySelector(".random__text")

    input.click()

    input.addEventListener("change", () => {
        if (input.value) {
            randomText.innerText = input.value
        } else {
            randomText.innerText = msg
        }
    })
}

passportBtn.addEventListener("click", () => {
    randomBtn(passportBtn.parentElement, "(JPG OR PNG)")
})

idBtn.addEventListener("click", () => {
    randomBtn(idBtn.parentElement, "(PDF OR DOC)")
})

signBtn.addEventListener("click", () => {
    randomBtn(signBtn.parentElement, "Sign Here or Add")
})

// Form Tabs
let currentTab = 0
const nextBtn = document.querySelector(".next")
const cancelBtn = document.querySelector(".cancel")
const backBtn = document.querySelector(".back")
const regBtn = document.querySelectorAll(".reg__btn")
const submitBtn = document.querySelector(".submit")

const tabs = document.querySelectorAll(".tab")
const modal = document.querySelector(".modal")

regBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        modal.style.display = "flex"
    })
})

const showTab = (n) => {
    tabs[n].style.display = "block"
}

const btnAction = (text) => {
    tabs.forEach(tab => {
        tab.style.display = "none"
    })
    if (text === "next") {
        currentTab++
    } else {
        currentTab--
    }

    showTab(currentTab)
}

const closeModal = () => {
    modal.style.display = "none"
}

nextBtn.addEventListener("click", () => btnAction("next"))

backBtn.addEventListener("click", () => btnAction("prev"))

cancelBtn.addEventListener("click", closeModal)

submitBtn.addEventListener("click", closeModal)

showTab(currentTab)

// Animations
const animatableBox = document.querySelectorAll(".animatable")

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

window.addEventListener("scroll", scrollAnimatableBoxes)