let btnShuffle = document.querySelector("#shuffle");
function getAdvice() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.adviceslip.com/advice");
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let advice = request.response;
            let quote = advice["slip"].advice;
            let num = advice["slip"].id;
            document.getElementById("caption").innerHTML = quote;
            document.getElementById("num").innerHTML = num;
        }
    }
}
window.onload = function () {
    getAdvice();
}
btnShuffle.addEventListener("click", function () {
    getAdvice();
})