"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var profileSchema = new mongoose_1.Schema({
    nationality: String,
    firstName: String,
    middleName: String,
    lastName: String,
    age: Number,
    gender: String,
    status: String,
    number: Number
});
exports.default = (0, mongoose_1.model)('profile', profileSchema);
