import React from 'react';
import {Route, Routes} from "react-router";
import Main from "./blog/Main";
const App: React.FC = () => {

    return (
                <Routes>
                    <Route path="/" element={<Main/>}/>
                </Routes>
    );
}

export default App;

