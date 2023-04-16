// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Pagenotfound from './components/Pagenotfound';
import Company from './components/Company';
import Youtube from './components/Youtube';
import Countpage from './components/Countpage';
import Login from './components/Login';
import Logout from './components/Logout';
import Protected from './components/Protected';
import Mystate from './components/Mystate';
// import { Myfile1, Myfile2 } from "./Myfile"
// import Twofunctioninsamefile from './Twofunctioninsamefile';
// import ReactwithoutJSX from './ReactwithoutJSX';
// import Clickevent from './Clickevent';
// import StateInFunctionComponent from './StateInFunctionComponent';
// import StateInClassComponent from './StateInClassComponent';
// import PropsInFunctional from './PropsInFunctional';
// import React, { useState, useMemo, useRef } from "react"
// import Userefcomp from './components/Userefcomp';
// import Usereffunctional from './components/Usereffunctional';
// import Forwardrefcomp from './components/Forwardrefcomp';
// import Highordercomponent from './components/Highordercomponent';
// import Controllled from './components/Controllled';
// import FirstLifeCycleConstructor from './FirstLifeCycleConstructor';
// import ApplyuseEffect from './ApplyuseEffect';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import Mycompoent from './components/Mycompoent';
// import PropsInClass from './PropsInClass';
// import GetInputBox from './GetInputBox';
// import HideShowToggle from './HideShowToggle';
// import ConditionalRendering from './ConditionalRendering';
// import PassFunctionAsProp from './PassFunctionAsProp';
// import Form from './Form';
// import Table from 'react-bootstrap/Table';
// import Reuse from './components/Reuse';
// import Purecomponent from './components/Purecomponent';
// import Senddatafromchildtoparent from './components/Senddatafromchildtoparent';
function App() {
  // const [count, setcount] = useState(0);
  // const [rs, setrs] = useState(0);

  //It will run only when count state changes
  // const myfun = useMemo(() => {
  //   console.log("hi");
  //   return 10;
  // eslint-disable-next-line
  // }, [count]);

  //It will run only when rs state changes
  // useMemo(() => {
  //   console.log("second");
  // eslint-disable-next-line
  // }, [rs]);

  // use of forward ref
  // const mycustomref = useRef(null);
  // const myforwardref = () => {
  //   mycustomref.current.style.backgroundColor = "purple";
  //   mycustomref.current.focus()
  // }
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
  // const [email, setemail] = useState("rahul@gmail.com");
  // const [show, setshow] = useState(true);
  // const [data, setData] = useState(10);
  // let myarr = [
  //   {
  //     name: "rahul", email: "rahul@gmail.com", mobile: "7060810244",
  //     address: [
  //       { vill: "asgarpur1", city: "bijnor2" },
  //       { vill: "asgarpur3", city: "bijnor4" }
  //     ]
  //   },
  //   {
  //     name: "ashish", email: "ashish@gmail.com", mobile: "8060810244",
  //     address: [
  //       { vill: "asgarpur5", city: "bijnor6" },
  //       { vill: "asgarpur7", city: "bijnor8" },
  //     ]
  //   },
  //   {
  //     name: "krishna", email: "krishna@gmail.com", mobile: "9060810244",
  //     address: [
  //       { vill: "asgarpur9", city: "bijnor0" },
  //       { vill: "asgarpur4", city: "bijnor5" },
  //     ]
  //   },
  //   {
  //     name: "radha", email: "radha@gmail.com", mobile: "6060810244",
  //     address: [
  //       { vill: "asgarpur5", city: "bijnor2" },
  //       { vill: "asgarpur2", city: "bijnor7" },
  //     ]
  //   },
  // ]
  // let myarr2 = ["rahul", "soni", "vipin", "anita"]
  // const [data, setdata] = useState(1);
  // const myalert = (a) => {
  //   console.log("ji");
  //   setdata(a)
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Mystate />
        <Navbar />
        <Routes>
          <Route path="/" element={<Protected mycomp={<Home />} />} />
          <Route path="/about/"  >
            <Route index={true} element={<About />} />
            <Route path="company" element={<Company />} />
            <Route path="youtube" element={<Youtube />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/:id" element={<Countpage />} />
          <Route path="/blog" element={<Navigate to="/about" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Protected mycomp={<Logout />} />} />
          <Route path="/*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      {/* <div>{myfun}</div>
      <h1>Count is {count}</h1>
      <h1>Rs. is {rs}</h1>
      <button onClick={() => { setcount(count + 1) }}>Change count</button>
      <button onClick={() => { setrs(rs + 10) }}>Change rs</button>
      <Userefcomp />
      <Usereffunctional /> */}

      {/*forward ref when we pass ref to other component*/}
      {/* <Forwardrefcomp ref={mycustomref} />
      <button onClick={myforwardref}>useForwardRef</button> */}

      {/*HighOrderComponenet are those which take a component as input and returns a component in output*/}
      {/* <Highordercomponent mycmp={<Mynavbarred />} />
      <Highordercomponent mycmp={<Mynavbargreen />} /> */}

      {/*controlled and uncontrolled Componenet*/}
      {/* <Controllled /> */}

      {/* <div>CountData is {data}</div>
      <Senddatafromchildtoparent myfun={myalert} />
      <Purecomponent />
      {myarr2.map((ele, i) => {
        return (
          <Reuse mydata={ele} key={i} />
        )
      })}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>MOBILE</th>
            <th>Address</th>
          </tr>
        </thead>
        {
          myarr.map((element, i) => {
            return (
              <tbody key={i}>
                <tr>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.mobile}</td>
                  <td>
                    <Table>
                      <tbody>
                        {
                          element.address.map((e, j) => {
                            return (
                              <tr key={j}>
                                <td>{e.vill}</td>
                                <td>{e.city}</td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                  </td>
                </tr>
              </tbody>
            )
          })
        }
      </Table > */}
      {/* {show ? <FirstLifeCycleConstructor mydata={email} /> : ""}

      <button onClick={() => { setemail("ashish@gmail.com") }}>change email</button>
      <button onClick={() => { setshow(!show) }}>Toggle Component</button>
      <ApplyuseEffect mydata={data} />
      <button onClick={() => { setData(data + 5) }}>change data</button>
      <Navbar />
      <Header />
      <Footer />
      <Mycompoent /> */}
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

// function Mynavbarred() {
//   return (
//     <div style={{ color: "red" }}>Mynavbarred</div>
//   )
// }
// function Mynavbargreen() {
//   return (
//     <div style={{ color: "green" }}>Mynavbargreen</div>
//   )
// }

export default App;
