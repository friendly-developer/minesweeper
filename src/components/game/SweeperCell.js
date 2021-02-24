import React from "react";
import { MINE } from "../../constants";

class SweeperCell extends React.Component {
  state = { isClicked: false };
  onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.state.isClicked || this.props.gameOver) {
      return;
    }
    this.setState({ isClicked: true }, this.callOnUpdate);
  };
  callOnUpdate() {
    const { onUpdate, row, col } = this.props;
    onUpdate(row, col);
  }
  render() {
    const { isClicked } = this.state;
    const { distance = "", isMine } = this.props;
    const displayValue = isMine ? MINE : distance;
    const cls = isClicked ? "sweeper-cell open" : "sweeper-cell";
    return (
      <div className={cls} onClick={this.onClick}>
        {isClicked && displayValue ? displayValue : ""}
      </div>
    );
  }
}

export default SweeperCell;
