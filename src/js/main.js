window.addEventListener('DOMContentLoaded', () => {

    const popupContainer = document.querySelector(".popupContainer");
    const popupBackground = document.querySelector(".popupBackground");
    const contentBttn = document.querySelector(".recruitment-module button");
    const closeBttn = document.querySelector(".closeBtn");
    const popupBoxP = document.querySelector(".popupBox p");
    const resetBttn = document.querySelector(".resetBttn");
    const showBttn = document.querySelector(".showBttn");
    
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


    api = `https://jsonplaceholder.typicode.com/users`;
    showBttn.addEventListener("click", () => {
                fetch(api)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    for(i=0; i < data.length; i++){ 
                        if(data.length != 0){
                            var col = [];
                            var table = document.createElement("table");
                            var tr = table.insertRow(-1);
                            var showData = document.querySelector(".showData");
                            showData.appendChild(table);

                            for (var key in data[i]) {
                                if (col.indexOf(key) === -1) {
                                    if (typeof data[i][key] === 'object'){
                                        for (var val in data[i][key]) {
                                            col.push(val)
                                        }
                                    } else {
                                        col.push(key);
                                    }
                                }
                            }

                            for (var i = 0; i < col.length; i++) {
                                var th = document.createElement("th");
                                th.innerHTML = col[i];
                                tr.appendChild(th);
                            }

                            for (var i = 0; i < data.length; i++) {
                                tr = table.insertRow(-1);
                                Object.entries(data[i]).forEach(item => {
                                    if (typeof item[1] === 'object'){
                                        for (var val in item[1]) {
                                            var tabCell = tr.insertCell(-1);
                                            tabCell.innerHTML = item[1][val];
                                            if(val === "geo"){
                                                tabCell.innerHTML = item[1][val].lat + ", " + item[1][val].lng;
                                            }
                                        }
                                    } else {
                                        var tabCell = tr.insertCell(-1);
                                        tabCell.innerHTML = item[1];
                                    }
                                  })
                            }
                        }
                        else{
                            console.log("fail")
                        }
                    } 
                })
    });

});