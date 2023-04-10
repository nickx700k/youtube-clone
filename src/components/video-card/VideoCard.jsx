import React, { useContext } from "react";
import "./VideoCard.scss";
import { UtilityContext } from "../utility/Provider";

export default function VideoCard({ video }) {
  const { color } = useContext(UtilityContext);
  return (
    <>
      {video?.id?.videoId === undefined &&
      video?.id?.playlistId === undefined ? (
        <div className={`video2 ${color}`}>
          <a
            className="video2--div"
            href={`https://www.youtube.com/channel/${video?.snippet?.channelId}`}
          >
            <img
              className="video2--div--thumbnail"
              src={video?.snippet?.thumbnails?.medium?.url}
              alt=" incorrect photo"
            />
          </a>

          <div className="video2--body">
            <a
              href={`https://www.youtube.com/channel/${video?.snippet?.channelId}`}
            >
              <h2 className="video2--body--title">
                {video?.snippet?.channelTitle}
              </h2>
            </a>
          </div>
        </div>
      ) : (
        <>
          {video?.id?.videoId === undefined ? (
            <div className={`video ${color}`}>
              <a
                className="video--div"
                href={`https://www.youtube.com/channel/${video?.snippet?.channelId}`}
              >
                <img
                  className="video--div--thumbnail"
                  src={video?.snippet?.thumbnails?.medium?.url}
                  alt=" incorrect photo"
                />
                <div className="video--div--div">
                  <span className={`video--div--div--span ${color}`}>
                    Watch
                  </span>
                </div>
              </a>

              <div className="video--body">
                <a
                  href={`https://www.youtube.com/channel/${video?.snippet?.channelId}`}
                >
                  <h2 className="video--body--title">
                    {video?.snippet?.title.slice(0, 60)}
                  </h2>
                </a>
                <a
                  href={`https://www.youtube.com/channel/${video?.snippet?.channelId}`}
                >
                  <span className="video--body--channel">
                    {video?.snippet?.channelTitle}
                  </span>
                  <i class="bx bx-check-circle"></i>
                </a>
              </div>
            </div>
          ) : (
            <div className={`video ${color}`}>
              <a
                className="video--div"
                href={`https://www.youtube.com/channel/${video?.snippet?.channelId}`}
              >
                <img
                  className="video--div--thumbnail"
                  src={video?.snippet?.thumbnails?.medium?.url}
                  alt=" incorrect photo"
                />
                <div className="video--div--div">
                  <span className={`video--div--div--span ${color}`}>
                    Watch
                  </span>
                </div>
              </a>

              <div className="video--body">
                <a
                  href={`https://www.youtube.com/watch?v=${video?.id?.videoId}`}
                >
                  <h2 className="video--body--title">
                    {video?.snippet?.title.slice(0, 60)}
                  </h2>
                </a>
                <a
                  href={`https://www.youtube.com/channel/${video?.snippet?.channelId}`}
                >
                  <span className="video--body--channel">
                    {video?.snippet?.channelTitle}
                  </span>
                  <i class="bx bx-check-circle"></i>
                </a>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
