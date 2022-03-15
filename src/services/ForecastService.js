import api from './api'

function GetForecastList(street, city, state, zipcode, setSuccess, setError){
    console.log(street)
    console.log(city)
    console.log(state)
    console.log(zipcode)
    api.get(`/forecast/address?street=${street}&city=${city}&state=${state}&zipcode=${zipcode}`)
    .then(res => {
        setSuccess(res.data)
        setError(null)
    })
    .catch(err => {
        setError(err.response.data.errors)
        setSuccess(null)
    })
}

export default GetForecastList;