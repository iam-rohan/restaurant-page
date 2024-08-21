import momoImg from "./assets/momo.jpg";
import selRotiImg from "./assets/selroti.jpg";
import dalBhatImg from "./assets/dalbhaat.jpeg";
import kheerImg from "./assets/kheer.jpg";
import yomariImg from "./assets/yomari.jpeg";

export function loadMenu() {
  const container = document.querySelector("#content");
  const menuBox = document.createElement("div");
  menuBox.classList.add("menu-box");
  container.appendChild(menuBox);

  const menuSections = [
    {
      id: "starters",
      title: "Starters",
      content: `
                <img src="${momoImg}" alt="Momo Image" class="menu-img">
                <p><strong>Momo:</strong> Traditional Nepalese dumplings filled with your choice of meat or vegetables, served with a tangy dipping sauce.</p>
                <img src="${selRotiImg}" alt="Sel Roti Image" class="menu-img">
                <p><strong>Sel Roti:</strong> A sweet, ring-shaped rice bread, perfect for a light snack.</p>
            `,
    },
    {
      id: "main-courses",
      title: "Main Courses",
      content: `
                <img src="${dalBhatImg}" alt="Dal Bhat Image" class="menu-img">
                <p><strong>Dal Bhat:</strong> A classic Nepalese meal of steamed rice and lentil soup, accompanied by seasonal vegetables, pickles, and your choice of meat.</p>
            `,
    },
    {
      id: "desserts",
      title: "Desserts",
      content: `
                <img src="${kheerImg}" alt="Kheer Image" class="menu-img">
                <p><strong>Kheer:</strong> Creamy rice pudding flavored with cardamom and garnished with nuts and dried fruits.</p>
                <img src="${yomariImg}" alt="Yomari Image" class="menu-img">
                <p><strong>Yomari:</strong> A traditional sweet dumpling filled with a mixture of sesame seeds, molasses, and coconut.</p>
            `,
    },
  ];

  menuSections.forEach((section) => {
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");
    dropdown.id = section.id;

    const dropdownTitle = document.createElement("div");
    dropdownTitle.classList.add("dropdown-title");
    dropdownTitle.textContent = section.title;

    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");
    dropdownContent.innerHTML = section.content;

    dropdown.appendChild(dropdownTitle);
    dropdown.appendChild(dropdownContent);
    menuBox.appendChild(dropdown);
  });

  menuBox.querySelectorAll(".dropdown-title").forEach((title) => {
    title.addEventListener("click", () => {
      const parent = title.parentElement;
      parent.classList.toggle("active");
    });
  });
}
