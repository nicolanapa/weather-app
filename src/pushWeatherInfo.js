import { searchedCity, cityInfoMinified } from "./getWeatherInfo";

function changeCityInfo() {
    if (searchedCity !== "") {
        cityLoop();
    }
}

function cityLoop() {
    let allCity = document.querySelectorAll(".city");

    for (let i = 0; i < 3; i++) {
        allCity[i].textContent = searchedCity;
        let day = document.querySelector(".day-" + i);
        day.textContent = cityInfoMinified["next" + i][0];

        let temp = document.querySelector(".temp-" + i);
        temp.textContent = cityInfoMinified["next" + i][3];

        let icon = document.querySelector(".icon-" + i);
        icon.src = cityInfoMinified["next" + i][2];

        if (i === 0) {
            allCity[3].textContent = searchedCity;
            day = document.querySelector(".day--0");
            day.textContent = cityInfoMinified["current"][0];
            temp = document.querySelector(".temp--0");
            temp.textContent = cityInfoMinified["current"][3];
            icon = document.querySelector(".icon--0");
            icon.src = cityInfoMinified["current"][2];
        }
    }
}

export { changeCityInfo };
