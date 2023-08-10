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


function updateCityTime(event){
 let cityTimezone = event.target.value;
 let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let cityElement = document.querySelector(".cities");
   cityElement.innerHTML = `<div class="cities">
    <div class="city" id="barcelona">
      <div>
      <h2> ${cityTimezone} </h2>
     <div class="date"> ${cityTime.format("MMMM Do YYYY")} </div>
     </div>
     <div>
     <div class="time"> ${cityTime.format("h:mm:ss SS")}} <small> ${cityTime.format("A")}</small> </div>
     </div>
    </div>

    <div class="city" id="sydney">
      <div>
      <h2>Sydney 🇦🇺</h2>
     <div class="date"></div>
     </div>
     <div>
     <div class="time"> </div>
     </div>
    </div>
  </div>`

}
let citiesSelect=document.querySelector("#local-city");
citiesSelect.addEventListener("change", updateCityTime);