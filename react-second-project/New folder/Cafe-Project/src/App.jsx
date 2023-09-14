import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
// https://kit.fontawesome.com/be2168ea2b.js

function App() {

const [bookmarks,setBookmarks]=useState([]);

  const bookMarkHandle=blog=>{
    console.log(blog);
    const newBookMark=[...bookmarks,blog];
    setBookmarks(newBookMark);
  }

  return (
    <>
   
    <Header></Header>
     <div className='md:flex  max-w-7xl mx-auto'>
        <Blogs bookMarkHandle={bookMarkHandle}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
    
    </>
  )
}

export default App
