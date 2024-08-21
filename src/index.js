import "./styles.css";
import { homeLoad as homeLoader } from "./home";
import { loadMenu as menuLoader } from "./menu";
import { loadAbout as aboutLoader } from "./about";

document.addEventListener("DOMContentLoaded", () => {
  homeLoader();
  const navBtns = document.querySelectorAll(".tab-btn");

  navBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const clickedBtn = event.target.innerText;
      loadTab(clickedBtn);
    });
  });
});

function loadTab(tabName) {
  const container = document.querySelector("#content");
  container.innerHTML = "";
  if (tabName === "Home") {
    homeLoader();
  } else if (tabName === "Menu") {
    menuLoader();
  } else if (tabName === "About") {
    aboutLoader();
  }
}
