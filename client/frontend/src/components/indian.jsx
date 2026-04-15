import React from "react";
import Navbar from "./navbar.jsx";
import './styles/cuisines.css';
import './styles/detailings.css';
import Footer from "./footer.jsx";
// import imgs from '../images/food.webp';

function Indian() {
    return(
        <div>
            <Navbar/>
            
            <br/><br /><br />
            <h1 className="text-center heading">INDIAN</h1>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="indian" className="img-fluid"/> */}
                        <img src={`${process.env.REACT_APP_API_URL}/details/file_1705228288285.jpg`} alt="indian" className="img-fluid"/>
                    </div>
                    <div className="col-lg-8">
                        <h2>Biryani</h2>
                        <p>
                            Biryani is a beloved South Asian dish known for its aromatic spices, fragrant rice, and tender meat or vegetables.
                            It's a wholesome, one-pot meal that has many regional variations, each with its unique flavors and cooking techniques.
                            Biryani is not just food; it's an experience, a celebration of flavors, and a dish that has stood the test of time.
                            Over time, biryani became a symbol of celebration, an expression of love, and a connection to the rich culinary heritage of the land. 
                            It was no longer just a dish; it was a testament to the magic that could be woven in the kitchen.
                            The tale of Parvati's biryani reminds us that food is more than sustenance; it's a journey of taste and tradition.
                            It has the power to transcend generations, unite people, and create memories that linger like the aroma of a well-cooked biryani.
                        </p>
                    </div>
                </div>

                <br/><br/>

                <div className="col-lg-12">
                    <br/>
                    <h2>Procedure</h2>
                    <br/>
                    <p>
                        While there are many variations, here's a general method to prepare a simple Chicken Biryani:
                        <br/><br/>
                        <h5>Ingredients:</h5>
                        <br/>

                        <ol>
                            <li>2 cups of basmati rice</li>
                            <li>500g chicken pieces (or any meat or vegetables of your choice)</li>
                            <li>2 onions, thinly sliced</li>
                            <li>2 tomatoes, chopped</li>
                            <li>1/2 cup plain yogurt</li>
                            <li>2 tablespoons ginger-garlic paste</li>
                            <li>Biryani spice mix (or create your own blend with cumin, coriander, cardamom, and more)</li>
                            <li>Saffron strands (soaked in warm milk)</li>
                            <li>Ghee (clarified butter) or cooking oil</li>
                            <li>Fresh coriander and mint leaves</li>
                            <li>Salt to taste</li>
                        </ol>

                        <br/>
                        <h5>Instructions:</h5>
                        <br/>

                        <ol>
                            <li>Marinate the Meat (or Vegetables): Mix the meat or vegetables with yogurt, ginger-garlic paste, and a portion of your biryani spice mix. Allow it to marinate for at least 30 minutes.</li>
                            <li>Prepare the Rice: Wash the rice and soak it for 30 minutes. Cook it until it's about 70% done. Drain and set aside.</li>
                            <li>Fry Onions: Heat ghee or oil in a large, heavy-bottomed pan. Add the sliced onions and fry until they're golden brown and crispy. Remove some for garnish.</li>
                            <li>Layer the Biryani: In the same pan, add the marinated meat or vegetables. Cook for a few minutes until the meat changes color. Then, layer it with partially cooked rice. Sprinkle saffron milk, fried onions, and fresh mint and coriander leaves between the layers.</li>
                            <li>Dum Cooking: Cover the pan with a tight-fitting lid or seal it with dough to trap the steam. Cook on low heat (dum) for 20-25 minutes. This allows the flavors to meld.</li>
                            <li>Serve: Once done, gently fluff the biryani with a fork, mixing the layers. Serve hot with raita (yogurt sauce) or a cooling salad.</li>
                        </ol>

                        <p>
                            Biryani is more than just a dish, it's a culinary journey filled with rich flavors and heritage. 
                            Experiment with different types and enjoy this iconic South Asian dish!
                        </p>
                    </p>
                </div>
            </div>

            <br/>

            <div className="container">
                <div class="videoStyle">
                    <iframe 
                    src="https://www.youtube.com/embed/95BCU1n268w" className="video"
                    frameborder="0" allowFullScreen width="50%" height="315"></iframe>
                </div>
            </div>

            <Footer/>

        </div>
    )
}
export default Indian