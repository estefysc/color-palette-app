import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import React, {Component} from "react";

class App extends Component {
  render() {
    return (
        <div>
          <Palette {...seedPalettes[1]}/>
        </div>
    );
  }
}

export default App;
