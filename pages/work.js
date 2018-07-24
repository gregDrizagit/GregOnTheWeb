
import {
    Button,
    Container, 
    Item,
    Segment
} from 'semantic-ui-react'

import Nav from '../components/Nav'
import Link from 'next/link'
const Work = () => {
    return(
        <Container>
            <Item.Group style={{fontFamily:"Lucida Console, Monaco, monospace", padding:"20px"}}>
                <Item>
                    <Link href="/publicdomainreader">
                    <div>

                        <Item.Header as='a'>Public Domain Reader</Item.Header>
                        <Item.Meta>Winter 2018</Item.Meta>
                        <Item.Description>
                            An browser E-Reader and interface to 50,000+ books in the public domain. 
                        </Item.Description>
                    </div>

                    </Link>

                </Item>
                <Item>

                        <Link href="/departuretimes">
                        <div>
                            <Item.Header as='a'>Departure Times</Item.Header>
                            <Item.Meta>Spring 2018</Item.Meta>
                            <Item.Description>
                                An Uber code challenge solution.
                            </Item.Description>
                        </div>

                        </Link>

                </Item>
                <Item>
                        <Link href="spotifyclone">
                        <div>

                            <Item.Header as='a'>Spotify Clone</Item.Header>
                            <Item.Meta>Spring 2018</Item.Meta>
                            <Item.Description>
                                A reskinning of the popular music streaming service Spotify. 
                            </Item.Description>
                            </div>

                        </Link>

                </Item>
            </Item.Group>
        </Container>
    )
}

export default Work