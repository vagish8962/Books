import React from 'react';

const Book = ({ book: { volumeInfo } }) =>  (
        <article className="col"> 
            <h3> {volumeInfo.title}</h3>
            <p>Authors: {volumeInfo.authors}</p>
            <p>Publisher: {volumeInfo.publisher}</p>
            <p>Published Date: {volumeInfo.publishedDate}</p>
        </article>);

export default Book;