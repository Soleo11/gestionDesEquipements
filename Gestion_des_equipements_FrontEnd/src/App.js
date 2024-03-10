import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import AddEquipement from './component/AddEquipement';
import EditEquipement from './component/EditEquipement';

function App() {
  return (
    <>
    <Navbar/>

    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addEquipement' element={<AddEquipement/>}></Route>
        <Route path='/editEquipement/:id' element={<EditEquipement/>}></Route>
    </Routes>
    </>
  );
}

export default App;
