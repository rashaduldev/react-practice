import React from 'react';
import Book from './books';
import './Book.css';

export default function BookStore({ books }) {
  return (
    <div className='book2'>
      <h3>Books: {books.length}</h3>
      {
        books.map(book=><Book book={book}></Book>)
      }
    </div>
  );
}