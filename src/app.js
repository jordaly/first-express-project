import express from "express"
import {dirname, join} from "path"
import { fileURLToPath } from "url"
import routes from "./routes/urls.js"


const __port = 3000
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

app.set("view engine", "pug")
app.set("views", join(__dirname, "templates") )
app.use(routes)




app.listen(__port)

console.log(`App is listening on port: ${__port}`);

