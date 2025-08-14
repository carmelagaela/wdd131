// Event Cards on Home Page
const events = [
  { title: "Clean-Up Drive", date: "Aug 20", location: "Barangay 5" },
  { title: "Tree Planting", date: "Aug 27", location: "Mt. Banahaw Trail" }
];

const eventsContainer = document.querySelector("#events");
if (eventsContainer) {
  events.forEach(event => {
    const card = `
      <div class="event-card">
        <h3>${event.title}</h3>
        <p>Date: ${event.date}</p>
        <p>Location: ${event.location}</p>
      </div>
    `;
    eventsContainer.innerHTML += card;
  });
}

// Form Submission on Get Involved Page
const form = document.querySelector("#signupForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const activity = document.querySelector("#activity").value;

    if (name && activity) {
      const volunteers = JSON.parse(localStorage.getItem("volunteers")) || [];
      volunteers.push({ name, activity });
      localStorage.setItem("volunteers", JSON.stringify(volunteers));

      document.querySelector("#confirmation").textContent =
        `Thanks, ${name}, for signing up for ${activity}!`;
      form.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
}
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}