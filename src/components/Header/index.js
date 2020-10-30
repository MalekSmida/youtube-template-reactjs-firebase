import React, { useState } from "react";

// node modules
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link, useHistory } from "react-router-dom";

// local files
import "./index.scss";

/**
 * header of the application
 */
function Header() {
  const [inputSearch, setInputSearch] = useState("");
  const history = useHistory();

  const onOpenSearchPage = () => {
    history.push(`/search/${inputSearch}`);
  };
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
        <form onSubmit={onOpenSearchPage}>
          <input
            placeholder="Search"
            type="text"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
        </form>
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
          src="https://i.ibb.co/sH5B3n0/VAPORGRAM1589311597915.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
