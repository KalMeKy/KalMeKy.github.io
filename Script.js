
/* =====================================
   VOICES OF BRAZIL
   Gallery functionality
===================================== */


// =====================================
// EXHIBIT INFORMATION
// Fill in your own research.
// =====================================

const exhibits = [

    {
        title: "Exhibit One",
        category: "[Category or theme]",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write a detailed description of this exhibit, its origins, and what it represents.]",
        significance: "[Explain why this exhibit is important and worthy of inclusion.]",
        source: ""
    },

    {
        title: "Exhibit Two",
        category: "[Category or theme]",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your description here.]",
        significance: "[Explain its significance here.]",
        source: ""
    },

    {
        title: "Exhibit Three",
        category: "[Category or theme]",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your description here.]",
        significance: "[Explain its significance here.]",
        source: ""
    },

    {
        title: "Exhibit Four",
        category: "[Category or theme]",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your description here.]",
        significance: "[Explain its significance here.]",
        source: ""
    },

    {
        title: "Exhibit Five",
        category: "[Category or theme]",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your description here.]",
        significance: "[Explain its significance here.]",
        source: ""
    },

    {
        title: "Exhibit Six",
        category: "[Category or theme]",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your description here.]",
        significance: "[Explain its significance here.]",
        source: ""
    },

    {
        title: "Exhibit Seven",
        category: "[Category or theme]",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your description here.]",
        significance: "[Explain its significance here.]",
        source: ""
    },

    {
        title: "Exhibit Eight",
        category: "[Category or theme]",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your description here.]",
        significance: "[Explain its significance here.]",
        source: ""
    },

    {
        title: "Exhibit Nine",
        category: "[Category or theme]",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your description here.]",
        significance: "[Explain its significance here.]",
        source: ""
    },

    {
        title: "Exhibit Ten",
        category: "[Category or theme]",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your description here.]",
        significance: "[Explain its significance here.]",
        source: ""
    }

];


// =====================================
// GALLERY ELEMENTS
// =====================================

let currentExhibit = 0;

const title = document.getElementById("exhibit-title");
const category = document.getElementById("exhibit-category");
const people = document.getElementById("exhibit-people");
const locationText = document.getElementById("exhibit-location");
const description = document.getElementById("exhibit-description");
const significance = document.getElementById("exhibit-significance");

const visual = document.getElementById("exhibit-visual");
const counter = document.getElementById("exhibit-counter");
const visualNumber = document.getElementById("visual-number");
const progress = document.getElementById("gallery-progress");

const dotsContainer = document.getElementById("gallery-dots");
const sourceLink = document.getElementById("exhibit-source");


// =====================================
// CREATE GALLERY DOTS
// =====================================

function createDots() {

    dotsContainer.innerHTML = "";

    exhibits.forEach((exhibit, index) => {

        const dot = document.createElement("button");

        dot.className = "gallery-dot";
        dot.setAttribute("aria-label", `Exhibit ${index + 1}`);

        dot.addEventListener("click", () => {
            showExhibit(index);
        });

        dotsContainer.appendChild(dot);

    });

}


// =====================================
// DISPLAY AN EXHIBIT
// =====================================

function showExhibit(index) {

    const exhibit = exhibits[index];

    const formattedNumber = String(index + 1).padStart(2, "0");
    const total = String(exhibits.length).padStart(2, "0");

    // Update information

    title.textContent = exhibit.title;
    category.textContent = exhibit.category;
    people.textContent = exhibit.people;
    locationText.textContent = exhibit.location;
    description.textContent = exhibit.description;
    significance.textContent = exhibit.significance;

    // Update image

    visual.querySelector("img")?.remove();
    visual.querySelector(".visual-placeholder")?.remove();

    if (exhibit.image) {

        const image = document.createElement("img");

        image.src = exhibit.image;
        image.alt = exhibit.title;

        image.onerror = () => {
            image.remove();
            showImagePlaceholder();
        };

        visual.prepend(image);

    } else {

        showImagePlaceholder();

    }

    // Update numbering

    counter.textContent = `EXHIBIT ${formattedNumber} — ${total}`;
    visualNumber.textContent = `${formattedNumber} / ${total}`;

    // Update progress

    progress.style.width =
        `${((index + 1) / exhibits.length) * 100}%`;

    // Update dots

    document.querySelectorAll(".gallery-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });

    // Update source link

    if (exhibit.source) {
        sourceLink.href = exhibit.source;
        sourceLink.hidden = false;
    } else {
        sourceLink.hidden = true;
        sourceLink.removeAttribute("href");
    }

    currentExhibit = index;

}


// =====================================
// IMAGE PLACEHOLDER
// =====================================

function showImagePlaceholder() {

    const placeholder = document.createElement("div");

    placeholder.className = "visual-placeholder";

    placeholder.innerHTML = `
        <span>✳</span>
        <p>EXHIBITION IMAGE</p>
        <small>Add your image in script.js</small>
    `;

    visual.prepend(placeholder);

}


// =====================================
// NEXT AND PREVIOUS BUTTONS
// =====================================

document.getElementById("next").addEventListener("click", () => {

    const nextIndex = (currentExhibit + 1) % exhibits.length;

    showExhibit(nextIndex);

});


document.getElementById("previous").addEventListener("click", () => {

    const previousIndex =
        (currentExhibit - 1 + exhibits.length) % exhibits.length;

    showExhibit(previousIndex);

});


// =====================================
// KEYBOARD CONTROLS
// =====================================

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {
        showExhibit((currentExhibit + 1) % exhibits.length);
    }

    if (event.key === "ArrowLeft") {
        showExhibit(
            (currentExhibit - 1 + exhibits.length) % exhibits.length
        );
    }

});


// =====================================
// MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

});

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });

});


// =====================================
// SCROLL REVEAL ANIMATIONS
// =====================================

const revealElements = document.querySelectorAll(
    ".introduction, .collection-heading, .gallery, .locations-heading, .map-container, .closing"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// =====================================
// INITIALIZE
// =====================================

createDots();
showExhibit(0);
