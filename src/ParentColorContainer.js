import React, {Component} from "react";
import ColorContainer from "./ColorContainer";
import "./ParentColorContainer.css";

class ParentColorContainer extends Component {
    // let's set the static number of boxes to start with first
    static defaultProps = {
        numBoxes: 18
    }
    render(){
        const boxes = Array.from({length: this.props.numBoxes}).map(
            () => <ColorContainer />
        )
        return (
            <div className="ParentColorContainer">
                {/* return statement returns the variable boxes that is a list of colors, thats what {boxes} below is */}
                {boxes}
            </div>
        )
    }

}

export default ParentColorContainer;