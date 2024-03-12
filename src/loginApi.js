function loginCreator() {
    let mainContainer = document.querySelector(".website-container");

    let dialog = document.createElement("dialog");
    dialog.open = "true";
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
}

loginCreator();

export {};
