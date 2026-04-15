import React from "react";
import Navbar from "./navbar";
import './styles/cuisines.css';
import './styles/detailings.css';
import Footer from "./footer.jsx";
// import imgs from '../images/food.webp';

function Chinese() {
    return (
        <div>
            <Navbar/>

            <br/><br /><br />
            <h1 className="text-center heading">CHINESE</h1>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="chinese" className="img-fluid"/> */}
                        <img src={`${process.env.REACT_APP_API_URL}/details/file_1705228392089.jpg`} alt="chinese" className="img-fluid"/>
                    </div>
                    <div className="col-lg-8">
                        <h2>Kungpao Chicken</h2>
                        <p>
                            Kung Pao Chicken, also known as "Gong Bao Ji Ding" in Chinese, is a beloved classic in Sichuan cuisine.
                            This dish is renowned for its bold flavors, combining the perfect balance of spicy, sweet, and savory
                            elements. Kung Pao Chicken is known for its succulent chicken pieces, roasted peanuts, and a tantalizing
                            sauce that makes it a favorite in Chinese restaurants around the world.
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
                        <li>1 pound boneless, skinless chicken breasts or thighs, cut into bite-sized pieces.</li>
                        <li>1/2 cup roasted unsalted peanuts.</li>
                        <li>2 tablespoons vegetable oil.</li>
                        <li>2-3 dried red chilies (adjust according to your spice preference).</li>
                        <li>1/2 red bell pepper, cut into small cubes.</li>
                        <li>1/2 green bell pepper, cut into small cubes.</li>
                        <li>3-4 cloves of garlic, minced.</li>
                        <li>1-inch piece of fresh ginger, minced.</li>
                        <li>2 green onions, chopped.</li>
                    </ol>

                    <br/>
                    <h5 className="heading">Marination:</h5>
                    <br/>

                    <ol>
                        <li>1 tablespoon soy sauce.</li>
                        <li>1 teaspoon cornstarch.</li>
                        <li>1 teaspoon vegetable oil.</li>
                    </ol>

                    <br/>
                    <h5 className="heading">Sauce Preparation:</h5>
                    <br/>

                    <ol>
                        <li>2 tablespoons soy sauce.</li>
                        <li>1 tablespoon black vinegar (or rice vinegar).</li>
                        <li>1 tablespoon hoisin sauce.</li>
                        <li>1 teaspoon sugar.</li>
                        <li>1/2 teaspoon cornstarch.</li>
                        <li>Salt and pepper to taste.</li>
                    </ol>

                    <br/>
                    <h5 className="heading">Instructions:</h5>
                    <br/>

                    <ol>
                        <li>
                            Start by marinating the chicken. In a bowl, combine the chicken pieces with the soy sauce, cornstarch
                            and vegetable oil. Mix well and let it sit for about 15-20 minutes.
                        </li>
                        <li>
                            While the chicken is marinating, prepare the sauce. In another bowl, mix together the soy sauce, black vinegar, 
                            hoisin sauce, sugar and cornstarch. Set it aside.
                        </li>
                        <li>
                            Heat the vegetable oil in a wok or a large, deep skillet over medium-high heat. Once the oil is hot, add 
                            the dried red chilies, minced garlic, and ginger. Stir-fry for about 30 seconds or until they become fragrant.
                        </li>
                        <li>
                            Add the marinated chicken to the wok. Stir-fry until the chicken turns white and is almost cooked through. 
                            This should take about 5-7 minutes.
                        </li>
                        <li>
                            Add the red and green bell pepper cubes to the wok and continue to stir-fry for another 2-3 minutes
                            until the peppers begin to soften.
                        </li>
                        <li>
                            Now, pour the sauce you prepared earlier over the chicken and vegetables. Stir well to coat everything evenly. 
                            Allow the sauce to thicken, which should take another 2-3 minutes.
                        </li>
                        <li>
                            Toss in the roasted peanuts and green onions, and give it a final stir.
                        </li>
                        <li>
                            Taste the dish and adjust the salt and spice level according to your preferences.
                            If you want it spicier, you can add more dried red chilies or a dash of chili sauce.
                        </li>
                        <li>
                            Serve your delicious Kung Pao Chicken over steamed rice and garnish with additional green onions or crushed peanuts.
                        </li>
                    </ol>
                </p>
            </div>

            <br/>

            <div className="container">
                <div class="videoStyle">
                    <iframe 
                    src="https://www.youtube.com/embed/YT8oN4U7Vm8" className="video"
                    frameborder="0" allowFullScreen width="50%" height="315"></iframe>
                </div>
            </div>

            <Footer/>


        </div>
    )
}
export default Chinese