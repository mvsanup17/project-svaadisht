import React from "react";
// import { Link } from 'react-router-dom';
import './styles/chefs.css';
import './styles/detailings.css';
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
// import imgs from "../images/food.webp";

function Yannick() {
    return (
        <div>
            <Navbar/>

            <br/>

            <div className="container">
                <br/><br /><br />
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="yannick" className="img-fluid" /> */}
                        <img src={`${process.env.REACT_APP_API_URL}/details/file_1705230792704.jpeg`} alt="yannick" className="img-fluid" />
                    </div>
                    <div className="col-lg-8">
                        <h2>Yannick Alleno</h2>
                        <p>
                            Yannick Alléno is a world-renowned French chef with a passion for
                            pushing the boundaries of culinary art.
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
                                <b>Haute Cuisine: </b> His approach to cooking reflects
                                the elegance and refinement of French haute cuisine.
                            </li>

                            <br/>

                            <li>
                                <b>Seasonal Ingredients: </b> He prioritizes seasonal and
                                locally-sourced ingredients, ensuring the freshest flavors in his creations.
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
export default Yannick