import { model, Schema } from "mongoose";
//creating schema
const schema = new Schema({
    id: Number,
    name: {
        type:String,
        required:true,
        unique:true
    }
})
//creating model
const movie = model("Movie", schema)
export default movie
