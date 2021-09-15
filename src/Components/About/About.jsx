import {Fade} from "react-reveal";

let About = () => {
    return(
        <>
        <div className="container">
            <div className="row">
                <Fade left cascade>
                    <div className="col-md-6 col-auto">
                        <h4 className="text-start text-muted my-4">
                            ABOUT US
                        </h4>
                        <p className="aboutUsParagraph mb-5">
                            <b>1. INCREASE SALES 10X.</b> <br />
                            <b>2. MANAGE BUSINESS EFFECTIVELY.</b> <br />
                            <b>3. ACCESS TO FREE AND OPEN SOURCE PRODUCTS.</b>
                        </p>
                        <p style={{lineHeight:"2", fontWeight:"400"}}>Biztoolzz is a brand that aims to push other brands to compete effectively over a wide market. Our team is highly dedicated in seeing the vision for your next business venture. With advice of over top Industrial Specialists and Software Experts we bring you the effective tools for your next digital transformation. Our goal is to make India a digital hub where basic services are available to the public at little or no cost!</p>
                    </div>
                </Fade>
                <Fade right cascade>
                    <div className="col-md-6 col-auto mt-5">
                        <div className="shadow" id="rounded">
                            <img id="rounded" src="https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" height="380" style={{width:"100%"}} alt="" />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
        </>
    );
}
export default About;