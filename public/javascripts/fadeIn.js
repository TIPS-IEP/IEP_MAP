const fadeInUpwarders = document.querySelectorAll(".fadeInUpward");
const fadeInLeftwarders = document.querySelectorAll(".fadeInLeftward");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -30% 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    else{
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
  },appearOptions);

fadeInUpwarders.forEach(fadeInUpwarder => {
  appearOnScroll.observe(fadeInUpwarder);
});

fadeInLeftwarders.forEach(fadeInLeftwarder => {
  appearOnScroll.observe(fadeInLeftwarder);
});