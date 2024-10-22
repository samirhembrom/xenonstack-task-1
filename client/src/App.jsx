import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Properties } from "./Pages/Properties";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { Navbar } from "./components/Navbar";
import { Logout } from "./Pages/Logout";
import { Error } from "./Pages/Error";
import { AdminLayout } from "./components/layouts/Admin-Layout";
import { AdminUsers } from "./Pages/Admin-Users";
import { AdminContacts } from "./Pages/Admin-Contacts";
// import { AdminUpdates } from "./Pages/Admin-Update";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/properties" element={ <Properties /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/logout" element={ <Logout /> } />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="users" element={<AdminUsers/>}/>
            <Route path="contacts" element={<AdminContacts/>}/>
            {/* <Route path="update" element={<AdminUpdates/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;