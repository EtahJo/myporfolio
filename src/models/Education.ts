import {Schema,model} from "mongoose";


const eduSchema= new Schema({
    institution:String,
    duration:String,
    certificate:String,
    major:String,
});

export default model('education',eduSchema);