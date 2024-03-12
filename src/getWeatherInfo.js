import { weatherApi } from "./loginApi";
import { changeCityInfo } from "./pushWeatherInfo";

let searchedCity = "";
let cityInfo = "";
let cityInfoMinified = "";

function dateChecker() {
    // Creates an variable with today's date
    let todayDate = new Date();
    if (todayDate.getMonth() <= 9 && todayDate.getDate() <= 9) {
        todayDate = todayDate.getFullYear() + "-0" + (todayDate.getMonth() + 1) + "-0" + todayDate.getDate();
        console.log("Oggi è il " + todayDate);
    } else if (todayDate.getMonth() <= 9 && todayDate.getDate() >= 9) {
        todayDate = todayDate.getFullYear() + "-0" + (todayDate.getMonth() + 1) + "-" + todayDate.getDate();
        console.log("Oggi è il " + todayDate);
    } else if (todayDate.getDate() <= 9 && todayDate.getMonth() >= 9) {
        todayDate = todayDate.getFullYear() + "-" + (todayDate.getMonth() + 1) + "-0" + todayDate.getDate();
        console.log("Oggi è il " + todayDate);
    } else {
        todayDate = todayDate.getFullYear() + "-" + (todayDate.getMonth() + 1) + "-" + todayDate.getDate();
        console.log("Oggi è il " + todayDate);
    }
    todayDate = String(todayDate);
    return todayDate;
}

function searchCity() {
    let form = document.querySelector(".form-search");
    let inputCity = document.querySelector("#city-input");

    form.addEventListener("submit", (e) => {
        searchedCity = inputCity.value;

        console.log(searchedCity);
        getCityInfo();
        e.preventDefault();
    });
}

searchCity();

async function getCityInfo() {
    cityInfo = await fetch(
        "https://api.weatherapi.com/v1/forecast.json?key=" + weatherApi + "&q=" + searchedCity + "&days=3",
    );
    cityInfo = await cityInfo.json();

    console.log(cityInfo);
    processCityInfo();
}

function processCityInfo() {
    //new object that only takes the needed values
    cityInfoMinified = {
        // [city name, city country]
        location: [cityInfo.location.name, cityInfo.location.country],
        // [current day, current weather conditin, current icon file, current temperature]
        current: [dateChecker(), cityInfo.current.condition.text, fromWebToLocalIcons2(), cityInfo.current.temp_c],
        next0: [
            // [date, weather condition, icon file, average temperature]
            cityInfo["forecast"]["forecastday"]["0"]["date"],
            cityInfo["forecast"]["forecastday"]["0"]["day"]["condition"]["text"],
            fromWebToLocalIcons(),
            cityInfo["forecast"]["forecastday"]["0"]["day"]["avgtemp_c"],
        ],
        next1: [
            cityInfo["forecast"]["forecastday"]["1"]["date"],
            cityInfo["forecast"]["forecastday"]["1"]["day"]["condition"]["text"],
            fromWebToLocalIcons(),
            cityInfo["forecast"]["forecastday"]["1"]["day"]["avgtemp_c"],
        ],
        next2: [
            cityInfo["forecast"]["forecastday"]["2"]["date"],
            cityInfo["forecast"]["forecastday"]["2"]["day"]["condition"]["text"],
            fromWebToLocalIcons(),
            cityInfo["forecast"]["forecastday"]["2"]["day"]["avgtemp_c"],
        ],
    };

    function fromWebToLocalIcons() {
        let strTemporary = cityInfo["forecast"]["forecastday"]["1"]["day"]["condition"]["icon"];
        strTemporary = strTemporary.replace("//cdn.weatherapi.com/", "../src/");

        return strTemporary;
    }

    function fromWebToLocalIcons2() {
        let strTemporary = cityInfo.current.condition.icon;
        strTemporary = strTemporary.replace("//cdn.weatherapi.com/", "../src/");

        return strTemporary;
    }

    console.log(cityInfoMinified);
    console.table(cityInfoMinified);

    changeCityInfo();
}

export { searchedCity, cityInfoMinified };
