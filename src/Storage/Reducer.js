export const reducer = (state,action)=>{
    switch (action.type) {
        case 'MODE_SWITCH':
            return {...state,   header: {
                    nightMode:!state.header.nightMode,
                    bodyBg: state.header.bodyBg,
                    icon:state.header.icon === "brightness_3"? "wb_sunny":"brightness_3"
                }
            }
        case 'CALL_ERROR':{
            return {...state,hasError:true}
        }
        case 'DEFAULT_REQUEST':{
            return{
                ...state,
                input: action.payload.city,
                mainFrame:{
                    ...state.mainFrame,
                    ...action.payload
                }
            }
        }
        case "INPUT_CHANGED":{
            return{
                ...state,
                input:action.payload
            }
        }
        default: return state
    }
}
