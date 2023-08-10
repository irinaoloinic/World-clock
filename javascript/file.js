function updateTime(){
//Barcelona//
let barcelonaElement = document.querySelector("#barcelona");
let barcelonaDateElement = barcelonaElement.querySelector(".date");
let barcelonaTimeElement = barcelonaElement.querySelector(".time");
let barcelonaTime = moment().tz("Europe/Madrid");

barcelonaDateElement.innerHTML = barcelonaTime.format("MMMM Do YYYY");
barcelonaTimeElement.innerHTML = barcelonaTime.format("h:mm:ss SSS[<small>]A[<small>]");


//Sydney//
let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss SSS[<small>]A[<small>]");
}

updateTime()
setInterval(updateTime, 100);