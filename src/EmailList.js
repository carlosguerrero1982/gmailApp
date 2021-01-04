import { Checkbox,Icon,IconButton } from '@material-ui/core';
import React from 'react';
import './EmailList.css';
import EmailRow from './EmailRow'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import InboxIcon from '@material-ui/icons/Inbox';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

function EmailList() {
    return (
        <div className="emailList"> 
           <div className="emailListSetting">
                <div className="emailListSettingsLeft">
                    <Checkbox />

                    <IconButton>
                        <ArrowDropDownIcon / >
                    </IconButton>

                    <IconButton>
                        <RedoIcon / >
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon / >
                    </IconButton>
                </div>
            
                <div className="emailListSettingsRight">
                    <IconButton>
                        <ChevronLeftIcon / >
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon / >
                    </IconButton>

                    <IconButton>
                        <KeyboardHideIcon / >
                    </IconButton>

                    <IconButton>
                        <SettingsIcon / >
                    </IconButton>
                </div>
           </div>

           <div className="emailListSections">

               <Section Icon={InboxIcon} title="Primary" color="red" selected />
               <Section Icon={PeopleIcon} title="Social" color="#1A73E8"  />
               <Section Icon={LocalOfferIcon} title="Promotions" color="green"  />
           </div>

           <div className="emailList_lst">

            <EmailRow title="Twitch" subject="Hey fellas welcome"
            description="This is a test" time="14:25pm" />

           </div>
        </div>
    )
}

export default EmailList
