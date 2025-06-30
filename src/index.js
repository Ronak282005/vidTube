import {app} from "./app.js"
import {config} from "./utils/config.js"

const PORT = config.PORT || 8080

app.listen(PORT,()=>{
    console.log(`listening on the port ${PORT}`);
})