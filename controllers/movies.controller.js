import movieModel from "../models/movie.model.js"
let id = 0
export const movieCreate = async (req, res) => {
    const newMovie = new movieModel({
        id: ++id,
        name: req.body.name
    })
    try {
        const create = await newMovie.save()
        res.status(200).json(create)
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}
export const movieRead = async (req, res) => {
    try {
        const movies = await movieModel.find()
        res.json(movies)
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}
export const movieUpdate = async (req, res) => {
    try {
        // Find the movie by ID
        const foundMovie = await movieModel.findById(req.params.id)
        if (!foundMovie) {
            res.status(404).json({ message: "Movie not found" })
        }
        // Update the movie with new data from req.body
        // Assuming req.body contains the fields to be updated
        const updatedMovie = await movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        // req.params.id,  The ID from the URL
        // req.body,  The data to update the movie with
        // { new: true }  Return the updated document
        // Send back the updated movie data
        res.json(updatedMovie);
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}
export const movieDelete = async (req, res) => {
    try {
        const foundMovie = await movieModel.findById(req.params.id)
        if (foundMovie) {
            const deletedMovie = await movie.findByIdAndDelete(req.params.id)
            res.json(deletedMovie)
        }
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}