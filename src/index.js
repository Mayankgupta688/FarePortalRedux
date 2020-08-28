import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import { Provider } from "react-redux";

import {AppComponent, MovieComponent} from "./components/App";

import { rootReducer } from "./reducers";

var appStore = createStore(rootReducer);

ReactDOM.render((
    <Provider store={appStore}>
        <MovieComponent />
        <AppComponent />
    </Provider>
    ), document.getElementById("root"));