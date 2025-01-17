import { model, Schema } from "mongoose";
//creating schema
const movieSchema = new Schema({
    id: {
        type:Number,
        required:true,
        unique:true
    },
    name: {
        type:String,
        required:true,
        unique:true
    }
})
//creating model
//const variablename=model("TableName",schemaName)
const movieModel = model("Movie", movieSchema)
export default movieModel
