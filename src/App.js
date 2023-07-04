import React from "react";
import NavBar from "./Components/NavBar";
import StartBootStrap from "./Components/StartBootStrap";
import Portfolio from "./Components/Portfolio";


const App=()=>{
    return(
        <div>
            <NavBar></NavBar>
            <StartBootStrap></StartBootStrap>
            <Portfolio></Portfolio>
        </div>
    )
}

export default App;