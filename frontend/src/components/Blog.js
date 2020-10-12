import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                
            }
            catch(err) {
                console.log(error);
            }
        };

        fetchdatat();

    }, []);

    return (
        <div>
            <h1>Blog</h1>
        </div>
    )
}

export default Blog
