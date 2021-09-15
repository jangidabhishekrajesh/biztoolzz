import ecom from '../Asset/ecom.gif';
import webbd from '../Asset/webbd.gif';
import bizz from '../Asset/bizz.gif';
import project from '../Asset/project.gif';
import QR from '../Asset/QR.png';
import crm from '../Asset/crm.jpg';
import tax from '../Asset/tax.gif';
import resume from '../Asset/resume.gif';
import hr from '../Asset/hr.gif';
import market from '../Asset/market.gif';
import {Fade} from "react-reveal";


let Product = () => {
    return(
        <>
        <div className="container">
            <div className="row">
                <Fade left cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">WEB BUILDER</h4>
                        <img src={webbd} style={{width:"100%"}} height="260" alt="" />
                        <h6 className="text-center mt-2">BUILD BEAUTIFUL WEBSITES</h6>
                    </div>
                </Fade>
                <Fade right cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">E-COMMERCE</h4>
                        <img src={ecom} style={{width:"100%"}} height="260" alt="" />
                        <h6 className="text-center mt-2">SELL PRODUCTS ONLINE</h6>
                    </div>
                </Fade>
                <Fade left cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">BIZZLINC/ TREE</h4>
                        <img src={bizz} style={{width:"100%"}} height="260" alt="" />
                        <h6 className="text-center mt-2">MANAGE YOUR BUSINESS LINKS</h6>
                    </div>
                </Fade>
                <Fade right cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">PROJECT MANAGEMENT</h4>
                        <img src={project} style={{width:"100%"}} height="260" alt="" />
                        <h6 className="text-center mt-2">KEEP TRACK OF YOUR PROJECTS</h6>
                    </div>
                </Fade>
                <Fade left cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">QR CODE BUILDER</h4>
                        <img src={QR} style={{width:"100%"}} height="260" alt="" />
                        <h6 className="text-center mt-2">SHARE YOUR BUSINESS INFORMATION QUICKLY AND EASILY</h6>
                    </div>
                </Fade>
                <Fade right cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">CRM</h4>
                        <img src={crm} style={{width:"100%"}} height="260" alt="" />
                        <h6 className="text-center mt-2">MANAGE YOUR CUSTOMERS END TO END</h6>
                    </div>
                </Fade>
                <Fade left cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">TAX & ACCOUNTING</h4>
                        <img src={tax} style={{width:"100%"}} height="260" alt="" />
                        <h6 className="text-center mt-2">CREATE, SEND AND EDIT ESTIMATES INVOICE ITEMS AND MORE</h6>
                    </div>
                </Fade>
                <Fade right cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">RESUME BUILDER</h4>
                        <img src={resume} style={{width:"100%"}} height="260" alt="" />
                        <h6 className="text-center mt-2">CREATE PROFESSIONAL RESUMES FAST AND FREE</h6>
                    </div>
                </Fade> 
                <Fade left cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">HR MANAGEMENT</h4>
                        <img src={hr} style={{width:"100%"}} height="260" alt="" />
                        <h6 className="text-center mt-2">
                        MANAGE YOUR EMPLOYEES WITH ATTENDANCE TRACKER, STAFF TRACKER AND MORE</h6>
                    </div>
                </Fade>
                <Fade right cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">MARKETING TOOL</h4>
                        <img src={market} style={{width:"100%"}} height="260" alt="" />
                        <h6 className="text-center mt-2">
                        GET ACCESS TO 1000+ MARKETING CREATIVES, FLYER IDEAS AND USEFUL LINKS</h6>
                    </div>
                </Fade>
            </div>
        </div>
        </>
    );
}
export default Product;