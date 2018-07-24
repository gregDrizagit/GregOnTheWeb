import {
    Button,
    Container,
    Grid, 
    Image,
    Dimmer
} from 'semantic-ui-react'
import Nav from '../components/Nav'

class About extends React.Component {

    state = {
        resume: 'static/GregResume3.pdf'
    }

    render(){
        return(
            <Container>
                <Grid>
                    <Grid.Row>
                    <Grid.Column width={8}>
                        <h1>Education:</h1>
                        <h2>
                            The Flatiron School (New York)<br /> - Software Engineering '18<br/><br/>
                            University of the Arts (Philadelphia)<br/> - BFA Interactive Digital Media / Music '17<br/>
                        </h2>

                        <h1 onClick={() => window.open(this.state.resume)}>
                            CV
                        </h1>

                    </Grid.Column>
                    <Grid.Column width={8}>
                    <p>
                        Greg is a software engineer and musician living in Brooklyn NY
                    </p>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                <style jsx>
                {
                    `
                        p, h1{
                            font-size: larger;
                            font-family:"Lucida Console", Monaco, monospace;
                        }
                        h2{
                            font-size: medium;
                            font-family:"Lucida Console", Monaco, monospace;

                        }
                    `
                }
                </style>
            </Container>
        )
    }
}

export default About