var aeria;
(function (aeria) {
    window.addEventListener("load", init);
    function init(event) {
        loadingScreen();
    }
    function loadingScreen() {
        let loadingScreen = document.createElement("div");
        loadingScreen.setAttribute("id", "loadingScreen");
        loadingScreen.innerHTML = "<p>aeria</p>";
        loadingScreen.innerHTML += "<p>Kitesport. Worldwide.</p>";
        document.getElementById("background").appendChild(loadingScreen);
        window.setTimeout(searchScreen, 2000);
    }
    function searchScreen() {
        document.getElementById("loadingScreen").style.display = "none";
        let search = document.createElement("input");
        search.setAttribute("type", "text");
        search.setAttribute("placeholder", "Zielort eingeben");
        search.setAttribute("name", "search");
        let searchButton = document.createElement("button");
        searchButton.innerHTML = "<i" + " class=" + "'fa fa-search fa'" + "></i>";
        let searchScreen = document.createElement("div");
        searchScreen.setAttribute("id", "searchScreen");
        searchScreen.appendChild(search);
        searchScreen.appendChild(searchButton);
        document.getElementById("background").appendChild(searchScreen);
    }
})(aeria || (aeria = {}));
//# sourceMappingURL=aeria.js.map