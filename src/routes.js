import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import Popular from './pages/Popular';
import Error from './pages/Error'

import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Movie from './pages/Movie';

const Routes = ()=> {
    return(
        <BrowserRouter>
			<Sidebar />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/toprated" component={ TopRated } />
                <Route exact path="/upcoming" component={ Upcoming } />
                <Route exact path="/popular" component={ Popular } />
                <Route exact path="/movie/id=:id" component={Movie} />

                <Route path="*" component={Error} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;