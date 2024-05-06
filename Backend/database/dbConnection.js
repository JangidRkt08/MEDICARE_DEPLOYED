import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "MEDICARE",
    });
    console.log(`MongoDB Connected!`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
