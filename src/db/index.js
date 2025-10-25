import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstantce = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
        console.log(`mongoDB connected: DB HOST: ${connectionInstantce.connection.host}`);
        //console.dir(connectionInstantce.connection, { depth: null, colors: true });
    }
    catch (error) {
        console.log("failed to connect DB, ", error);
        process.exit(1)
    }
}


export default connectDB