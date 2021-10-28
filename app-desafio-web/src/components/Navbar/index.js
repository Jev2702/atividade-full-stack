import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SideBarData';
import './styles.css';
import { IconContext } from 'react-icons';
import { getUser } from '../../utils/Auth';
import { Modal, Button } from 'react-bootstrap';

function Navbar({ setToken, token }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const _logOut = () => {
    localStorage.removeItem("token");
    setToken("")
    handleClose();
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Atenção</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deseja realizar logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Não
          </Button>
          <Button variant="primary" onClick={_logOut}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>

          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to='#' className='menu-bars'>
            <AiIcons.AiOutlineLogout onClick={handleShow} />
          </Link>

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <p>{item.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>

        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
