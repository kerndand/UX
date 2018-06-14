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
        document.getElementById("searchScreen").style.display = "none";
    }
})(aeria || (aeria = {}));
//# sourceMappingURL=aeria.js.map