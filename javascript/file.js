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

//London//
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss SSS[<small>]A[<small>]");
}

updateTime()
setInterval(updateTime, 100);


function updateCityTime(event){
 let cityTimezone = event.target.value;
 if (cityTimezone === "current"){
  cityTimezone = moment.tz.guess();
 }
 let cityName = cityTimezone.replace("_", " ").split("/")[1];
 let cityTime = moment().tz(cityTimezone);
 let cityElement = document.querySelector("#cities");
   cityElement.innerHTML = `<div class="cities">
    <div class="city">
      <div>
      <h2> ${cityName} </h2>
     <div class="date"> ${cityTime.format("MMMM Do YYYY")} </div>
     </div>
     <div>
     <div class="time"> ${cityTime.format("h:mm:ss")} <small> ${cityTime.format("A")}</small> </div>
     </div>
    </div>
  </div>
  <a href = "/"> Back to all cities </a>
  `;

}
let citiesSelect=document.querySelector("#local-city");
citiesSelect.addEventListener("change", updateCityTime);
