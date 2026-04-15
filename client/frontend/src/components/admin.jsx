import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import './styles/detailings.css';


function Admin() {
    return(
        <div>
            <Navbar/>
            <br/><br/>

            <center>
                <h2 className="heading">Admin related Details</h2>
            </center>

            <br/><br/>

            <div className="container">
                <p>
                    Svaadisht is your gateway to the world of culinary delights. We are passionate about food, cooking,
                    and sharing the joy of exploring different flavors and cuisines. 
                    Our mission is to bring the art of cooking to your home and inspire you to create delicious meals. 
                </p>

                <br/><br/>

                <div className="row">

                    <div className="col-lg-6">
                        <center>
                            <h2 className="heading">Uploads</h2>
                            <p>
                                Upload files the dynamically which requires for the sites.
                            </p>
                            <br/><br/>
                            <Link to='/upload'>
                                <button className="btn">Upload files</button>
                            </Link>
                        </center>
                    </div>
                    <div className="col-lg-6">
                        <center>
                            <h2 className="heading">Reviews</h2>
                            <br/>

                            <p>
                                Reviews are very cruical for anything. So for Svaadisht it requires the reviews of the viewers
                                which helps us in future modifications for webpage.
                            </p>

                            <br/> <br/>

                            <Link to='/views'>
                                <button className="btn">Reviews</button>
                            </Link>
                        </center>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Admin