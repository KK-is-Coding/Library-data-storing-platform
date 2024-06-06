import mongoose from "mongoose"

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publishYear: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }
);

export const Book = mongoose.model('Book', bookSchema)