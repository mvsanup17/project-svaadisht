import mongoose from "mongoose";

const Schema = mongoose.Schema;

let UploadData = new Schema(
    {
        image:String
    }
)

export default mongoose.model("Details", UploadData)