export function loadAbout() {
  const container = document.querySelector("#content");
  const aboutSection = document.createElement("div");
  aboutSection.classList.add("about-section");

  // Create and append title
  const title = document.createElement("h2");
  title.textContent = "About";
  aboutSection.appendChild(title);

  const contactSection = document.createElement("div");
  const contactTitle = document.createElement("h3");
  contactTitle.textContent = "Our contact";
  const contactText = document.createElement("p");
  contactText.textContent = "Phone: XXXXXXXXXX";
  contactSection.appendChild(contactTitle);
  contactSection.appendChild(contactText);
  aboutSection.appendChild(contactSection);

  // Create and append Our Journey
  const journeySection = document.createElement("div");
  const journeyTitle = document.createElement("h3");
  journeyTitle.textContent = "Our Journey";
  const journeyText = document.createElement("p");
  journeyText.textContent =
    "At Swagatam, we believe that food is more than just sustenance—it's a way to bring people together and share our culture. Our journey began with a simple desire to introduce the authentic flavors of Nepal to a broader audience. Today, we are proud to be a place where tradition meets modernity, where every dish tells a story.";
  journeySection.appendChild(journeyTitle);
  journeySection.appendChild(journeyText);
  aboutSection.appendChild(journeySection);

  // Create and append Our Values
  const valuesSection = document.createElement("div");
  const valuesTitle = document.createElement("h3");
  valuesTitle.textContent = "Our Values";
  const valuesText = document.createElement("p");
  valuesText.textContent =
    "We are committed to sustainability, sourcing locally-grown ingredients, and supporting our community. Our team is dedicated to offering an exceptional dining experience, whether you're a first-time visitor or a regular guest.";
  valuesSection.appendChild(valuesTitle);
  valuesSection.appendChild(valuesText);
  aboutSection.appendChild(valuesSection);

  // Create and append Community Involvement
  const communitySection = document.createElement("div");
  const communityTitle = document.createElement("h3");
  communityTitle.textContent = "Community Involvement";
  const communityText = document.createElement("p");
  communityText.textContent =
    "At Swagatam, we believe in giving back. We're actively involved in various community initiatives, from supporting local farmers to hosting charity events.";
  communitySection.appendChild(communityTitle);
  communitySection.appendChild(communityText);
  aboutSection.appendChild(communitySection);

  // Append the completed aboutSection to the container
  container.appendChild(aboutSection);
}
