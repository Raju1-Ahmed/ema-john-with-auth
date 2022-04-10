import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState({})
    const [password, setPassword] = useState({})
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur= event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur= event =>{
        setPassword(event.target.value)
    }
    const handleUserSubmit= event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if(user){
        navigate('/shop')
    }

    return (
        <div className='form-Container'>
            <div>
            <h2 className='form-title'>This is login..</h2>
            <form onSubmit={handleUserSubmit}>
            <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input onBlur={handleEmailBlur} type="email" name='email' id='' required/>
           </div>
           <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input onBlur={handlePasswordBlur} type="password" name='password' id='' required/>
           </div>    
           <p style={{color: 'red'}}>{error?.message}</p>   
           {
            loading && <p>loading...</p>
           }   
           <input className='form-submit' type="submit"  value="login"/>
           </form>   
        <p>
            New to Emajohn? <Link className='form-link' to="/signup">Create a account</Link>
        </p>
            </div>

        </div>
    );
};

export default Login;