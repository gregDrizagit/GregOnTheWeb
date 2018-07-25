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
                <Header color='grey'>
                    <h2>Greg Driza - Software Engineer</h2>
                    <Header.Subheader>
                        <Menu style={{fontFamily:"Lucida Console, Monaco, monospace"}} secondary pointing>
                            <Menu.Item
                                name='/about'
                                active={activeItem === 'about'}
                                content='About'
                                onClick={this.handleItemClick}>
                                
                            </Menu.Item> 
                            <Menu.Item
                                name='/work'
                                active={activeItem === 'work'}
                                content='Projects'
                                onClick={this.handleItemClick}>
                            </Menu.Item> 
                            <Menu.Item
                                name='/blog'
                                active={activeItem === 'blog'}
                                content='Blog'
                                onClick={this.handleItemClick}>
                            </Menu.Item> 
                        </Menu>
                    </Header.Subheader>
                </Header>
                <style jsx>{
                    `
                    h2{
                        font-family:"Lucida Console", Monaco, monospace;
                      }
                    `
                    }</style>
            </Container>
        )
    }
}

export default Nav