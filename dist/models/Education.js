"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var eduSchema = new mongoose_1.Schema({
    institution: String,
    duration: String,
    certificate: String,
    major: String,
    username: String,
    createdAt: String
});
exports.default = (0, mongoose_1.model)('education', eduSchema);
