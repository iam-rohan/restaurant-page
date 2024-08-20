export function initialLoad() {
  const content = document.querySelector("#content");
  const headline = document.createElement("h1");
  const intro = document.createElement("p");

  headline.classList.add("headline");
  intro.classList.add("intro");

  headline.innerText = "Expereience the Aunthentic Falvors of Nepal in Every Bite!";
  intro.innerText =
    "Step into a world of warmth and tradition at [Restaurant Name], where every dish tells the story of Nepal's rich culinary heritage. From the moment you walk in, you'll be transported to the majestic Himalayan foothills, with the aromas of freshly ground spices and slow-cooked delicacies filling the air. Whether you're savoring our signature momos or relishing the tender sukuti, each bite promises a burst of flavor that will leave you craving for more. At [Restaurant Name], we believe in making every guest feel like family, offering not just a meal but an unforgettable experience. Come, indulge in the magic of Nepal, right here at our table!";

  content.appendChild(headline);
  content.appendChild(intro);
}
