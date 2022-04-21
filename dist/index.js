"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("./config"));
var typeDefs_1 = __importDefault(require("./graphql/typeDefs"));
var resolvers = require("./graphql/resolvers");
var server = new apollo_server_1.ApolloServer({
    typeDefs: typeDefs_1.default,
    resolvers: resolvers,
    context: function (_a) {
        var req = _a.req;
        return ({ req: req });
    }
});
mongoose_1.default.connect(config_1.default.database);
mongoose_1.default.connection.once("open", function () {
    console.log("DB Connected");
});
server.listen({ port: config_1.default.port }).then(function (res) {
    console.log("server is running at ".concat(res.url));
});
