import { useState } from 'react';
import '../App.css';
import { Button, Card, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [currentUser, setCurrentUser] = useState("user123");
  return (
    <header>
      <div className='lof'>
        <Image src="./src/img/logo1.png" className='logo_img' />
        <h1 className='logo'>Ahamire</h1>
      </div>
      <Nav variant="pills" defaultActiveKey="/" className='pills-nav'>
        <Nav.Item>
          <Nav.Link as={Link} to="/" className="custom-link">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/chat" className="custom-link">Chat</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/followers" className="custom-link">Followers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {
            currentUser!="" &&(
              <Nav.Link as={Link} to={`/${currentUser}/`} className="custom-link">My Account</Nav.Link>
          )
          }
          </Nav.Item>
      </Nav>
      <Button variant="warning" className='logout'>Log out</Button>{' '}
    </header>
  );
};

export default Header;
