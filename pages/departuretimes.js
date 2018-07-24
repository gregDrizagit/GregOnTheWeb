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
                    <h1>Departure Times</h1><br />
                    
                    <p>
                       I came across a repository of code challenges Uber uses to vet their software engineering applicants on their tools team. Here was the challenge:<br /><br />
                        Create a service that gives real-time departure time for public transportation (use freely available public API). The app should geolocalize the user. <br/><br/> 
                       I substituted geolocation for Google Autocomplete Places api because if MTA's API works anything like the subway, I didn't want to use it. 

                    </p> 
                    <h2>
                        Technology: 
                        <ul>
                            <li>React.js</li>
                            <li>Google Places Autocomplete API</li>
                            <li>511 SF Bus Api</li>
                            <li>Google Maps API</li>
                            <li>Semantic React UI</li>
                        </ul>
                        <a href="https://github.com/gregDrizagit/DepartureTimes">
                            <Icon link size="huge" name='github' />
                        </a>
                        See the code for this project
                    </h2>                      
                    </Segment>
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
                            The positions of the stops can be plotted on the map with Google Maps API. 
                        </p>
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                        <Grid.Column width={8}>
                            <Image name="/static/dt-gif-3.gif" onClick={this.handleShow} src={'/static/dt-gif-3.gif'} size="huge" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <p>
                            Stops are listed on the left-hand sidebar. They can be selected on the map or the sidebar. Redux is useful 
                            managing state here. 
                        </p>
                        </Grid.Column>
                        </Grid.Row>

                         <Grid.Row>
                        <Grid.Column width={8}>
                            <Image name="/static/dt-gif-4.gif" onClick={this.handleShow} src={'/static/dt-gif-4.gif'} size="huge" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                         <p>
                             Once a stop is selected, it can be polled every few seconds to get get real-time bus coordinates. 
                             The bus positions can be placed on the map.
                         </p>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Segment basic>
                    
                        
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