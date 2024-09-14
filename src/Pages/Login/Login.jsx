import React from 'react';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import loginToAccount from '../../Helper/loginToAccount';

const Login = ({usersData, fetchData}) => {
    const navigate = useNavigate();
    const goToRegister = () => {
        navigate('/signup')
    }

    const loginAccount = (e) => {
        e.preventDefault();
        const [username, password] = e.target;
        const findUser = usersData.find((user) => user.password === password.value && user.username === username.value || user.email === username.value );
        if (findUser) {
            loginToAccount(findUser);
            fetchData()
            navigate('/announcements')
        }
    }
    return (
        <div className='login'>
            <div className='loginBody'>
                <div className='goBack'>
                    <Link to='/announcements'><i className="fa-solid fa-arrow-left"></i></Link>
                </div>
                <div className='login_heading'>
                    <h4>Login</h4>
                </div>
                <div className='loginForm'>
                    <form onSubmit={loginAccount}>
                        <input type="text" placeholder='Username or email'/>
                        <input type="password" placeholder='Password' />
                        <button>Login</button>
                    </form>
                </div>
                <div className='register_field'>
                    <p>Don't have an account on Euro Truck?</p>
                    <button onClick={goToRegister}>Signup</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
