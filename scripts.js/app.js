const form = document.querySelector('.form')
const container = document.querySelector('.container')
const details = document.querySelector('.weather-result')
const icon = document.querySelector('.icon img')
const loader = document.querySelector('.loader-container')

setInterval(() => {
    loader.classList.remove('loader-container')
}, 1500);

const updateCity = async (inputValue) =>{
    
    const city = await cityData(inputValue)
    const weather = await weatherData(city.Key)

    return {city, weather}
}

const updateUI = async (data) => {
    const city = data.city
    const weather = data.weather

    details.innerHTML = `
    <h1>${weather.Temperature.Metric.Value}&deg;</h1>
    <h2>${city.EnglishName}</h2>
    <div class="icon">
        <img src="img/icons/${weather.WeatherIcon}.svg" alt="">
        <span>${weather.WeatherText}</span>
    </div>
    `

    if(details.classList.contains('hide')){
        details.classList.remove('hide')
    }

    if(weather.isDayTime){
        container.style.backgroundImage = 'url(img/day.jpg)'
    }else{
        container.style.backgroundImage = 'url(img/night.jpg)'
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = form.city.value.trim()
    form.reset()

    updateCity(inputValue)
    .then(data => updateUI(data))
    .catch(err => console.log(err))
})

