import React from "react";
import "./index.scss";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

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
