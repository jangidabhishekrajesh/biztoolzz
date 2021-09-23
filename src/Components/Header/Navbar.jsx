import logo from '../Asset/logo.png';
import { Link} from "react-scroll";


let Navbar = () => {

    // scrollToTop = () => {
    //     scroll.scrollToTop();
    // };


    return(
        <>
        <nav className="navbar navbar-expand-lg position-sticky">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt="logo" width='160'/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav" style={{justifyContent: 'space-around'}}>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link mx-3" to="home" spy={true} smooth={true} offset={-100} duration={500}><b>HOME</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-3" to="product" spy={true} smooth={true} offset={-100} duration={1000}><b>PRODUCTS</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-3" to="contact" spy={true} smooth={true} offset={-100} duration={1500}><b>CONTACT US</b></Link>
                        </li>
                        <a href="login"><button className="clickToLogin">CLICK TO LOGIN</button></a>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Navbar;