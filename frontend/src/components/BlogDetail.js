import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
const BlogDetail = (props) => {

    const [blog, setBlog] = useState({});

    useEffect(() => {
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
                setBlog(res.data);
            }
            catch (err){
                console.log(err);
            }
        }

        fetchData();

    }, [props.match.params.id]);
     
    const createBlog = () => {
        return {__html: blog.content }
    };

    

    return (
        <Container className="mt-3">
            <h1 className="display-3">{blog.title}</h1>
            <h2 className="text-muted mt-3">Category:&nbsp; {blog.category}</h2>
            <h4>{blog.month} {blog.day}</h4>

            <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()} />

            <p className='lead mb-5'><Link to="/blog" className="font-weight-bold">Back to blogs</Link></p>
        </Container>
    )
}

export default BlogDetail
