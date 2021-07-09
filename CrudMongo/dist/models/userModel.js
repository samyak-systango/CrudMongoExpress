"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userData = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var schema = mongoose_1.default.Schema;
exports.userData = new schema({
    email: {
        desc: "The user's email address.",
        type: String,
        unique: true,
        required: true,
    },
    password: {
        desc: "user password",
        type: String,
        required: true,
    },
    name: {
        desc: "The user's name.",
        type: String,
        required: true,
    },
    age: {
        desc: "The users's age.",
        type: Number,
    },
    gender: {
        desc: "user's gender.",
        type: String,
        enum: ["Male", "Female", "Others"],
        default: "Others",
        required: true,
    },
});
