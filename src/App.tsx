import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Page404 from "./pages/error/Page404";
import Feed from "./pages/feed/Feed";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
