import React from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Container className="mt-5">
            <Jumbotron>
                <h1>Blog-World</h1>
                <p>
                    We write awesome blog article about various topics
                </p>
                <hr/>
                <p> 
                    Click the below button to check out our awesome blog<br/><br/>
                    
                    <Link to="/blog"><Button variant="primary">Check out our blog</Button></Link>
                    
                </p>
            </Jumbotron>
        </Container >
    )
}

export default Home
