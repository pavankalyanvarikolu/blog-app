import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://pavanvarikolu:pavankalyan@cluster0.c2y7a.mongodb.net/blog-app');
    console.log("DB Connected");
}