import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  console.log("in video con");
  useEffect(() => {
    console.log("in use effect");
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log("json is" + json);
    console.log(json.items);
    setVideos(json.items);
    // console.log(JSON.stringify(json));
  };

  return (
    <div className="flex flex-wrap">
      {videos.length > 0 &&
        videos.map((video) => {
          return (
          <Link to={"/watch?v="+video.id}>
          <VideoCard key={video.id} info={video} />;
          </Link>
          )
        })}
    </div>
  );
};

export default VideoContainer;
