import React from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import {IconButton,Avatar} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
             <IconButton>
                 <MenuIcon />
             </IconButton>
             
             <img src="https://i.blogs.es/16b956/gmail-nuevo-logo-google-workspace/840_560.jpg"  alt="" />
                
            </div>

            <div className="header_middle">

                <SearchIcon />
                <input placeholder="Seach mail" type="text"/>
                <ArrowDropDownIcon className="headerInput_caret" />
            </div>

            <div className="header_right">

            <IconButton>
                 <AppsIcon />
             </IconButton>

             <IconButton>
                 <NotificationsIcon />
             </IconButton>

             <Avatar/>

            </div>

    
        </div>
    )
}

export default Header
