import React, {Component} from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css"; // This import has to be above "./Palette.css", so we can override the default styles.
import "./Palette.css";
import Slider from "rc-slider";

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
        };
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level) {
        this.setState({level});
    }
    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map(color => (
            <ColorBox background={color.hex} name={color.name}/>
        ));
        return (
            <div className="Palette">
                <div className="slider">
                    <Slider
                        defaultValue={this.state.level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={this.changeLevel}
                    />
                </div>
                {/*Navbar goes here*/}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/*Footer*/}
            </div>
        );
    }
}

export default Palette;