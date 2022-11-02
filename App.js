import "./styles.css";
import Navbar from "./Navbar.jsx";
import {Routes, Route} from "react-router-dom";
// import Order from "./Order";
import Home from "./Home.js";
import Form from "./Form.js";

// <Home />
//     <Form />

export default function App() {
  return (<div>
    <Navbar />
    
<Routes>
<Route exact path="/" element={<Home />} />
<Route  path="/Order" element={<Form />} />
</Routes>
    </div>
 );
}
