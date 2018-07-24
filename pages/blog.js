import React from 'react';
import {
    Button,
    Container, 
    Card,
    Loader,
    Icon

} from 'semantic-ui-react'; 
import BlogCard from '../components/BlogCard'
var parseString = require('xml2js').parseString;


class Blog extends React.Component{ 

    state = {}
    
    renderBlogCards = () => {
       let blogCards = this.props.blogs.item.map(item => {
            return( <BlogCard key={Math.floor(Math.random() * 1000)} blog={item} />)
        })

        return blogCards
    }

    render(){
       return(
            <Container>
                <h1>Articles from <a href="https://medium.com/@gdriza">@gdriza</a> via Medium RSS: </h1>
                <Card.Group style={{padding: "20px"}} itemsPerRow={4}>
                {
                    this.props.blogs ? 

                        this.renderBlogCards()
                    :
                    <Loader active inline='centered' />
                }
                </Card.Group>
                <style jsx>
                {
                    `
                        h1{
                            font-size: larger;
                            font-family:"Lucida Console", Monaco, monospace;
                            padding:20px;
                        }
                    
                    `
                }
            </style>
            </Container>
         
        )
    }
}

export default Blog
