const initialState = {
    books: [], totalBooks: 0
}

const libraryReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_BOOK":
        return {...state, books: [...state.books, action.payload]}
        
        case "REMOVE_BOOK":
            const updatedBook = state.books.filter(book => book.isbn !== action.payload)
        return {...state, books: updatedBook}    
        
        case "CALCULATE_BOOK":
        return {...state, totalBooks: state.books.length}    
        
        default:
         return state   
    }

}
export default libraryReducer;