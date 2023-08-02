import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import PageLoader from "@components/PageLoader.tsx";

const AppComponent = lazy(() => import('./App.tsx'));

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <AppComponent/>
    </BrowserRouter>
)
