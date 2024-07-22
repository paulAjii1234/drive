document.addEventListener('DOMContentLoaded', () => {
    const textLink = document.querySelector('.circle > p')
    const contactBtns = document.querySelectorAll('.nav__button')
    const modals = document.querySelectorAll('.modal')
    const closeBtns = document.querySelectorAll('.cancel__btn')
    const circle = document.querySelector('.circle')
    const servicesList = document.querySelector('.services__list')
    const imgLeft = document.querySelector('.img__left > img')
    const imgRight = document.querySelector('.img__right > img')
    const testimonialCards = document.querySelectorAll('.testimonial__card')
    const carouselList = document.querySelector('.team__carousel')
    const prevBtn = document.querySelector('.teams__btns > svg')
    const nextBtn = document.querySelector('.teams__btns > div')

    const servicesData = [
        {
            servicesText: 'Primary Care',
            imgLeftUrl: './assets/primary-care_left.jpg',
            imgRightUrl: './assets/primary-care_right.jpg',
            altText: this.servicesText,
        },

        {
            servicesText: 'Ob/Gyn Visits',
            imgLeftUrl: './assets/obs-&-gyn_left.jpg',
            imgRightUrl: './assets/obs-&-gyn_right.jpg',
            altText: this.servicesText,
        },

        {
            servicesText: 'Urgent Care',
            imgLeftUrl: './assets/urgent-care_left.jpg',
            imgRightUrl: './assets/urgent-care_right.jpg',
            altText: this.servicesText,
        },

        {
            servicesText: 'Minor Procedures',
            imgLeftUrl: './assets/minor-procedures_left.jpg',
            imgRightUrl: './assets/minor-procedures_right.jpg',
            altText: this.servicesText,
        }
    ]

    // Footer Date - For Current Date always
    document.querySelector('.date').innerText = new Date().getFullYear()

    // Round Text
    textLink.innerHTML = textLink.innerText.split('').map(
        (text, i) =>
            `<span style='transform: rotate(${ i * 15 }deg)'>${ text }</span>`
    ).join('')

    // Open Modal Using the Nav buttons
    contactBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.style.overflow = 'hidden'
            if (btn.classList.contains('contact__btn')) {
                showModal(modals[0])
            } else if (btn.classList.contains('appointment__btn')) {
                showModal(modals[1])
            }
        })
    })

    // Open Modal using the rotating arrow
    circle.addEventListener('click', () => showModal(modals[0]))

    // Close Modal Function
    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            document.body.style.overflow = 'auto'
            modals.forEach(modal => {
                closeModal(modal)
            })
        })
    })

    // Show Modal
    const showModal = (element) => {
        element.style.display = 'flex'
    }

    // Close Modal
    const closeModal = (element) => {
        element.style.display = 'none'
    }

    // Services Display
    let activeElement = null

    const setActiveElement = (element, service) => {
        if (activeElement) {
            activeElement.classList.remove('active')
        }

        element.classList.add('active')
        imgLeft.setAttribute('src', service.imgLeftUrl)
        imgRight.setAttribute('src', service.imgRightUrl)
        activeElement = element
    }

    servicesData.map((service, index) => {
        const servicesItem = document.createElement('li')
        const servicesSpan = document.createElement('span')

        servicesSpan.innerText = service.servicesText
        servicesItem.classList.add('services__item')

        servicesItem.append(servicesSpan)
        servicesList.append(servicesItem)

        servicesItem.addEventListener('mouseover', (e) => {
            const element = e.currentTarget
            setActiveElement(element, service)
        })

        if (index === 0) {
            setActiveElement(servicesItem, service)
        }
    })

    servicesList.addEventListener('mouseout', (e) => {
        if (e.relatedTarget && !servicesList.contains(e.relatedTarget)) {
            const firstItem = servicesList.querySelector('.services__item:first-child')
            const firstService = servicesData[0]
            setActiveElement(firstItem, firstService)
        }
    })

    // Testimonials
    const totalCards = testimonialCards.length
    let currentIndex = 0

    const showCard = (index) => {
        testimonialCards.forEach(card => {
            card.style.display = 'none'
            testimonialCards[index].style.display = 'flex'
        })
    }

    showCard(currentIndex)

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalCards
        showCard(currentIndex)
    }, 5000)

    // Carousel
    const moveCarousel = (type) => {
        const items = carouselList.querySelectorAll('.item')

        if (type === 'next') {
            carouselList.appendChild(items[0])
            carouselList.classList.remove("prev")
        } else {
            const lastItem = items.length - 1
            carouselList.prepend(items[lastItem])
            if (carouselList.classList.contains("prev"))
                return
            carouselList.classList.add("prev")
        }
    }

    nextBtn.addEventListener('click', () => moveCarousel('next'))
    prevBtn.addEventListener('click', () => moveCarousel('prev'))

    setInterval(() => {
        moveCarousel('next')
    }, 5000)
})