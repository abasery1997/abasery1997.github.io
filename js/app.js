var navbar = document.querySelector("#navbar");
var navbar_pace = navbar.offsetTop;
var upBtn = document.querySelector('#up');

window.onscroll = function() {
    if (window.pageYOffset >= navbar_pace) {
        navbar.classList.add("sticky");
        upBtn.style.visibility = "visible";
    } else {
        navbar.classList.remove("sticky");
    }
    if (window.pageYOffset >= 500) {
        upBtn.style.visibility = "visible";
        upBtn.classList.add("up-animation");
    } else {
        upBtn.style.visibility = "hidden";
        upBtn.classList.remove("up-animation");
    }

};