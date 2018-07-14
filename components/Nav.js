import { Header, Segment, Container } from 'semantic-ui-react';
import Link from 'next/link'
const Nav = () => { 
    return(
        <Container>
            <Header as='h2' color='grey'>
                Greg Driza - Software Engineer
                <Header.Subheader>
                    <Link href="/about">
                        About
                    </Link>
                    <Link href="/work">
                        Work
                    </Link>
                </Header.Subheader>
            </Header>
        </Container>
    )
}

export default Nav