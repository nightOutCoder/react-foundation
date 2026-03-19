import reactImage from "../../assets/components.png";
import "./Header.css";

const inputData = ["Fundamental", "Core", "Standard"];
function getRandomText(max) {
  // note - Math.random -> 0<= value < 1
  // In order to get any records from array we need to do +1
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = inputData[getRandomText(inputData.length)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
