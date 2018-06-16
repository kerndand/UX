namespace aeria {
    window.addEventListener("load", init);

    function init(event: Event): void {
        loadingScreen();
    }

    function loadingScreen(): void {
        document.getElementById("logo").style.display = "none";
        let loadingScreen: HTMLDivElement = document.createElement("div");
        loadingScreen.setAttribute("id", "loadingScreen");
        loadingScreen.innerHTML = "<p>aeria</p>";
        loadingScreen.innerHTML += "<p>Kitesport. Worldwide.</p>";
        document.getElementById("background").appendChild(loadingScreen);
        window.setTimeout(searchScreen, 2000);
    }

    function searchScreen(): void {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("logo").style.display = "block";

        let search: HTMLInputElement = document.createElement("input");
        search.setAttribute("type", "text");
        search.setAttribute("placeholder", "Zielort eingeben");
        search.setAttribute("name", "search");
        search.setAttribute("id", "search");

        let searchButton: HTMLButtonElement = document.createElement("button");
        searchButton.innerHTML = "<i" + " class=" + "'fa fa-search fa-3x'" + "></i>";

        let searchScreen: HTMLDivElement = document.createElement("div");
        searchScreen.setAttribute("id", "searchScreen");
        searchScreen.appendChild(search);
        searchScreen.appendChild(searchButton);

        document.getElementById("background").appendChild(searchScreen);

        document.getElementsByTagName("button")[0].addEventListener("click", resultScreen);
    }

    function resultScreen(): void {
        let input: HTMLInputElement = <HTMLInputElement>document.getElementById("search");

        if (input.value == "Porto" || input.value == "porto") {
            document.getElementById("searchScreen").style.display = "none";

            let map: HTMLImageElement = document.createElement("img");
            map.setAttribute("src", "Karte.png");

            let resultScreen: HTMLDivElement = document.createElement("div");
            resultScreen.setAttribute("id", "resultScreen");
            resultScreen.innerHTML = "<span" + " class=" + "'fa fa-map-marker fa-2x'" + "></span>";
            resultScreen.innerHTML += "<span" + " class=" + "'fa fa-map-marker fa-2x'" + "></span>";
            resultScreen.appendChild(map);

            document.getElementById("background").appendChild(resultScreen);

            let icon: NodeListOf<HTMLSpanElement> = document.getElementsByTagName("span");

            icon[0].addEventListener("click", placeScreen);
        } else {
            alert("Diesen Ort gibt es leider in diesem Prototypen nicht. Bitte versuchen Sie es erneut!");
        }

        function placeScreen(): void {

            document.getElementById("resultScreen").style.display = "none";
            let placeDiv: HTMLDivElement = document.createElement("div");
            placeDiv.setAttribute("id", "placeDiv");
            placeDiv.innerHTML = "<p>Av. do Brasil 816</p>";
            placeDiv.innerHTML += "<p>4150-154 Porto</p>";
            placeDiv.innerHTML += "<p>Portugal</p>";

            let infoButton: HTMLButtonElement = document.createElement("button");
            infoButton.innerHTML = "<i" + " class=" + "'fa fa-chevron-right fa-2x'" + "></i>";
            placeDiv.appendChild(infoButton);

            infoButton.addEventListener("click", infoScreen);
            document.getElementById("background").appendChild(placeDiv);
        }


        function infoScreen(): void {
            document.getElementById("placeDiv").style.display = "none";

            let infoScreen: HTMLDivElement = document.createElement("div");
            infoScreen.setAttribute("id", "infoScreen");
            infoScreen.innerHTML = "<span" + " class=" + "'fa fa-tachometer fa-2x'" + "></span>" + "<p> 4Bft (11 - 16 kn)</p>";
            infoScreen.innerHTML += "<span" + " class=" + "'fa fa-compass fa-2x'" + "></span>" + "<p> Off - Shore (Ablandiger Wind)</p>";
            infoScreen.innerHTML += "<span" + " class=" + "'fa fa-cloud fa-2x'" + "></span>" + "<p> Heiter mit leichten B&oumlhen, 25&degC</p>";
            infoScreen.innerHTML += "<span" + " class=" + "'fa fa-low-vision fa-2x'" + "></span>" + "<p>Klare Sicht, ca. 7,2km</p>";
            infoScreen.innerHTML += "<span" + " class=" + "'material-icons'" + ">beach_access</span>" + "<p>Wahrscheinlichkeit 45%, Menge 5mm</p>";
            infoScreen.innerHTML += "<span" + " class=" + "'glyphicon glyphicon-tint'" + "></span>" + "<p>92%</p>";
            infoScreen.innerHTML += "<i" + " class=" + "'fa fa-square-o fa'" + "><p> Anf&aumlnger</p></i>" + " <i" + " class=" + "'fa fa-check-square-o'" + "><p> Fortgeschrittener</p></i>" + " <i" + " class=" + "'fa fa-check-square-o'" + "><p> Profi</p></i>";

            document.getElementById("background").appendChild(infoScreen);
        }
    }

}