import React from 'react';
import '../../App.css';

export default function AndreaContainer({ andrea }) {
    return (
        <div className='andrea-container'>
            <h2 className='andrea-title'>
                your very own highlights made by me
            </h2>

            <div>
                {andrea.map((url, index) => {
                    const isVideo = url.endsWith('.mp4');
                    return (
                        <div key={index} className='media-item'>
                            {isVideo ? (
                                <video controls className='andrea' src={url}>
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img className='andrea' src={url} alt={`andrea ${index}`} />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
