import { useState } from "react";
import HomePage from "./Home";

function ServiceCard({ userData }) {
    
        return (
            <>
                <h4>User Name: {userData.userName}</h4>
                <h4>User Age: {userData.age}</h4>
                <h4>User Gender: {userData.gender}</h4>
                <h4>User Contact Number: {userData.contactNo}</h4> 
            </>
        );
    }

export default ServiceCard;
