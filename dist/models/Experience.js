"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var expSchema = new mongoose_1.Schema({
    duration: String,
    organisation: String,
    responsibility: String,
    role: String,
});
exports.default = (0, mongoose_1.model)('experience', expSchema);
