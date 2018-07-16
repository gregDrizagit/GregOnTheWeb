
import {
    Button,
    Container
} from 'semantic-ui-react'

import Nav from '../components/Nav'
import Link from 'next/link'
const Work = () => {
    return(
        <Container>
            <Link href="/publicdomainreader">
                <a>Public Domain Reader</a>
            </Link>
            <Link href="/departuretimes">
                <a>Departure Times - An Uber Code Challenge</a>
            </Link>
        </Container>
    )
}

export default Work