import api from './api'

function GetForecastList(street, city, state, zipcode, setSuccess, setError){
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