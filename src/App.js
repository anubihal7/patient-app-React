// import logo from './logo.svg';
import "./App.scss";
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";
import {Provider} from "react-redux";
import configureStore from "./_store/ConfigureStore";
import configureValidators from "./_utils/custom-validators-message";
import React, {useState} from "react";
import IdleTimer from 'react-idle-timer'
import {Auth} from "aws-amplify";

configureValidators();
let {store} = configureStore();


function App() {
    const [idleTimer, setIdleTimer] = useState(null);

    async function handleOnIdle(event) {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
        localStorage.clear()
        window.location = "/auth/login"
    }

    return (
        <div>
            <IdleTimer
                ref={ref => {
                    setIdleTimer(ref)
                }}
                timeout={1000 * 60 * 5}
                onIdle={handleOnIdle}
                debounce={250}
            />
            <div className="App">

                <Provider store={store}>
                    <BrowserRouter>
                        <Routes/>
                    </BrowserRouter>
                </Provider>
            </div>
        </div>
    );
}

export default App;
