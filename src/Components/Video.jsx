import { useEffect } from "react"
import { useState } from "react"

const key = "AIzaSyBJu475NM9rAu_-LPauC8BAwqCa0SJx6Tg";

const getVideo = async (setVideo) => {

    const url = "https://www.youtube.com/embed/";

    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=50&q=feel-good%2C%20motivation%2C%20positive-energy&type=video&videoDuration=short&videoEmbeddable=true&key=${key}`);
    let object = await response.json();

    const video_num = Math.floor(Math.random()*50);

    let video_url = url + object.items[video_num].id.videoId;

    setVideo(await video_url);
} 

export default function Video() {
    let [video, setVideo] = useState("")

    useEffect(()=> {
        getVideo(setVideo);
    }, [])

    return (
        <div className="Video">
            <iframe width="888" height="500" src={video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}