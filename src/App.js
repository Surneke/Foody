import { PersistentDrawerLeft } from "./Components/Sidebar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Home,Graphic, Order, Sign, Login, Menu } from './Page'

export const App = () => {
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
;
