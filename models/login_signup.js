const mongoose= require("mongoose")
const Schema =  mongoose.Schema;

const SignUpschema=new Schema({

    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    confirm_pass:{
        type:String,
        required: true
    }

}, {timestamps:true});

// const collection= mongoose.model("login_signup",SignUpschema)
// module.exports= collection;

const UserModel = mongoose.model("login_signup", SignUpschema); // Create the model
module.exports = UserModel; // Export the model
