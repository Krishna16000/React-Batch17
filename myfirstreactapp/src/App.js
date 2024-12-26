
// import './App.css';
// import Hello from './components/Hello';
// import StatesEvents from './components/StateEvents';
// import Count from './components/Count'
// import AddToList from './components/AddToList';
// import Table from './components/Table';
// import ComponentA from './components/ComponentA';
// import CondationALRendering from'./components/CondationALRendering';
// import InputHandler from './components/InputHandler';
// import Usestate from "./components/Usestate";
// import Myexample from './components/Myexample';
// import Parent from './components/Parent';
// import Task from "./components/Task17july";
// import Useeffect from './components/Useeffect';
// import Usestate from './components/Usestate';
// import Onchange from './components/Onchange';
// import Onsubmit from'./components/Onsubmit';
// import Map from './components/Map';
// import Filter from './components/Filter';
// import Fetch from './components/Fetch';
// import Axios from './components/Axios';
import FirstComp from './components/FirstComp';
import FourthComp from './components/FourthComp';
import SecondComp from './components/SecondComp';
import ThirdComp from './components/ThirdComp';
// import MemoHook from './components/MemoHook';
// import Home from './components/Home';
// import Contact from './components/Contact';
// import About from './components/About';
// import Prodcts from './components/Product';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import CounterRedux from './components/CounterRedux';
// import EventHandler from './components/EventHandler';

const user={
  name:"Krishnakanth",
  city:"Bangalore",
  area:"MG Road"
}
function App() {
  
  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <Hello/>
   
    // <Count/>
    // <AddToList/>
    // <InputHandler/>
  
    // <CondationALRendering/>
    // <Table/>
    // <Usestate/>
    // <StateEvents/>
    return (
    
      <div>
        {/* <Onchange/> */}
        {/* <Onsubmit/> */}
        {/* <Map/> */}
        {/* <Filter/> */}
        {/* <Fetch/> */}
        {/* <Axios/> */}
      <FirstComp name={user.name}/>
      <SecondComp name={user.area}/>
      <ThirdComp name= {user.city}/>
      <FourthComp name= "Reddy"/>
        {/* <Usestate/> */}
        {/* <Useeffect/> */}
        {/* <EventHandler/> */}
          {/* // <ComponentA/> */}
      {/* // <Parent/>
      // <Task/>
  
   
           {/* <MemoHook/> */}
      {/* <BrowserRouter> */}
            
      {/* <div>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/About'}>About us</Link></li>
          <li><Link to={'/Contact'}>Contact us</Link></li>
          <li><Link to={'/Prodcts'}>Prodcts List</Link></li>
        </div> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Prodcts" element={<Prodcts />} />
        </Routes>
    </BrowserRouter>
    <CounterRedux/>  */}
    </div>

 
  
   
  
   
    
  );
}

export default App;
