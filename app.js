document.addEventListener('DOMContentLoaded', () => {
    const api = {
        key: "DCS3Q5ET6CP6NSHPRVW3WJU6T",
        base: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
    };

    const Input = document.getElementById('input');
    Input.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            getWeather(Input.value);
            document.querySelector('.main-weather').style.display = "block";
        }
    });

    function getWeather(city) {
        fetch(`${api.base}/${city}?key=${api.key}&unitGroup=metric`)
            .then(response => response.json())
            .then(showWeather);
    }

    function showWeather(details) {
        let city = document.getElementById('city');
        city.innerHTML = `${details.resolvedAddress}`;

        let temperature = document.getElementById('temp');
        temperature.innerHTML = `${Math.round(details.days[0].temp)}&deg;C`;

        let minMax = document.getElementById('min-max');
        minMax.innerHTML = `${Math.round(details.days[0].tempmin)}&deg;C (Min) and ${Math.round(details.days[0].tempmax)}&deg;C (Max)`;

        let weatherType = document.getElementById('weather-type');
        weatherType.innerHTML = `${details.days[0].conditions}`;
    }
});
