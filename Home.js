import "./styles.css";
import galaxyS22 from "./galaxyS22.jpg";
import galaxyS22Plus from "./galaxyS22Plus.jpg";
import galaxyS22Ultra from "./galaxyS22Ultra.jpg";
import iphone11 from "./iphone11.png";
import iPhone12 from "./iPhone12.png";
import iphone13 from "./iphone13.jpg";
import { useNavigate} from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();

  const navigateToOrder = () => {
    navigate('/Order');
  };
  
    return (<div>
      <div>
      <h1 id="samsung">Samsung</h1>
      <div className="product1">
      <img src={galaxyS22} id="S22" />
      <h2>Samsung Galaxy S22</h2>
      <p>₹72,999.00 for 8GB/128GB model</p>
      <button id="pay1" onClick={navigateToOrder}  type="button">Pay</button>
      </div>
      <div className="product2">
      <img src={galaxyS22Plus} id="S22P" />
      <h2>Samsung Galaxy S22+</h2>
      <p>₹84,999.00 for 8GB/128GB model</p>
      <button id="pay2" onClick={navigateToOrder} type="button">Pay</button>
      </div>
      <div className="product3">
      <img src={galaxyS22Ultra} id="S22U" />
      <h2>Samsung Galaxy S22 Ultra</h2>
      <p> ₹1,09,999.00 for 12GB/256GB model</p>
      <button id="pay3" onClick={navigateToOrder} type="button">Pay</button>
      </div>
      </div>
      <br></br>
      <div>
      <div>
      <h1 id="apple">Apple</h1>
      </div>
      <div className="product4">
      <img src={iphone13} id="i13" />
      <h2>Apple Iphone-13</h2>
      <p>₹80,990.00 for 256GB model</p>
      <button id="pay4" onClick={navigateToOrder} type="button">Pay</button>
      </div>
      <div className="product5">
      <img src={iPhone12} id="i12" />
      <h2>Apple Iphone-12</h2>
      <p>₹60,990.00 for 128GB model</p>
      <button id="pay5" onClick={navigateToOrder} type="button">Pay</button>
      </div>
      <div className="product6">
      <img src={iphone11} id="i11" />
      <h2>Apple Iphone-11</h2>
      <p> ₹46,990.00 for 64GB model</p>
      <button id="pay6" onClick={navigateToOrder} type="button">Pay</button>
      </div>
      </div>
  
      </div>
      
    );
  }
  