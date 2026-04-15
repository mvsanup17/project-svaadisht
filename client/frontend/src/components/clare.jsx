import React from "react";
import { Link } from 'react-router-dom';
import './styles/chefs.css';
import './styles/detailings.css';
import Navbar from "./navbar.jsx";
import imgs from "../images/food.webp";
import Footer from "./footer.jsx";

function Clare() {
    return (
        <div>
            <Navbar/>

            <br/>

            <div className="container">
                <br/><br /><br />
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="clare" className="img-fluid" /> */}
                        <img src={`${process.env.REACT_APP_API_URL}/details/file_1705227245190.jpg`} alt="clare" className="img-fluid" />
                    </div>
                    <div className="col-lg-8">
                        <h2>Clare Smyth</h2>
                        <p>
                            Clare Smyth is an accomplished chef known for her culinary
                            expertise and dedication to the art of fine dining. She has gained
                            recognition for several notable achievements.
                        </p>
                    </div>
                </div>
            </div>

            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <br/>
                        <h2 className="heading">Signature Dishes</h2>
                        <br/>
                        <p>
                            Yannick Alléno's culinary repertoire features an extensive range of
                            French cuisine, with a particular focus on:
                        </p>

                        <br/>

                        <ol>
                            
                            <li>
                                <b>British and French Fusion: </b>  She blends British
                                and French culinary traditions to create unique and exquisite dishes.
                            </li>

                            <br/>

                            <li>
                                <b>Seasonal and Locally-Sourced Ingredients: </b>  Clare
                                prioritizes seasonal and locally-sourced ingredients to deliver the freshest flavors.
                            </li>
                            
                            <br/>

                        </ol>

                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )
}
export default Clare