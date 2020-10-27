import React from 'react';
import Header from './Header';
import MainCard from './MainCard';
import OverviewCards from './OverviewCards';
import media_data from '../media_data';


function App() {

  function numOverK(num) {
    return num % 1000 === 0 ? num / 1000 + 'k' : num;
}
  return (
      <div className="page">
        <Header />
        <div className="main-dashboard">
          {media_data.map(data =>
            <MainCard
              key={data.media_name}
              id={data.id}
              followers={numOverK(data.followers)}
              mediaName={data.media_name}
              upDownNum={data.upDown_num}
            />
          )}
        </div>
        <h2 className='blue-text'>Overview - Today</h2>
        <div className="overview">
          {media_data.map(data =>
            <OverviewCards
              key={data.media_name}
              mediaName={data.media_name}
              viewsRetweets={numOverK(data.views_retweets)}
              viewsRetweetsRate={data.views_retweets_rate}
              likes={numOverK(data.likes)}
              likesRate={data.likes_rate}
            />
          )}
        </div>
      </div>


  );
}

export default App;
