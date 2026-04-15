import React from "react";
import Navbar from "./navbar.jsx";
import './styles/cuisines.css';
import './styles/detailings.css';
import Footer from "./footer.jsx";
// import imgs from '../images/food.webp';

function Japanese() {
    return(
        <div>
            <Navbar/>
            
            <br/><br /><br />
            <h1 className="text-center heading">JAPANESE</h1>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="japenese" className="img-fluid"/> */}
                        <img src={`${process.env.REACT_APP_API_URL}/details/file_1705229361391.avif`} alt="japanese" className="img-fluid"/>
                    </div>
                    <div className="col-lg-8">
                        <h2>Sushi Rolls</h2>
                        <p>
                            Sushi is a beloved Japanese dish known for its fresh and delicate flavors. It typically consists of vinegared rice,
                            various ingredients like seafood, vegetables, and occasionally tropical fruits, all rolled up in a sheet of seaweed called nori. 
                            Sushi is often served with pickled ginger, soy sauce, and wasabi.
                        </p>
                    </div>
                </div>
            </div>

            <br/><br/>

            <div className="container">
                <br/>
                <h2 className="heading">Procedure</h2>
                <br/>

                <p>
                    <h5 className="heading">Instructions:</h5>
                    <br/>

                    <ol>
                        <li>Start by preparing sushi rice by mixing cooked rice with rice vinegar, sugar, and salt.</li>
                        <li>Place a sheet of plastic wrap on a bamboo sushi rolling mat.</li>
                        <li>Put a sheet of nori on the plastic wrap and wet your fingers to spread a thin layer of sushi rice over the nori, leaving a small border at the top.</li>
                        <li>Add your choice of ingredients, such as thin strips of fresh fish, avocado, and cucumber, on the rice.</li>
                        <li>Roll the sushi using the bamboo mat, applying gentle pressure as you roll to create a compact roll.</li>
                        <li>Use a sharp knife to slice the roll into bite-sized pieces.</li>
                        <li>Serve your sushi rolls with soy sauce, pickled ginger, and wasabi for a delightful Japanese dining experience.</li>
                    </ol>
                </p>
            </div>

            <br/>

            <div className="container">
                <div class="videoStyle">
                    <iframe 
                    src="https://www.youtube.com/embed/joweUxpHaqc?si=6wju6dD6j6jiAqvi" className="video"
                    frameborder="0" allowFullScreen width="50%" height="315"></iframe>
                </div>
            </div>

            <Footer/>
            
        </div>
    )
}
export default Japanese