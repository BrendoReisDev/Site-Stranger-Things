gsap.registerPlugin(ScrollTrigger);


const heroTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

heroTimeline.to(".background img", {
  y: -50
});

heroTimeline.to(".overlay img", {
  y: -50
}, 0);

heroTimeline.to(".logo-background img", {
  y: -100,
}, 0);

heroTimeline.to(".hero-information", {
  y: -200,
  opacity: 0
}, 0);


const containerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-about",
    start: "top 80%",
    end: "top 30%",
    scrub: true
  }
});

containerTimeline.fromTo(
  ".container-about-img .img1",
  {
    y: 40,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    ease: "none"
  }
);


const containerTimeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-creator",
    start: "top 70%",
    end: "top 10%",
    scrub: true
  }
});

containerTimeline2.fromTo(
  ".container-creator-img .img2",
  {
    y: 60,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    ease: "none"
  }
);


const containerTimeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".img3",
    start: "top 70%",
    end: "top 10%",
    scrub: true
  }
});

containerTimeline3.fromTo(
  ".img3",
  { y: 40, opacity: 0 },
  { y: 0, opacity: 1, ease: "none" }
);



const containerTimeline4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-text-h2",
    start: "top 70%",
    end: "top 10%",
    scrub: true
  }
});

gsap.utils.toArray(".container-about, .container-creator").forEach((container) => {

  const img = container.querySelector("img");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      end: "top 20%",
      scrub: true
    }
  });

  tl.fromTo(
    container,
    { opacity: 0 },
    { opacity: 1, ease: "none" }
  );

  if (img) {
    tl.fromTo(
      img,
      {
        y: 80,
        scale: 1.2,
        rotateZ: -2,
        filter: "blur(6px)",
        opacity: 0
      },
      {
        y: 0,
        scale: 1,
        rotateZ: 0,
        filter: "blur(0px)",
        opacity: 1,
        ease: "none"
      },
      0
    );
  }

});



  const img2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".container-creator-img .img2",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  }
});

img2Timeline.fromTo(
  ".container-creator-img .img2",
  {
    y: 0,
    scale: 1,
    rotateZ: -2,
    filter: "blur(6px)",
    opacity: 0
  },
  {
    y: 0,
    scale: 1,
    rotateZ: 0,
    filter: "blur(0px)",
    opacity: 1,
    ease: "none"
  }
);
