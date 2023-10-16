
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from "./component/padge/Home"
import Login from './component/padge/Login';
import Register from "./component/padge/register";
import Users from './component/dashboard/users';
import Googlecallback from './component/padge/Googlecallback';
import Dashboard from './component/dashboard/dashbord';
import Logout from './component/padge/Logout';
import Requir from './component/padge/require';
import Edituser from "./component/padge/Edituser"
import Writer from "./component/padge/Writer"
import Categories from "./component/padge/Categoriess"
import Addcatogry from "./component/padge/Addcatogry"
import Editcat from "./component/padge/Editcat" 
import Adduser from "./component/padge/Adduser"
import Products from "./component/padge/Products"
import Addproduct from "./component/padge/Addproduct"
import Error404 from './component/padge/Error404';
import Requirback from './component/padge/Requireback';


function App() {
  return (

    <div >
      <Routes>
    
        <Route path='/*' element={<Error404 />}></Route>
        <Route element={<Requirback />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path='/home' element={<Home />} />
        <Route path="/auth/google/callback" element={<Googlecallback />} />
        <Route element={<Requir allowrole={["1995", "1991","1999"]} />}>
          <Route path='/dashbord' element={<Dashboard />}>
            <Route element={<Requir allowrole={["1995"]} />}>
              <Route path="users" element={<Users />} />
              <Route path='users/:id' element={<Edituser />} />
              <Route path='adduser' element={<Adduser />} />
            </Route>
            <Route element={<Requir allowrole={["1991", "1995"]} />}>
              <Route path='writer' element={<Writer />} />
            </Route>
            <Route element={<Requir allowrole={["1991", "1995"]} />}>
              <Route path='products' element={< Products/>} />
              <Route path='addproduct' element={< Addproduct/>} />

            </Route>
            <Route element={<Requir allowrole={["1995", "1999"]} />}>
              <Route path='categories' element={<Categories/>} />
              <Route path='categories/add' element={<Addcatogry/>} />
              <Route path='categories/:id' element={<Editcat />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
