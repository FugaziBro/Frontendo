import React from "react";
import style from './Footer.module.css'
import FooterItem from "./FooterItem/FooterItem";
import {connect} from "react-redux";

const Footer = (props)=>{
    let cityArr = props.inputItems.map(elem=>(
        <FooterItem city={elem}/>
    ))
    return(
        <div className={style.footerBlock}>
            <div className={style.footerWrapper}>
                {cityArr}
            </div>
        </div>
    )
}

let stateToProps =(state)=>({
    inputItems:state.inputItems,
    tempIcon:state.tempIcon
})
export default connect(stateToProps)(Footer)
