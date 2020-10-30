import React from "react";

// node modules
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

// local files
import "./index.scss";
import { VideoRow, ChannelRow } from "../../components";
import logo from "../../assets/youtube.jpg";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        channel="Malek Smida"
        verified
        subs="62M subscribers"
        nbOfVideos="412 videos"
        description="Enthusiastic full stack engineer"
        image="https://i.ibb.co/sH5B3n0/VAPORGRAM1589311597915.jpg"
      />
      <hr />
      <h5>Latest from Malek Smida</h5>
      <div className="searchPage__videos">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <VideoRow
            key={item}
            title="Creating youtube template from scratch"
            channel="Malek Smida"
            views="100M"
            subs="62M"
            timestamp="5"
            channelImage={logo}
            description="Enthusiastic full stack engineer"
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
