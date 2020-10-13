import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const BlogDetail = () => {

    const [blog, setBlog] = useState({});
    const createBlog = () => {
        return {__html: blog.content }
    };

    return (
        <Container className="mt-3">
            <h1 className="display-2"></h1>
            <h2 className="text-muted mt-3">Category: category</h2>
            <h4>month day</h4>

            <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()} />
        </Container>
    )
}

export default BlogDetail
