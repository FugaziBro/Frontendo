import React from 'react'
import style from './Mode.module.css'
import {modeSwitch} from "../../../Storage/ActionCreators";
import {connect} from "react-redux";


const Mode = (props)=> {

    return (
        <React.Fragment>
            <div onClick={props.Switch} className={`${style.container_mode} material-icons`}>{props.icon}</div>
        </React.Fragment>)
}

let stateToProps = (state)=>({
    nightMode: state.header.nightMode,
    bodyBg: state.header.bodyBg,
    icon: state.header.icon
})
let dispatchToProps = (dispatch)=>({
    Switch:()=>dispatch(modeSwitch()),

})

export default connect(stateToProps,dispatchToProps)(Mode)
