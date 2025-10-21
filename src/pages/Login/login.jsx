
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export const Login =  () =>   { 
    const [action, setAction] = useState("Sign Up");
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/home');
    };
    return ( 
    <div className='container'>
        <div className='header'>
            <div className='text'> {action} 
                <div className='underline'></div>
            </div>
        </div>
        <div className='inputs'>
            {action === 'Login' ? null : 
                <div className='input'>
                    <IoPerson className='img' />
                    <input type="text" placeholder='Name'/>
                </div>}
                    <div className='input'>
                        <MdEmail className='img' />
                        <input type="email" placeholder='Email Id'/>
                    </div>
                        <div className='input'>
                           <RiLockPasswordFill className='img'/>
                           <input type="password" placeholder='Password'/>
                        </div>
                        {action === 'Sign Up' ? null : (
                            <div className="forget-password">Perdeu a senha ? <span>Click Aqui!</span></div>
                        )}
                        <div className="submit-conteiner">
                            <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => {setAction('Sign Up')}}>Sign Up</div>
                            <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={handleLogin}>Login</div>
                        </div>
        </div>
    </div>
)
}