import logo from '../Asset/logo.png';

let Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg position-sticky">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={logo} alt="logo" width='160'/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link mx-3" href="/"><b>HOME</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3" href="/"><b>PRODUCTS</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3" href="/"><b>CONTACT US</b></a>
                        </li>
                        <a href="/login"><button className="clickToLogin">CLICK TO LOGIN</button></a>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Navbar;