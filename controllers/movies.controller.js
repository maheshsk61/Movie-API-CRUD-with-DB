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
        const movieId = req.params.id;//Assuming as a string
        // Find the movie by ID 
        const foundMovie = await movieModel.findOne({ id: movieId });
        if (!foundMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        // Update the movie with new data from req.body
        const updatedMovie = await movieModel.findOneAndUpdate({ id: movieId }, req.body, { new: true });
        //{ id: movieId } -> with the help of movieId
        //req.body -> updating the req.body
        //{ new: true } ->Returns the updated req.body
        res.json(updatedMovie);
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}
export const movieDelete = async (req, res) => {
    try {
        const movieId = req.params.id;
        const deletedMovie = await movieModel.findOneAndDelete({ id: movieId });
        if (!deletedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(deletedMovie);
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}