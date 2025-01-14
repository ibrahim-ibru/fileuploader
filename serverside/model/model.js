import mongoose from "mongoose";

const fileSchema=new mongoose.Schema({
    profile:{type:String,require:true}
})

export default mongoose.model.fileuploader||mongoose.model("fileuploader",fileSchema)