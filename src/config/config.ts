import convict from "convict";

const conf = convict({
    config:{
        port:{format:"port", default:6003,env:"PORT"},
        database:{
            format:"String",
            default:"mongodb+srv://Etah:fEEXIWzrS3AYfBjA@cluster0.nwtdl.mongodb.net/myDatabase?retryWrites=true&w=majority",
            env:"MONGODB"
        },

    }
});
conf.validate({allowed:"strict"});
export default conf;