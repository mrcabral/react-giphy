import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import GifList from './gif_list';
import Gif from "./gif";

class App extends Component {
  state = {
    gifs: [],
    selectedGifId: null
  }

  search = (query) => {
    giphy('foEIpNJi4NABFni2mh7mC8p6Ni837gfM').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({ gifs: result.data });
    });
  }

  selectGif = (id) => {
    this.setState({ selectedGifId: id });
  }

  render() {
    const { selectedGifId, gifs } = this.state;

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )
  }
}

export default App;
