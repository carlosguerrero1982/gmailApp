import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import './EmailRow.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import {useHistory} from "react-router-dom";

function EmailRow({id,title,subject,description,time}) {

    const history = useHistory();

    return (
        <div onClick={()=>{history.push('/mail')}}  className="emailrow">
            <div className="emailrowOptions">

                <Checkbox />

                <IconButton>

                <StarBorderOutlinedIcon />

                </IconButton>

                <IconButton>

                <LabelImportantOutlinedIcon />

                </IconButton>

            </div>

            <h3 className="emailrowTitle">

               {title}
            </h3>

            <div className="emailrowMessages">
                <h4>{subject}{" "}
                <span className="emailRowDesc">-
                    {description}
                </span>
                </h4>
            </div>

            <p className="emailrowTime">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
