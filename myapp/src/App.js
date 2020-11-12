import './App.css';
import NavBar from "./component.js/navbar" ;
import About from './component.js/about';
import Project from "./component.js/projects";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <About/>
    <Project/>
    </div>
  );
}


export default App