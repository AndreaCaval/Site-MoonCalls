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

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
}


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