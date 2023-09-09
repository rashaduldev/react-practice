import './Book.css';

export default function Book({book}) {
    console.log(book);
    const {id,name,price}=book;
    return (
        <div className='book'>
            <h2>Id:{id}</h2>
            <h3>Book Name:{name}</h3>
            <h4>Book Prices:{price}</h4>
            <hr />
        </div>
    )
}