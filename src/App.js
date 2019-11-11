import React from 'react';
import './App.css';
import './styles.css';
import Nav from './Navbar.jsx'

function App() {
  const arrList=[{title:"Home"},{title:"Services",subServices:["For Entrepreneurs","For Students","For hobbyists"]},{title:"Contact"}];
  return (
    <div className="App">
      <Nav myList={arrList}/>
    </div>
  );
}

export default App;
