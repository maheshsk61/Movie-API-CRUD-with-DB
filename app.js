import connectDB from './DB/db.js'
import movieRoutes from './routes/movies.route.js'
import express from 'express'
const app = express()
const port = 2000
//calling the db
connectDB()
app.use(express.json())
app.use("/movies", movieRoutes)
app.listen(port, () => {
    `server running on port ${port}`
})