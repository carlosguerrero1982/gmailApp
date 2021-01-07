import React from 'react';
import './SendMail.css';
import CloseIcon from "@material-ui/icons/Close";
import Button from '@material-ui/core/Button';
import {useForm} from 'react-hook-form';
import {useDispatch} from "react-redux";
import {closeSendMesage} from './features/mailSlice';
import {db} from './firebase';
import firebase from "firebase";

 function Sendmail() {

    const dispatch = useDispatch();
    
    const {register,handleSubmit,watch,errors} =useForm();

    const onSubmit = (formData) =>{

        console.log(formData);
        db.collection('emails').add({
            to:formData.to,
            subject:formData.subject,
            message:formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        dispatch(closeSendMesage());
    };

    return (
        <div className="sendmail">
            <div className="sendMail-header">
                <h3>New message</h3>
                <CloseIcon onClick={()=>dispatch(closeSendMesage())} className="sendMailClose"/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}> 
                <input type="email" name="to"  placeholder="To" type="text" ref={register({required:true})}/>
                {errors.to && <p className="toSendMail">This field is required!!</p>}
                <input name="subject" placeholder="Subject" type="text" ref={register({required:true})}/>
                {errors.subject && <p className="toSendMail">This field is required!!</p>}
                <input name="message" className="sendMailInput3"  placeholder="Message"  
                type="text"
                ref={register({required:true})}
                 />
                  {errors.message && (<p className="toSendMail">This field is required!!</p>)}

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