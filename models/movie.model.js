import { model, Schema } from "mongoose";
//creating schema
const movieSchema = new Schema({
    id: Number,
    name: {
        type:String,
        required:true,
        unique:true
    }
})
//creating model
const movieModel = model("Movie", movieSchema)
export default movieModel
