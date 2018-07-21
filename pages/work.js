
import {
    Button,
    Container
} from 'semantic-ui-react'

import Nav from '../components/Nav'
import Link from 'next/link'
const Work = () => {
    return(
        <Container>
            <ul>
                <li>
                    <Link href="/publicdomainreader">
                        <a>Public Domain Reader</a>
                    </Link>
                </li>
                <li>
                    <Link href="/departuretimes">
                        <a>Departure Times - An Uber Code Challenge</a>
                    </Link>
                </li>
            </ul>
        </Container>
    )
}

export default Work