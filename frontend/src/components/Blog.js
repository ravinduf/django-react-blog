import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
                console.log(res);
                setFeaturedBlog(res.data[0]);
            }
            catch(err) {
                console.log(err);
            }
        };

        const fetchBlogs = async () => {
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
                console.log(res);
                setBlogs(res.data);
            }
            catch(err) {
                console.log(err);
            }

        }

        fetchData();
        fetchBlogs();
    }, []);

    return (
        <div>
            <h1>Blog</h1>
        </div>
    )
}

export default Blog
