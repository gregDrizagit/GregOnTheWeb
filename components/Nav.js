import { Header, Segment, Container, Menu } from 'semantic-ui-react';
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'

class Nav extends React.Component { 

    state = {}

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        Router.push({
            pathname: this.state.activeItem
        })
    }

    render(){
        const { activeItem } = this.state

        return(

            <Container>
                <Header as='h2' color='grey'>
                    Greg Driza - Software Engineer
                    <Header.Subheader>
                        <Menu>
                            <Menu.Item
                                name='/about'
                                active={activeItem === 'about'}
                                content='About'
                                onClick={this.handleItemClick}>
                            </Menu.Item> 
                            <Menu.Item
                                name='/work'
                                active={activeItem === 'work'}
                                content='Work'
                                onClick={this.handleItemClick}>
                            </Menu.Item> 
                        </Menu>
                    </Header.Subheader>
                </Header>
            </Container>
        )
    }
}

export default Nav