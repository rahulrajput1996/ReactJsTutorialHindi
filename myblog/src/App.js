// import logo from './logo.svg';
import './App.css';
// import { Myfile1, Myfile2 } from "./Myfile"
// import Twofunctioninsamefile from './Twofunctioninsamefile';
// import ReactwithoutJSX from './ReactwithoutJSX';
// import Clickevent from './Clickevent';
// import StateInFunctionComponent from './StateInFunctionComponent';
// import StateInClassComponent from './StateInClassComponent';
// import PropsInFunctional from './PropsInFunctional';
import React, { useState } from 'react';
import FirstLifeCycleConstructor from './FirstLifeCycleConstructor';
// import PropsInClass from './PropsInClass';
// import GetInputBox from './GetInputBox';
// import HideShowToggle from './HideShowToggle';
// import ConditionalRendering from './ConditionalRendering';
// import PassFunctionAsProp from './PassFunctionAsProp';
// import Form from './Form';

function App() {
  // const [address, setAddress] = useState("asgarpur");
  // const changeAddress = () => {
  //   if (address === "asgarpur") {
  //     setAddress("bijnor");
  //   } else {
  //     setAddress("asgarpur")
  //   }
  // }

  // const passFunction = () => {
  //   alert("i am passed from parent component to child component")
  // }
  const [email, setemail] = useState("rahul@gmail.com");
  const [show, setshow] = useState(true)
  return (
    <div className="App">
      {show ? <FirstLifeCycleConstructor mydata={email} /> : ""}

      <button onClick={() => { setemail("ashish@gmail.com") }}>change email</button>
      <button onClick={() => { setshow(!show) }}>Toggle Component</button>
      {/* <Form />
      <Myfile1 />
      <Myfile2 />
      <Twofunctioninsamefile />
      <ReactwithoutJSX />
      <GetInputBox />
      <Clickevent />
      <StateInFunctionComponent />
      <StateInClassComponent />
      <PropsInFunctional mydata1="rahul"
        mydata2={{ address: address, pincode: 246721 }}
        mydata3={<h1>i am sending html</h1>}
      />
      <button onClick={changeAddress}>Change Address</button>
      <PropsInClass mydetail1="ashish kumar" />
      <HideShowToggle />
      <ConditionalRendering />
      <PassFunctionAsProp mydata={passFunction} /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Rahul
        </a>
      </header> */}
    </div>
  );
}

export default App;
