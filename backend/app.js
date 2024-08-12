import express from "express";
import bannerRoute from "./routes/banner.js"
import { mySqlConnection } from "./config/db.js";
import cors from "cors";
import bodyParser from "body-parser";

//Variables
const PORT = 3000;


const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use("/api/v1/banner", bannerRoute);
app.get("/", (req, resp) => {
    resp.json({
        message: "Server Running......😴"
    })
})

mySqlConnection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Connected to mysql server ${mySqlConnection.threadId}`)
})

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`)
})
