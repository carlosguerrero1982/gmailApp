import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import SendMail from './SendMail';
import EmailList from './EmailList';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectSendMessageisOpen} from './features/mailSlice';
import {selectedUser,login} from './features/userSlice';
import {useDispatch} from "react-redux";
import {auth} from './firebase';


function App() {

  const sendMessageisOpen = useSelector(selectSendMessageisOpen);
  const user = useSelector(selectedUser);
  const dispatch = useDispatch();


  useEffect(() => {
    
    auth.onAuthStateChanged((u) =>{

      if (u){

        dispatch(login({

          displayName:u.displayName,
           email:u.email,
          photoURL:u.photoURL
        }))
      }
    })  
  }, [])


  return (

    <Router>

      {!user ? (
      
      <Login />
      ):(

        <div className="app">

      <Header />

      <div className="app_body">

      <Sidebar />

      <Switch>
          <Route path="/mail">
            <Mail />
           
          </Route>

          <Route path="/">
           <EmailList />
          </Route>
      </Switch>
      </div>

{sendMessageisOpen && <SendMail />}
     
    </div>

      )
      }
    
    </Router>
  );
}

export default App;
