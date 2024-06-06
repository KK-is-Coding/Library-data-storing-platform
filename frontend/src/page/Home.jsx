import React, { useEffect, useState } from 'react'
import axios from "axios"
import Spinner from "../components/Spinner.jsx"
import { Link } from "react-router-dom"
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
import BooksCards from '../components/home/BooksCards.jsx';
import BooksTable from '../components/home/BooksTable.jsx';

const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  const [showType, setShowType] = useState('table')

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://library-data-storing-platform-api.vercel.app//books")
      .then((res) => {
        setBooks(res.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className='bg-sky-200 hover:bg-sky-400 px-4 rounded-lg py-1'
          onClick={() => { setShowType('table') }}
        >
          Table View
        </button>

        <button
          className='bg-sky-200 hover:bg-sky-400 px-4 rounded-lg py-1'
          onClick={() => { setShowType('card') }}
        >
          Card View
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? <Spinner /> :
        showType === 'table' ?
          (<BooksTable books={books} />) :
          (<BooksCards books={books} />)}
    </div>
  )
}

export default Home
