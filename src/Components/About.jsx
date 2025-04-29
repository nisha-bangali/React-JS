import { useState } from "react";
import HomePage from "./Home";

function AboutPage({ Data }) {

    return (
        <div>
            <h2>User AboutPage Information</h2>
            <h4>User Name: {Data.userName}</h4>
            <h4>User Age: {Data.age}</h4>
            <h4>User Gender: {Data.gender}</h4>
            <h4>User Contact Number: {Data.contactNo}</h4>

        </div>
    );
}

export default AboutPage;
