import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <div className='Login'>
        <div className="login-container">
          <h2>Create Account</h2>
          <div className="social-redes">
            <a><i class="fa-brands fa-twitter" style={{ color: '#52a7e8', fontSize: '1rem' }}></i> Sign up with Twitter</a>
            <a><i className="fa-brands fa-facebook" style={{ color: '#1977f3', fontSize: '1rem' }}></i> Sign up with Facebook</a>
          </div>
          <div className="login-input">
            <p>-OR-</p>
            <form action="">
              <input type="text" placeholder='Full Name' />
              <input type="text" placeholder='Email Address' />
              <input type="text" placeholder='Password' />
              <div className="submit">
                <a href="">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;