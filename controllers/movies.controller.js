// const movies = []
import movie from "../models/movie.model.js"
let id = 0
export const movieCreate = async (req, res) => {
    const newMovie = new movie({
        id: ++id,
        name: req.body.name
    })
    try {
        const create = await newMovie.save()
        res.status(200).json(create)
    }
    catch (e) {
        res.status(400).json({ message: e.message })
    }
    // let newMovie = { id: ++id, name: req.body.name }
    // movies.push(newMovie)
    // console.log(newMovie);
    // res.send(`New movie added --> ${JSON.stringify(newMovie)}`)
}
export const movieRead = async (req, res) => {
    try {
        const movies = await movie.find()
        res.json(movies)
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
    // console.log(movies);
    // res.send(`Movies added are --> ${JSON.stringify(movies)}`)
}
export const movieUpdate = async (req, res) => {
    try {
        // Find the movie by ID
        const foundMovie = await movie.findById(req.params.id)
        if (!foundMovie) {
            res.json({ message: "Movie not found" })
        }
        // Update the movie with new data from req.body
        // Assuming req.body contains the fields to be updated
        const updatedMovie = await movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
        // req.params.id,  The ID from the URL
        // req.body,  The data to update the movie with
        // { new: true }  Return the updated document
        // Send back the updated movie data
        res.json(updatedMovie);
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
    // const { id } = req.params
    // const movieIndex = movies.findIndex((movie) => {
    //     return movie.id === parseInt(id)
    // })
    // if (movieIndex === -1) {
    //     res.send("Movie not found")
    // }
    // else {
    //     movies[movieIndex] = {
    //         id: parseInt(id),
    //         name: req.body.name
    //     }
    // }
    // res.send(`Updated a movie -->${JSON.stringify(movies[movieIndex])}`)
}
export const movieDelete = async (req, res) => {
    try {
        const foundMovie = await movie.findById(req.params.id)
        if (foundMovie) {
            const deletedMovie = await movie.findByIdAndDelete(req.params.id)
            res.json(deletedMovie)
        }
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
    // const { id } = req.params
    // const movieIndex = movies.findIndex((movie) => {
    //     return movie.id === parseInt(id)
    // })
    // if (movieIndex !== -1) {
    //     const temp = movies[movieIndex]
    //     movies.splice(movieIndex, 1)
    //     res.send(`Deleted a movie ${JSON.stringify(temp)}`)
    // }
    // else {
    //     res.send("Movie not found")
    // }
}