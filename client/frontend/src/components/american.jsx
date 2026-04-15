import React from "react";
import Navbar from "./navbar";
import './styles/cuisines.css';
import './styles/detailings.css';
import Footer from "./footer.jsx";
// import imgs from '../images/food.webp';

function American(){
    return(
        <div>
            <Navbar/>

            <br/><br /><br />
            <h1 className="text-center heading">AMERICAN</h1>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="american" className="img-fluid"/> */}
                        <img src={`${process.env.REACT_APP_API_URL}/details/file_1705229080353.jpeg`} alt="american" className="img-fluid"/>
                    </div>
                    <div className="col-lg-8">
                        <h2>Burger</h2>
                        <p>
                            A burger is an American classic and a symbol of comfort food. 
                            It consists of a ground meat patty, typically beef, that is seasoned, cooked, and placed inside a sliced bun.
                            Burgers are incredibly versatile, and you can customize them with various toppings like lettuce, tomatoes,
                            onions, cheese, and condiments.
                            Whether you like your burger plain and simple or loaded with toppings, 
                            it's a beloved dish that's easy to prepare at home or enjoy at a restaurant. 
                            The combination of juicy meat, fresh toppings, and a soft bun is simply irresistible.
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
                        <li>1 pound (450g) ground beef (80% lean, 20% fat is recommended for juicy burgers)</li>
                        <li>Salt and pepper, to taste</li>
                        <li>4 hamburger buns</li>
                        <li>Toppings of your choice (lettuce, tomato, onion, cheese, pickles, ketchup, mayonnaise, mustard, etc.)</li>
                        <li>Cooking oil (vegetable oil or canola oil) for grilling</li>
                    </ol>

                    <br/>
                    <h5>Instructions:</h5>
                    <br/>

                    <ol>
                        <li>
                            If you're using a grill, preheat it to medium-high heat.
                            If you don't have a grill, you can use a stovetop skillet or griddle, preheated over medium-high heat.
                        </li>
                        <li>
                            Divide the ground beef into 4 equal portions (for 4 burgers).
                            Shape each portion into a patty, about 1 inch (2.5 cm) thick.
                            Season each patty generously with salt and pepper on both sides.
                        </li>
                        <li>
                            Place the burger patties on the grill or in the hot skillet.
                            Cook for about 3-4 minutes on each side for medium-rare burgers, or longer if you prefer them more well-done. 
                            If you like your burgers with cheese, add a slice of cheese on top during the last minute of grilling.
                        </li>
                        <li>
                            While the burgers are cooking, cut the hamburger buns in half.
                            Lightly toast the inside of the buns on the grill or in the skillet for a minute or two until they're lightly browned.
                        </li>
                        <li>
                            Place a burger patty on the bottom half of each bun.
                            Add your choice of toppings. Popular options include lettuce, tomato slices, onion,
                            pickles, and condiments like ketchup, mayonnaise, and mustard.
                            Top with the other half of the bun.
                        </li>
                        <li>
                            Serve your delicious homemade burgers while they're still hot and enjoy!
                        </li>
                    </ol>
                </p>

            </div>

            <br/>

            <div className="container">
                <div class="videoStyle">
                    <iframe 
                    src="https://www.youtube.com/embed/BIG1h2vG-Qg?si=1VNPP_PQnTP8xGxa" className="video"
                    frameborder="0" allowFullScreen width="50%" height="315"></iframe>
                </div>
            </div>

            <Footer/>
            
        </div>
    )
}
export default American