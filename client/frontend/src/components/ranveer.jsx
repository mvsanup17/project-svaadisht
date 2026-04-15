import React from "react";
import { Link } from 'react-router-dom';
import './styles/chefs.css';
import './styles/detailings.css';
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
// import imgs from "../images/food.webp";

function Ranveer() {
    return (
        <div>
            <Navbar/>

            <br/>

            <div className="container">
                <br/><br /><br />
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="ranveer" className="img-fluid" /> */}
                        <img src={`${process.env.REACT_APP_API_URL}/details/file_1705230710170.jpg`} alt="ranveer" className="img-fluid" />
                    </div>
                    <div className="col-lg-8">
                        <h2>Ranveer Brar</h2>
                        <p>
                            Ranveer Brar is a renowned Indian chef known for his culinary
                            expertise and contributions to the world of Indian cuisine.
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
                            Ranveer Brar's culinary expertise extends to a wide range of Indian
                            dishes, with a special emphasis on:
                        </p>

                        <br/>

                        <ol>
                            
                            <li>
                                <b>Regional Indian Cuisine: </b> He is known for
                                showcasing the diverse regional cuisines of India, including
                                dishes from North, South, East, and West India.
                            </li>

                            <br/>

                            <li>
                                <b>Fusion Cooking: </b> Ranveer enjoys creating fusion
                                dishes that combine traditional Indian flavors with a modern twist.
                            </li>

                            <br/>

                            <li>
                                <b>Culinary Innovation: </b>  He constantly explores new
                                ingredients and techniques to push the boundaries of Indian cuisine.
                            </li>

                        </ol>

                    </div>
                </div>
            </div>

           <Footer/>

        </div>
    )
}
export default Ranveer