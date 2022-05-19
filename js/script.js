//Get the button
let mybutton = document.getElementById("scroll-up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener('click', toTop)

function toTop() {
    document.body.scrollTop = -10; // For Safari
    document.documentElement.scrollTop = -100; // For Chrome, Firefox, IE and Opera
}

/*==================== SCROLL REVEAL SECTION ====================*/

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
window.addEventListener('scroll', reveal)


//faq wrapper
const rdbtns = document.querySelectorAll('[type="radio"]')

rdbtns.forEach(rdbtn => {
    rdbtn.addEventListener('click', uncheck)
});

function uncheck() {
    if (this.classList.contains('open')) {
        this.checked = false
        this.classList.remove('open')
    } else {
        rdbtns.forEach(rdbtn => {
            rdbtn.classList.remove('open')
        });
        this.classList.add('open')
    }
}