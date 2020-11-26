import React from 'react';
import './App.css';

import Main from './components/MainComponent';
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
            <div className="App">
                <Main/>
            </div>
        </BrowserRouter>
    );
}

export default App;
