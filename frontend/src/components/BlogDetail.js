import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const BlogDetail = () => {

    const [blog, setBlog] = useState({});

    useEffect(() => {
        

    }, [props.match.params.id]);
    const createBlog = () => {
        return {__html: blog.content }
    };

    return (
        <Container className="mt-3">
            <h1 className="display-2"></h1>
            <h2 className="text-muted mt-3">Category: category</h2>
            <h4>month day</h4>

            <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()} />

            <p className='lead mb-5'><Link to="/blog" className="font-weight-bold">Back to blogs</Link></p>
        </Container>
    )
}

export default BlogDetail
