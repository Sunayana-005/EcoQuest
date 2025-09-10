import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import ejs from "ejs"

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use("/public", express.static("public"))
app.set("views", "./public/pages");
app.set('view engine', 'html');
app.engine('html', ejs.renderFile)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
import connectDB from "./config/dbConnection.js"
connectDB()


/* ROUTES IMPORT */
import clientRouter from "./routes/client.route.js"

/* ROUTES DECLARATION */
// app.use('/api', apiRouter);
app.use('/', clientRouter);

export default app;