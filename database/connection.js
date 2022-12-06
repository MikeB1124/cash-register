import mongoose from 'mongoose';

const URI = "mongodb+srv://Mike:cciQ6jfqxjt6Yo7C@cluster0.du0vf.mongodb.net/pos-systemDB?retryWrites=true&w=majority";

async function main(){
    await mongoose.connect(URI)
    console.log("databse connect")
}

export default main