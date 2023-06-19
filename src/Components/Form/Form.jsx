import '../main.css'
import Slider from "../Slider/Slider";
import { React ,useState } from 'react';
import loginData from '../Data/loginData';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true)
  const [passwordError, setPasswordError] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    password !== loginData.password ? setPasswordError('Please Enter Correct Password') : setPasswordError('')
  };

  const hidePassword = () => {
    setPasswordVisibility(false);
  };

  const revealPassword = () => {
    setPasswordVisibility(true);
  };

  return (
    <>
    <div className="signup-container">
    <div className="signup-form">
      <div className="signup-form-heading">
        <h3>Create an account</h3>
        <p>Let's get started with your 30 day free trial</p>
      </div>
      <div className="signup-form-inputs">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p id="nameError"></p>
          <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p id="emailError" />
        <input  
          type={passwordVisibility ? 'text' : 'password'}
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p id="passwordError">{passwordError}</p>      
        <i className="fa fa-sharp fa-light fa-eye" onClick={revealPassword} style={{ display: passwordVisibility ? 'none' : 'block' }} /> 
        <i className="fa-sharp fa-solid fa-eye-slash" onClick={ hidePassword} style={{ display: passwordVisibility ? 'block' : 'none' }} />
      </div>
      <div className="signup-form-buttons">
        <button type="submit" className="createaccountbtn" id="creatAccnt" onClick={handleSubmit}>
          Create account
        </button>
        <button type="submit" className="googlebtn">
          <img src="google.png" alt="Google" />
          <p>Sign up with Google</p>
        </button>
      </div>
      <div className="signup-form-footer">
        <p>
          Already have an account?
          <span>
            <a href="login.html">
              <strong>Log in</strong>
            </a>
          </span>
        </p>
      </div>
    </div>
    <Slider/>
    </div>
    </>
  );
};

export default Form;


