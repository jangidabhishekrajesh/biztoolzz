import About from "../About/About";
import Automate from "../Automate/Automate";
import Card from "../Cards/Card";
import Feature from "../Features/Feature";
import Slider from "./Slider";
import {Fade} from "react-reveal";

let Hero = () =>{
    return(
        <>
        <Fade left><Slider/></Fade>
        <About/>
        <Automate/>
        <Card/>
        <Feature/>  
        </>
    );
}
export default Hero;