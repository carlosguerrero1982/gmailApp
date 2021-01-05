import React from 'react';
import './SendMail.css';
import CloseIcon from "@material-ui/icons/Close";
import Button from '@material-ui/core/Button';

 function Sendmail() {
    

    return (
        <div className="sendmail">
            <div className="sendMail-header">
                <h3>New message</h3>
                <CloseIcon className="sendMailClose"/>
            </div>

            <form>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>

                <div className="sendMailOptions">
                    
                    <Button className="SendButton" 
                    variant="contained" 
                    color="primary" 
                    type="submit"

                    >  
                    Send
                   </Button>
                </div>
            </form>
        </div>
    )
}

export default Sendmail