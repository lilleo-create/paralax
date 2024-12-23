
gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.3,
    effects: true
  })
}
gsap.fromTo(
  '.header-section',
  { opacity: 1 },
  { 
    opacity: 0,
    scrollTrigger: { // Обратите внимание на синтаксис
      trigger: '.header-section',
      start: 'center center',
      end: '820',
      scrub: true,
    },
  }
);

let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

itemsL.forEach(item => {
  gsap.fromTo(item, { x: -60, opacity: 0 }, { 
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: item,
      start: '-700',
      end: '-100',
      scrub: true
    }
  })
})

let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

itemsR.forEach(item => {
  gsap.fromTo(item, { x: 60, opacity: 0 }, { 
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: item,
      start: '-600',
      end: '-100',
      scrub: true
    }
  })
})

