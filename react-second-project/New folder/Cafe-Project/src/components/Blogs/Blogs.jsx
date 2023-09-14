import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <main className="w-2/3">
            <h2 className="text-4xl">
                Blogs
            </h2>
        </main>
    );
};

export default Blogs;