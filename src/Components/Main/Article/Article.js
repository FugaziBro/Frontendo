import React from "react";
import style from './Article.module.css'
import {connect} from "react-redux";
import ErrorBoundary from "../../Errors/ErrorBoundary";

const Article = (props)=>{
    return(
        <div className={style.articleBlock}>
            <h1 className={style.place}> {props.city}, {props.country}</h1>
            <h2>{new Date().toDateString()}</h2>
        </div>
    )
}

let stateToProps = (state)=>({
    loading:state.mainFrame.loading,
    city: state.mainFrame.city,
    country: state.mainFrame.country
})
export default connect(stateToProps)(ErrorBoundary(Article))
