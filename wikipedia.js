document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll("h1, h2, h3");
    headers.forEach(header => {
      header.addEventListener("click", function () {
        const nextElement = header.nextElementSibling;
        if (nextElement) {
          nextElement.classList.toggle("collapsed");
        }
      });
    });
    const tocList = document.getElementById("toc-list");
    const sections = document.querySelectorAll("h1, h2, h3");
    const tocItems = [];
  
    sections.forEach((section, index) => {
      const text = section.textContent;
      const id = `section-${index}`;
      section.setAttribute("id", id);
  
      const tocItem = document.createElement("li");
      tocItem.innerHTML = `<a href="#${id}">${text}</a>`;
      tocItems.push(tocItem);
    });
  
    tocItems.forEach(item => tocList.appendChild(item));
  });
  