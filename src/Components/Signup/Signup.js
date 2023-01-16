/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react';
import { useHistory,Link } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';

export default function Signup() {
  const history=useHistory()
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('');
  const [ Phone, setPhone ] = useState('');
  const [ Password, setPassword ] = useState('');
  const {firebase}= useContext(FirebaseContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, Password).then((result) => {
      result.user.updateProfile({ displayName: username }).then(() => {
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          username: username,
          Phone: Phone
          
        }).then(() => {
          history.push("/login")
        })
      })
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="logo"  onClick={()=>history.push('/')} ></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/login'> Login </Link>
      
      </div>
    </div>
  );
}