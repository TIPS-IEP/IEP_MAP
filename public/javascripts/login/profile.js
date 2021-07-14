function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("storyboardCol").classList.remove('col-md-6');
    document.getElementById("storyboardCol").classList.add('col-md-8');
  } else {
    document.getElementById("storyboardCol").classList.remove('col-md-8');
    document.getElementById("storyboardCol").classList.add('col-md-6');
  }
}

var x = window.matchMedia("(max-width: 1182px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes