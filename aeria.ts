namespace aeria {
    window.addEventListener("load", init);

    function init(event: Event): void {
        loadingScreen();
    }

    function loadingScreen(): void {
        let loadingScreen: HTMLDivElement = document.createElement("div");
        loadingScreen.setAttribute("id", "loadingScreen");
        loadingScreen.innerHTML = "<p>aeria</p>";
        loadingScreen.innerHTML += "<p>Kitesport. Worldwide.</p>";
        document.getElementById("background").appendChild(loadingScreen);
        window.setTimeout(searchScreen, 2000);
    }

    function searchScreen(): void {
        document.getElementById("loadingScreen").style.display = "none";

        let search: HTMLInputElement = document.createElement("input");
        search.setAttribute("type", "text");
        search.setAttribute("placeholder", "Zielort eingeben");
        search.setAttribute("name", "search");

        let searchButton: HTMLButtonElement = document.createElement("button");
        searchButton.innerHTML = "<i" + " class=" + "'fa fa-search fa-3x'" + "></i>";

        let searchScreen: HTMLDivElement = document.createElement("div");
        searchScreen.setAttribute("id", "searchScreen");
        searchScreen.appendChild(search);
        searchScreen.appendChild(searchButton);

        document.getElementById("background").appendChild(searchScreen);
    }

}