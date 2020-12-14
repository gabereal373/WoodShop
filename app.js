const header = document.querySelector("header");

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  prevScrollPos > currentScrollPos 
    ? header.classList.remove("scroll") 
    : header.classList.add("scroll");

  prevScrollPos = currentScrollPos;
};


