import React from 'react'
import v2 from './v2.mp4'
export default function VideoCompo() {
    return (
        <>
           <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
            <video src={v2} autoPlay muted loop width="100%" style={{ display: 'block' }}>
                Your browser does not support the video tag.
            </video>
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                textAlign: 'center',
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.5)', 
                padding: '10px',
                boxSizing: 'border-box',
                zIndex: 1, 
            }}>
                <h1>VEDANAND CONSTRUCTION</h1>
                <h4>We Build Your Dreams</h4>
            </div>
        </div>
        </>
    )
}
