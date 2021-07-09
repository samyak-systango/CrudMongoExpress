
import mongoose from "mongoose";
const schema = mongoose.Schema;



export const userData = new schema({
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
        enum:["Male","Female","Others"],
        default: "Others",
        required: true,
    },
}
);

