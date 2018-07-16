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