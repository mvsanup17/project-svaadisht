import React from "react";
import { Link } from 'react-router-dom';
import './styles/cuisines.css';
import './styles/detailings.css';
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
// import imgs from "../images/food.webp";


function Cuisines() {
    return(
        <div>
            <Navbar/>
            
            <br/><br /><br /><br />
            <h1 className="text-center cuisines">CUISINES</h1>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <div className="card cards">
                            {/* <img src={imgs} className="card-img-top" alt="cusinines" /> */}
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705227477411.webp`} className="card-img-top" alt="cusinines" />
                            <div className="card-body">
                                <h5 className="card-title">Indian</h5>
                                <p className="card-text">
                                    Indian food is a diverse and rich culinary tradition that reflects the culture, history, and geography.
                                </p>
                                <Link to="/indian" className="btn">Cook</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div className="card cards">
                            {/* <img src={imgs} className="card-img-top" alt="cusinines" /> */}
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705227576621.webp`} className="card-img-top" alt="cusinines" />
                            <div className="card-body">
                                <h5 className="card-title">Chinese</h5>
                                <p className="card-text">
                                    Chinese cuisine encompasses a wide array of flavors, techniques, and regional specialties.
                                </p>
                                <Link to="/chinese"  className="btn">Cook</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div className="card cards">
                            {/* <img src={imgs} className="card-img-top" alt="cusinines" /> */}
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705227675913.jpg`} className="card-img-top" alt="cusinines" />
                            <div className="card-body">
                                <h5 className="card-title">Mexican</h5>
                                <p className="card-text">
                                    Mexican cuisine delights with its bold and spicy flavors, from savory tacos to zesty salsas.
                                </p>
                                <Link to="/mexican"  className="btn">Cook</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div className="card cards">
                            {/* <img src={imgs} className="card-img-top" alt="cusinines" /> */}
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705227760374.jpg`} className="card-img-top" alt="cusinines" />
                            <div className="card-body">
                                <h5 className="card-title">Italian</h5>
                                <p className="card-text">
                                    Italian cuisine enchants with its pasta, pizza, and gelato, a symphony of flavors from North to South.
                                </p>
                                <Link to="/italian"  className="btn">Cook</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br/><br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <div className="card cards">
                            {/* <img src={imgs} className="card-img-top" alt="cusinines" /> */}
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705227862968.webp`} className="card-img-top" alt="cusinines" />
                            <div className="card-body">
                                <h5 className="card-title">American</h5>
                                <p className="card-text">
                                    American cuisine is a diverse medley of regional tastes, from Southern barbecue to classic.
                                </p>
                                <Link to="/american"  className="btn">Cook</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div className="card cards">
                            {/* <img src={imgs} className="card-img-top" alt="cusinines" /> */}
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705227931136.jpg`} className="card-img-top" alt="cusinines" />
                            <div className="card-body">
                                <h5 className="card-title">French</h5>
                                <p className="card-text">
                                    French cuisine is renowned for its culinary artistry, blending exquisite flavors gastronomic masterpieces.
                                </p>
                                <Link to="/french"  className="btn">Cook</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div className="card cards">
                            {/* <img src={imgs} className="card-img-top" alt="cusinines" /> */}
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705228013528.jpg`} className="card-img-top" alt="cusinines" />
                            <div className="card-body">
                                <h5 className="card-title">Spanish</h5>
                                <p className="card-text">
                                    Spanish food is a vibrant tapestry of flavors, from paella's saffron-infused rice blending exquisite flavors.
                                </p>
                                <Link to="/spanish"  className="btn">Cook</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div className="card cards">
                            {/* <img src={imgs} className="card-img-top" alt="cusinines" /> */}
                            <img src={`${process.env.REACT_APP_API_URL}/details/file_1705228188626.jpg`} className="card-img-top" alt="cusinines" />
                            <div className="card-body">
                                <h5 className="card-title">Japanese</h5>
                                <p className="card-text">
                                    Japanese cuisine is a harmonious blend of art and flavor, from delicate sushi to sizzling teppanyaki.
                                </p>
                                <Link to="/japanese"  className="btn">Cook</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>    
    )
}
export default Cuisines