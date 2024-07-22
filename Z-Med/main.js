window.addEventListener("scroll", () => {
    const header = document.querySelector('header')
    if (window.scrollY > 60) {
        header.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)"
    } else {
        header.style.boxShadow = "none"
    }
})

const rotateImg = () => {
    const outermost = document.querySelector('.outermost')
    const imgs = outermost.querySelectorAll('.outermost > img')

    outermost.appendChild(imgs[0])
}

document.querySelector('.date').innerText = new Date().getFullYear()

setInterval(() => {
    rotateImg()
}, 3000)