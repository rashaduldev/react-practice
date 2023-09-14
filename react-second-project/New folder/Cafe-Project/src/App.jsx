import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
// https://kit.fontawesome.com/be2168ea2b.js


const [bookmarks,setBookmarks]=useState([]);
function App() {
  const bookMarkHandle=()=>{
    console.log(bookmarks);
  }

  return (
    <>
   
    <Header></Header>
     <div className='md:flex  max-w-7xl mx-auto'>
        <Blogs bookMarkHandle={bookMarkHandle}></Blogs>
        <Bookmarks></Bookmarks>
     </div>
    
    </>
  )
}

export default App
