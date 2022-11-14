import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './Components/Contacts';
import Home from './Components/Home';
import ListUser from './Components/ListUser';
import NavUser from './Components/NavUser';
import Profil from './Components/Profil';

function App() {
  const [users,setUsers] = useState([
    {name : "Moez", city :"Mourouj",id : 1},
    {name : "Brahim", city:"Rades", id : 2},
    {name : "Ramy", city :"Menzel Jamil", id : 3}
  ])
  return (
    <div>
      <NavUser/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list' element={<ListUser users={users}/>}/>
        <Route path='/brahim' element={<Contacts/>}/>
        <Route path='/list/:moez' element={<Profil users={users}/>}/>
      </Routes>
    </div>
  );
}

export default App;
