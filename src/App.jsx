
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";
import Header from "./components/Header/Header.jsx";
import Input from "./components/Input/Input.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />      
        {/* <Input type="text" placeholder="Your name" /> */}
        {/* <Input richText placeholder="Your message" />   */}
      </main>
    </>
  );
}

export default App;
