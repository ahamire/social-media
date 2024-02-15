import { useState } from 'react'
import './login.css'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Perform actions with the form data, such as authentication or API calls
    console.log("Form submitted with data:", formData);
  }

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <div className="bgLogin">
      <div className='ABC'>
        <div className='c-signup'>
          <Form onSubmit={handleSubmit}>
            <h1 className='text-black'>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label className='text-black'>Username</Form.Label>
              <Form.Control type="text" name="username" placeholder="Enter username" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='text-black'>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} className='text-black'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='text-black'>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit" className='btnsinup'>
              Submit
            </Button>
            <p className='text-black'>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          </Form>
          
        </div>
      </div>
    </div>
  )
}

export default Login;
