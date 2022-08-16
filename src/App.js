import Nav from "./components/Nav";
import { Routes, Route } from 'react-router-dom'
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import Attandance from "./components/Attandance";
import Viewattandance from "./components/View_attandance";
import Studentrecord from "./components/std_login_record";
import Admin_Crud from "./components/std_attend_record";
import Edit from "./components/update";
function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Attandance' element={<Attandance/>} />
        <Route path='/Updata_Student_Data' element={<Edit/>} />
        <Route path='/View-attandance-sheet' element={<Viewattandance/>} />
        <Route path='/student-Record' element={<Studentrecord/>} />
        <Route path='/Admin_crud_Operation' element={<Admin_Crud/>} />
      </Routes>


      </div>
  );
}

export default App;
