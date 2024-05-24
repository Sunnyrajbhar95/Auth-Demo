import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import "./page .css";
import { Validate } from "./validation";
import { toast } from "react-toastify";
export default function SignUp() {
  const [show, setshow] = useState(false);
  const [data, setdata] = useState(null);
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const pass = useRef(null);

  const handleclick = async (e) => {
    e.preventDefault();
    const val = Validate(email.current.value, pass.current.value);

    if (!val) {
      await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        pass.current.value
      ).then((data) => {
        console.log(data);
        navigate("/login");
      });
      toast.success("Sign Up Successfully!");
    } else {
      setdata(val);
      setshow(true);
    }
  };
  return (
    <div className="form">
      <form>
        <h2>Sign Up</h2>
        <input ref={name} type="text" placeholder="Name" />
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
