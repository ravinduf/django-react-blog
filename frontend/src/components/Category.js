import React, { useEffect, useState } from 'react'
import { Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Category = (props) => {
    
    const [blogs, setBlogs] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        const category = capitalizeFirstLetter(props.match.params.id);
        setCategory(category);

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }


        const fetchData = async () => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category`, {category} , config );
                setBlogs(res.data);
                
            }
            catch (err) {
                console.log(err);
            }
            
        }

        fetchData();
        
        
    }, [props.match.params.id])

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        
        return '';
    }
    console.log(blogs)
    return (
        <Container className="mt-3">
            <h4 className="display-4">Category {capitalizeFirstLetter(props.match.params.id)}</h4>
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
        </Container>
    )
}

export default Category
