import { useState } from "react";
import HomePage from "./Home";
import ServiceCard from "./ServicePage"

function ServicePage({ Data }) {
    // const [data, setdata] = useState({
    //     userName:"John",
    //     age : 30,
    //     gender : "Male",
    //     contactNo : 565477755
    // });



    return (

        <div>
            <h2>User ServicePage Information</h2>
            <ServiceCard userData={Data} />
        </div>

    );
}

export default ServicePage;
