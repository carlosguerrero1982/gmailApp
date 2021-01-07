import React from 'react';
import './Login.css';
import {auth} from './firebase';
import {provider} from './firebase';
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux";
import {login} from './features/userSlice';


function Login() {

    const dispatch = useDispatch();

    const SignIn = () =>{

        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({

                displayName:user.displayName,
                email:user.email,
                photoURL:user.photoURL
            }))
        })

        .catch(error => alert(error.message))
    };


    return (
        <div className="login">
            <div className="login_container">
                <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt=""/>

                <Button onClick={SignIn} variant="contained" color="primary">Login</Button>

            </div>
        </div>
    )
}

export default Login
