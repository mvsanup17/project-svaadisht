import React from "react";
import { Link } from 'react-router-dom';
import './styles/chefs.css';
import './styles/detailings.css';
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
// import imgs from "../images/food.webp";

function Vikas() {
    return (
        <div>
            <Navbar/>

            <br/>

            <div className="container">
                <br/><br /><br />
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="vikas" className="img-fluid" /> */}
                        <img src={`${process.env.REACT_APP_API_URL}/details/file_1705230396757.jpg`} alt="vikas" className="img-fluid" />
                    </div>
                    <div className="col-lg-8">
                        <h2>Vikas Khanna</h2>
                        <p>
                            Vikas Khanna is a celebrated Indian chef, restaurateur, cookbook author, and humanitarian. 
                            He has made significant contributions to the culinary world and is known for his innovative 
                            cooking style and commitment to social causes.
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
                            Vikas Khanna has a passion for Indian cuisine and a deep respect for its cultural significance. 
                            He enjoys experimenting with traditional Indian dishes and infusing them with a contemporary twist. 
                            While he doesn't have a single favorite food, some of his favorite culinary experiences include:
                        </p>

                        <br/>

                        <ol>
                            
                            <li>
                                <b>Biryani: </b> Vikas Khanna appreciates the complexity and rich flavors of biryani, 
                                a classic Indian dish made with fragrant basmati rice, aromatic spices, and a choice of proteins.
                            </li>

                            <br/>

                            <li>
                                <b>Fusion Cuisine: </b> Vikas Khanna is known for his innovative approach to Indian cuisine.
                                He enjoys creating fusion dishes that combine Indian flavors with global culinary influences.
                            </li>

                            <br/>

                            <li>
                                <b>Indian Sweets: </b> Like many with a sweet tooth, Khanna has an appreciation for Indian sweets, 
                                including classics like gulab jamun and jalebi.
                            </li>

                        </ol>

                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )
}
export default Vikas