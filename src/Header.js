import React from 'react';
import styles from './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Home';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import { Avatar, IconButton } from '@material-ui/core';


function Header() {
    return (
        <div className="header">
            <div className="header__left"></div>
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.iphonehacks.com%2Fwp-content%2Fuploads%2F2019%2F12%2FFacebook-logo.jpg&f=1&nofb=1" alt="Facebook logo" />
            <div className="header__input">
                <SearchIcon />
                <input placeholder='Search Facebook' text="text" />
            </div>
            <div className="header__center"></div>
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <GolfCourseIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>sshaa</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default Header
