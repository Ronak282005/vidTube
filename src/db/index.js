import { connect } from "mongoose";
import { config } from "../utils/config";

const connectDb = async () => {
    try {
        const connection = await connect(config.DB_URL)
        console.log("connected to db");
    } catch (error) {
        console.log(error);
    }
}

export default connectDb