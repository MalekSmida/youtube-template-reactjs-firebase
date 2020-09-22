import React from "react";
import "./index.scss";
import VideoCard from "./VideoCard";
import logo from "./youtube.jpg";

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
            image="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.0-9/83020011_725652291572674_1450846223241052160_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=n2Zeto3D8qkAX-9jz7Q&_nc_ht=scontent.ftun6-1.fna&oh=df464cdbcb44b26d2924642c597b63c8&oe=5F8D5D6B"
          />
        ))}
      </div>
    </div>
  );
}

export default VideoSection;
