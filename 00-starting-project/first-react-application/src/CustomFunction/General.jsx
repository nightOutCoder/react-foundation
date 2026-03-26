import User, { UserProfile, Passkey } from "./User";
import MyProfileImage from "./MyProfileImage";
import StateExample from "./StateExample";

function General() {
  const Variable = "Test...";
  const ageA = 21;
  const ageB = 18;

  function printConsoleOne() {
    console.log("Print printConsoleOne");
  }

  function printConsoleTwo() {
    console.log("Print printConsoleTwo");
  }

  const printConsoleThree = () => {
    console.log("Print printConsoleThree");
  };

  function retunGreetMessage() {
    return "Hello!";
  }

  const objectData = {
    name: "john",
    age: 41,
  };

  function getCalculation(a, b, operation) {
    if (operation === "+") {
      return a + b;
    } else if (operation === "-") {
      return a - b;
    } else {
      return a * b;
    }
  }

  return (
    <div>
      <User></User>
      <UserProfile></UserProfile>
      <h1>Pass Key is {Passkey}</h1>
      <h1>
        Greetings {retunGreetMessage()} {objectData.name}
      </h1>
      <h1>Variable is {Variable}</h1>
      <h1>Additional Expression {10 + 20 + 30}</h1>
      <h1>Age Sum is {ageA + ageB}</h1>
      <h1>Get calculation {getCalculation(10, 20, "&")}</h1>
      <button onClick={() => printConsoleOne()}> Print Console 1</button>
      <button onClick={printConsoleTwo}> Print Console 2</button>
      <button onClick={printConsoleThree}> Print Console 3</button>
      <MyProfileImage></MyProfileImage>
      <h1>State Example</h1>
      <StateExample></StateExample>
    </div>
  );
}

export default General;
