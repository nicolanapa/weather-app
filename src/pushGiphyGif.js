import { cityInfoMinified, searchedCity } from "./getWeatherInfo";
import { giphyApi } from "./loginApi";

function changeGif() {
    if (searchedCity !== "") {
        gifLoop();
    }
}

function removeAllSpaces(number) {
    let strTemporary = cityInfoMinified["next" + number][1];
    strTemporary = strTemporary.replace(" ", "+");

    return strTemporary;
}

function removeAllSpaces2() {
    let strTemporary = cityInfoMinified["current"][1];
    strTemporary = strTemporary.replace(" ", "+");

    return strTemporary;
}

async function gifLoop() {
    let allGif = document.querySelectorAll(".gif");

    for (let i = 0; i < 3; i++) {
        let response = await fetch(
            "https://api.giphy.com/v1/gifs/translate?api_key=" +
                giphyApi +
                "&s=" +
                removeAllSpaces(i),
            {
                mode: "cors",
            },
        );

        response = await response.json();


        console.log(response);
        allGif[i].src = response.data.images.original.url;
        if (i === 0) {
            response = await fetch(
                "https://api.giphy.com/v1/gifs/translate?api_key=" +
                    giphyApi +
                    "&s=" +
                    removeAllSpaces2(),
                {
                    mode: "cors",
                },
            );

            response = await response.json();

            console.log(response);
            allGif[3].src = response.data.images.original.url;
        }
    }
}

export { changeGif };
