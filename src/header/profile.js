import { useContext, useState } from 'react';
import { context, dispatchContext } from '../context.js';
import './profile.css';
import LoginForm from '../login/login.js'
import { User } from "../state.js";

function Profile() {
    const state = useContext(context);
    const dispatch = useContext(dispatchContext);
    let user = {name: '?'};
    if (state.user) user = state.users[state.user-1];
    const initial = user.name.charAt(0);

    function openModal()
    {
        dispatch({type: 'updateShowLoginForm', value: !state.showLoginForm});
    }
 
return (
    <>
    <div className="profile" onClick={openModal}>
    <span className="material-symbols-outlined font-36">person</span>
    </div>
    </>

);

}

export default Profile;