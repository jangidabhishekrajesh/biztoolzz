import {Bounce} from "react-reveal";
import Zoom from 'react-reveal/Zoom';

let Automate = () => {
    return(
        <>
        <div className="container-fluid my-5 colorContent">
            <div className="content">
                <div className="container contentAutomate">
                    <Bounce top>
                        <h4 className="text-start">
                            <b>Automate Now</b> to increase your ROI
                        </h4>
                    </Bounce>
                    <Zoom>
                    <p>
                    1. Send Automated Estimates for all your leads for free.
                    <br />
                    2. Capture all your leads in one dashboard and manage them effectively and assign them to your team as well.
                    <br />
                    3. Build Beautiful website for Free
                    </p>
                    </Zoom>
                    <Bounce down cascade>
                    <center className="my-5"><a href="/"><button className="btn btnAutomate">GET STARTED</button></a></center>
                    </Bounce>
                </div>
            </div>
        </div>
        </>
    );
}
export default Automate;