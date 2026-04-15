import React from "react";
import Navbar from "./navbar.jsx";
import './styles/cuisines.css';
import imgs from '../images/food.webp';
import Footer from "./footer.jsx";
// import './styles/detailings.css';

function Italian(){
    return(
        <div>
            <Navbar/>

            <br/><br /><br />
            <h1 className="text-center heading">ITALIAN</h1>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="italian" className="img-fluid"/> */}
                        <img src={`${process.env.REACT_APP_API_URL}/details/file_1705228905717.webp`} alt="italian" className="img-fluid"/>
                    </div>
                    <div className="col-lg-8">
                        <h2>Spaghetti and Meatballs</h2>
                        <p>
                            Meatballs and Spaghetti is a classic Italian-American dish that consists of three main components: meatballs, a tomato-based sauce, and spaghetti pasta. 
                            It's a beloved comfort food and a staple of Italian-American cuisine. Here's a breakdown of these components.
                            Meatballs and spaghetti is a beloved and comforting meal that's both flavorful and satisfying. 
                            It's enjoyed by people all around the world and has become a symbol of Italian-American cuisine. 
                            The recipe for meatballs and spaghetti can vary from family to family and from region to region, with each cook adding their unique touch to the dish.
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
                    <h5 className="heading">Ingredients:</h5>
                    <br/>

                    <ol>
                        <li>1 pound ground beef</li>
                        <li>1/2 pound ground pork</li>
                        <li>1/2 cup breadcrumbs</li>
                        <li>1/4 cup grated Parmesan cheese</li>
                        <li>1/4 cup chopped fresh parsley</li>
                        <li>1/4 cup milk</li>
                        <li>1/4 cup finely chopped onion</li>
                        <li>2 cloves garlic, minced</li>
                        <li>1 large egg</li>
                        <li>1 teaspoon salt</li>
                        <li>12 ounces spaghetti</li>
                        <li>1/2 teaspoon black pepper</li>
                    </ol>

                    <br/>
                    <h5 className="heading">Sauce Preparation:</h5>
                    <br/>

                    <ol>
                        <li>1 can (28 ounces) crushed tomatoes</li>
                        <li>1 can (14 ounces) diced tomatoes</li>
                        <li>1/4 cup tomato paste</li>
                        <li>2 cloves garlic, minced</li>
                        <li>1/4 cup chopped fresh basil</li>
                        <li>1/4 cup chopped fresh parsley</li>
                        <li>1 teaspoon sugar</li>
                        <li>Salt and black pepper to taste</li>
                    </ol>

                    <br/>
                    <h5 className="heading">Instructions:</h5>
                    <br/>

                    <ol>
                        <li>In a large mixing bowl, combine all the meatball ingredients ground beef, ground pork, breadcrumbs, Parmesan cheese, parsley, milk, onion, garlic, egg, salt, and black pepper. Mix until everything is well combined.</li>
                        <li>Shape the mixture into meatballs, about 1 to 1.5 inches in diameter. You can make them larger or smaller, depending on your preference.</li>
                        <li>In a large skillet, heat some olive oil over medium-high heat. Add the meatballs and cook until they are browned on all sides and cooked through. This should take about 10-15 minutes. Once cooked, transfer the meatballs to a plate.</li>
                        <li>In the same skillet, add a bit more olive oil if needed and sauté the minced garlic until fragrant, about 1 minute.</li>
                        <li>Add the crushed tomatoes, diced tomatoes, and tomato paste to the skillet. Stir to combine.</li>
                        <li>Season the sauce with chopped basil, chopped parsley, sugar, salt, and black pepper.</li>
                        <li>Return the cooked meatballs to the skillet and simmer everything together for about 15-20 minutes to allow the flavors to meld.</li>
                        <li>While the sauce is simmering, bring a large pot of salted water to a boil. Cook the spaghetti according to the package instructions until al dente. Drain the pasta.</li>
                        <li>Serve the meatballs and sauce over the cooked spaghetti.</li>
                    </ol>
                </p>
            </div>

            <br/>

            <div className="container">
                <div class="videoStyle">
                    <iframe 
                    src="https://www.youtube.com/embed/YNJYPv2t6-c?si=hNY1-XlVmO_dDwqs" className="video"
                    frameborder="0" allowFullScreen width="50%" height="315"></iframe>
                </div>
            </div>

            <Footer/>

        </div>
    )
}
export default Italian