import React from "react";
import styles from "./Signup.module.css";

import { useSignup } from "../../hooks/useSignup";

import { useState } from "react";

const Signup = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, isPending, error } = useSignup();

  const submitHandler = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };
  return (
    <form className={styles["signup-form"]} onSubmit={submitHandler}>
      <h2>Sign Up</h2>
      <label>
        <span>Name</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && <button className="btn">Signup</button>}
      {isPending && <button className="btn">loading</button>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
