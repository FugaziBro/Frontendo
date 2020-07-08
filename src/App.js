import React from 'react';
import './App.css';
import Head from "./Components/Head/Head";
import {Provider} from "react-redux";
import store from "./Storage/Store";
import Main from "./Components/Main/Main";


function App(props) {
    return (
        <Provider store={store}>
            <div>
                <Head/>
                <Main hasError={store.getState().hasError}/>
            </div>
        </Provider>
    );
}


export default App;
