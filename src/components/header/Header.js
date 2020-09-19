import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

import { IconButton } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Header = ({ backButton }) => {
  const hsitory = useHistory();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => hsitory.replace(backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          className="header__logo"
          alt="tinder logo"
        />
      </Link>
      <Link to="/chats">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
