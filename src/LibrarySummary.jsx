import { useSelector, useDispatch } from "react-redux";

const LibrarySummary = () => {
    const books = useSelector((state)=> state.books)
    const bookCount = useSelector((state)=> state.totalBooks)
    const dispatch = useDispatch()

    const bookRemoveHandler = (isbn) => {
        dispatch({type: "REMOVE_BOOK", payload: isbn})
        dispatch({type: "CALCULATE_BOOK"})
    }
    
    return(
        <>
        <h2>Library Summary</h2>
        <p>Total Books: {bookCount}</p>
        <ul>
            {books.map(book => (
                <li key={book.isbn}>
                    {book.title} by {book.author} (ISBN: {book.isbn}) <button onClick={()=>bookRemoveHandler(book.isbn)}>Remove</button>
                    </li>
            ))}
        </ul>

        
        </>
    )

}
export default LibrarySummary;