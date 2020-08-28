import React, { useState } from 'react';
import './Home.css';
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router';

function Home() {

    const [input, setInput] = useState("")
    const history = useHistory();

    const search = e => {
        e.preventDefault();
        console.log('hitted', input)
        // comeback
        history.push('/search')
    }

    return (
        <form className='home'>
            <h1 className="logo">LINUX</h1>
            <div className="home_input">
                <input value={input} onChange={e => setInput(e.target.value)} />
                <Button type='submit' onClick={search} variant="outlined">Search</Button>
            </div>
        </form>
    )
}

export default Home;