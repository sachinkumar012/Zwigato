import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://sachinyadav887780:Yadav909707@cluster0.mc2z8u5.mongodb.net/zwigato').then(()=>console.log("DB Connected"))
}



// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
//mongodb+srv://sachinyadav887780:Yadav909707@cluster0.mc2z8u5.mongodb.net/?
// 4000003560000008