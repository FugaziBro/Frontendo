import {reducer} from "./Reducer";
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk'

const initialState= {
    //Header
    header:{
        nightMode:false,
        bodyBg:"body_bac",
        icon:"brightness_3",
    },
    input:"Moscow",
    inputItems:[
        "Moscow",
        "London",
        "New York",
        "Ekaterinburg",
        "Berlin",
        "Paris",
        "Beijing",
        "Washington",
        "Los Angeles",
        "Tokyo",
        "Barcelona",
        "Kyiv",
        "Minsk",
        "Chelyabinsk",
        "Sydney"
    ],
    tempIcon:new Map([
        ["sky","mdi mdi-weather-partly-cloudy f160"],
        ["clouds", "mdi mdi-weather-cloudy f160"],
        ["rain","mdi mdi-weather-lightning-rainy f160"]
    ]),
    //Main
    hasError:false,
    mainFrame:{
        city:"",
        country:"",
        temp:"",
        description:"",
        high:"",
        low:"",
        feelsLike:"",
        humidity:"",
        pressure:"",
        sunset:"",
        loading:true
    }
}

const store = createStore(reducer,initialState, applyMiddleware(thunk))
console.log(store.getState())
export default store
