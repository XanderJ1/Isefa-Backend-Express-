import mongoose from 'mongoose'

const url = process.env.MONGO_URL;
export const mongoConnect = async () => {
     try{
        await mongoose.connect(url);
        console.log(`Database listening on ${url}`);
    }catch(err){
        console.log("Error during connection", err.message);       
    }
};

