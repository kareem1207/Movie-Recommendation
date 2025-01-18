import mongoose from "mongoose";
let initialized = false;
export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "popcornpicks",
      useNewUrlPrase: true,
      useUnifiedTopology: true,
    });
    initialized = true;
  } catch (error) {
    console.error(error);
  }
};
