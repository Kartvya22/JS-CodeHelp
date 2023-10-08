console.log("this is console");

let API_key = "3cff447ffbf00c1f92c6a42fefd14d75";

function renderWeatherInfo(data) {
    let newpara = document.createElement("p");
    newpara.textContent = `${data?.main?.temp.toFixed(2)} C`;
    document.body.appendChild(newpara);
}

function error(err) {
    let newpara = document.createElement("p");
    newpara.textContent = err;++
    document.body.appendChild(newpara);

    console.log(err)
}

// 1. first weather api call by city name

// async function fetchWeatherDetails1() {
//   try {
//     let city_name = "shimla";

//     let response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`
//     );
//     let data = await response.json();

//     console.log("weather 1 data : ", data);
//     // ahiya , ni jagya ae + vapriae concatation mate to sarkhi rite run nai thay

//     renderWeatherInfo(data);

//   } catch (e) {
//     error(e);
//   }
// }

// fetchWeatherDetails1();


// 2. second api call using latitude and longitude

// async function fetchWeatherDetails2() {
//   try {
//     // let latitude = 31.1048;
//     // let longitude = 77.1734;
//     let latitude = 17.6333;
//     let longitude = 18.3333;

//     let result = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`
//     );
//     let data = await result.json();

//     console.log("weather 2 data : ", data);

//     renderWeatherInfo(data);

//   } catch (err) {
//     error(err)
//   }
// }

// fetchWeatherDetails2();


// 3. find current location of user 

function getLocation() {
  if(navigator.geolocation){
    let x = navigator.geolocation.getCurrentPosition(showPosition);
    console.log(x);
  }
  else {
    console.log("geolocation is not supported by this browser");
  }
}

function showPosition(position) {
  console.log(position)
  let latitude = position.coords.latitude;
  console.log(latitude);
  let longitude = position.coords.longitude;
  console.log(longitude)
}

getLocation();
