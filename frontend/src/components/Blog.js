import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Container, Nav, Jumbotron } from 'react-bootstrap'

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

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        
        return '';
    }

    return (
        <Container className="mt-3">
            <div className="py-1 mb-2">
                <Nav className="d-flex justify-content-between">
                    <Link className="p-2 text=muted" to="/category/world">World</Link>
                    <Link className="p-2 text=muted" to="/category/technology">Technology</Link>
                    <Link className="p-2 text=muted" to="/category/environment">Environment</Link>
                    <Link className="p-2 text=muted" to="/category/design">Design</Link>
                    <Link className="p-2 text=muted" to="/category/culture">Culture</Link>
                    <Link className="p-2 text=muted" to="/category/business">Business</Link>
                    <Link className="p-2 text=muted" to="/category/politics">Politics</Link>
                    <Link className="p-2 text=muted" to="/category/Opinion">Opinion</Link>
                    <Link className="p-2 text=muted" to="/category/Science">Science</Link>
                    <Link className="p-2 text=muted" to="/category/Health">Health</Link>
                    <Link className="p-2 text=muted" to="/category/Style">Style</Link>
                    <Link className="p-2 text=muted" to="/category/Travel">Travel</Link>

                </Nav>
            </div>

            <Jumbotron className="p-4 p-md-5 text-white bg-dark">
                <div className="col-md-6 ">
                    <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
                    <p className="lead my-3">{featuredBlog.excerpt}</p>
                    <p className="lead mb-0">
                        <Link to={`/blog/${featuredBlog.slug}`} className="text-white font-weight-bold">
                            Continue reading....
                        </Link>
                    </p>
                </div>
            </Jumbotron>
            
        </Container>
    )
}

export default Blog
