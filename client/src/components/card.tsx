import { useState } from 'react'
import './App.css'
import Header from "./header"
import { Button, Nav, Image, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
const Card = ()=>{
    return (       
    <main>
    <div className='card'>
      <nav className='avatar_banner'>
        <Col xs={6} md={4} className='banner'>
          <Image src="./src/img/Rectangle 45.png" roundedCircle className='avatar_card'/>
        </Col>
        <h1 className='card_Name'>Felicia Hayat</h1>
      </nav>
      <Image src="./src/img/Rectangle 45.png" className='card_img'/>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum laboriosam quisquam cum, quae nulla voluptatum alias. Animi dolorum obcaecati voluptates est odit incidunt explicabo voluptas, inventore, quia saepe officia aliquam.</p>
      <h3>like</h3>
      <nav>
      <Button className="like_btn">like</Button>
      <Button className="comment_btn">comment</Button>
      </nav>
    </div>
    
 </main>)
}
export default Card