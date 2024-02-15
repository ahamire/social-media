import { useState } from 'react'
import './login.css'
import { Button, Nav, Image, Col, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
const singup = ()=>{
    return (<>
    <div className='ABC'>
        <div className='c-signup'>
            <Form >
            <h1 className='text-black'>singup</h1>
      <Form.Group className="mb-3" controlId="formBasicusername">
        <Form.Label  className='text-black'>username</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  className='text-black'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className='text-black'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" className='btnsinup'>
        Submit
      </Button>
      <h1 className='text-black'>have an account? <Link to="/login">Login</Link></h1>
    </Form>
    </div>
    </div>
    </>)
}
export default singup