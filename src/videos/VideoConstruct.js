import React from 'react'
import v2 from './desgin-construct.mp4'
export default function VideoConstruct() {
    return (
        <>
            <div style={{ position: 'relative', height: 'auto' }}>
                <video className='shadow p-1' src={v2} autoPlay muted loop width={900} style={{ display: 'block' }}>
                cla
                </video>
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '1200px',
                    height: '500px',
                    textAlign: 'center',
                    color: 'white',
                    padding: '10px',
                    boxSizing: 'border-box',

                }}>

                </div>
            </div>
        </>
    )
}
