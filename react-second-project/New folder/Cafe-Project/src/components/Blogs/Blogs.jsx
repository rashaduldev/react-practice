import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

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
                Blogs:{blogs.length}
            </h2>
          <div className="my-10">
          {
                blogs.map(blog=><Blog 
                    key={blog.id} 
                    blog={blog}>
                        
                    </Blog>)
            }
          </div>
        </main>
    );
};

export default Blogs;