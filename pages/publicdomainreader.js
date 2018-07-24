import {
    Button,
    Container,
    Image, 
    Dimmer,
    Segment,
    Grid,
    Icon
} from 'semantic-ui-react'; 
import React from 'react'
import Link from 'next/link'
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
                    <h1>Public Domain Reader</h1><br />
                    <p>
                        There is a large amount of data on the web that is accessible, but not necessarily usable. 
                        Project Gutenberg (https://www.gutenberg.org/) has been digitizing the vast body literature in the public domain since 1971. 
                        Project Gutenberg makes all the works availible in a number of digital formats, but doesn't provide a great interface for exploring 
                        or reading the materials online. This project seeks to address some of these issues using React.js, Ruby on Rails, and the Gutendex 
                        API (https://github.com/garethbjohnson/gutendex). 
                    </p> 
                    <h2>
                        Technology: 
                        <ul>
                            <li>React.js</li>
                            <li>Ruby on Rails</li>
                            <li>Gutendex API</li>
                            <li>MYSQL</li>
                            <li>Semantic React UI</li>

                        </ul>
                        <a href="https://github.com/gregDrizagit/PublicDomainReaderFrontEnd">
                            <Icon link size="huge" name='github' />
                        </a>
                        See the code for this project
                    </h2>                      
                    </Segment>
                    <Grid>
                        <Grid.Row>
                        <Grid.Column width={8}>
                            <Image name="/static/pdr-gif-1.gif" onClick={this.handleShow} src={'/static/pdr-gif-1.gif'} size="huge" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <p>
                            Users land at a home page when they create an account. 
                            Here users can create collections of books, view books 
                            in their current collections, view the books other users 
                            are currently reading, and jump back into the last book they 
                            were reading.
                        </p>
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                        <Grid.Column width={8}>
                        <p>
                            User's collections are persisted across sessions. Collections can also be deleted. 
                        </p>  
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
                        <p>
                            Users can look through pages of all 50,000+ of the books in the database or browse by 
                            category (subject, author, bookshelf). User's can view all the books in a given 
                            category and flip through books or add books to a collection.
                        </p>
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                         <Grid.Column width={8}>
                         <p>
                            Users can quickly search all categories, books, authors, and subjects at the same time with a quick keyword search.
                             Search results can be filtered by Author, Subject, Bookshelf, and Book. 
                        </p>
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
                        <p>
                            When the user selects a book, the book is returned from Gutendex in a massive HTML document. This is convenient for a number of reasons. 
                            Since Project Gutenberg is largely a voluneer effort, every book is formatted a little differently. 
                            We can use some simple Javascript to create consistent format across all books as well as provide the user with some controls to enhance the reading experience. 
                        </p>
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                         <Grid.Column width={8}>
                         <p>
                            Inside the collapsible control panel are controls for site navigation, and text size adjustment. 
                         </p>
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
                        <p>
                             Bookmarks can be placed in the text by clicking the paragraphs. This allows users to return to their place in the text over multiple sessions. 
                        </p>
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                         <Grid.Column width={8}>
                         <p>
                            Users can also edit the CSS color properties of the HTML document to invert the colors for reading at night. 
                        </p>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image name="/static/pdr-gif-8.gif" onClick={this.handleShow} src={'/static/pdr-gif-8.gif'} size="huge" />
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Segment basic>
                    
                    <br />
                    <p>
                        <Link href="/work">
                            <a>See my other projects </a>
                        </Link>
                    </p>

                    </Segment>
                </Container>
                <style jsx>
                {
                    `
                        p, h1, h2{
                            font-size: larger;
                            font-family:"Lucida Console", Monaco, monospace;
                        }
                    `
                }
                </style>
            </div>
        )
    }
}

export default PublicDomainReader