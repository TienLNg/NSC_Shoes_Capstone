// When the user scrolls the page, execute 2 functions
window.onscroll = function() {
    changeHeader(); // Change header
    appearBackToTop(); // Appear back to top button
};

// Get the header and back to top
var header = document.getElementById("corpHeader");
var backTop = document.getElementById("backToTop");

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function changeHeader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("headerScroll");
    } else {
        header.classList.remove("headerScroll");
    }
};

// Appear back to top button when scrolling
function appearBackToTop() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backTop.classList.add("show");
    } else {
        backTop.classList.remove("show");
    }
};

// Scroll up to the beginning if click on the scroll up button
function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Navbar toggle function (for device with width <= 981px)
function toggleNavbar() {
    var body = document.getElementById("corpBody");
    // Change background color
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.toggle("active-scroll");
    } else {
        header.classList.toggle("active");
    }
    // Disable scrolling when navbar responsive expand
    body.classList.toggle("disable-scroll");
};