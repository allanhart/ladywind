$(function () {
  const tlDefaults = { duration: 1.25 };

  // ---------------------------------------------------------------------------
  function animateL() {
    const el = document.getElementById('big-L');

    const tl = window.gsap.timeline({ defaults: tlDefaults });
    tl.from(el, { x: 20 }, 0);
    tl.to(el, { opacity: 1 }, 0);

    return tl;
  }

  // ---------------------------------------------------------------------------
  function animateW() {
    const el = document.getElementById('big-W');

    const tl = window.gsap.timeline({ defaults: tlDefaults });
    tl.from(el, { x: -20 }, 0);
    tl.to(el, { opacity: 1 }, 0);

    return tl;
  }

  // ---------------------------------------------------------------------------
  function animateTitle() {
    const el = document.getElementById('lady-wind-fashion');

    const tl = window.gsap.timeline({ defaults: tlDefaults });
    el.style.opacity = 1;
    tl.from(el, { y: 5 }, 0);

    const letters = Array.from(el.children);
    tl.to(letters, {
      ease: 'power3',
      opacity: 1,
      stagger: { amount: 0.6, from: 'start' },
    }, 0);

    return tl;
  }

  // ---------------------------------------------------------------------------
  function animateDots() {
    const dotLeft = document.getElementById('dot-left');
    const dotRight = document.getElementById('dot-right');

    const tl = window.gsap.timeline({ defaults: tlDefaults });
    tl.to(dotLeft, { opacity: 1, duration: 2 }, 0);
    tl.to(dotRight, { opacity: 1, duration: 2 }, 0);

    return tl;
  }

  const master = window.gsap.timeline();
  master.add(animateDots(), 0);
  master.add(animateL(), 0);
  master.add(animateW(), 0);
  master.add(animateTitle(), 0.75);
});
