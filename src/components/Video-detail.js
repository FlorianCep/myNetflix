import React from 'react';

const VideoDetail = ({ title, overview, date }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{overview}</p>
            <p>{date}</p>
        </div>
    )
}

export default VideoDetail;