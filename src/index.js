import {app} from "./app.js"
import connectDb from "./db/index.js"
import { config } from "./utils/config.js"


const PORT = config.PORT || 8080

connectDb()
    .then(()=> {
        app.listen(PORT,()=>{
            console.log(`listening on the port ${PORT}`);
        })
    })
    .catch(()=>{
        console.log("failed to connect db");
    })
    