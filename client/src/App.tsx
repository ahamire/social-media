import { useState } from 'react'
import './App.css'
import Header from "./components/header"
import Signup from './signup'
import { Button, Card, Nav, Image, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from './login'
import Account from './account'
function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/:account/' element={<Account/>}></Route>
        </Routes>
      </>
    </BrowserRouter>
  )
}

export default App
