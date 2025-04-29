import { useState } from "react";
import AboutPage from "./About";
import ContactPage from "./Contact";
import ServicePage from "./Service";

function HomePage() {
  // const [data, setdata] = useState(0);
  // function updatevalue() {
  //     setdata(data + 1)

  // }

  const [data, setdata] = useState({
    userName: "John",
    age: 30,
    gender: "Male",
    contactNo: 5654777556
  });

  function changedetail() {
    setdata({
      userName: "Radha",
      age: 25,
      gender: "female",
      contactNo: 734676766
    })
  }


  return (
    <>
      <div>
        <h2>User HomePage Information</h2>
        <h4>User Name: {data.userName}</h4>
        <h4>User Age: {data.age}</h4>
        <h4>User Gender: {data.gender}</h4>
        <h4>User Contact Number: {data.contactNo}</h4>
      </div>
      < AboutPage Data={data} />
      < ContactPage Data={data} />
      < ServicePage Data={data} />
      <div>
      <button onClick={changedetail}>Change User Info</button>
      </div>
    </>


    // <div className="home">
    //   <h1>Welcome to the Home Page</h1>
    //   {/* <p>Data: {data}</p>
    //   <button onClick={updatevalue}>Click me Update data</button> */}
    // </div>
  );
}


export default HomePage;
