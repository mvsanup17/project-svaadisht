import React from "react";
import { Link } from 'react-router-dom';
import './styles/chefs.css';
import './styles/detailings.css';
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
// import imgs from "../images/food.webp";


function Chefs() {
    return (
        <div>
            <Navbar/>
            
            <br/><br /><br /><br />
            <h1 className="text-center heading">CHEFS</h1>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <div className="card cards">
                            {/* <img src={imgs} className="card-img-top" alt="chefs" /> */}
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705229617670.webp`} className="card-img-top" alt="chefs" />
                            <div className="card-body">
                                <h5 className="card-title">Sanjeev Kapoor</h5>
                                <p className="card-text">
                                    Sanjeev Kapoor, an iconic chef, revolutionized Indian cooking with passion and innovation.
                                </p>
                                <Link to="/sanjeev" className="btn">View</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div className="card cards">
                            {/* <img src={imgs} className="card-img-top" alt="chefs" /> */}
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705229691364.webp`} className="card-img-top" alt="chefs" />
                            <div className="card-body">
                                <h5 className="card-title">Vikas Khanna</h5>
                                <p className="card-text">
                                    Vikas Khanna is Michelin-star chef, cookbook author, and humanitarian with passion and innovation.
                                </p>
                                <Link to="/vikas"  className="btn">View</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div className="card cards">
                            {/* <img src={imgs} className="card-img-top" alt="chefs" /> */}
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705229784927.webp`} className="card-img-top" alt="chefs" />
                            <div className="card-body">
                                <h5 className="card-title">Jamie Oliver</h5>
                                <p className="card-text">
                                    Jamie Oliver is a renowned chef, author, and advocate for healthier eating worldwide with passion.
                                </p>
                                <Link to="/jamie"  className="btn">View</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div className="card cards">
                            {/* <img src={imgs} className="card-img-top" alt="chefs"/> */}
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705229852932.webp`} className="card-img-top" alt="chefs"/>
                            <div className="card-body">
                                <h5 className="card-title">Gordon Ramsay</h5>
                                <p className="card-text">
                                    Gordon Ramsay, renowned chef and TV personality, elevates culinary excellence worldwide with innovation.
                                </p>
                                <Link to="/gordon"  className="btn">View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br/><br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <div className="card cards">
                            {/* <img src={imgs} className="card-img-top" alt="chefs" /> */}
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705229924818.webp`} className="card-img-top" alt="chefs" />
                            <div className="card-body">
                                <h5 className="card-title">Pooja Dhingra</h5>
                                <p className="card-text">
                                    Pooja Dhingra, renowned chef and TV personality, elevates culinary excellence worldwide with innovation.
                                </p>
                                <Link to="/pooja"  className="btn">View</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div className="card cards">
                            {/* <img src={imgs} className="card-img-top" alt="chefs" /> */}
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705230015954.avif`} className="card-img-top" alt="chefs" />
                            <div className="card-body">
                                <h5 className="card-title">Ranveer Brar</h5>
                                <p className="card-text">
                                    Ranveer Brar Michelin-star chef, cookbook author, and humanitarian with passion and innovation.
                                </p>
                                <Link to="/ranveer"  className="btn">View</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div className="card cards">
                            {/* <img src={imgs} className="card-img-top" alt="chefs" /> */}
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705230110160.jpg`} className="card-img-top" alt="chefs" />
                            <div className="card-body">
                                <h5 className="card-title">Yannick Alleno</h5>
                                <p className="card-text">
                                    Yannick Alleno, an iconic chef, revolutionized Indian cooking with passion and innovation.
                                </p>
                                <Link to="/yannick"  className="btn">View</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div className="card cards">
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705230208761.webp`} className="card-img-top" alt="chefs" />
                            <div className="card-body">
                                <h5 className="card-title">Clare Smyth</h5>
                                <p className="card-text">
                                    Clare Smyth, a exceptional cook with very vast knowledge of taste and traditional cooking.
                                </p>
                                <Link to="/clare"  className="btn">View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>   
    )
}
export default Chefs