import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './styles.css'
import {Button} from 'react-bulma-components'

export default function Home() {
    return (
        <main>
            <h1>Research Collabs</h1>
            <Button className="is-primary">Sign Up</Button>
            <Button className="is-primary">Log In</Button>
        </main>
    )
}