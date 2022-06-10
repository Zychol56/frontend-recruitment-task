window.addEventListener('DOMContentLoaded', () => {

    const popupContainer = document.querySelector(".popupContainer");
    const popupBackground = document.querySelector(".popupBackground");
    const contentBttn = document.querySelector(".recruitment-module button");
    const closeBttn = document.querySelector(".closeBtn");
    const popupBoxP = document.querySelector(".popupBox p");
    const resetBttn = document.querySelector(".resetBttn");
    
    const OpenClose = Bttn => {
        Bttn.addEventListener("click", () => {
            if (!popupContainer.classList.contains("show")) {
                popupContainer.classList.add("show");
                if((JSON.parse(localStorage.getItem('Count'))).Count >= 5){
                    resetBttn.classList.add("show");
                }
            } else {
                popupContainer.classList.remove("show"); 
                resetBttn.classList.remove("show");
            }
            if(Bttn === contentBttn){
                localStorage.setItem('Count', JSON.stringify({
                    Count: (JSON.parse(localStorage.getItem('Count'))).Count + 1 || 0
                  }));
                popupBoxP.innerHTML = 'You have clicked <strong>' + (JSON.parse(localStorage.getItem('Count'))).Count + ' times </strong>to related button.';;
            }

        });
    }

    OpenClose(closeBttn)
    OpenClose(contentBttn)
    OpenClose(popupBackground)

    resetBttn.addEventListener("click", () => {
        localStorage.setItem('Count', JSON.stringify({
            Count: 0
        }));
        resetBttn.classList.remove("show");
        popupBoxP.innerHTML = 'You have clicked <strong>' + (JSON.parse(localStorage.getItem('Count'))).Count + ' times </strong>to related button.';;
    });

});