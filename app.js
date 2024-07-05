import connectDB from './DB/db.js'
import movieRoutes from './routes/movies.route.js'
import express from 'express'
const app = express()
const port = 2000
//calling the db
connectDB()
//middlewares
app.use(express.json())
app.use("/movies", movieRoutes)
//listen
app.listen(port, () => {
    `server running on port ${port}`
})