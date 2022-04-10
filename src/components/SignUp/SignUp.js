import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState({})
    const [password, setPassword] = useState({})
    const [confirmpass, setConfirmpass] = useState({})
    const navigate =useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)


    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const handlePassBlur = event =>{
        setPassword(event.target.value)
    }
    const handlConfirmPassBlur = event =>{
        setConfirmpass(event.target.value)
    }

    if(user){
        navigate('/shop')
    }

    const handlCreateUser = event =>{
        event.preventDefault();
       if(password.length <6){
           setPassword('Password can be 6 Carecters longer')
        return ;
        }
        createUserWithEmailAndPassword(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
    }

    return (
        <div className='form-Container'>
            <div>
            <h2 className='form-title'>This is sign Up</h2>
            <form onSubmit={handlCreateUser}>
            <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input onBlur={handleEmailBlur} type="email" name='email' id='' required/>
           </div>
           <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input onBlur={handlePassBlur} type="password" name='password' id='' required/>
           </div>          
           <div className='input-group'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <input onBlur={handlConfirmPassBlur} type="password" name='confimpassword' id='' required/>
           </div>          
           <input className='form-submit' type="submit"  value="login"/>
           </form>
            <p>
            Already have an account? <Link className='form-link' to="/login"> Login</Link>
            </p>
        </div>

        </div>
    );
};

export default SignUp;