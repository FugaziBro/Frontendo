import React from "react";
import style from './ErrorBoundary.module.css'

const ErrorBoundary = (Wrapped)=> {
    return (props) => {
        if(props.hasError)
           return (
               <div className={style.error_block}>
                    <i className={`${style.error_logo} material-icons md_48`}>error</i>
                   <div className={style.error_info}>
                       Sorry, something went wrong, try to reload page...
                   </div>
               </div>
           )
        else
           return <Wrapped {...props}/>
    }
}

export default ErrorBoundary
