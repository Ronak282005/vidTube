import { connect } from "mongoose";
import { config } from "../utils/config.js";

const connectDb = async () => {
    try {
        const connection = await connect(config.DB_URL)
        console.log("connected to db");
    } catch (error) {
        console.log(error);
    }
}

export default connectDb