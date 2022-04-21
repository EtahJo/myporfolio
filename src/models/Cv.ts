import {Schema,model} from "mongoose";

const cvSchema = new Schema({
    statement:String,
    createdAt:String,
    profile:{
        type:Schema.Types.ObjectId,
        ref:"profile"
    },
    education:{
        type:Schema.Types.ObjectId,
        ref:"education"
    },
    experiences:{
        type:Schema.Types.ObjectId,
        ref:"experience"
    },
    projects:{
        type:Schema.Types.ObjectId,
        ref:"project"
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"user"
    }
})

export default model('cv',cvSchema);