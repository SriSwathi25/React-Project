import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState([]);
  const [modal, setModal] = useState(false);
  const addData = (data)=>{
    setUserData((userData)=>[...userData,data]);
  }

  const showModal = (flag)=>{
    setModal(true);
  }
  return (
    <div className="App">
    <h1>User Age Data</h1>
    <UserForm addDataHandler = {addData} showModal = {showModal} />
    <div style={modal ? {display : 'block'} : {display : 'none'}}>
      <p>Please Enter Valid Name</p>
      <button onClick={()=>setModal(false)}>Ok</button>
    </div>
    <UserList data = {userData} />
    </div>
  );
}

export default App;
