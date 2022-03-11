gsap.registerPlugin(ScrollTrigger)

const mediaQuery4 = window.matchMedia(
  '(min-width: 320px)',
  '(max-width: 767px)'
)
const mediaQuery5 = window.matchMedia('(min-width: 768px)')

const timeline1 = gsap.timeline({ defaults: { y: '-100vh' } })
timeline1
  .from('.navLogo', { duration: 1 })
  .from('.fullNavList li', { duration: 0.45, stagger: 0.5 })
if (mediaQuery5.matches) {
  gsap.from('.card1', { duration: 4, delay: 3.2, autoAlpha: 0 })
  gsap.from('.card2', { duration: 4, delay: 3.6, autoAlpha: 0 })
} else if (mediaQuery4.matches) {
  gsap.from('.card1', { duration: 4, delay: 1.4, autoAlpha: 0 })
  gsap.from('.card2', { duration: 4, delay: 1.6, autoAlpha: 0 })
}

gsap.from('.musicWrap', {
  duration: 1,
  opacity: '0',
  ease: 'power1.in',
  scrollTrigger: {
    trigger: '.musicWrap',
    start: 'top 90%',
  },
})
// About
gsap.from('.aboutTitle', {
  duration: 1,
  opacity: '0',
  y: '-75%',
  ease: 'bounce',
  scrollTrigger: {
    trigger: '.aboutTextWrapper',
    start: 'top bottom',
  },
})
gsap.from('.aboutTextInner', {
  duration: 1,
  opacity: '0',
  ease: 'none',
  scrollTrigger: {
    trigger: '.aboutContent',
    start: 'top 30%',
  },
})

// Media
gsap.from('.mediaTitle', {
  duration: 1,
  opacity: '0',
  ease: 'power1.in',
  scrollTrigger: {
    trigger: '#about',
    start: 'bottom bottom',
  },
})
gsap.from('.mediaVid:nth-child(1)', {
  duration: 1,
  x: '-100%',
  scrollTrigger: {
    trigger: '.mediaVid:nth-child(1)',
    start: 'top bottom',
  },
})
gsap.from('.mediaVid:nth-child(2)', {
  duration: 1,
  x: '100%',
  scrollTrigger: {
    trigger: '.mediaVid:nth-child(2)',
    start: 'top bottom',
  },
})
gsap.from('.mediaVid:nth-child(3)', {
  duration: 1,
  x: '-100%',
  scrollTrigger: {
    trigger: '.mediaVid:nth-child(3)',
    start: 'top bottom',
  },
})
gsap.from('.mediaVid:nth-child(4)', {
  duration: 1,
  x: '100%',
  scrollTrigger: {
    trigger: '.mediaVid:nth-child(4)',
    start: 'top bottom',
  },
})
// Photos
gsap.from('.instaOuter', {
  duration: 1,
  opacity: '0',
  ease: 'power1.in',
  scrollTrigger: {
    trigger: '.videosWrap',
    start: 'bottom bottom',
  },
})
// Contact
gsap.from('#contact', {
  duration: 1,
  opacity: '0',
  ease: 'power1.in',
  scrollTrigger: {
    trigger: '.instaOuter',
    start: 'bottom bottom',
  },
})
