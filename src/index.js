import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const APIKEY = 'AIzaSyA34WThLG6Bx0iqW7d6G-EB4VKg21i6q4Y';

// create new component, component should produce some html
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.onVideoSelect = this.onVideoSelect.bind(this);

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch(
      { key: APIKEY, term },
      videos => this.setState({
        videos,
        selectedVideo: videos[0]
      })
    );
  }

  onVideoSelect(selectedVideo) {
    this.setState({
      selectedVideo
    });
  }

  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail
          video={this.state.selectedVideo}
        />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
};

// take this component's generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector(".container"));