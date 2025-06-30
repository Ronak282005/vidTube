import { connect } from "mongoose";
import { config } from "../utils/config";

connect(config.DB_URL, () => {
  console.log("connected to");
});
