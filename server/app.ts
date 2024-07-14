import { AppDataSource } from "./data-source"
import  express from "express"
import { plusRouter } from "./routes/plus"
import { totalRouter } from "./routes/total"
import { minusRouter } from "./routes/minus"
import { categoryRouter } from "./routes/categories"
import  dotenv  from "dotenv"
dotenv.config()

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")

}).catch(error => console.log(error))

const app = express();

app.use(express.json())

app.use('/plus', plusRouter)
app.use('/total', totalRouter)
app.use('/minus', minusRouter)
app.use('/category', categoryRouter)

app.listen(process.env.PORT_KEY)    