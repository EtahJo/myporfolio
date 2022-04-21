import {Schema,model} from "mongoose";


const profileSchema= new Schema({
    nationality:String,
    firstName:String,
    middleName:String,
    lastName:String,
    birthday:String,
    age:Number,
    gender:String,
    status:String,
    number:Number,
    email:String
});

export default model('profile',profileSchema);