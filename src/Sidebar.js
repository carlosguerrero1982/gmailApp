import React from 'react';
import './Sidebar.css';
import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from './SidebarOption';
import InboxIcon from "@material-ui/icons/Inbox";

 function Sidebar() {
    

    return (
        <div className="sidebar">
            <Button className="sidebar_compose" startIcon={<AddIcon fontSize="large" />}>COMPOSE</Button>

            <SidebarOption Icon={InboxIcon} title="Index" number={54} />
        </div>
    )
}

export default Sidebar

