import React from "react";

// local files
import "./index.scss";
import { VideoCard } from "../../components";
import logo from "../../assets/youtube.jpg";

function VideoSection() {
  return (
    <div className="videoSection">
      <h2>Recommended</h2>
      <div className="videoSection__videos">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <VideoCard
            key={item}
            title="Creating youtube template from scratch"
            channel="Malek Smida"
            views="1.4M Views"
            timestamp="5 days ago"
            channelImage={logo}
            image="https://i.ibb.co/sH5B3n0/VAPORGRAM1589311597915.jpg"
          />
        ))}
      </div>
    </div>
  );
}

export default VideoSection;
