import { model, Schema } from "mongoose";
//creating schema
const schema = new Schema({
    id: Number,
    name: String
})
//creating model
const movie = model("Movie", schema)
export default movie
