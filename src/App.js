import React, { useState } from 'react';
import './App.css';
import AndreaContainer from './components/AndreaContainer';

export default function App() {
    const [githubSrc,] = useState('https://i.imgur.com/qkgfyLX.png');
    const andrea = [
        'https://imgur.com/dYXPavz.jpg',
        'https://imgur.com/eo3R9cF.jpg',
        'https://imgur.com/J7diTD7.jpg',
        'https://imgur.com/uMCXwL6.jpg',
        'https://imgur.com/6nDtX8l.jpg',
        'https://imgur.com/UiE5Kzg.jpg',
        'https://imgur.com/DYAHBKf.jpg',
        'https://imgur.com/hoJU7gX.mp4',
        'https://imgur.com/XTMPUBZ.mp4',
    ];


    return (
        <div className={'container_bright'}>

            <div className="main-div">
                <h1>helloooo</h1>
                <h2>imo pics/highlights smth</h2>
            </div>

            <div className="social-media_container">
                <a href="https://github.com/milesueee">
                    <img className="social-media_icon" src={githubSrc} alt="github" />
                </a>
            </div>

            <AndreaContainer andrea={andrea} />

            <footer>There isn&apos;t really anything else in here unless if mag send ka ug lain pics hehe</footer>
        </div>
    );
}
