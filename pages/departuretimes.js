import {
    Button,
    Container,
    Image, 
    Dimmer,
    Segment,
    Grid
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
                   <h1>Departure Times</h1>
                   <Grid>
                        <Grid.Row>
                        <Grid.Column width={8}>
                            <Image name="/static/dt-gif-1.gif" onClick={this.handleShow} src={'/static/dt-gif-1.gif'} size="huge" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <p>
                            Users can search for any place with Google Autocomplete Places API. Search results are constrained
                            San Francisco. 
                        </p>
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                        <Grid.Column width={8}>
                            <Image name="/static/dt-gif-2.gif" onClick={this.handleShow} src={'/static/dt-gif-2.gif'} size="huge" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <p>
                            Google returns the coordinates of the selected place. The 311 API provides for us the coordinate location of every 
                            bus stop in California. Some <a href="https://en.wikipedia.org/wiki/Haversine_formula">math</a> 
                            is used to filter out all of the stops that aren't within 0.5 miles of the selected location.
                            The positions of the stops can be plotted on 
                        </p>
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                        <Grid.Column width={8}>
                            <Image name="/static/dt-gif-3.gif" onClick={this.handleShow} src={'/static/dt-gif-3.gif'} size="huge" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <p>
                            Stops are listed on the left-hand sidebar. They can be selected on the map or the sidebar.  
                        </p>
                        </Grid.Column>
                        </Grid.Row>

                         <Grid.Row>
                        <Grid.Column width={8}>
                            <Image name="/static/dt-gif-4.gif" onClick={this.handleShow} src={'/static/dt-gif-4.gif'} size="huge" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <p>
                        </p>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                <style jsx>
                {
                    `
                        p, h1{
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