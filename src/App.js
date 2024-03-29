import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import React, {Component} from "react";
import {generatePalette} from "./colorHelpers";

class App extends Component {
  render() {
    return (
        <div>
          <Palette palette={generatePalette(seedPalettes[4])}/>
        </div>
    );
  }
}

export default App;
