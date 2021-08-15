const key = 'h2P7HBOkneTZ9AzaeO6UUXntMKdzsCUV'

// Get City Data

const cityData = async (city) =>{

    const cityKey = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(cityKey + query)
    const data = await response.json()

    return data[0]
}

// Get Weather Data

const weatherData = async (id) => {
    
    const cityKey = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    const response = await fetch(cityKey + query)
    const data = await response.json()

    return data[0]
}
