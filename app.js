const API_Key = `f09de6ee9ae24aca577e0834058db0c4`;

const inputData = document.getElementById(`searchinput`);
const showWeather = document.getElementById(`showWeather`);

const searchW = async () => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputData.value}&appid=${API_Key}&units=metric`;

    const fetchData = await fetch(API_URL);

    const response = await fetchData.json();

    // console.log(response);

    inputData.value = ""

    return showData(response);
}

function showData(data) {
    if(data.cod == "404"){
        Swal.fire({
            icon: "error",  
            text: "City Not Found",
          });
    }
    else{

        showWeather.innerHTML = `<img width="180" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=">
        <h1 class="text-center">${data.weather[0].main}</h1>
        <div>
        <h2 class="text-center">${data.main.temp}&deg;</h2>
        </div>
        <p>humadity <b>${data.main.humidity}</b></p>`;
        }
}

// api.github.com/users/AdnanShahid6569