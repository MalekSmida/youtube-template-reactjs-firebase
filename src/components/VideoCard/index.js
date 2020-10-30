import React from "react";

// node modules
import Avatar from "@material-ui/core/Avatar";

// local files
import "./index.scss";

/**
 * present the video card that appears in the main page
 *
 * @param {String} title
 * @param {String} channel
 * @param {String} views
 * @param {String} timestamp
 * @param {String} channelImage
 * @param {String} image
 */
function VideoCard({ title, channel, views, timestamp, channelImage, image }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={channelImage} alt={title} />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__info__avatar"
          alt="Malek Smida"
          src={image}
        />

        <div className="videoCard__info__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views}
            {" . "}
            {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
