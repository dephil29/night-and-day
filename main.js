var godButton = document.querySelector('#god');
var body = document.querySelector("body");
var circle = document.querySelector(".circle");
console.log(godButton);

godButton.addEventListener("click", function() {

    // if (body.style.backgroundColor === "rgb(55, 216, 230)") {
    //     body.style.backgroundColor = "rgb(44,62, 80)";
    // } else {
    //     body.style.backgroundColor = "rgb(55, 216,230)";
    // }

    // if (body.classList.contains("night") === false) {
    //     body.classList.add("night");
    //     circle.classList.add("moon");
    // }
    // else {
    //     body.classList.remove("night");
    //     circle.classList.remove("moon");
    // }

    body.classList.toggle("night");
    circle.classList.toggle("moon");



});
