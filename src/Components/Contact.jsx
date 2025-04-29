import { useState } from "react";
import HomePage from "./Home";

function ContactPage({ Data }) {
   
    return (

        <div>
            <h2>User ContactPage Information</h2>
            <h4>User Name: {Data.userName}</h4>
            <h4>User Age: {Data.age}</h4>
            <h4>User Gender: {Data.gender}</h4>
            <h4>User Contact Number: {Data.contactNo}</h4>
        </div>


    );
}

export default ContactPage;
