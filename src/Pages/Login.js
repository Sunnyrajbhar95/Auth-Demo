import React, { useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import "./page .css";
import { Validate } from "./validation";
import { toast } from "react-toastify";
export default function Login() {
  const [show, setshow] = useState(false);
  const [data,setdata]=useState(null);
  const email = useRef(null);
  const pass = useRef(null);
  const handleclick = async (e) => {
    e.preventDefault();
    const val = Validate(email.current.value, pass.current.value);
    
    if (!val) {
      await signInWithEmailAndPassword(
        auth,
        email.current.value,
        pass.current.value
      ).then((data) => {
        console.log(data);
        console.log("login Successfully");
      });
      toast.success("Login Successfully!");
    }
    else{
       setdata(val);
       setshow(true);
    }
  };
  return (
    <div className="form">
      <form>
        <h2>Login</h2>
        <input ref={email} type="email" placeholder="Email" />
        <input ref={pass} type="password" placeholder="Password" />
        {show && <p>{data}</p>}
        <button onClick={handleclick} className="btn">
          Sign In
        </button>
      </form>
    </div>
  );
}
