import {callError} from "../Storage/ActionCreators";

class ApiModel{
    //Data
    BaseURL = 'https://api.openweathermap.org/data/2.5/weather?'
    queryParams = "&units=Metric&appid=002386792c0ca75a8857e434c02d1406"
    //Requests
    BaseRequest = async (city)=>{
        try{
            let response = await fetch(`${this.BaseURL}q=${city}${this.queryParams}`)
            if(response.ok)
                return await response.json()
            else
                return callError()
        } catch (e) {
            console.log("Request Error " + e)
        }
    }

}

export let ApiInstance = new ApiModel()
