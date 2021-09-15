import Product from "./Product";
import {Fade} from "react-reveal";

let Card = () => {
    return(
        <>
        <Fade top cascade>
            <div className="container my-5">
                <h1 className="text-center cardContent">
                    PRODUCTS WE OFFER FOR FREE
                </h1>
                <center>
                    <hr className="cardLine"/>
                </center>
            </div>
        </Fade>
        <div className="container">
            <Product/>
        </div>
        </>
    );
}
export default Card;