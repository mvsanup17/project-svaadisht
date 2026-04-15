import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer.jsx";
import logo from "../images/1.png";
import video from "../images/video.mp4";
import axios from "axios";

// Toast (simple Bootstrap alert)
const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="alert alert-info position-fixed bottom-0 end-0 m-3">
      {message}
    </div>
  );
};

// Review Form
const ReviewForm = () => {
  const [form, setForm] = useState({ name: "", email: "", comments: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/addsubmit`,
        form
      );

      setToast(res.data.msg);
      setForm({ name: "", email: "", comments: "" });
    } catch (err) {
      const msg =
        err.response?.data?.msg || "Something went wrong";
      setToast(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Review</label>
          <textarea
            name="comments"
            rows={5}
            className="form-control"
            value={form.comments}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </>
  );
};

// About Page
function About() {
  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <h1 className="text-center mb-4">About Svaadisht</h1>

        {/* Story Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2>Our Story</h2>
            <p>
              Svaadisht is your gateway to the world of culinary delights.
              We are passionate about food and sharing different cuisines.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <img src={logo} alt="logo" className="img-fluid" />
          </div>
        </div>

        {/* Review + Video Section */}
        <div className="row">
          {/* Review Form */}
          <div className="col-md-6 mb-4">
            <h2>Leave a Review</h2>
            <ReviewForm />
          </div>

          {/* Video */}
          <div className="col-md-6">
            <h2>Watch Our Story</h2>
            <div className="ratio ratio-16x9">
              <video autoPlay loop muted controls>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;