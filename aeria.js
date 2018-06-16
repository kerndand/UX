var aeria;
(function (aeria) {
    window.addEventListener("load", init);
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
    }
    function resultScreen() {
        let input = document.getElementById("search");
        let clickCounter = 0;
        if (input.value == "Porto" || input.value == "porto") {
            document.getElementById("searchScreen").style.display = "none";
            let map = document.createElement("img");
            map.setAttribute("src", "Karte.png");
            let resultScreen = document.createElement("div");
            resultScreen.setAttribute("id", "resultScreen");
            resultScreen.innerHTML = "<span" + " class=" + "'fa fa-map-marker fa-2x'" + "></span>";
            resultScreen.innerHTML += "<span" + " class=" + "'fa fa-map-marker fa-2x'" + "></span>";
            resultScreen.appendChild(map);
            document.getElementById("background").appendChild(resultScreen);
            let icon = document.getElementsByTagName("span");
            if (clickCounter = 0) {
                clickCounter++;
                icon[0].addEventListener("click", placeScreen);
            }
            else {
                icon[0].addEventListener("click", place);
            }
        }
        else {
            alert("Diesen Ort gibt es leider in diesem Prototypen nicht. Bitte versuchen Sie es erneut!");
        }
        function placeScreen() {
            document.getElementById("resultScreen").style.display = "none";
            let placeDiv = document.createElement("div");
            placeDiv.setAttribute("id", "placeDiv");
            placeDiv.innerHTML = "<p>Av. do Brasil 816</p>";
            placeDiv.innerHTML += "<p>4150-154 Porto</p>";
            placeDiv.innerHTML += "<p>Portugal</p>";
            let cancelButton = document.createElement("button");
            cancelButton.innerHTML = "<i" + " class=" + "'fa fa-chevron-left fa-2x'" + "></i>";
            let confirmButton = document.createElement("button");
            confirmButton.innerHTML = "<i" + " class=" + "'fa fa-chevron-right fa-2x'" + "></i>";
            placeDiv.appendChild(cancelButton);
            placeDiv.appendChild(confirmButton);
            cancelButton.addEventListener("click", cancelPlace);
            confirmButton.addEventListener("click", confirmPlace);
            document.getElementById("background").appendChild(placeDiv);
        }
        function place() {
            document.getElementById("resultScreen").style.display = "none";
            document.getElementById("placeDiv").style.display = "block";
        }
        function cancelPlace() {
            document.getElementById("resultScreen").style.display = "block";
            document.getElementById("placeDiv").style.display = "none";
        }
        function confirmPlace() {
            document.getElementById("placeDiv").style.display = "none";
        }
    }
})(aeria || (aeria = {}));
//# sourceMappingURL=aeria.js.map