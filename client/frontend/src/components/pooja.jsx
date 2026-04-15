import React from "react";
import { Link } from 'react-router-dom';
import './styles/chefs.css';
import './styles/detailings.css';
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
// import imgs from "../images/food.webp";

function Pooja() {
    return (
        <div>
            <Navbar/>

            <br/>

            <div className="container">
                <br/><br /><br />
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="pooja" className="img-fluid" /> */}
                        <img src={`${process.env.REACT_APP_API_URL}/details/file_1705229924818.webp`} alt="pooja" className="img-fluid" />
                    </div>
                    <div className="col-lg-8">
                        <h2>Pooja Dhingra</h2>
                        <p>
                            Pooja Dhingra is a celebrated pastry chef and entrepreneur known for her
                            contribution to the world of baking and desserts in India. She is the
                            founder of Le15 Patisserie, a popular chain of patisseries in India.
                            Pooja is credited with revolutionizing the dessert scene in the country.
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
                            Pooja Dhingra's culinary expertise revolves around baking and creating
                            delightful desserts. She has a particular fondness for:
                        </p>

                        <br/>

                        <ol>
                            
                            <li>
                                <b>Macarons: </b>  Pooja is renowned for her macarons,
                                known for their perfect texture and a wide range of flavors.
                            </li>

                            <br/>

                            <li>
                                <b>Cupcakes: </b> Cupcakes are another specialty of
                                Pooja's patisseries, offered in various flavors and designs.
                            </li>

                            <br/>

                            <li>
                                <b>Classic Desserts: </b> She excels at creating classic
                                desserts like tarts, éclairs, and more, often with a unique twist.
                            </li>

                        </ol>

                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )
}
export default Pooja