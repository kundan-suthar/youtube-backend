import "dotenv/config"
import connectDB from "./db/index.js";
import { app } from "./app.js";

let port = process.env.PORT || 8000

connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log("got error on ", err);
        })
        app.listen(port, () => {
            console.log(`server is running at port ${port}`);
        })
    })
    .catch((err) => {
        console.log("mongo db connection failed!!! : ", err);

    })