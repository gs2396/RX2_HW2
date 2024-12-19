import { useDispatch } from "react-redux"
import { useState } from "react"

const LibraryManagementForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [isbn, setIsbn] = useState("")

  const addBookHandler = () => {
    if(title && author && isbn) {
        dispatch({type: "ADD_BOOK", payload: {title, author, isbn}})
        dispatch({type: "CALCULATE_BOOK"})
    }

  }

    return(
        <>
        <h1>Library Management</h1>

        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
        <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} value={author}/>
        <input type="text" placeholder="ISBN" onChange={(e) => setIsbn(e.target.value)} value={isbn}/>
        <button onClick={addBookHandler}>Add Book</button>
        </>
    )

}
export default LibraryManagementForm;