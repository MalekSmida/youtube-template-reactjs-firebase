import React from "react";
import "./index.scss";
import VideoRow from "./VideoRow";
import ChannelRow from "./ChannelRow";
import logo from "./youtube.jpg";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

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
        image="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.0-9/83020011_725652291572674_1450846223241052160_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=n2Zeto3D8qkAX-9jz7Q&_nc_ht=scontent.ftun6-1.fna&oh=df464cdbcb44b26d2924642c597b63c8&oe=5F8D5D6B"
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
