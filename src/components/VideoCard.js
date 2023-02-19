import React from 'react'

const VideoCard = (props) => {
    console.log(props?.info)
    const {snippet, statistics} = props?.info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
        <img className="rounded-lg" alt="thumbnail" src = {thumbnails.medium.url}/>
        <ul>
            <li className="font-bold py-2">{title}</li>
            <li className="text-base">{channelTitle}</li>
            <li className="text-base">{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard