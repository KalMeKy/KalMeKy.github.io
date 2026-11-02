
/*
    EXHIBIT INFORMATION

    Fill in the information between the quotation marks.

    To add an image:
    1. Create a folder called "images" in your project.
    2. Put your image inside it.
    3. Change image: "" to image: "images/your-image.jpg"
*/

const exhibits = [

    {
        title: "Exhibit One",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write a detailed description of this artwork, artifact, story, or myth. Explain what it represents and its origins.]",
        significance: "[Explain why this exhibit is important and why it deserves to be included in this gallery.]"
    },

    {
        title: "Exhibit Two",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your detailed description here.]",
        significance: "[Explain the significance of this exhibit.]"
    },

    {
        title: "Exhibit Three",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your detailed description here.]",
        significance: "[Explain the significance of this exhibit.]"
    },

    {
        title: "Exhibit Four",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your detailed description here.]",
        significance: "[Explain the significance of this exhibit.]"
    },

    {
        title: "Exhibit Five",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your detailed description here.]",
        significance: "[Explain the significance of this exhibit.]"
    },

    {
        title: "Exhibit Six",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your detailed description here.]",
        significance: "[Explain the significance of this exhibit.]"
    },

    {
        title: "Exhibit Seven",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your detailed description here.]",
        significance: "[Explain the significance of this exhibit.]"
    },

    {
        title: "Exhibit Eight",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your detailed description here.]",
        significance: "[Explain the significance of this exhibit.]"
    },

    {
        title: "Exhibit Nine",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your detailed description here.]",
        significance: "[Explain the significance of this exhibit.]"
    },

    {
        title: "Exhibit Ten",
        people: "[Indigenous people group]",
        location: "[Location in Brazil]",
        image: "",
        description: "[Write your detailed description here.]",
        significance: "[Explain the significance of this exhibit.]"
    }

];


// SLIDER FUNCTIONALITY

let currentExhibit = 0;

const content = document.getElementById("exhibit-content");
const number = document.getElementById("exhibit-number");
const progress = document.getElementById("progress");
const dotsContainer = document.getElementById("dots");


// Display an exhibit

function showExhibit(index) {

    const exhibit = exhibits[index];

    content.classList.add("changing");

    setTimeout(() => {

        let imageHTML;

        if (exhibit.image) {
            imageHTML = `
                <img src="${exhibit.image}" alt="${exhibit.title}">
            `;
        } else {
            imageHTML = `
                <div class="image-placeholder">
                    <span>✧</span>
                    <p>ADD EXHIBIT IMAGE HERE</p>
                </div>
            `;
        }

        content.innerHTML = `

            <div class="exhibit-layout">

                <div class="exhibit-image">
                    ${imageHTML}
                </div>

                <div class="exhibit-details">

                    <p class="eyebrow">
                        BRAZILIAN INDIGENOUS COLLECTION
                    </p>

                    <h3>${exhibit.title}</h3>

                    <p class="detail-label">
                        PEOPLE GROUP
                    </p>

                    <p class="detail-text">
                        ${exhibit.people}
                    </p>

                    <p class="detail-label">
                        ORIGIN & LOCATION
                    </p>

                    <p class="detail-text">
                        ${exhibit.location}
                    </p>

                    <div class="location-box">
                        <p>
                            <strong>LOCATION / MAP</strong><br>
                            [Add a map, location image, or geographical
                            reference for this exhibit here.]
                        </p>
                    </div>

                    <p class="detail-label">
                        ABOUT THIS EXHIBIT
                    </p>

                    <p class="detail-text">
                        ${exhibit.description}
                    </p>

                    <p class="detail-label">
                        WHY IT MATTERS
                    </p>

                    <p class="detail-text">
                        ${exhibit.significance}
                    </p>

                </div>

            </div>

        `;

        content.classList.remove("changing");

        // Update exhibit number
        number.textContent =
            `${String(index + 1).padStart(2, "0")} / ${String(exhibits.length).padStart(2, "0")}`;

        // Update progress bar
        progress.style.width =
            `${((index + 1) / exhibits.length) * 100}%`;

        // Update navigation dots
        document.querySelectorAll(".dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

    }, 180);

}


// Create navigation dots

function createDots() {

    exhibits.forEach((exhibit, index) => {

        const dot = document.createElement("button");

        dot.className = "dot";
        dot.setAttribute("aria-label", `Go to exhibit ${index + 1}`);

        dot.addEventListener("click", () => {
            currentExhibit = index;
            showExhibit(currentExhibit);
        });

        dotsContainer.appendChild(dot);

    });

}


// Next exhibit

document.getElementById("next").addEventListener("click", () => {

    currentExhibit++;

    if (currentExhibit >= exhibits.length) {
        currentExhibit = 0;
    }

    showExhibit(currentExhibit);

});


// Previous exhibit

document.getElementById("prev").addEventListener("click", () => {

    currentExhibit--;

    if (currentExhibit < 0) {
        currentExhibit = exhibits.length - 1;
    }

    showExhibit(currentExhibit);

});


// Keyboard navigation

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {
        document.getElementById("next").click();
    }

    if (event.key === "ArrowLeft") {
        document.getElementById("prev").click();
    }

});


// Start the gallery

createDots();
showExhibit(currentExhibit);
