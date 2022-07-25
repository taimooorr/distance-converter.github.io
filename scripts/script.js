(function(){
    'use strict';
    document.getElementById('convert').addEventListener('submit', function (event) {
        event.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);
        const answer = document.getElementById('answer');
        if (distance) {
            const conversion = (distance * 1.60934).toFixed(2);
            //display answer
            answer.innerHTML = `<h2>
				${distance} miles is equal to ${conversion} kilometers.
				</h2>`;
        } else {
            answer.innerHTML = `<h2>Please enter a number</h2>`;
        }

    })
})();