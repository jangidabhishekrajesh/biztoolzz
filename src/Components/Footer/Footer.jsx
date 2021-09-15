import { Link } from "react-router-dom";
import logo from '../Asset/logo.png';

let Footer = () => {
    return(
        <>
        <footer className="container-fluid p-5">
            <Link className="navbar-brand" to="/"><img src={logo} alt="logo" width='14%'/></Link> <br />
            <small><span>Phone: +91 7975460697</span></small> <br />
            <small><span>Email: reachwebxinfinity@gmail.com</span></small> <br />
            <small><span>Address: 756 Livingston Street, Bangalore</span></small> <br />
            <small><span style={{color:"#56fee0"}}> <b> WEB BUILDER - E-COMMERCE - BIZZLINC/TREE - PROJECT MANAGEMENT - QR CODE BUILDER - CRM - TAX & ACCOUNTING - RESUME BUILDER - HR MANAGEMENT - MARKETING TOOL </b></span></small>
        </footer>
        </>
    );
}
export default Footer;