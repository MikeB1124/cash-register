import mongoose from 'mongoose';

const URI = "mongodb+srv://Mike:cciQ6jfqxjt6Yo7C@cluster0.du0vf.mongodb.net/trimanaDB?retryWrites=true&w=majority";

async function connectMongo(){
    await mongoose.connect(URI)
    console.log("Connected to trimanaDB")
}

export default connectMongo