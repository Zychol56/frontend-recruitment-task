window.addEventListener('DOMContentLoaded', (e) => {

    const popupContainer = document.querySelector(".popupContainer");
    const popupBox = document.querySelector(".popupBox");
    const Bttn = document.querySelector(".recruitment-module a");

    Bttn.addEventListener("click", () => {
          if (!popupContainer.classList.contains("show")) {
            popupContainer.classList.add("show");
          } else {
            popupContainer.classList.remove("show"); 
          }
      });

});