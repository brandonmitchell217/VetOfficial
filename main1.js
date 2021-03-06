const burgerOpen = document.querySelector('.burgerOpen')
const burgerClose = document.querySelector('.burgerClose')
const navList = document.querySelector('#navList')
const mediaQuery1 = window.matchMedia('(max-width: 320px)')
const mediaQuery2 = window.matchMedia(
  '(min-width: 321px)',
  '(max-width: 375px)'
)
const mediaQuery3 = window.matchMedia(
  '(min-width: 376px)',
  '(max-width: 425px)'
)
let load = 1
const loadTime = document.getElementById('loadTime')

// document.addEventListener('DOMContentLoaded', () => {
//   gsap.to('.innerBar', { x: 0, duration: 2.75 })
//   gsap.to('.preloader', { autoAlpha: 0, delay: 3, ease: 'power1.in' })
//   setInterval(updateLoad, 30)
// })

// function updateLoad() {
//   load += load < 100
//   loadTime.innerHTML = load + '%'
//   document.body.style.overflowY = 'hidden'
// }

burgerOpen.addEventListener('click', () => {
  navList.style.transform = 'translateX(0)'
  burgerClose.style.display = 'block'
  burgerOpen.style.transform = 'scale(0)'
  if (mediaQuery1.matches) {
    gsap.to('.navLogo', { scale: '1.5', x: '-32vw', y: '16vh' })
  }
  if (mediaQuery2.matches) {
    gsap.to('.navLogo', { scale: '1.65', x: '-34vw', y: '16vh' })
  }
  if (mediaQuery3.matches) {
    gsap.to('.navLogo', { scale: '1.75', x: '-36vw', y: '16vh' })
  }
})
burgerClose.addEventListener('click', () => {
  navList.style.transform = 'translateX(-300%)'
  burgerClose.style.display = 'none'
  burgerOpen.style.transform = 'scale(1)'
  gsap.to('.navLogo', {
    duration: 0,
    scale: '1',
    x: '0',
    y: '0',
    ease: 'power1.in',
  })
})

window.addEventListener('keydown', function (event) {
  if (event.key == 'Escape') {
    navList.style.transform = 'translateX(-300%)'
    burgerOpen.style.display = 'block'
  }
})

const fkLnk = document.querySelectorAll('.fkLnk')

fkLnk.forEach((lnk) => {
  lnk.addEventListener('click', (e) => {
    e.preventDefault()
  })
})
