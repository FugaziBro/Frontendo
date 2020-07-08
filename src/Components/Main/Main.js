import React from "react";
import style from './Main.module.css'
import ErrorBoundary from "../Errors/ErrorBoundary";
import Article from "./Article/Article";
import Temp from "./Temp/Temp";
import {connect} from "react-redux";
import Loader from "../Loader/Loader";
import {baseRequest, onInputChange} from "../../Storage/ActionCreators";
import store from "../../Storage/Store";
import Footer from "./Footer/Footer";

const Main = (props)=>{
    let inp = React.createRef()
    let inpItems = React.createRef()
    let inputItems = props.inputItems
        .map(elem=>(<div onClick={()=>{
            props.onInputChange(elem)
            inpItems.current.classList.toggle(style.displayBlock)
            props.baseRequest()
        }} className={style.inputItem}>{elem}</div>))

    //Component
    if (props.loading)
        return <Loader/>
    return(
        <div className={style.mainBlock}>
            <div className={style.inputBlock}>
                <input
                    onClick={()=>inpItems.current.classList.toggle(style.displayBlock)}
                    onChange={()=>props.onInputChange(inp.current.value)}
                    value={props.input}
                    ref={inp}/>
                <span onClick={props.baseRequest} className={`${style.inputIcon} mdi mdi-magnify`}></span>
                <div ref={inpItems}  className={style.inputItems}>
                        {inputItems}
                </div>
            </div>
            <Article/>
            <Temp/>
            <Footer/>
        </div>
    )
}

let stateToProps = (state)=>({
    loading: state.mainFrame.loading,
    hasError: state.hasError,
    input :state.input,
    inputItems: state.inputItems
})

let dispatchToProps = (dispatch)=>({
    onInputChange: (value)=> dispatch(onInputChange(value)),
    baseRequest : ()=>dispatch(baseRequest(store.getState().input))
})

export default connect(stateToProps,dispatchToProps)(ErrorBoundary(Main))
