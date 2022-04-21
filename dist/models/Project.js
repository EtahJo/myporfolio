"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var projectSchema = new mongoose_1.Schema({
    name: String,
    language: String,
    username: String,
    description: String,
    link: String,
    image: String,
    createdAt: String
});
exports.default = (0, mongoose_1.model)('project', projectSchema);
