import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      console.log("already connected");
      return true;
    }

    await mongoose.connect(process.env.MONGO_URL);
    console.log("database is connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectToDB