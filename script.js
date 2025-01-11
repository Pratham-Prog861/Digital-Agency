const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Navigation Animation
gsap.from("nav", {
  y: -100,
  duration: 1,
  ease: "power2.out",
  opacity: 0,
  stagger:true
},"a");
gsap.from(".hero-footer",{
    duration:1,
    ease:"power2.out",
    opacity:0
},"a");
// Hero Section Animation
gsap.from(".hero .left h1", {
  x: -200,
  duration: 1,
  opacity: 0,
  ease: "power2.out"
},"a");


gsap.from(".hero .left h2", {
  x: -200,
  duration: 1.2,
  opacity: 0,
  ease: "power2.out"
},"a");

gsap.from(".hero .left p", {
  x: -200,
  duration: 1.4,
  opacity: 0,
  ease: "power2.out"
},"a");

gsap.from(".hero .left button", {
  x: -200,
  duration: 1.6,
  opacity: 0,
  ease: "power2.out"
},"a");

gsap.from(".hero .right img", {
  x: 200,
  duration: 1.8,
  opacity: 0,
  ease: "power2.out"
},"a");

// Page 2 Animation
gsap.from("#page2 .content", {
  scrollTrigger: {
    trigger: "#page2",
    start: "top center",
    end: "bottom center",
    scrub: true
  },
  y: 50,
  duration: 1.2,
  opacity: 0,
  stagger: 0.3,
  ease: "power2.out"
});

// Page 3 Animation
gsap.from("#page3 .content", {
  scrollTrigger: {
    trigger: "#page3",
    start: "top center",
    end: "bottom center",
    scrub: true
  },
  y: 50,
  duration: 1.2,
  opacity: 0,
  stagger: 0.3,
  ease: "power2.out"
});

// Page 4 Animation
gsap.from("#page4 h1", {
  scrollTrigger: {
    trigger: "#page4",
    start: "top center",
    end: "bottom center",
    scrub: true
  },
  y: 50,
  duration: 1,
  opacity: 0,
  ease: "power2.out"
});

gsap.from("#page4 .flex > div", {
  scrollTrigger: {
    trigger: "#page4",
    start: "top center",
    end: "bottom 80%",
    scrub: true,
  },
  y: 50,
  duration: 1.2,
  opacity: 0,
  stagger: 0.3,
  ease: "power2.out"
});

// Footer Animation
gsap.from(".footer", {
  scrollTrigger: {
    trigger: ".container",
    start: "bottom bottom",
    end: "bottom bottom",
    scrub: true
  },
  y: 0,
  duration: 2,
  opacity: 0,
  ease: "power2.out"
});

// Some animation on clicking the link of scrolling animation
