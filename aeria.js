var aeria;
(function (aeria_1) {
    window.addEventListener("load", init);
    let aeria = [];
    function init(event) {
        loadingScreen();
    }
    function loadingScreen() {
        document.getElementById("logo").style.display = "none";
        let loadingScreen = document.createElement("div");
        loadingScreen.setAttribute("id", "loadingScreen");
        loadingScreen.innerHTML = "<p>aeria</p>";
        loadingScreen.innerHTML += "<p>Kitesport. Worldwide.</p>";
        document.getElementById("background").appendChild(loadingScreen);
        window.setTimeout(searchScreen, 2000);
    }
    function searchScreen() {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("logo").style.display = "block";
        let search = document.createElement("input");
        search.setAttribute("type", "text");
        search.setAttribute("placeholder", "Zielort eingeben");
        search.setAttribute("name", "search");
        search.setAttribute("id", "search");
        let searchButton = document.createElement("button");
        searchButton.innerHTML = "<i" + " class=" + "'fa fa-search fa-3x'" + "></i>";
        let searchScreen = document.createElement("div");
        searchScreen.setAttribute("id", "searchScreen");
        searchScreen.appendChild(search);
        searchScreen.appendChild(searchButton);
        document.getElementById("background").appendChild(searchScreen);
        document.getElementsByTagName("button")[0].addEventListener("click", resultScreen);
        aeria.push(searchScreen);
    }
    function resultScreen() {
        let input = document.getElementById("search");
        if (input.value == "Porto" || input.value == "porto") {
            if (aeria.length == 1) {
                document.getElementById("searchScreen").style.display = "none";
                let map = document.createElement("img");
                map.setAttribute("src", "Karte.png");
                let resultScreen = document.createElement("div");
                resultScreen.setAttribute("id", "resultScreen");
                resultScreen.innerHTML = "<span" + " class=" + "'fa fa-map-marker fa-2x'" + "></span>";
                resultScreen.innerHTML += "<span" + " class=" + "'fa fa-map-marker fa-2x'" + "></span>";
                resultScreen.appendChild(map);
                let backButton = document.createElement("button");
                backButton.innerHTML = "<i" + " class=" + "'fa fa-chevron-left fa-2x'" + "></i>";
                resultScreen.appendChild(backButton);
                document.getElementById("background").appendChild(resultScreen);
                let icon = document.getElementsByTagName("span");
                icon[0].addEventListener("click", placeScreen);
                backButton.addEventListener("click", back);
                aeria.push(resultScreen);
                console.log(aeria);
            }
            else {
                document.getElementById("resultScreen").style.display = "block";
                document.getElementById("searchScreen").style.display = "none";
            }
        }
        else {
            alert("Diesen Ort gibt es leider in diesem Prototypen nicht. Bitte versuchen Sie es erneut!");
        }
        function back() {
            document.getElementById("resultScreen").style.display = "none";
            document.getElementById("searchScreen").style.display = "block";
        }
        function placeScreen() {
            if (aeria.length == 2) {
                document.getElementById("resultScreen").style.display = "none";
                let placeDiv = document.createElement("div");
                placeDiv.setAttribute("id", "placeDiv");
                placeDiv.innerHTML = "<p>Av. do Brasil 816</p>";
                placeDiv.innerHTML += "<p>4150-154 Porto</p>";
                placeDiv.innerHTML += "<p>Portugal</p>";
                let backButton1 = document.createElement("button");
                backButton1.setAttribute("id", "back");
                backButton1.innerHTML = "<i" + " class=" + "'fa fa-chevron-left'" + "></i>";
                placeDiv.appendChild(backButton1);
                let infoButton = document.createElement("button");
                infoButton.setAttribute("id", "info");
                infoButton.innerHTML = "<i" + " class=" + "'fa fa-chevron-right'" + "></i>";
                placeDiv.appendChild(infoButton);
                infoButton.addEventListener("click", infoScreen);
                backButton1.addEventListener("click", back2);
                document.getElementById("background").appendChild(placeDiv);
                aeria.push(placeDiv);
            }
            else {
                document.getElementById("resultScreen").style.display = "none";
                document.getElementById("placeDiv").style.display = "block";
            }
        }
        function back2() {
            document.getElementById("resultScreen").style.display = "block";
            document.getElementById("placeDiv").style.display = "none";
        }
        function infoScreen() {
            if (aeria.length == 3) {
                document.getElementById("placeDiv").style.display = "none";
                let infoScreen = document.createElement("div");
                infoScreen.setAttribute("id", "infoScreen");
                infoScreen.innerHTML = "<h3>Surfivor Surfschool - Porto</h3>";
                infoScreen.innerHTML += "<span" + " class=" + "'fa fa-tachometer fa-2x'" + "></span>" + "<p> 4Bft (11 - 16 kn)</p>";
                infoScreen.innerHTML += "<span" + " class=" + "'fa fa-compass fa-2x'" + "></span>" + "<p> Off - Shore (Ablandiger Wind)</p>";
                infoScreen.innerHTML += "<span" + " class=" + "'fa fa-cloud fa-2x'" + "></span>" + "<p> Heiter mit leichten B&oumlhen, 25&degC</p>";
                infoScreen.innerHTML += "<span" + " class=" + "'fa fa-low-vision fa-2x'" + "></span>" + "<p>Klare Sicht, ca. 7,2km</p>";
                infoScreen.innerHTML += "<span" + " class=" + "'material-icons'" + ">beach_access</span>" + "<p>Wahrscheinlichkeit 45%, Menge 5mm</p>";
                infoScreen.innerHTML += "<span" + " class=" + "'glyphicon glyphicon-tint'" + "></span>" + "<p>92%</p>";
                infoScreen.innerHTML += "<i" + " class=" + "'fa fa-square-o fa'" + "><p> Anf&aumlnger</p></i>" + " <i" + " class=" + "'fa fa-check-square-o'" + "><p> Fortgeschrittener</p></i>" + " <i" + " class=" + "'fa fa-check-square-o'" + "><p> Profi</p></i>";
                let backButton2 = document.createElement("button");
                backButton2.innerHTML = "<i" + " class=" + "'fa fa-chevron-left fa-2x'" + "></i>";
                infoScreen.appendChild(backButton2);
                backButton2.addEventListener("click", back3);
                document.getElementById("background").appendChild(infoScreen);
                aeria.push(infoScreen);
            }
            else {
                document.getElementById("placeDiv").style.display = "none";
                document.getElementById("infoScreen").style.display = "block";
            }
        }
        function back3() {
            document.getElementById("placeDiv").style.display = "block";
            document.getElementById("infoScreen").style.display = "none";
        }
    }
})(aeria || (aeria = {}));
//# sourceMappingURL=aeria.js.map