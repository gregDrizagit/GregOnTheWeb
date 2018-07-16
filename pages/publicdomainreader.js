import {
    Button,
    Container,
    Image, 
    Dimmer,
    Segment,
    Grid
} from 'semantic-ui-react'; 
import React from 'react'


 class PublicDomainReader extends React.Component {
     state = {
         activeImage:'', 
         dimmerActive: false
     }
    
   
    handleShow = (e) => {
        console.log(e.target.name)
        this.setState({ dimmerActive: true, activeImage: e.target.name })
     }
    handleHide = () => {
        console.log('should hide')
        this.setState({ dimmerActive: false })
    }
    
    render(){
        return(
            <div>

                <Dimmer page active={this.state.dimmerActive} onClick={this.handleHide}>
                    <Container>
                        <Image src={this.state.activeImage}  verticalAlign="top" size="massive"/>
                    </Container>
                </Dimmer>
                <Container>
                    <Segment basic>
                        There is a large amount of data on the web that is accessible, but not necessarily usable. 
                        Project Gutenberg (https://www.gutenberg.org/) has been digitizing the vast body literature in the public domain since 1971. 
                        Project Gutenberg makes all the works availible in a number of digital formats, but doesn't provide a great interface for exploring 
                        or reading the materials online. This project seeks to address some of these issues using React.js, Ruby on Rails, and the Gutendex 
                        API (https://github.com/garethbjohnson/gutendex).                        
                    </Segment>
                    <Grid>
                        <Grid.Row>
                        <Grid.Column width={8}>
                            <Image name="/static/pdr-gif-1.gif" onClick={this.handleShow} src={'/static/pdr-gif-1.gif'} size="huge" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            Users land at a home page when they create an account. 
                            Here users can create collections of books, view books 
                            in their current collections, view the books other users 
                            are currently reading, and jump back into the last book they 
                            were reading.
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                        <Grid.Column width={8}>
                            User's collections are persisted across sessions. Collections can also be deleted.   
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image name="/static/pdr-gif-2.gif" onClick={this.handleShow} src={'/static/pdr-gif-2.gif'} size="huge" />
                        </Grid.Column>
                        </Grid.Row>

                         <Grid.Row>
                         <Grid.Column width={8}>
                            <Image name="/static/pdf-gif-3.gif" onClick={this.handleShow} src={'/static/pdf-gif-3.gif'} size="huge" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            Users can look through pages of all the books in the database or browse by 
                            category (subject, author, bookshelf). User's can view all the books in a given 
                            category and read or add books to a collection.
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                         <Grid.Column width={8}>
                             You can quickly search through all categories containing a keywords. 
                             You can also filter search results by category.
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image name="/static/pdr-gif-4.gif" onClick={this.handleShow} src={'/static/pdr-gif-4.gif'} size="huge" />
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                         <Grid.Column width={8}>
                            <Image name="/static/pdr-gif-5.gif" onClick={this.handleShow} src={'/static/pdr-gif-5.gif'} size="huge" />

                        </Grid.Column>
                        <Grid.Column width={8}>
                             You can quickly search through all categories containing a keywords. 
                             You can also filter search results by Author, Subject, Bookshelf, and Title.
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                         <Grid.Column width={8}>
                             You can quickly search through all categories containing a keywords. 
                             You can also filter search results by category.
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image name="/static/pdr-gif-6.gif" onClick={this.handleShow} src={'/static/pdr-gif-6.gif'} size="huge" />
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                         <Grid.Column width={8}>
                            <Image name="/static/pdr-gif-7.gif" onClick={this.handleShow} src={'/static/pdr-gif-7.gif'} size="huge" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                             You can quickly search through all categories containing a keywords. 
                             You can also filter search results by category.
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            
            </div>
        )
    }
}

export default PublicDomainReader