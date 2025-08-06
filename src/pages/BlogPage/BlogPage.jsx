import React from 'react'
import { useEffect } from 'react'
import { getallblogs } from '../../services/blog'
import BlogCard from '../../components/BlogCard/BlogCard'
import { useState } from 'react'
import "./BlogPage.css";
export default function BlogPage() {
    const [blogs, setBlogs] = useState([])
 useEffect(() => {
getallblogs().then((res)=>{
    setBlogs(res.data.data);
    

}).catch((err)=>{
    console.log(err);
    

})
 }, [])
 
     console.log(blogs);
     
  return (
    <main className='blog_page'>
    <h1>Blog</h1>
      <h3>Our Post</h3>
      <div className="grid_post">
        {blogs?.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
       
      </div>

    </main>
  )
}
