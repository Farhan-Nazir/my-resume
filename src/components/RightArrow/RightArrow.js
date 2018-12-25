import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./RightArrow.css";

class RightArrow extends React.Component {
  state = {};
  render() {
    return (
      <div className="arrowDiv">
        <FaArrowRight size={30} />
      </div>
    );
  }
}

export default RightArrow;
