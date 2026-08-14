/* ==========================
   MOBILE NAVIGATION
========================== */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}


/* ==========================
   CLOSE MENU AFTER CLICKING
========================== */

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/* ==========================
   SCROLL ANIMATION
========================== */

const hiddenElements = document.querySelectorAll(
    ".card, .gallery-item, table, .section"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade");

        }

    });

}, {

    threshold: 0.15

});

hiddenElements.forEach(el => {

    observer.observe(el);

});


/* ==========================
   ACTIVE NAVIGATION
========================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});


/* ==========================
   BACK TO TOP BUTTON
========================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.padding = "12px 16px";
topButton.style.fontSize = "22px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#0B5D78";
topButton.style.color = "white";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.25)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================
   IMAGE HOVER EFFECT
========================== */

const images = document.querySelectorAll(".gallery img, .card img");

images.forEach(image => {

    image.addEventListener("mouseover", () => {

        image.style.filter = "brightness(110%)";

    });

    image.addEventListener("mouseout", () => {

        image.style.filter = "brightness(100%)";

    });

});


/* ==========================
   PAGE LOADED
========================== */

window.addEventListener("load", () => {

    console.log("Sirang Adlaw website loaded successfully!");

});