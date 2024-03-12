let weatherApi = localStorage.getItem("weatherApi");
let giphyApi = localStorage.getItem("giphyApi");

function loginCreator() {
    let mainContainer = document.querySelector(".website-container");

    let dialog = document.createElement("dialog");
    dialog.open = "true";
    dialog.id = "dialogLogin";
    let form = document.createElement("form");
    form.method = "post";
    form.action = "#";
    form.classList.add("formLogin");

    let labelWeatherApi = document.createElement("label");
    labelWeatherApi.textContent = "Enter your Weather API";
    labelWeatherApi.id = "weatherApi";
    let inputWeatherApi = document.createElement("input");
    inputWeatherApi.id = "weatherApi";
    inputWeatherApi.placeholder = "dk42dl4...";

    let labelGiphyApi = document.createElement("label");
    labelGiphyApi.textContent = "Enter your Giphy API";
    labelGiphyApi.id = "giphyApi";
    let inputGiphyApi = document.createElement("input");
    inputGiphyApi.id = "giphyApi";
    inputGiphyApi.placeholder = "jdn2kdsf04f3...";

    let button = document.createElement("button");
    button.textContent = "Login";
    button.id = "loginButton";

    mainContainer.appendChild(dialog);
    dialog.appendChild(form);
    form.appendChild(labelWeatherApi);
    form.appendChild(inputWeatherApi);
    form.appendChild(labelGiphyApi);
    form.appendChild(inputGiphyApi);

    form.appendChild(button);

    form.addEventListener("submit", (e) => {
        dialog.open = "false";
        dialog.close();
        weatherApi = inputWeatherApi.value;
        giphyApi = inputGiphyApi.value;

        localStorage.setItem("weatherApi", weatherApi);
        localStorage.setItem("giphyApi", giphyApi);

        console.log(weatherApi);
        console.log(giphyApi);

        e.preventDefault();
    });
}

if (localStorage.getItem("weatherApi") === null || localStorage.getItem("giphyApi") === null) {
    loginCreator();
} else {
    console.log("Welcome!");
}

console.log("Weather API and Giphy API: " + localStorage.getItem("weatherApi") + ", " + localStorage.getItem("giphyApi"));

export { weatherApi, giphyApi };
