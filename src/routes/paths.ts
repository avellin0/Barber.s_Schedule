import express from "express"
import { url } from "./in_routes/routes"

const app = express()

app.use(express.json())
app.use(url)

app.listen(3333, () => {
    console.log("Entrou");
})