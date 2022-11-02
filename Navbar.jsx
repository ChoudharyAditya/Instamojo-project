import React from "react";
import { useNavigate} from 'react-router-dom';

function Navbar()  {
  const navigate = useNavigate();

  const navigateToOrder = () => {
    navigate('/Order');
  };

  const navigateHome = () => {
    navigate('/');
  };
  return (
  
    <div className="Nav-bar">
      <h1 id="nav-heading">SMART-SHOP "U"</h1>
      <button id="home" onClick={navigateHome}  type="button">Home</button>
      <button id="order" onClick={navigateToOrder} type="button">Order</button>
      </div>
  );
};
export default Navbar;