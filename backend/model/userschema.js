// const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const userschema = new mongoose.Schema({
//    name: {
//        type:String,
//        required:true
//    },
//    phone: {
//        type: Number,
//        required:true
//    },
//    work: {
//        type:String,
//        required:true
//    },
//    email: {
//        type:String,
//        required:true
//    },
//    password: {
//        type:String,
//        required:true
//    },
//    cpassword: {
//        type:String,
//        required:true
//    },
//    tokens: [
//        {
//            token: {
//                type: String,
//                required:true
//            }
//        }
//    ]
// })

// // we are hasing the password

// userschema.pre('save', async function (next){
//    console.log("hi from inside")
//  if(this.isModified('password')){

//   this.password = await bcrypt.hash(this.password, 12);
//   this.cpassword = await bcrypt.hash(this.cpassword, 12);
//  }
//  next();
// }); 

// // we are generating token
// userschema.methods.generateAuthToken = async function(){
//    try{
    
//     if (!this._id || !this.tokens) {
//         throw new Error("User ID or tokens array is missing.");
//       }
  
//       let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY || "");
  
//       // Ensure that this.tokens is an array before using concat
//       if (!Array.isArray(this.tokens)) {
//         this.tokens = [];
//       }
  
//       this.tokens = this.tokens.concat({ token: token });
  
//       await this.save();
//       return token;
//     } catch (err) {
//       console.log(err); 
// }}


// const User = mongoose.model('USER', userschema);

// module.exports = User;

// // let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY || "");
// //        this.tokens = this.tokens.concat({ token: token });
// //        await this.save();
// //        return token;
// //    }   catch (err){
// //    console.log(err);


const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

userschema.pre('save', async function (next) {
    console.log("hi from inside");
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});


userschema.methods.generateAuthToken = async function () {
    try {
        if (!this._id || !this.tokens) {
            throw new Error("User ID or tokens array is missing.");
        }

        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY || "");

        // Ensure that this.tokens is an array before using concat
        if (!Array.isArray(this.tokens)) {
            this.tokens = [];
        }
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
};

const User = mongoose.model('PUSER', userschema);
module.exports = User;
