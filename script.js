/*********************Hamberger Function********************************* */

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
leftnav = document.querySelector('.leftnav')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('vclass');
    leftnav.classList.toggle('vclass');
    navbar.classList.toggle('hnav');
    


})
/*********************Reveal Transition function********************************* */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


