import mongoose from 'mongoose'

// const uri = `mongodb+srv://harshsareen03:IUXxg8Lqtivl323K@perfumeshop.x7pjaaa.mongodb.net/perfume`;

const connectDB = async () => {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log("Connected to MongoDB");
        // Your code here
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
      });
  };
  

export default connectDB