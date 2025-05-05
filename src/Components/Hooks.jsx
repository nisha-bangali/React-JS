import React, { useEffect, useId, useRef,useMemo, useCallback } from 'react'

function Hooks() {
    const [count, setCount] = React.useState(0);   // Declare a new state variable, which we'll call "count"
    // useEffect(()=>{
    //    console.log(`counter : ${count}`);
       
    // },[count])  // Update and re-run the effect if count changes

    // useEffect(()=>{
    //     fetch("https://dummyjson.com/products")
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[count])  
    // const uniqid = useId()   // Get a unique id for the component
    // console.log(uniqid); 

    // const inputRef = useRef()  // Create a reference to the input element
    
    // function myfun(){
    //     inputRef.current.focus()
    //     inputRef.current.value = "Nisha"
    //     inputRef.current.style.backgroundColor = "gray"
    //     console.log(inputRef);
        
    // }
    
    // const memo = useMemo(() => {
    //     console.log("Memo called, counter incremented to", count + 1);
      
    //     return count + 1;
    //   }, [count]);   // Only recompute memo when count changes 
    //   console.log(memo);
      
    // const callback = useCallback(()=>{
    //     console.log("Hello World!!");
    //     return count + 1
        
    // })    // Only recompute memo when count changes
    // console.log(callback());
    

  return (
    <div>

      <h1>Hooks in react JS</h1>
      <h2>counter {count}</h2>
      <button onClick={()=> setCount(count+1)}>Click me</button> <br />
      {/* <input type="text" ref={inputRef}/>
    <button onClick={myfun}>input focus</button> */}
    </div>
  )
}

export default Hooks
