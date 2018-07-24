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
 class SpotifyClone extends React.Component {
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
                    <h1>Spotify Clone</h1><br />
                    <p>
                        Spotify provides its premium users (who happen to be developers) with access to their entire library of music as well as 
                        some interesting functionality. I thought it would be an interesting exercise to try to and implement as many of the endpoints as I could
                        from Spotify's API in a week. 
                    </p> 
                    <h2>
                        Technology: 
                        <ul>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>Spotify API</li>
                            <li>Semantic React UI</li>

                        </ul>
                        <a href="https://github.com/gregDrizagit/SpotifyCloneFE">
                            <Icon link size="huge" name='github' />
                        </a>
                        See the code for this project
                    </h2>                      
                    </Segment>
                    <Grid>
                        <Grid.Row>
                        <Grid.Column width={8}>
                            <Image name="/static/spotify-gif-1.gif" onClick={this.handleShow} src={'/static/spotify-gif-1.gif'} size="huge" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <p>
                            Users can connect to their Spotify account. On the home page, they will see Spotify's collection of 
                            of featured music as well as a list of the most recent songs they've played on Spotify. 
                        </p>
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                        <Grid.Column width={8}>
                        <p>
                            Users can also discover music through exploring Spotify's collection of themed playlists. 
                        </p>  
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image name="/static/spotify-gif-2.gif" onClick={this.handleShow} src={'/static/spotify-gif-2.gif'} size="huge" />
                        </Grid.Column>
                        </Grid.Row>

                         <Grid.Row>
                         <Grid.Column width={8}>
                            <Image name="/static/spotify-gif-3.gif" onClick={this.handleShow} src={'/static/spotify-gif-3.gif'} size="huge" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <p>
                            Each playlist has its collection of songs. 
                        </p>
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                         <Grid.Column width={8}>
                         <p>
                           When you're exploring, it's important to be able to retrace your steps. I provided forward and back buttons in the upper right hand corner  
                           for navigation. 
                        </p>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image name="/static/spotify-gif-4.gif" onClick={this.handleShow} src={'/static/spotify-gif-4.gif'} size="huge" />
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                         <Grid.Column width={8}>
                            <Image name="/static/spotify-gif-5.gif" onClick={this.handleShow} src={'/static/spotify-gif-5.gif'} size="huge" />

                        </Grid.Column>
                        <Grid.Column width={8}>
                        <p>
                            Users can also search artists, browse search results, and play songs. When a user plays a song, a fully functional 
                            control panel appears at the bottom, and the selected track starts playing on a conected device.  
                        </p>
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                         <Grid.Column width={8}>
                         <p>
                             Artist have a profile page which contains all of their albums and albums they've appeared on. 
                         </p>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image name="/static/spotify-gif-6.gif" onClick={this.handleShow} src={'/static/spotify-gif-6.gif'} size="huge" />
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

export default SpotifyClone