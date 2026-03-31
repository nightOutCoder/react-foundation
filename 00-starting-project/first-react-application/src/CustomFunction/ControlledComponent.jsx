import { useState } from "react";
function ControlledComponent() {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          placeholder="Enter UserName"
        ></input>
        <br />
        <br />
        <input
          type="text"
          value={userPassword}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Password"
        ></input>
        <br />
        <br />
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter email"
        ></input>
        <br />
        <br />
        <button>Submit</button>
        <button
          type="button"
          onClick={() => {
            setUserName("");
            setPassword("");
            setEmail("");
          }}
        >
          Clear
        </button>
        <br />
        <br />
        {userName}
        <br />
        <br />
        {userPassword}
        <br />
        <br />
        {email}
        <br />
        <br />
      </form>
    </div>
  );
}
export default ControlledComponent;
