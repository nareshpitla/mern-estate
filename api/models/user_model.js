import { Timestamp } from "bson";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 20    
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
        maxlength: 100
    }
}, { timestamps: true} );

const User = mongoose.model('User', userSchema);

export default User; 