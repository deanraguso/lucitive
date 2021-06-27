import './App.css';
import Greeting from "./Components/Greeting";
import Quote from './Components/Quote';
import Video from './Components/Video';
var ColorScheme = require('color-scheme');

function App() {

  let scheme = new ColorScheme();
  scheme.from_hue(21)
    .scheme('triade')
    .variation('soft');

  let colors = scheme.colors();
  
  document.querySelector("body").style.backgroundColor = `#${colors[Math.floor(Math.random()*12)]}`
  console.log(colors);

  return (
    <div className="App">
      
      <Greeting></Greeting>
      <Quote></Quote>
      <Video></Video>

    </div>
  );
}

export default App;
