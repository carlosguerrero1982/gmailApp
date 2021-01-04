import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import './EmailRow.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';

function EmailRow({id,title,subject,description,time}) {
    return (
        <div className="emailrow">
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
                <h4>{subject}
                <span className="emailRowDesc">
                    {description}
                </span>
                </h4>
            </div>

            <div className="emailrowDescriptions">
                {time}
            </div>
        </div>
    )
}

export default EmailRow
