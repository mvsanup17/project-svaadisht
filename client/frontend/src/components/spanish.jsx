import React from "react";
import Navbar from "./navbar.jsx";
import './styles/cuisines.css';
import './styles/detailings.css';
import Footer from "./footer.jsx";
// import imgs from '../images/food.webp';

function Spanish(){
    return(
        <div>
            <Navbar/>
            
            <br/><br /><br />
            <h1 className="text-center heading">SPANISH</h1>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="spanish" className="img-fluid"/> */}
                        <img src={`${process.env.REACT_APP_API_URL}/details/file_1705229266205.jpg`} alt="spanish" className="img-fluid"/>
                    </div>
                    <div className="col-lg-8">
                        <h2>Paella</h2>
                        <p>
                            Paella is a renowned Spanish dish originating from Valencia. It's a flavorful and colorful rice dish traditionally cooked in a wide, 
                            shallow pan. The dish is known for its distinct saffron-infused rice and a variety of ingredients such as seafood, chicken, rabbit and vegetables. 
                            Paella is a symbol of Spanish cuisine and is often cooked during festivals and gatherings.
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
                        <li>Start by heating olive oil in a paella pan.</li>
                        <li>Add diced onions, garlic, and bell peppers, and cook until softened.</li>
                        <li>Stir in Arborio or Valencia rice and sauté until the rice is well-coated with the oil.</li>
                        <li>Infuse the dish with saffron threads and paprika for that characteristic flavor and color.</li>
                        <li>Add chicken or seafood, such as prawns and mussels, and cook until they turn pink and opaque.</li>
                        <li>Pour in hot chicken or fish stock and simmer until the rice is cooked and the liquid is absorbed.</li>
                        <li>Create the socarrat, a crispy crust at the bottom, by increasing the heat during the last few minutes of cooking.</li>
                        <li>Garnish with lemon wedges and fresh herbs.</li>
                        <li>Serve your homemade paella directly from the pan, family-style, and enjoy the Spanish flavors.</li>
                    </ol>
                </p>
            </div>

            <br/>

            <div className="container">
                <div class="videoStyle">
                    <iframe 
                    src="https://www.youtube.com/embed/8LS7MnQjjjg?si=CYHUeKEr-DPwArZB" className="video"
                    frameborder="0" allowFullScreen width="50%" height="315"></iframe>
                </div>
            </div>

            <Footer/>

        </div>
    )
}
export default Spanish