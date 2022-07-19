$(function () {

  const tl = window.gsap.timeline({ delay: 0 });

  tl.from('#big-L', { x: 25, duration: 1.25 }, 0);
  tl.to('#big-L', { opacity: 1, duration: 1.25 }, 0);

  tl.from('#big-W', { x: -25, duration: 1.25 }, 0);
  tl.to('#big-W', { opacity: 1, duration: 1.25 }, 0);

  tl.from('#lady-wind-fashion', { y: 10, duration: 1.25 }, 0.5);
  tl.to('#lady-wind-fashion', { opacity: 1, duration: 1.25 }, 0.5);

  tl.to('#dot-left', { opacity: 1, duration: 5 }, 0);
  tl.to('#dot-right', { opacity: 1, duration: 5 }, 0);
});
