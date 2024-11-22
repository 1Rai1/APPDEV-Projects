import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductOverview from "./Components/ProductOverview";
import Specifications from "./Components/Specification";
import SetupInstructions from "./Components/SetUpInstruction";
import UsingTheKeyboard from "./Components/UsingKeyBoard";
import Troubleshooting from "./Components/TroubleShooting";
import Maintenance from "./Components/Maintenance";
import WarrantySupport from "./Components/WarrantySupport";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/productoverview">Product Overview</Link></li>
          <li><Link to="/specifications">Specifications</Link></li>
          <li><Link to="/setup-instructions">Setup Instructions</Link></li>
          <li><Link to="/using-keyboard">Using The Keyboard</Link></li>
          <li><Link to="/troubleshooting">Troubleshooting</Link></li>
          <li><Link to="/maintenance">Maintenance</Link></li>
          <li><Link to="/warranty-support">Warranty and Support</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/productoverview" element={<ProductOverview />} />
        <Route path="/specifications" element={<Specifications />} />
        <Route path="/setup-instructions" element={<SetupInstructions />} />
        <Route path="/using-keyboard" element={<UsingTheKeyboard/>}/>
        <Route path="/troubleshooting" element={<Troubleshooting />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/warranty-support" element={<WarrantySupport />} />
      </Routes>
    </Router>
  )
}
export default App;
