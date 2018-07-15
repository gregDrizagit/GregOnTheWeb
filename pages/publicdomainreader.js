import {
    Button,
    Container,
    Image, 
    Dimmer,
    Segment
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
                <Image name="/static/pdr-gif-1.gif" onClick={this.handleShow} src={'/static/pdr-gif-1.gif'} size="huge" />
                <Image name="/static/pdr-gif-2.gif" onClick={this.handleShow} src={'/static/pdr-gif-2.gif'} size="huge" />

                <Dimmer page active={this.state.dimmerActive} onClick={this.handleHide}>
                    <Container>
                        <Image src={this.state.activeImage}  verticalAlign="top" size="massive"/>
                    </Container>
                </Dimmer>
            </div>
        )
    }
}

export default PublicDomainReader