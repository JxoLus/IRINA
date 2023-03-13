import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./routes/Main.js";
import Detail from "./routes/Details.js";

function RouterIRINA() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movie/:id" element={<Detail />} /> */}
      </Routes>
    </Router>
  );
}

export default RouterIRINA;
