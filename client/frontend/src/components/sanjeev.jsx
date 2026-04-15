import React from "react";
import { Link } from 'react-router-dom';
import './styles/chefs.css';
import './styles/detailings.css';
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
// import imgs from "../images/food.webp";

function Sanjeev() {
    return (
        <div>
            <Navbar/>

            <br/>

            <div className="container">
                <br/><br /><br />
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="sanjeev" className="img-fluid" /> */}
                        <img src={`${process.env.REACT_APP_API_URL}/details/file_1705230291346.avif`} alt="sanjeev" className="img-fluid" />
                    </div>
                    <div className="col-lg-8">
                        <h2>Sanjeev Kapoor</h2>
                        <p>
                            Sanjeev Kapoor is a renowned Indian chef and culinary expert. He is often considered one of the most
                            famous and influential chefs in India. Kapoor is known for his culinary skills, innovative cooking
                            techniques, and his contribution to popularizing Indian cuisine both in India and internationally.
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
                            Sanjeev Kapoor, a renowned Indian chef and television personality, 
                            has expressed his love for a wide variety of foods over the years. While there isn't a single 
                            "favorite" food associated with him, he has shared his appreciation for different dishes and ingredients.
                            Some of the foods he enjoys and the reasons behind his preferences include:
                        </p>

                        <br/>

                        <ol>
                            
                            <li>
                                <b>Butter Chicken: </b> Sanjeev Kapoor has a special fondness for Butter Chicken, 
                                a classic Indian dish known for its rich and creamy tomato-based sauce. He appreciates the balance of flavors
                                in this dish, which combines tender chicken with a velvety sauce.
                            </li>

                            <br/>

                            <li>
                                <b>Aloo Paratha: </b> Aloo Paratha is a traditional Indian stuffed bread, often filled with spiced potatoes. 
                                Kapoor has mentioned that this dish reminds him of home-cooked meals and the comfort of Indian cuisine.
                            </li>

                            <br/>

                            <li>
                                <b>Tandoori Chicken: </b>  Tandoori Chicken is another Indian favorite for Sanjeev Kapoor.
                                The smoky and charred flavors from the tandoor (clay oven) appeal to his taste buds.
                            </li>

                        </ol>

                    </div>
                </div>
            </div>

           <Footer/>

        </div>
    )
}
export default Sanjeev