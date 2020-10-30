import React from "react";
import "./index.scss";

function VideoRow({
  title,
  channel,
  views,
  subs,
  timestamp,
  channelImage,
  description,
}) {
  return (
    <div className="videoRow">
      <img className="videoRow__thumbnail" src={channelImage} alt={title} />

      <div className="videoRow__text">
        <h3>{title}</h3>
        <p>
          {channel}
          {" . "}
          <span className="videoRow__text__subs">{subs}</span>
          {" subscribers . "}
          {views}
          {" views . "}
          {timestamp}
          {" days ago"}
        </p>
        <p className="videoRow__text__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
