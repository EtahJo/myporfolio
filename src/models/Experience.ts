import {Schema,model} from "mongoose";


const expSchema= new Schema({
    duration:String,
    organisation:String,
    responsibility:String,
    role:String,
});

export default model('experience',expSchema);