let i = 0

window.onload = () => {
    fetch("/schedule.json", {
        method: "GET",
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        setTime(data)
    });
}

let timeUp = async () => {
    setTimeout(() => {
        document.getElementById("timer").innerHTML = "<p class='blinkme'>Time is up!</p>";
    }, 1000);
    return;
}

function setTime(data) {

    let schedule = data[i];
    let countDownDate = new Date(schedule.time).getTime();
    let now = Date.now();

    document.getElementById("activity").innerHTML = `<p>${schedule.activity}</p>`;

    let x = setInterval(function () {

        let now = Date.now();

        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        if (days) {
            document.getElementById("timer").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";
        }
        else if (hours) {
            document.getElementById("timer").innerHTML = hours + "h "
                + minutes + "m " + seconds + "s ";
        }
        else if (minutes) {
            document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
        }
        else {
            document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
        }

        console.log(days, hours, minutes, seconds);

        if (countDownDate <= now) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "<h1 class='blinkme'>Time up!</h1>";
            // await timeUp();
            // i++;
            // console.log(i);
            // if (i >= data.length) {
                // clearInterval(x);
                // i = 0;
                // document.getElementById("timer").innerHTML = "<h2>No more activity on schedule</h2>";
                // return;
            // }
            // setTime(data);
        }

    }, 1000);
} 