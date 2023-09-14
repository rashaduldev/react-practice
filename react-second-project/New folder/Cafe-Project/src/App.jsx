import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
// https://kit.fontawesome.com/be2168ea2b.js

function App() {

const [bookmarks,setBookmarks]=useState([]);

const [spandTime,setTime]=useState(0);
const spandTimeHandle=(time)=>{
  console.log(time);
  const newTime=spandTime+time;
  setTime(newTime)
  // console.log(setTime);
}

  const bookMarkHandle=blog=>{
    console.log(blog);
    const newBookMark=[...bookmarks,blog];
    setBookmarks(newBookMark);
  }

  return (
    <>
   
    <Header></Header>
     <div className='md:flex  max-w-7xl mx-auto'>
        <Blogs bookMarkHandle={bookMarkHandle}
        spandTimeHandle={spandTimeHandle}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks}
        spandTime={spandTime}
        ></Bookmarks>
     </div>
    
    </>
  )
}

export default App
