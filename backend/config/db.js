import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

// Conectar no banco de dados mongodb
export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Deu certo ao conectar com o banco!");
  } catch (error) {
    console.log("Não deu certo ao conectar com o banco!", error);
  }
};
