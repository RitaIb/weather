import {Route,Routes} from 'react-router-dom'
import AllMeetUpsPage from './pages/AllMeetups'
import NewMeetUpPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/layout';
function App() {
  return (
    <div >
      <Layout>
     <Routes>
        <Route path='/' exact element={<AllMeetUpsPage/>}>
        </Route>
        <Route path='/new-meetup' element={<NewMeetUpPage/>}>
        </Route>
        <Route path='/favorites' element={ <FavoritesPage/>}>
      </Route>
    </Routes>
    </Layout>
    </div>
  );
}

export default App;
