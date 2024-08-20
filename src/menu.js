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
                <p><strong>Momo:</strong> Traditional Nepalese dumplings filled with your choice of meat or vegetables, served with a tangy dipping sauce.</p>
                <p><strong>Sel Roti:</strong> A sweet, ring-shaped rice bread, perfect for a light snack.</p>
                <!-- Include an image of momo or another starter here -->
            `,
    },
    {
      id: "main-courses",
      title: "Main Courses",
      content: `
                <p><strong>Dal Bhat:</strong> A classic Nepalese meal of steamed rice and lentil soup, accompanied by seasonal vegetables, pickles, and your choice of meat.</p>
                <p><strong>Chicken Sekuwa:</strong> Grilled chicken marinated in Nepalese spices, served with fresh salad and chutney.</p>
                <!-- Include an image of Dal Bhat or another main course here -->
            `,
    },
    {
      id: "desserts",
      title: "Desserts",
      content: `
                <p><strong>Kheer:</strong> Creamy rice pudding flavored with cardamom and garnished with nuts and dried fruits.</p>
                <p><strong>Yomari:</strong> A traditional sweet dumpling filled with a mixture of sesame seeds, molasses, and coconut.</p>
                <!-- Include an image of Yomari or another dessert here -->
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
