import React from "react";

// local files
import "./index.scss";

/**
 * present the video row in search page
 *
 * @param {String} title
 * @param {String} channel
 * @param {String} views
 * @param {String} subs
 * @param {String} timestamp
 * @param {String} channelImage
 * @param {String} description
 */
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
