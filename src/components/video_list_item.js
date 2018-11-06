import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video
    // console.table(video)
    const ImageUrl = video.snippet.thumbnails.default.url;
    return(
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={ImageUrl} />
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
            </div>
        </li>
    );
};

export default VideoListItem;