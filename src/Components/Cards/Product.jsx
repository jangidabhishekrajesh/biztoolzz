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
                        <a href="/login"><img src={webbd} style={{width:"100%"}} height="260" alt="" /></a>
                        <a className="productLink" href="https://builder.biztoolzz.com" target="_blank" rel="noreferrer"><h6 className="text-center mt-2">BUILD BEAUTIFUL WEBSITES</h6></a>
                    </div>
                </Fade>
                <Fade right cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">E-COMMERCE</h4>
                        <a href="/login"><img src={ecom} style={{width:"100%"}} height="260" alt="" /></a>
                        <a className="productLink" href="/" target="_blank" rel="noreferrer"><h6 className="text-center mt-2">SELL PRODUCTS ONLINE</h6></a>
                    </div>
                </Fade>
                <Fade left cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">BIZZLINC/ TREE</h4>
                        <a href="/login"><img src={bizz} style={{width:"100%"}} height="260" alt="" /></a>
                        <a className="productLink" href="http://bizzlinc.com/" target="_blank" rel="noreferrer"><h6 className="text-center mt-2">MANAGE YOUR BUSINESS LINKS</h6></a>
                    </div>
                </Fade>
                <Fade right cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">PROJECT MANAGEMENT</h4>
                        <a href="/login"><img src={project} style={{width:"100%"}} height="260" alt="" /></a>
                        <a className="productLink" href="https://pm.biztoolzz.com/public/" target="_blank" rel="noreferrer"><h6 className="text-center mt-2">KEEP TRACK OF YOUR PROJECTS</h6></a>
                    </div>
                </Fade>
                <Fade left cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">QR CODE BUILDER</h4>
                        <a href="/login"><img src={QR} style={{width:"100%"}} height="260" alt="" /></a>
                        <a className="productLink" href="https://qr.biztoolzz.com/" target="_blank" rel="noreferrer"><h6 className="text-center mt-2">SHARE YOUR BUSINESS INFORMATION QUICKLY AND EASILY</h6></a>
                    </div>
                </Fade>
                <Fade right cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">CRM</h4>
                        <a href="/login"><img src={crm} style={{width:"100%"}} height="260" alt="" /></a>
                        <a className="productLink" href="/" target="_blank" rel="noreferrer"><h6 className="text-center mt-2">MANAGE YOUR CUSTOMERS END TO END</h6></a>
                    </div>
                </Fade>
                <Fade left cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">TAX & ACCOUNTING</h4>
                        <a href="/login"><img src={tax} style={{width:"100%"}} height="260" alt="" /></a>
                        <a className="productLink" target="_blank" rel="noreferrer" href="/"><h6 className="text-center mt-2">CREATE, SEND AND EDIT ESTIMATES INVOICE ITEMS</h6></a>
                    </div>
                </Fade>
                <Fade right cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">RESUME BUILDER</h4>
                        <a href="/login"><img src={resume} style={{width:"100%"}} height="260" alt="" /></a>
                        <a className="productLink" href="https://resume.biztoolzz.com/" target="_blank" rel="noreferrer"><h6 className="text-center mt-2">CREATE PROFESSIONAL RESUMES FAST AND FREE</h6></a>
                    </div>
                </Fade> 
                <Fade left cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">HR MANAGEMENT</h4>
                        <a href="/login"><img src={hr} style={{width:"100%"}} height="260" alt="" /></a>
                        <a className="productLink" href="https://hrm.biztoolzz.com/public/" target="_blank" rel="noreferrer"><h6 className="text-center mt-2">
                        MANAGE YOUR EMPLOYEES WITH ATTENDANCE TRACKER, STAFF TRACKER AND MORE</h6></a>
                    </div>
                </Fade>
                <Fade right cascade>
                    <div className="col-md-6 col-auto p-5 my-1">
                        <h4 className="text-center mb-2">MARKETING TOOL</h4>
                        <a href="/login"><img src={market} style={{width:"100%"}} height="260" alt=""/></a>
                        <a className="productLink" href="https://marketing.biztoolzz.com/" target="_blank" rel="noreferrer"><h6 className="text-center mt-2">
                        GET ACCESS TO 1000+ MARKETING CREATIVES, FLYER IDEAS AND USEFUL LINKS</h6></a>
                    </div>
                </Fade>
            </div>
        </div>
        </>
    );
}
export default Product;