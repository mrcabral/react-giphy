import React, { Component } from "react";

export class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.webp`;
    return (
      <img
        src={src}
        alt=""
        className="gif"
        onClick={this.handleClick}
      />
    );
  }
}
