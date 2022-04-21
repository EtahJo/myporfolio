import {Schema,model} from "mongoose";

const projectSchema= new Schema({
    name:String,
    languages:String,
    description:String,
    link:String,
    image:String,
    createdAt:String
});

export default model('project',projectSchema);