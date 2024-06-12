import { useContext, useState } from 'react';
import { context, dispatchContext } from '../context.js';
import './login.css';

function LoginForm() {

    const state = useContext(context);
    const dispatch = useContext(dispatchContext);

    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    
    function logIn() {

        const userlist = state.users
        var result = state.users.find(uservalidate => uservalidate.email === userEmail)
        if (result!=undefined){
            var usernum = userlist.findIndex(userverify => userverify.email === userEmail)
            if (result.password === userPassword) {
                dispatch({
                    type: 'changeUser',
                    userNum: usernum
                });
                dispatch({
                    type: 'updateShowLoginForm',
                    showLoginForm: false
                });
            }
            else {
                setErrors("Wrong Password!");
            }
        }
        else{
            setErrors("Email Not Found!");
        }
    }

    function closeme() {
        dispatch({type: 'updateShowLoginForm', value: false});
    }


    return (

        <div className="modal">
            {state.user ?  
                <div className='xx' onClick={closeme}>
                    <span className="material-symbols-outlined">close</span>
                </div>
             : ''}
            
            <div>Email</div>
            <input type="text" placeholder="email" value={userEmail} onChange={e => {setEmail(e.target.value)}} />
            <div>Password</div>
            <input type="password" placeholder="password" value={userPassword} onChange={e => {setPassword(e.target.value)}} />
            <div>
            <button className="submit-bttn" onClick={logIn}>Log In</button>
            </div>
            <div className="error-message">{errors}</div>
        </div>

    )
}

export default LoginForm;