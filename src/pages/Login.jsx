import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const submit = (data) => {
    console.log(data)
    axios.post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
      .then(res => {navigate('/')
      console.log(res)
      localStorage.setItem('token', res.data.data.token)
  }
      )
      .catch((error) => {
        if (error.response?.status === 404) { // 404
          alert("Credenciales incorrectas");
        } else {
          console.log(error.response?.data);
        }
      })
  }

  return (
    <div className="container">
      <div className='Login'>
        <div className="login-container">
          <h2>Create Account</h2>
          <div className="social-redes">
            <a><i className="fa-brands fa-twitter" style={{ color: '#52a7e8', fontSize: '1rem' }}></i> Sign up with Twitter</a>
            <a><i className="fa-brands fa-facebook" style={{ color: '#1977f3', fontSize: '1rem' }}></i> Sign up with Facebook</a>
          </div>
          <div className="login-input">
            <p>-OR-</p>
            <form onSubmit={handleSubmit(submit)}>
              {/* <input type="text" placeholder='Full Name' /> */}
              <input type="text" placeholder='Email Address' {...register("email")} />
              <input type="text" placeholder='Password' {...register("password")} />
              <div className="submit">
                {/* <a type='submit' style={{cursor: 'pointer'}}>Login</a> */}
                <button type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;