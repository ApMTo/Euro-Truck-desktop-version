import React from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import createUserAccout from '../../Helper/createUserAccount';
const Signup = () => {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login')
    }

    const createAccount = (e) => {
        e.preventDefault();
        const [name, surname, username, email, password] = e.target;
        if (name.value.trim() === '' || surname.value.trim() === '' || username.value.trim() === '' || email.value.trim() === '' || password.value.trim() === '') {
            return;
        }
        const newUser = {
            id: new Date().getTime().toString(),
            name: name.value,
            surname: surname.value,
            username: username.value,
            email: email.value,
            password: password.value,
            profileImage: 'https://static.vecteezy.com/system/resources/previews/020/911/747/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
            activeAds: [],
        }

        createUserAccout(newUser);
        goToLogin();


    }
  return (
    <div className='signup'>
    <div className='signupBody'>
        <div className='signup_intro'>
            <h4>Sign Up</h4>
            <p>Fast and easy registration. Join us and start your journey!</p>
        </div>
        <div className='signupForm'>
            <form onSubmit={createAccount}>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Surname' />
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
        <div className='terms'>
            <p>By signing up, you agree to the Euro Truck Terms of Service.</p>
        </div>
        <div className='login_field'>
            <p>Already have an account?</p>
            <button onClick={goToLogin}>Login</button>
        </div>
    </div>
</div>

  );
};

export default Signup;
