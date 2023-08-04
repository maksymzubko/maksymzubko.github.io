import React, {lazy} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";

const AppComponent = lazy(() => import('./App.tsx'));

window.history.pushState = new Proxy(window.history.pushState, {
    apply: (target, thisArg, argArray) => {
        const event = new CustomEvent("history");
        const result = target.apply(thisArg, argArray);
        window.dispatchEvent(event);
        return result;
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <AppComponent/>
    </BrowserRouter>
)
