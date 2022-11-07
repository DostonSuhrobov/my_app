import { Route, Switch } from 'react-router-dom';


import AllMeetups from './pages/AllMeetups';
import Favourites from './pages/Favourites';
import NewMeetups from './pages/NewMeetups';

import MainNavigation from './components/layout/MainNavigation';


function App() {
  return <div>

    < MainNavigation />
    <Switch>
      
      < Route path='/' exact >
        <AllMeetups />
      </Route>

      < Route path='/new-meetup'>
        <NewMeetups />
      </Route>

      < Route path='/favorites'>
        <Favourites />
      </Route>

    </Switch>
  </div>;
}

export default App;
