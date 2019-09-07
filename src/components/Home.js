import { Route, Link } from 'react-router-dom';

import React from 'react'

function Home() {
    return (
        <div>
            <h1>Avengers Database</h1>
            <h4>Warning! This is classified information!</h4>
            <Link to="/avengers">Enter</Link>
        </div>
    )
}

export default Home;