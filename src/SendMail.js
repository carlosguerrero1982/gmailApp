import React from 'react';
import './SendMail.css';
import CloseIcon from "@material-ui/icons/Close";
import Button from '@material-ui/core/Button';
import {useForm} from 'react-hook-form';

 function Sendmail() {
    
    const {register,handleSubmit,watch,errors} =useForm();

    const onSubmit = (data) =>{

        console.log(data);

    }

    return (
        <div className="sendmail">
            <div className="sendMail-header">
                <h3>New message</h3>
                <CloseIcon className="sendMailClose"/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}> 
                <input name="to" placeholder="To" type="text" ref={register({required:true})}/>
                <input name="subject" placeholder="Subject" type="text" ref={register({required:true})}/>
                <input name="message" className="sendMailInput3"  placeholder="Message"  
                type="text"
                ref={register({required:true})}
                 />

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