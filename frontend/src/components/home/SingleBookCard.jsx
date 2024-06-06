import React from 'react'
import { Link } from "react-router-dom"
import { BsInfoCircle } from "react-icons/bs";
import { BiShow, BiUserCircle } from "react-icons/bi"
import { PiBookOpenTextLight } from "react-icons/pi"
import { AiOutlineEdit } from "react-icons/ai"
import { MdOutlineDelete } from "react-icons/md"
import { useState } from 'react';
import BookModel from './BookModel.jsx';

const SingleBookCard = ({ book }) => {
    const [showModel, setShowModel] = useState(false);

    return (
        <div className="border-2 rounded-lg bg-gray-100 border-gray-500 px-4 py-2 relative m-4 hover:shadow-xl">
            <h2 className="absolute top-1 right-2 py-1 px-4 rounded-lg bg-red-300">
                {book.publishYear}
            </h2>
            <h4 className="my-2 text-gray-500">{book._id}</h4>
            <div className="flex justify-start items-center gap-x-2">
                <PiBookOpenTextLight className='text-2xl text-red-300' />
                <h2 className="my-1">{book.title}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <BiUserCircle className='text-2xl text-red-300' />
                <h2 className="my-1">{book.author}</h2>
            </div>
            <div className="flex justify-between items-center mt-4 p-4 gap-x-2">
                <BiShow
                    onClick={() => setShowModel(true)}
                    className='text-3xl cursor-pointer text-blue-800 hover:text-black'
                />

                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                </Link>
                
            </div>

            {
                showModel && (
                    <BookModel book={book} onClose={() => setShowModel(false)} />
                )
            }
        </div>
    )
}

export default SingleBookCard