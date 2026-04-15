import React, { useEffect, useState } from "react";
import Navbar from "./navbar.jsx";
import './styles/detailings.css';
import axios from "axios";
import Footer from "./footer.jsx";

function Views() {
    const [review, setReview] = useState([]);

    //  Fetch data
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/getrev`)
            .then((res) => {
                setReview(res.data.revdata);
                console.log(res.data.revdata); //  correct logging
            })
            .catch(err => console.log(err));
    }, []);

    //  Delete + update UI instantly
    const del = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/deleterev/` + id)
            .then(res => {
                console.log(res);
                alert("Data Deleted Successfully");

                //  Update UI without refresh
                setReview(prev => prev.filter(item => item._id !== id));
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div>
            <Navbar />
            <br /><br /><br /><br />

            <center>
                <h2 className="heading">Reviews and Views</h2>
                <br />

                <table border={2} align="center" className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>SNo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Comments</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {review.length > 0 ? (
                            review.map((rev, index) => (
                                <tr key={rev._id}>
                                    <td>{index + 1}</td>
                                    <td>{rev.name}</td>
                                    <td>{rev.email}</td>
                                    <td>{rev.comments}</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={() => del(rev._id)}
                                            className="button"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">Data loading...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </center>

            <Footer />
        </div>
    );
}

export default Views;