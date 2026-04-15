import React from "react";
import Navbar from "./navbar.jsx";
import './styles/cuisines.css';
import './styles/detailings.css';
import Footer from "./footer.jsx";
// import imgs from '../images/food.webp';

function French(){
    return(
        <div>
            <Navbar/>

            <br/><br /><br />
            <h1 className="text-center heading">FRENCH</h1>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <img src={imgs} alt="french" className="img-fluid"/> */}
                        <img src={`${process.env.REACT_APP_API_URL}/details/file_1705229159833.webp`} alt="french" className="img-fluid"/>
                    </div>
                    <div className="col-lg-8">
                        <h2>Crème Brûlée</h2>
                        <p>
                            Crème brûlée is a classic French dessert. It features a rich custard base topped with a contrasting
                            layer of hard caramel. 
                            The dessert is traditionally served in a small, shallow ramekin. 
                            Enjoy the creamy custard with a satisfyingly sweet and crunchy caramelized topping.
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
                        <li>Preheat your oven to 300°F (150°C). Place six ramekins in a deep baking pan.</li>
                        <li>In a saucepan, heat the heavy cream until it's hot but not boiling. Remove from heat and add the vanilla extract.</li>
                        <li>In a separate bowl, whisk together the egg yolks and 1/2 cup of sugar until well combined.</li>
                        <li>Gradually add the hot cream to the egg yolk mixture, stirring continuously.</li>
                        <li>Strain the custard mixture to ensure it's smooth and free from any curdled bits.</li>
                        <li>Pour the custard into the ramekins.</li>
                        <li>Fill the baking pan with boiling water until it reaches halfway up the sides of the ramekins. This creates a water bath for gentle, even cooking.</li>
                        <li>Bake in the preheated oven for about 40-45 minutes or until the custard is set but still slightly jiggly in the center.</li>
                        <li>Remove the ramekins from the water bath and let them cool to room temperature.</li>
                        <li>Refrigerate the custards for at least 2 hours or overnight.</li>
                        <li>When ready to serve, sprinkle a thin and even layer of granulated sugar over the custard.</li>
                        <li>Caramelize the sugar using a kitchen torch until it's golden and crunchy.</li>
                        <li>Allow the caramel to cool and harden, then serve your homemade crème brûlée.</li>
                    </ol>
                </p>
            </div>

            <br/>

            <div className="container">
                <div class="videoStyle">
                    <iframe 
                    src="https://www.youtube.com/embed/3vib5idIADs?si=E3J_a55U8fQYfj4S" className="video"
                    frameborder="0" allowFullScreen width="50%" height="315"></iframe>
                </div>
            </div>

            <Footer/>

        </div>
    )
}
export default French