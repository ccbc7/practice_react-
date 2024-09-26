import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./page1DetailA";
import { Page1DetailB } from "./page1DetailB";
import { Page2 } from "./Page2";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />}>
            <Route path="page1_detailA" element={<Page1DetailA />} />
            <Route path="page1_detailB" element={<Page1DetailB />} />
          </Route>
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
