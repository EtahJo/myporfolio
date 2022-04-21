import {ApolloServer} from "apollo-server";
import mongoose from "mongoose";
import config from "./config";
import typeDefs from "./graphql/typeDefs";



const resolvers = require("./graphql/resolvers");
const server = new ApolloServer({
 typeDefs,
 resolvers,
 context:({req})=>({req})

});

mongoose.connect(config.database);
mongoose.connection.once("open",()=>{
    console.log("DB Connected")
});

server.listen({port:config.port}).then(
    res=>{
        console.log(`server is running at ${res.url}`)
    }

);