gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 5,
  smoothTouch: 2
});

function splitFadeUp(selector, options = {}) {
  gsap.utils.toArray(selector).forEach(el => {
    const split = new SplitText(el, { type: "words" });

    gsap.from(split.words, {
      opacity: 0,
      y: options.y || 30,
      rotationX: options.rotate ? 15 : 0,
      filter: "blur(6px)",
      stagger: options.stagger || 0.04,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "top 45%",
        scrub: true,
        invalidateOnRefresh: true
      }
    });
  });
}

splitFadeUp('[class^="text-"]', {
  y: 25,
  stagger: 0.035
});

splitFadeUp('.h2-bg', {
  y: 60,
  stagger: 0.06,
  rotate: true
});

splitFadeUp('.container-social a', {
  y: 20,
  stagger: 0.08
});
