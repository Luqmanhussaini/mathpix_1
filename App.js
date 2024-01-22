import Colorbar from "./Colorbar";
import Intro from "./Intro";
import Lastpage from "./Lastpage";
import Navbar from "./Navbar";
import Partner from "./Partner";
import Researches from "./Researches";
import Fordev from "./Fordev";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Partner/>
      <Researches/>
      <Colorbar/>
      <Fordev/>
    </div>
  );
}

export default App;
