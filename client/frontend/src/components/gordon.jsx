import React from "react";
import { Link } from 'react-router-dom';
import './styles/chefs.css';
import './styles/detailings.css';
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
// import imgs from "../images/food.webp";

function Gordon(){
    return (
        <div>
            <Navbar/>

            <br/>

            <div className="container">
                <br/><br /><br />
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="gordon" className="img-fluid" /> */}
                        <img src={`${process.env.REACT_APP_API_URL}/details/file_1705230614735.jpg`} alt="gordon" className="img-fluid" />
                    </div>
                    <div className="col-lg-8">
                        <h2>Gordon Ramsay</h2>
                        <p>
                            Gordon Ramsay is a world-renowned British chef, restaurateur, and television personality. 
                            Known for his culinary expertise and fiery persona, he has made a significant impact on the culinary world.
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
                            Gordon Ramsay's culinary preferences are diverse, and as a chef of international acclaim, 
                            he appreciates a wide range of foods. 
                            While he doesn't have a single favorite, some of the cuisines and dishes he enjoys include:
                        </p>

                        <br/>

                        <ol>
                            
                            <li>
                                <b>Beef Wellington: </b>  This classic British dish, consisting of beef fillet wrapped in puff pastry,
                                holds a special place in Ramsay's heart. He's famous for his Beef Wellington recipe.
                            </li>

                            <br/>

                            <li>
                                <b>Scallops: </b> Ramsay is known for his love of perfectly seared scallops.
                                He often emphasizes the importance of cooking them to perfection.
                            </li>

                            <br/>

                            <li>
                                <b>Italian Cuisine: </b> He enjoys Italian food, particularly pasta dishes and risotto. 
                                He appreciates the simplicity and quality of Italian cooking.
                            </li>

                        </ol>

                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )
}
export default Gordon