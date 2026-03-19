import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function MyName() {
  return (
    <div>
      <p>John Deo !</p>
    </div>
  );
}

/* without state */
// function App() {
//   console.log("APP COMPONENT EXECUTION!");
//   let message = "click on any button!";
//   function handleSelect(selectedButton) {
//     console.log("1...........", selectedButton);
//     message = selectedButton;
//     console.log("message", message);
//   }

function App() {
  console.log("APP COMPONENT EXECUTION!");
  const [selectedTopic, setSelectedTopic] = useState(); // default button
  console.log("initial/last default value of selectedTopic : ", selectedTopic);

  function handleSelect(selectedButton) {
    console.log("1...........", selectedButton);
    setSelectedTopic(selectedButton);
    console.log("selectedTopic : ", selectedTopic);
  }

  let tabContent = "Please click on button to see result!!";
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <h3>{EXAMPLES[selectedTopic].code}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <MyName></MyName>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <ul>
            {/* if props name are similar to property of data we want to set
            then */}
            {CORE_CONCEPTS.map((data) => (
              <CoreConcept key={data.title} {...data}></CoreConcept>
            ))}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
          <menu>
            {/*
             handleSelect("components")- Runs Immediately during render
            <TabButton onSelect={handleSelect("components")}>
              Components
            </TabButton> */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
