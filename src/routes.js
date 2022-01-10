import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/Movies';
import Error from './pages/Error'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Routes = ()=> {
    return(
        <BrowserRouter>
			<Navbar />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/movies" component={ Movies } />

                <Route path="*" component={Error} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;