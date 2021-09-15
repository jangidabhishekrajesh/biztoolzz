import f from '../Icon/f.png';
import e from '../Icon/e.png';
import a from '../Icon/a.png';
import b from '../Icon/b.png';
import c from '../Icon/c.png';
import i from '../Icon/i.png';
import g from '../Icon/g.png';
import d from '../Icon/d.png';
import h from '../Icon/h.png';
import {Fade} from "react-reveal";


let IconCard = () => {
    return(
        <>
        <Fade left cascade>
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-md-4 col-auto">
                    <div className="row">
                        <div className="col-md-2 col-auto my-1">
                            <img src={f} alt="" />
                        </div>
                        <div className="col-md-10 col-auto">
                            <h5 className="iconCardH6">COST EFFECTIVE</h5>
                            <p className="mt-4">Build beautiful websites</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-auto">
                    <div className="row">
                        <div className="col-md-2 col-auto my-1">
                            <img src={e} alt="" />
                        </div>
                        <div className="col-md-10 col-auto">
                            <h5 className="iconCardH6">FAST AND EFFICIENT</h5>
                            <p className="mt-4">Sell products online</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-auto">
                    <div className="row">
                        <div className="col-md-2 col-auto my-1">
                            <img src={a} alt="" />
                        </div>
                        <div className="col-md-10 col-auto">
                            <h5 className="iconCardH6">LIBRARY OF EFFECTIVE DIGITAL TOOLS</h5>
                            <p className="mt-4">Manage your business links</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-auto mt-4">
                    <div className="row">
                        <div className="col-md-2 col-auto my-1">
                            <img src={b} alt="" />
                        </div>
                        <div className="col-md-10 col-auto">
                            <h5 className="iconCardH6">BUSINESS BRANDING MADE EASY</h5>
                            <p className="mt-4">Keep track of your projects</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-auto mt-4">
                    <div className="row">
                        <div className="col-md-2 col-auto my-1">
                            <img src={c} alt="" />
                        </div>
                        <div className="col-md-10 col-auto">
                            <h5 className="iconCardH6">DIGITIZE YOUR BUSINESS</h5>
                            <p className="mt-4">Share your business information quickly and easily</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-auto mt-4">
                    <div className="row">
                        <div className="col-md-2 col-auto my-1">
                            <img src={i} alt="" />
                        </div>
                        <div className="col-md-10 col-auto">
                            <h5 className="iconCardH6">NETWORK EFFICIENTLY</h5>
                            <p className="mt-4">Create, send and edit estimates. Invoice items and more</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-auto mt-4">
                    <div className="row">
                        <div className="col-md-2 col-auto my-1">
                            <img src={g} alt="" />
                        </div>
                        <div className="col-md-10 col-auto">
                            <h5 className="iconCardH6">FREEDOM OF CUSTOMIZATION</h5>
                            <p className="mt-4">Create professional resumes fast and free</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-auto mt-4">
                    <div className="row">
                        <div className="col-md-2 col-auto my-1">
                            <img src={d} alt="" />
                        </div>
                        <div className="col-md-10 col-auto">
                            <h5 className="iconCardH6">INCREASE PROFITS</h5>
                            <p className="mt-4">Manage your employees with attendance tracker, staff tracker and more</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-auto mt-4">
                    <div className="row">
                        <div className="col-md-2 col-auto my-1">
                            <img src={h} alt="" />
                        </div>
                        <div className="col-md-10 col-auto">
                            <h5 className="iconCardH6">COST EFFECTIVE MANAGEMENT OF BUSINESS</h5>
                            <p className="mt-4">Manage your customers end to end</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
        </>
    );
}
export default IconCard;