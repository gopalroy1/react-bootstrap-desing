import React from "react";
import NavBar from "./Components/NavBar";
import StartBootStrap from "./Components/StartBootStrap";
import Portfolio from "./Components/Portfolio";
import AboutComponent from "./Components/AboutComponent";
import ContactContainer from "./Components/ContactComponent";


const App=()=>{
    const PropsAbout ={
        title:"About",
        leftPara:"Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.",
        rightPara:"You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!",
        buttonText:"Free Download!"

    }
    return(
        <div>
            <NavBar></NavBar>
            <StartBootStrap></StartBootStrap>
            <Portfolio></Portfolio>
            <AboutComponent {...PropsAbout} ></AboutComponent>
            <ContactContainer></ContactContainer>
        </div>
    )
}

export default App;