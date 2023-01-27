import Home from "./pages/home/Home"; 
import List from "./pages/list/List";
import Login from "./pages/login/Login"
import New from "./pages/new/New";
import Single from "./pages/single/Single";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { productInputs, userInputs } from "./formSource";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userID" element={<Single/>}/>
              <Route 
                path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>

            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productsID" element={<Single/>}/>
              <Route 
                path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
