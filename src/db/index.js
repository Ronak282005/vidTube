import { connect } from "mongoose";
import { config } from "../utils/config.js";

const connectDb = async () => {
    try {
        const connection = await connect(configDotenv.DB_URL)
        console.log("connected to db",connection.connection.host);
    } catch (error) {
        console.log(error);
    }
}

export default connectDb