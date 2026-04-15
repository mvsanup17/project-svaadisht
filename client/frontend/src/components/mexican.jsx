import React from "react";
import Navbar from "./navbar.jsx";
import './styles/cuisines.css';
import './styles/detailings.css';
import Footer from "./footer.jsx";
// import imgs from '../images/food.webp';

function Mexican() {
    return(
        <div>
            <Navbar/>

            <br/><br /><br />
            <h1 className="text-center heading">MEXICAN</h1>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="mexican" className="img-fluid"/> */}
                        <img src={`${process.env.REACT_APP_API_URL}/details/file_1705228560588.jpg`} alt="mexican" className="img-fluid"/>
                    </div>
                    <div className="col-lg-8">
                        <h2>Tacos</h2>
                        <p>
                            Tacos are a delicious and iconic Mexican street food. They consist of a variety of fillings, such as seasoned meats, beans,
                            cheese, and fresh toppings, all wrapped in a soft corn or flour tortilla. Tacos are not only popular in Mexico but have gained 
                            international fame due to their versatility and mouthwatering flavors.
                            There are countless variations of tacos, with each region of Mexico offering its unique twist.
                            Some popular taco fillings include carne asada (grilled beef), al pastor (marinated pork), and fish tacos 
                            (typically made with grilled or fried fish). 
                            Toppings often include fresh salsa, guacamole, onions, cilantro, and lime.
                            Tacos are a true culinary delight, and part of their charm lies in their customizability. 
                            You can mix and match fillings and toppings to create your perfect taco. Whether enjoyed at a street vendor's cart,
                            a local taqueria, or homemade in your kitchen, tacos are a must-try dish for any food lover.
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
                        <li>1 small onion, chopped</li>
                        <li>2 cloves garlic, minced</li>
                        <li>1 packet taco seasoning mix (or use your homemade mix)</li>
                        <li>1/2 cup water</li>
                        <li>Salt and pepper to taste</li>
                    </ol>

                    <br/>
                    <h5 className="heading">Assembling:</h5>
                    <br/>

                    <ol>
                        <li>8 small soft corn or flour tortillas</li>
                        <li>1 cup shredded lettuce</li>
                        <li>1 cup diced tomatoes</li>
                        <li>1 cup shredded cheddar cheese</li>
                        <li>1/2 cup sour cream</li>
                        <li>Salsa, hot sauce, and guacamole (optional)</li>
                    </ol>

                    <br/>
                    <h5 className="heading">Instructions:</h5>
                    <br/>

                    <ol>
                        <li>In a large skillet, cook the chopped onions and minced garlic over medium heat until they become soft and translucent, which should take about 2-3 minutes.</li>
                        <li>Add the ground beef to the skillet and cook it, breaking it apart with a spatula as it browns. Cook until there's no pink left, and the beef is crumbled and slightly crispy. This usually takes around 5-7 minutes.</li>
                        <li>Drain any excess fat from the skillet.</li>
                        <li>Add the taco seasoning mix and water to the beef. Stir well to combine.</li>
                        <li>Allow the mixture to simmer and thicken for a few minutes until you have a well-seasoned beef filling. Taste and add salt and pepper if needed.</li>
                        <li>Warm your tortillas. You can do this by wrapping them in a damp paper towel and microwaving them for 15-20 seconds or by quickly heating them in a dry skillet.</li>
                        <li>Lay out your tortillas on a clean, flat surface.</li>
                        <li>In the center of each tortilla, place a portion of the beef filling.</li>
                        <li>Add your favorite toppings, such as shredded lettuce, diced tomatoes, shredded cheddar cheese, sour cream, salsa, hot sauce, and guacamole.</li>
                        <li>Fold the sides of the tortilla over the filling, and then fold up the bottom to create your taco.</li>
                    </ol>
                    
                    <br/>
                    Enjoy your homemade beef tacos with your choice of toppings! Feel free to get creative with your taco fillings and customize them to your preferences. 
                    You can also explore vegetarian or vegan options by using ingredients like black beans, refried beans, grilled veggies, or plant-based meat substitutes.
                </p>
            </div>

            <br/>

            <div className="container">
                <div class="videoStyle">
                    <iframe 
                    src="https://www.youtube.com/embed/pvSL_VsLb4w?si=3hIX9V05D4EBFZBm" className="video"
                    frameborder="0" allowFullScreen width="50%" height="315"></iframe>
                </div>
            </div>

            <Footer/>
            
        </div>
    )
}
export default Mexican 