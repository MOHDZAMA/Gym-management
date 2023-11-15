import React, { useState } from "react";
import "./Addmembers.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
function Addmembers() {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Signup logic
      console.log("Signing up...");
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setStatus("Successfully created");

      // Reset form fields
      setEmail("");
      setPassword("");
      setName("");
      setMobileno("");
      setAge("");
      setError(null);
    } catch (err) {
      console.error("Error:", err.message);
      setError("Something went wrong");
    }
  };
  return (
    <div className="addmembers">
      <h1>Add Members</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="number"
            value={mobileno}
            onChange={(e) => setMobileno(e.target.value)}
            placeholder="Mobile No"
          />
        </div>
        <div>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
          />
        </div>

        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit">Sign Up</button>
        {error && <span>{error}</span>}
        {status && <span>{status}</span>}
      </form>
    </div>
  );
}

export default Addmembers;
