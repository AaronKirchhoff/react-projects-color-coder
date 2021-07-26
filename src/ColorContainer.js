import React, {Component} from "react";
import "./ColorContainer.css";
import {choice} from "./helpers";


class ColorContainer extends Component {
    static defaultProps = {
        allColors: ['#0b1c48', '#e66912', '#9e3a14', '#016367']
    };
    constructor(props){
        super(props);
        this.state = {color: choice(this.props.allColors)};
        this.handleClick = this.handleClick.bind(this);
    }

    pickColor(){
        // when you click the box, you dont want the same color again immediately, so set up a Do block.
        let newColor;
        do {
        newColor = choice(this.props.allColors);
        } while (newColor === this.state.color )
        // this.state.color is the current color state.
        this.setState({color: newColor});
    }

    handleClick(){
        this.pickColor()

    }
    render(){
        return (
            <div className="ColorContainer" 
                style={{backgroundColor: this.state.color}} 
                onClick={this.handleClick}>
            </div>
        )
    }
    
    
}

export default ColorContainer;