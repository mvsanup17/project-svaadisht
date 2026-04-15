import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import './styles/detailings.css';
import './styles/mainpage.css';
// import main from '../images/biodiverse.avif';
// import cuisine from '../images/International.jpg';
// import chef from '../images/cooking.jpg';

function Main(){
    return(
        <div>
            <Navbar/>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item carousel-image bg-img-1 active">
                        {/* <img src={main} class="d-block w-100" alt="img1"/> */}
                        <center> 
                            <div className="col-xs-12 col-sm-6 col-md-8 col-centered set">
                                <h2 className="fw-bold set-1">Explore Origin of Food</h2>
                                <Link to='/home' className="edit"><button type="button" class="btn btn-primary">click</button></Link>
                            </div>
                        </center>
                    </div>
                    <div class="carousel-item carousel-image bg-img-2">
                        {/* <img src={cuisine} class="d-block w-100" alt="img1"/> */}
                        <center> 
                            <div className="col-xs-12 col-sm-6 col-md-8 col-centered set">
                                <h2 className="fw-bold set-2">Explore Cuisines</h2>
                                <Link to='/cuisines' className="edit"><button type="button" class="btn btn-primary">click</button></Link>
                            </div>
                        </center>
                    </div>
                    <div class="carousel-item carousel-image bg-img-3">
                        {/* <img src={chef} class="d-block w-100" alt="img1"/> */}
                        <center> 
                            <div className="col-xs-12 col-sm-6 col-md-8 col-centered set">
                                <h2 className="fw-bold">Explore Chefs</h2>
                                <Link to='/chefs' className="edit"><button type="button" class="btn btn-primary">click</button></Link>
                            </div>
                        </center>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Main