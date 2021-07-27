const fadeInUpwarders = document.querySelectorAll(".fadeInUpward");
const fadeInLeftwarders = document.querySelectorAll(".fadeInLeftward");
const fadeInRightwarders = document.querySelectorAll(".fadeInRightward");

var path = window.location.pathname.toString();
const appearOptions = {
  threshold: 0.4,
  rootMargin: "0px 0px 0px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    else{
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
      if(path=="/about"){
        setTimeout(function(){entry.target.classList.remove('fadeInUpward');}, 750);
      }
    }
  });
  },appearOptions);

fadeInUpwarders.forEach(fadeInUpwarder => {
  appearOnScroll.observe(fadeInUpwarder);
});

fadeInLeftwarders.forEach(fadeInLeftwarder => {
  appearOnScroll.observe(fadeInLeftwarder);
});

fadeInRightwarders.forEach(fadeInRightwarder => {
  appearOnScroll.observe(fadeInRightwarder);
});