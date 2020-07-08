import store from './Store'
import {ApiInstance} from "../ApiModel/ApiModel";

export let modeSwitch = ()=>{
    document.body.classList.toggle(store.getState().header.bodyBg)
    console.log(store.getState())
    return({type:"MODE_SWITCH"})
}

export let baseRequest = (city=store.getState().input) => async (dispatch)=> {
    let response = await ApiInstance.BaseRequest(city)
    store.getState().mainFrame.loading = false
    if(response.type === callError().type)
        dispatch(callError())
    else {
        dispatch({
            type: "DEFAULT_REQUEST",
            payload: {
                city: response.name,
                country: response.sys.country,
                temp: response.main.temp,
                description: response.weather[0].description,
                high: response.main.temp_max,
                low: response.main.temp_min,
                feelsLike: response.main.feels_like,
                humidity: response.main.humidity,
                pressure: response.main.pressure,
                sunset: response.sys.sunset,
            }
        })
    }
}

export let onInputChange = (value)=>({
    type:"INPUT_CHANGED",
    payload:value
    })

export let callError = ()=>({type:"CALL_ERROR"})
