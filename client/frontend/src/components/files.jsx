import React from "react";
import './styles/detailings.css';
import Navbar from "./navbar";
import { useState,useEffect } from "react";
import axios from "axios";

function UploadItems() {

    const [file,setFiles] = useState()
    const [images,setImages] = useState()

    const uploadFiles = (e) =>{
        const formdata = new FormData()
        formdata.append('file',file)
        axios.post(`${process.env.REACT_APP_API_URL}/uploaddata`,formdata)
        .then(res => alert(res.data.msg))
        window.location.reload()
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/getimage`)
        .then(res => setImages(res.data[0].images))
        .catch(err => console.log(err))
    },[])


    return(
        <div>
            <Navbar/>
            <br/><br /><br />
            <center>
                <h2 className="heading">Upload the files</h2>
                <br/><br/>
                <input type="file"  onChange={(e) => setFiles(e.target.files[0])} />
                <br/><br/><br/>
                <button onClick={uploadFiles} className="btn" >Upload</button>
            </center>
        </div>
    )
}
export default UploadItems