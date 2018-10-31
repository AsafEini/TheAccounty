import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Sentence from './Sentence';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
    wisdomSentence: 'In the beginning God created the heaven and the earth'
};

function reducer(state = initialState, action) {
    switch (action.type){
        case "SMART":
        return {
            wisdomSentence: state.wisdomSentence + "-SMART"
        };
        default:
        return state;
    }
}

const store = createStore(reducer);
store.dispatch({ type: "SMART"});
const App = () => (
    <Provider store={store}>
    <Sentence/>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
