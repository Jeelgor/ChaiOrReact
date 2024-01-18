import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenrator =useCallback (() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "[]~`@#$%^&*().?/{}";
    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    } 
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
useEffect(()=>{passwordGenrator()},[length,numberAllowed,charAllowed,passwordGenrator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-30 py-8 my-12 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3 px-8">Password Genrator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3"
            placeholder="Password"
            readOnly
          />
          <button>Copy</button>
          <input type="range" min={8} max={100} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length:{length}</label>
        </div>
        <div className= "flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setnumberAllowed((prev)=>!prev);
              
            }}            
            
            className="outline-none w-full py-2 px-3"
            
          /> <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="charcterinput"
          onChange={()=>{
            setcharAllowed((prev)=>!prev);
            
          }}            
          
          className="outline-none w-full py-2 px-3"
          
        />

        </div>
      </div>
    </>
  );
}

export default App;
