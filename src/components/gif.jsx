import React, { Component } from "react";

class Gif extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { id } = this.props;

    return nextProps.id !== id;
  }

  handleClick = () => {
    const { id, selectGif } = this.props;

    if (selectGif) { selectGif(id); }
  }

  render() {
    const { id } = this.props;

    if (!id) {
      return null;
    }

    const src = `https://media3.giphy.com/media/${id}/giphy.webp`;
    return (
      <button className="select-button" type="button" onClick={this.handleClick}>
        <img
          src={src}
          alt="gif"
          className="gif"
        />
      </button>
    );
  }
}

export default Gif;
