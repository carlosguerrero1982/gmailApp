import React from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import {IconButton,Avatar} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useSelector} from "react-redux";
import{selectedUser,logout} from './features/userSlice';
import {auth} from './firebase';
import {useDispatch} from "react-redux";

function Header() {

    const user = useSelector(selectedUser);
    const dispatch = useDispatch();

    const SignOut = () =>{
        auth.signOut().then(()=>dispatch(logout()))

    }


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

             <Avatar  style={{cursor: "pointer"}} onClick={SignOut} src={user?.photoURL}/>

            </div>

    
        </div>
    )
}

export default Header
