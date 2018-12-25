import React from "react";
import Paper from "@material-ui/core/Paper";
import "./PaperSheet.css";

class PaperSheet extends React.Component {
    style = {
        
    }
    state = {};

    onHover = () => {
        
    }
  render() {
    //console.log(this.props)
    return (
      <Paper style={{ border: "2px solid lightGray" }} onHover={this.onHover}>
        <h2>{this.props.uni}</h2>
        <h3>{this.props.degree}</h3>
        <h5>
          {this.props.startDate} -- {this.props.endDate}
        </h5>
        <h4>{this.props.description}</h4>
      </Paper>
    );
  }
}
export default PaperSheet;
