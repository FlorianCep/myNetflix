import React from 'react';
import VideoListItem from '../components/video-list-item';

const VideoList = (props) => {

    const movies = ['film 1', 'film 2', 'film 3', 'film 4', 'film 5'];
    const movieList = props.movieList;

    return (
        <div>
            <ul>
                {
                    movieList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie} callBack={receiveMovie} />
                    })
                }
            </ul>
        </div>
    )

    function receiveMovie(movie) {
        props.callBack(movie);
    }

}

export default VideoList;