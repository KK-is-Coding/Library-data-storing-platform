import React from 'react'
import { BiUserCircle } from "react-icons/bi"
import { PiBookOpenTextLight } from "react-icons/pi"
import { AiOutlineClose } from "react-icons/ai"


const BookModel = ({ book, onClose }) => {
    return (
        <div
            className="fixed flex justify-center items-center bg-black bg-opacity-60 top-0 bottom-0 left-0 right-0 z-50"
            onClick={onClose}
        >
            <div
                className='w-[600px] bg-white max-w-full h-[400px] rounded-xl p-4 flex flex-col relative'
                onClick={(event) => event.stopPropagation()}
            >
                <AiOutlineClose
                    className='top-6 text-3xl right-6 text-red-600 absolute cursor-pointer'
                    onClick={onClose}
                />
                <h2 className='w-fit px-4 py-1 rounded-lg bg-red-300'>
                    {book.publishYear}
                </h2>
                <h4 className='text-gray-500 my-2'>{book._id}</h4>
                <div className='flex items-center justify-start gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-2xl text-red-300' />
                    <h2 className='my-1'>{book.author}</h2>
                </div>
                <p className='mt-4'>Something about the Book</p>
                <p className='my-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
                    voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
                    necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
                    nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
                    dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
                    vitae voluptate sequi repellat!
                </p>
            </div>
        </div>
    )
}

export default BookModel