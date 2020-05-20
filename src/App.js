import React from 'react';
import youtube from './apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyBOQ10siDrDMIKXGqXAfE3DpeO7sl1vtqg';

class App extends React.Component {

  state = {videos: [], selectedVideo: null};

  // componentDidMount() {
  //   this.onTermSubmit('buildings');
  // }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
      }
    });

    console.log(term);
    console.log(response)
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  };

  onVideoSelect = (video) => {
    console.log('From the App!', video);
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      // <div className="ui container">
      //   <SearchBar onFormSubmitProp={this.onTermSubmit}/>
      //   <VideoDetail video={this.state.selectedVideo}/>
      //   <VideoList 
      //     videos={this.state.videos} 
      //     onVideoSelect={this.onVideoSelect}
      //   />
      // </div>
      <div className="ui container">
        <SearchBar onFormSubmitProp={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="six wide column">
              <VideoList 
                videos={this.state.videos} 
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    
    );
  }
}

export default App;