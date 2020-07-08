import React from "react";
import style from './Head.module.css'
import Mode from "./Mode/Mode";


const Head = (props)=>{
    return(
        <div className={style.head_block}>
            <div className={style.logo_container}>
                <i className={"material-icons md_48"}>filter_drama</i>
                <span>WTHR</span>
            </div>
            <Mode store={props.store}/>
        </div>
    )
}

export default Head
