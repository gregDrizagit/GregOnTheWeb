import React from 'react';
import {
    Button,
    Container, 
    Card

} from 'semantic-ui-react'; 
import API from '../api'
import BlogCard from '../components/BlogCard'
var parseString = require('xml2js').parseString;


class Blog extends React.Component{ 

    state = {}
    
    componentDidMount(){

       let json =  API.getMediumRSS().then(textXml => {
            parseString(textXml, (err, xml) => {

            this.setState({json: xml.rss.channel[0]})
            })
        })

        console.log(json)
       
    }

    renderBlogCards = () => {
       let blogCards = this.state.json.item.map(item => {
            return( <BlogCard blog={item} />)
        })

        return blogCards
    }

    render(){
        console.log(this.state.json)
        return(
            <div>
                <Container>
                    <Card.Group style={{padding: "20px"}} itemsPerRow={4}>
                    {
                        this.state.json ? 

                            this.renderBlogCards()
                        :
                            null
                    }
                    </Card.Group>
                </Container>

            </div>
        )
    }
}

export default Blog
