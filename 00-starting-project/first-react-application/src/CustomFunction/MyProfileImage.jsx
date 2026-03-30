import PrintObject from "./PrintObject";
import { PrintColleges } from "./PrintObject";
import { UserName } from "./User";
import { useState } from "react";
import Wrapper from "./Wrapper";

function MyProfileImage() {
  let nameData = "John Doe";
  const [initialName, setInitialName] = useState();
  const imagePath = "https://i.imgur.com/MK3eW3As.jpg";

  let object1 = {
    name: "John",
    city: "London",
  };
  let object2 = {
    name: "Tony",
    city: "US",
  };

  let object3 = {
    name: "Riya",
    city: "UK",
  };

  let colleges = ["NIT", "IIT", "IIIT", "Central Universities"];

  return (
    <div>
      <h1>My Name is John Deo</h1>
      <img src={imagePath} alt="dummy image" className="photo"></img>
      <ul>
        <li>Task one</li>
        <li>Task Two </li>
        <li>Task Three</li>
      </ul>

      <button onClick={() => alert("Button is clicked!")}>
        Dummy Button is clicked
      </button>
      <button onClick={() => console.log("update name")}>Update Name</button>
      <hr />
      <PrintObject data={object1} otherinput={"Asia Pacific"}></PrintObject>
      <hr />
      <PrintObject data={object2}></PrintObject>
      <hr />
      <PrintObject data={object3}></PrintObject>
      <hr />
      <PrintColleges data={colleges}></PrintColleges>
      <hr />
      {initialName && <UserName inputname={initialName}></UserName>}
      <button onClick={() => setInitialName("Rohn")}>Update Name</button>
      <hr />
      <Wrapper color="orange">
        <h2>Hi This is Dynamic 1</h2>
      </Wrapper>
      <hr />
      <Wrapper>
        <h2>Hi This is Dynamic 2</h2>
        <h2 style={{ color: "red" }}>Hi This is Dynamic 2.1</h2>
      </Wrapper>
      <hr />
    </div>
  );
}
export default MyProfileImage;
