import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./navbar.jsx";
import './styles/home.css';
import './styles/detailings.css';
import rbur from '../images/rbur.png';
import food from '../images/eat.webp';
import pancake from '../images/pancake.webp';
import veg from '../images/vegies.jpg';
import chicken from '../images/chikki.jpg';
import sweet from '../images/cremy.jpg';
import burger from '../images/cb.jpg';
import Footer from './footer.jsx';


function Home() {
    return(
        <div>
            <Navbar/>
            <div className="container-fluid box">
                <div className="row mt-3">
                    <div className="col-lg-6">
                        <h1>Let's Explore about Food</h1>
                        <Link to="/cuisines">
                            <button className="enterBtn">Explore</button>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <img src={rbur} alt="food" className="img-fluid rotate"/>
                    </div>
                </div>
            </div>

            <br/><br/>

            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center heading">Origin of Food</h1>

                    <br/><br/><br/>

                    <div className="col-lg-8">
                        <p>
                            Food has been a central part of human life for centuries. It's not just a source of nourishment 
                            but also a cultural and social experience. The art of cooking and the variety of dishes available 
                            around the world are a testament to our creativity and culinary traditions. 
                        </p>

                        <br/>

                        <p>
                            From traditional family recipes passed down through generations to modern fusion cuisine, 
                            food is an ever-evolving story. It connects people, transcends borders, and evokes powerful emotions.
                        </p>

                        <br/>

                        <p>
                            Join us on a culinary journey to explore the world of flavors, ingredients, and techniques. 
                            Whether you're an aspiring chef or a food enthusiast, there's always something new to discover in the world of food.
                            Food is sourced, processed and sold in different ways.
                            Our food has to be grown, reared or caught. The food is then processed in different ways. 
                            Finally, the food is sold to the public through a range of different methods, such as farm shops/markets, supermarkets,
                            butchers/delicatessens, online retailers, restaurants and cafes. Some people grow food at home or at allotments.
                            People should be able to identify the different ways in which a range of food is sourced, processed and sold.
                        </p>

                    </div>
                    <div className="col-lg-4">
                        <div className="card cardDesign">
                            <img src={food} className="card-img-top" alt="Delicious Food" />
                            <div className="card-body">
                                <p className="card-text">Description of the image</p>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>

                <div className="col-lg-12">
                    <h2 class="text-center heading">Discover New Tastes</h2>
                    <p>
                        Food is more than just sustenance, it's a journey, an adventure, a cultural expression, 
                        and a universal language. The greatness of food lies in its ability to connect people, evoke memories, 
                        and transport us to distant lands through taste and aroma.
                        From the sizzle of street food stalls in bustling markets to the elegance of fine dining, food offers an array of experiences. 
                        It's the heart of celebrations, the centerpiece of family gatherings, and the catalyst for friendships.
                        At Svaadisht, we celebrate the greatness of food by exploring cuisines, sharing recipes, and showcasing talented chefs. 
                        Join us on this culinary journey to discover the rich tapestry of flavors, ingredients, and cultures that make 
                        food an extraordinary and essential part of our lives.
                    </p>

                    <br/>

                    <h2 class="text-center heading">Food is Art</h2>
                    <p>
                        Not all arts are meant to be on a page; some are meant to be on your plates too. 
                        The concept of food as art has gained significant traction in recent years. 
                        Beyond its traditional role as sustenance, food has become a canvas for creativity, innovation,
                        and self-expression. This exploration delves into the fascinating world of food as art, 
                        where culinary professionals and enthusiasts alike push the boundaries of taste, presentation, and imagination.
                        Discuss the concept of molecular gastronomy, where science meets cuisine, leading to innovative dishes that challenge 
                        traditional norms.
                    </p>
                </div>                
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card cardDesign">
                            <img src={pancake} className="card-img-top" alt="Delicious Food" />
                            <div className="card-body">
                                <p className="card-text">Description of the image</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <b>Aesthetic Presentation: </b>

                        <br/><br/>

                        Food as Art - Not all arts are meant to be on the page, some are meant to be on your plates too. 
                        The concept of food as art has gained significant traction in recent years. Beyond its traditional role as sustenance, 
                        food has become a canvas for creativity, innovation, and self-expression. This exploration delves into the fascinating 
                        world of food as art, where culinary professionals and enthusiasts alike push the boundaries of taste, presentation, 
                        and imagination. In the realm of food as art, chefs experiment with ingredients, flavors, and textures to create unique 
                        dining experiences.

                        <br/><br/>

                        <b>
                            Visual appeal is a crucial element of food as art. Presentation techniques and plating styles can elevate a meal 
                            from nourishment to an aesthetic masterpiece. Explore how chefs use colors, textures, and arrangement to make dishes
                            visually stunning.
                        </b>

                        <br/><br/>

                        <b>Food Pairing and Fusion:</b>

                        <br/>

                        Chefs are experimenting with unusual food pairings and fusion cuisine, creating exciting and unexpected flavor combinations. 
                        Uncover how diverse culinary traditions are merging.

                        <br/>

                        <b>Food Artistry:</b>

                        <br/>

                        Culinary artists are taking food presentation to new heights, crafting intricate and visually stunning dishes. 
                        Explore the intersection of food and art.

                        <br/>

                        <b>Ancient Grains and Heritage Ingredients:</b>

                        Ancient grains like quinoa and heritage ingredients are making a comeback, adding diversity and nutritional value to our
                        diets. Delve into the revival of these traditional foods.

                        <br/>

                        Food is a universal language that transcends borders, cultures, and languages. It has the remarkable ability to bring 
                        people together, to showcase the diversity of our world, and to serve as a symbol of identity, tradition, and heritage. 
                        In our globalized society, acknowledging the famous foods of different countries is not just an act of gastronomic 
                        appreciation, it is a celebration of the rich tapestry of human civilization and the myriad ways in which food reflects 
                        our shared history and unique individual cultures. It's a way to honor the world's culinary diversity and understand the 
                        profound impact that food has on our lives, our cultures, and our shared human experience. These acknowledgments not only 
                        tantalize our taste buds but also serve as a gateway to understanding the stories, traditions, and passions of people
                        around the globe, uniting us in the joy of food.
                        <br/><br/>

                        <b>
                            Familiar and favorite dishes have the power to evoke deep emotions, connecting us to 
                            cherished memories and a sense of comfort. They provide solace during difficult times and a warm embrace from the past.
                        </b>

                        <br/>

                        Tasty food is often a cornerstone of cultural identity, carrying with it the traditions and heritage of a people. 
                        It serves as a living history book, preserving culinary traditions passed down through generations. Beyond pleasure, 
                        tasty food can contribute to our health and well-being. A well-balanced diet that includes a variety of delicious, 
                        nutritious foods can boost our immune systems and improve our overall quality of life.
                    </div>
                </div>
            </div>

            <br/><br/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <h2 className="text-center heading">Food is Treasure</h2>   
                        <p>
                            <b>Aesthetic Presentation:</b>

                            <br/><br/>
                        
                            Vegetables, often referred to as "veggies," are an indispensable part of our diet, known for their immense nutritional 
                            value and culinary versatility. These colorful and vibrant plant-based foods are a cornerstone of a healthy lifestyle, 
                            providing a rich source of essential vitamins, minerals, fiber, and antioxidants. From the crisp freshness of leafy greens
                            like spinach and kale to the comforting warmth of roasted root vegetables, the world of veggies offers an array of tastes, 
                            textures, and flavors.

                            <br/><br/>

                            <b>
                                Visual appeal is a crucial element of food as art. Presentation techniques and plating styles can elevate
                                a meal from nourishment to an aesthetic masterpiece. Explore how chefs use colors, textures, 
                                and arrangement to make dishes visually stunning.
                            </b>

                            <br/><br/>

                            <b>Food Pairing and Fusion:</b>
                            <br/>
                            Vegetables are not only celebrated for their health benefits but also for their role in adding depth and character 
                            to countless culinary creations. They serve as the canvas upon which skilled chefs and home cooks alike craft exquisite 
                            dishes, from garden-fresh salads to hearty stews and savory stir-fries. Whether you savor them raw, steamed, grilled, or
                            sautéed, veggies add a burst of natural goodness to our plates, enhancing both the visual appeal and taste of our meals.
                            <br/><br/>

                            <b>Food Artistry:</b>
                            <br/>
                            Culinary artists are taking food presentation to new heights, crafting intricate and visually stunning dishes. 
                            Explore the intersection of food and art.
                            <br/><br/>

                            <b>Ancient Grains and Heritage Ingredients:</b>
                            <br/>
                            Ancient grains like quinoa and heritage ingredients are making a comeback, adding diversity and nutritional
                            value to our diets. Delve into the revival of these traditional foods.
                            <br/><br/>

                            Food is a universal language that transcends borders, cultures, and languages. It has the remarkable ability to bring people
                            together, to showcase the diversity of our world, and to serve as a symbol of identity, tradition, and heritage. In our 
                            globalized society, acknowledging the famous foods of different countries is not just an act of gastronomic appreciation,
                            it is a celebration of the rich tapestry of human civilization and the myriad ways in which food reflects our shared
                            history and unique individual cultures. It's a way to honor the world's culinary diversity and understand the profound
                            impact that food has on our lives, our cultures, and our shared human experience. These acknowledgments not only tantalize 
                            our taste buds but also serve as a gateway to understanding the stories, traditions, and passions of people around the globe
                            , uniting us in the joy of food.
                            <br/><br/>

                            This diverse group of edibles includes classic favorites like carrots, broccoli, and bell peppers, as well as more 
                            exotic choices such as eggplants, artichokes, and okra. Embracing veggies not only contributes to a balanced diet but
                            also celebrates the diversity of nature's offerings. So, whether you're a dedicated vegetarian, a veggie enthusiast, 
                            or simply someone looking to incorporate more greens into your diet, the world of vegetables is a source of endless 
                            exploration, culinary inspiration, and vibrant, wholesome living.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <div className="card cardDesign">
                            <img src={veg} className="card-img-top" alt="Delicious Food" />
                            <div className="card-body">
                                <p className="card-text">Description of the image</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <h2 className="text-center">Delicious Creations</h2>
                    <br/>
                    <div className="col-lg-4">
                        <div className="card cardDesign">
                            <img src={chicken} className="card-img-top" alt="Delicious Chikki" />
                            <div className="card-body">
                                <p className="card-text">The spice that makes you smile</p>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-4">
                        <div className="card cardDesign">
                            <img src={sweet} className="card-img-top" alt="Delicious Cremy" />
                            <div className="card-body">
                                <p className="card-text">The sweet that attacks your eyes</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card cardDesign">
                            <img src={burger} className="card-img-top" alt="Delicious Veggies" />
                            <div className="card-body">
                                <p className="card-text">A fountain of tastes</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer/>

        </div>
    )
}
export default Home