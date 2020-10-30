import React from "react";

// node modules
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

// local files
import "./index.scss";

/**
 * display Malek Smida channel when render search page
 *
 * @param {String} channel
 * @param {Boolean} verified
 * @param {String} subs
 * @param {String} nbOfVideos
 * @param {String} description
 * @param {String} image
 */
function ChannelRow({
  channel,
  verified,
  subs,
  nbOfVideos,
  description,
  image,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__avatar" alt={channel} src={image} />

      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleIcon />}
        </h4>
        <p>
          {subs}
          {" . "}
          {nbOfVideos}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
