import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

function MyName() {
  return (
    <div>
      <p>John Deo !</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyName></MyName>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <ul>
            {/* if props name are similar to property of data we want to set
            then */}
            <CoreConcept {...CORE_CONCEPTS[0]} />
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
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
