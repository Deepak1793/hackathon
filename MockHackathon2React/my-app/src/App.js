import React from 'react';
import './App.css';
// import Dashboard from './Components/dashboard/Dashboard';
import Header from './Components/header/Header';
// import ReadNow from './Components/readNow/ReadNow';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/register/Register';
import Accounts from './Components/accounts/Accounts';
import Loans from './Components/Loans/Loans';
import Home from './Components/Home/Home';
import Footer from './Components/footer/Footer';
// import SimpleAccordion from './Components/balance/Balance';
import ImgMediaCard from './Components/balance/Balance';
// import Transfer from './Components/Transfer/Transfer';


class App extends React.Component {
  render() {

    return <div>
      <Header /><br /><br />
      <Routes>
      <Route path='/' element={<Home />} />
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        <Route path='/accounts' element={<Accounts />} />
        <Route path='/loans' element={<Loans />} />
        <Route path='/register' element={<Register />} />
        <Route path='/balance' element={<ImgMediaCard/>} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/transfer' element={<Transfer/>} /> */}
        
      </Routes>
      <Footer />
    </div>
  }
}
export default App;
