import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("conect to mongoDB");
  } catch (error) {
    console.log("there is erroer:", error);
  }
};

export default connectToMongoDB;
