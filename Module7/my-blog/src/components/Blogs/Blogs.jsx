import React,{useEffect, useState} from 'react';

const Blogs = () => {

    const [blogs,setBlogs] = useState([])

    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    console.log(blogs)
    return (
        <div>
            <h1 className='text-2xl '>total: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;