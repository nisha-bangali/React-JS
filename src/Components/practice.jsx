import { useState } from "react";

function PracticeTask(){
    const firstName = "Nisha"
    const lastName = "Bangali";
    
        const [countDown , setdata] = useState(15)
        function Counter(){
            if(countDown > 0){
                setdata(countDown - 1)
       
            }else{
                alert("Countdown finished!");
            }
        }

    return(
        <>
          <h2>WelCome to my React App</h2>
          <p>My name is {firstName} {lastName}.</p>
          <p>Countdown: {countDown}</p>
          <button onClick={Counter}>Click Me</button>

        </>
    );
}
export default PracticeTask;