import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [items, setItems] = useState([]);
  const [email_Id, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/getData')
      .then((res) => setItems(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    return passwordRegex.test(password);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.length <= 5) {
      alert('Please provide a valid name (more than 5  characters)');
    }
    else if(!validatePassword()){
      alert("Password must be at least 8 characters long and contain a combination of uppercase letters, lowercase letters, numbers, and special characters.")
    }
    else if (password !== confirmpassword) {
      alert('Passwords do not match');
    } else {
      axios
        .get(`http://localhost:5000/checkEmail/${email_Id}`)
        .then((res) => {
          if (res.data.exists) {
            alert('Email already exists');
          } else {
            axios
              .post('http://localhost:5000/addData', {
                email_Id: email_Id,
                name: name,
                password: password,
                confirmpassword: confirmpassword
              })
              .then((res) => {
                setItems(res.data);
                alert('Data saved successfully');
              })
              .catch((err) => {
                setError(err.message);
              });
          }
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };


    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="container-fluid p-5 form1">
              <form className="container p-5 form2" onSubmit={submitHandler}>
                <div className="form-group">
                  <label>EMAIL</label>
                  <input
                    type="email"
                    placeholder="PLEASE ENTER YOUR EMAIL"
                    name="email"
                    className="form-control"
                    value={email_Id}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>NAME</label>
                  <input
                    type="text"
                    placeholder="PLEASE ENTER NAME"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>PASSWORD</label>
                  <input
                    type="password"
                    placeholder="PLEASE ENTER PASSWORD"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>CONFIRM PASSWORD</label>
                  <input
                    type="password"
                    placeholder="PLEASE ENTER CONFIRM PASSWORD"
                    name="confirmPassword"
                    className="form-control"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary form-button1">
                  Sign Up
                </button>
                <p className="mt-3">Already have an account? <Link to="/Login">Login</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Register;
  