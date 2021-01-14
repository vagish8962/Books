import React from 'react';
import Book from './Book';

const Books = ( { books } ) =>  
    {   
        const getbooks = books.map(book => <Book key = {book.id}  book = {book} />);
        const style = {
            marginLeft: '10px'
        }
        return(
            <div>
                <h4 style={style}>All Books</h4>
                <section className="row">
                    {getbooks}
                </section>
            </div>
        )
    };

export default Books;