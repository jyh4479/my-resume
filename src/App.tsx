import React from 'react';
import {Home} from './containers';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import {theme} from './styles/theme'
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./styles/global-style";


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            {/*<TestComponent/>*/}
            <Router>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                </Routes>
            </Router>
        </ThemeProvider>

    );
}

export default App;
