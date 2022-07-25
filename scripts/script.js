(function () {
    'use strict';
    let convertType = "miles";
    const heading = document.querySelector("h1");
    const intro = document.querySelector("p");
    const answerDiv = document.getElementById("answer");
    const form = document.getElementById("convert");
    document.addEventListener('keydown', function (event) {
        const key = event.key;
        if (key == 'k' || key == 'K') {
            convertType = "kilometers";
            heading.textContent = "Kilometers to Miles Converter";
            intro.textContent = "Type in a number of kilometers and click the button to convert the distance to miles.";
        }
        else if (key == 'm' || key == 'M') {
            convertType = "miles";
            heading.innerHTML = "Miles to Kilometers Converter";
            intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
        }
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const distance = parseFloat(document.getElementById("distance").value);
        if (distance != "" && !isNaN(distance)) {
            if (convertType == "miles") {
                const converted = (distance * 1.60934).toFixed(2);
                answerDiv.textContent = `${distance} miles Converted to ${converted} kilometers.`;
            }
            else {
                const converted = (distance / 1.60934).toFixed(2);
                answerDiv.textContent = `${distance} kilometers Converted to ${converted} miles.`;
            }
        } else {
            answerDiv.innerHTML = `<h2>Please enter a Valid number</h2>`;
        }
    });
})();