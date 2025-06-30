import {app} from "./app"
import {PORT} from "./utils/config"

const PORT = PORT || 8080

app.listen(PORT,()=>{
    console.log(`listening on the port ${PORT}`);
})