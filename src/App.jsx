import "./App.css";
import Nav from "./components/organisms/navbar/Nav";
import Home from "./components/templates/Home";
import Projects from "./components/templates/Projects";
import { ClientContext } from "graphql-hooks";
import { client } from "./api/Client";

function App() {
  return (
    <>
      <ClientContext.Provider value={client}>
        <Nav />
        <Home />
        <Projects />
      </ClientContext.Provider>
    </>
  );
}

export default App;
