import { PersistentDrawerLeft } from "./Components/Sidebar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Home } from "./Page/Home";
import { Graphic } from "./Page/Graphic";
import { Order } from "./Page/Order";
import { Sign } from "./Page/Sign";
import { Login } from "./Page/Login";
import "./App.css";
import { Menu } from "./Page/Menu";

function App() {
  return (
    <div className="App">
  
        <PersistentDrawerLeft />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/graphic"} element={<Graphic />} />
          <Route path={"/order"} element={<Order />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/sign"} element={<Sign />} />
          <Route path="/menu" element={<Menu/>}/>
        </Routes>

    </div>
  );
}

export default App;
