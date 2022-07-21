
$(function () {
  const tlDefaults = { duration: 1.25 };

  // ---------------------------------------------------------------------------
  function animateL() {
    const L = document.getElementById('big-L');

    const tl = window.gsap.timeline({ defaults: tlDefaults });
    tl.from(L, { x: 25 }, 0);
    tl.to(L, { opacity: 1 }, 0);

    return tl;
  }

  // ---------------------------------------------------------------------------
  function animateW() {
    const W = document.getElementById('big-W');

    const tl = window.gsap.timeline({ defaults: tlDefaults });
    tl.from(W, { x: -25 }, 0);
    tl.to(W, { opacity: 1 }, 0);

    return tl;
  }

  // ---------------------------------------------------------------------------
  function animateTitle() {
    const title = document.getElementById('lady-wind-fashion');

    const tl = window.gsap.timeline({ defaults: tlDefaults });
    tl.from(title, { y: 10 }, 0);
    tl.to(title, { opacity: 1 }, 0);

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
