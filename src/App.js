import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import { action, originals, thriller } from './urls'
import './App.css'
import RowPost from './Components/RowPost/RowPost';
import YouTube from 'react-youtube';

function App() {
  const [urlId,setUrlId] = useState('')
  const opts = {
    height: '390',
    width: '100%',  
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };



  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     {urlId && <YouTube videoId={urlId} opts={opts}/>}
     <RowPost urls={originals} onClickFn={setUrlId} title='Netflix Originals'/>
     <RowPost urls={action} onClickFn={setUrlId} title='Action' isSmall/>
     <RowPost urls={thriller} onClickFn={setUrlId} title='Sci-Fi' isSmall/>
      
    </div>
  ); 
}

export default App;
