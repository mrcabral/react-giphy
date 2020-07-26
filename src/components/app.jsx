import React, { Component } from 'react';
import giphy from 'giphy-api';

import { SearchBar } from './search_bar';
import { GifList } from './gif_list';
import { Gif } from "./gif";

export class App extends Component {
  state = {
    gifs: [],
    selectedGifId: "MEuT3yuXBvaVi20Yk7"
  }

  search = (query) => {
    giphy('foEIpNJi4NABFni2mh7mC8p6Ni837gfM').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({gifs: result.data});
    });
  }

  selectGif = (id) => {
   this.setState({selectedGifId: id })
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId } />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )
  }
}
