import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "./index.scss";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            alt="Youtube"
            className="header__left__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/640px-YouTube_Logo.svg.png"
          ></img>
        </Link>
      </div>
      <div className="header__middle">
        <input
          placeholder="Search"
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__middle__inputButton" />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallIcon className="header__right__icon" />
        <AppsIcon className="header__right__icon" />
        <NotificationsIcon className="header__right__icon" />
        <Avatar
          className="header__right__avatar"
          alt="Malek Smida"
          src="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.0-9/83020011_725652291572674_1450846223241052160_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=n2Zeto3D8qkAX-9jz7Q&_nc_ht=scontent.ftun6-1.fna&oh=df464cdbcb44b26d2924642c597b63c8&oe=5F8D5D6B"
        />
      </div>
    </div>
  );
}

export default Header;
