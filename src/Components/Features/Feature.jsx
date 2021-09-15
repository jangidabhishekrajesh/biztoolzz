import IconCard from "./IconCard";
import {Fade} from "react-reveal";

let Feature = () => {
    return(
        <>
        <Fade right cascade>
            <div className="container">
                <h1 className="text-center cardContent">
                    Features
                </h1>
                <center>
                    <hr className="cardLine"/>
                </center>
            </div>
        </Fade>
        <IconCard/>
        </>
    );
}
export default Feature;