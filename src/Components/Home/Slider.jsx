import {Bounce} from "react-reveal";
import {Roll} from "react-reveal";


let Slider = () => {
    return(
        <>
            <div className="mb-5" id="home">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="sliderOne p-5">
                                <div className="row">
                                    <div className="col-md-6 col-auto">
                                        <Bounce top cascade>
                                            <h1 className="text-start">
                                                Start / Automate your business for no cost!
                                            </h1>
                                        </Bounce>
                                        <Roll top cascade>
                                            <p className="text-start">
                                                An Excellent solution for those who value their reputation and value style. Elegant and modern showcase will emphasize the attractiveness of your work.
                                            </p>
                                        </Roll>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="sliderTwo p-5">
                                <div className="row">
                                    <div className="col-md-6 col-auto">
                                        <Bounce down>
                                            <h1 className="text-start">
                                                All the tools you need for a professional business launch.
                                            </h1>
                                        </Bounce>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="sliderThree p-5">
                                <div className="row">
                                    <div className="col-md-6 col-auto">
                                        <Bounce top cascade>
                                            <h1 className="text-start">
                                                elegant solutions for you.
                                            </h1>
                                        </Bounce>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="sliderFour p-5">
                                <div className="row">
                                    <div className="col-md-6 col-auto">
                                        <Bounce left cascade>
                                            <h1 className="text-start">
                                                we serve quality and  excellence!
                                            </h1>
                                        </Bounce>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Slider;