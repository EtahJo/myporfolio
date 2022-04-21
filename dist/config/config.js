"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var convict_1 = __importDefault(require("convict"));
var conf = (0, convict_1.default)({
    config: {
        port: { format: "port", default: 6003, env: "PORT" },
        database: {
            format: "String",
            default: "mongodb+srv://Etah:fEEXIWzrS3AYfBjA@cluster0.nwtdl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            env: "MONGODB"
        },
    }
});
conf.validate({ allowed: "strict" });
exports.default = conf;
