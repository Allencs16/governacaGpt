import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDatabase(){
  mongoose.connect(process.env.MONGO_URL);

  return mongoose.connection;
}

export default connectDatabase;
