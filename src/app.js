import React, {Component} from 'react';
import NavBar from './components/NavBar';
import Search from './components/search-section';
import Results from './components/result';
import Footer from  './components/footer';

export default class App extends Component {
    render(){
        return (
            <div>
                <NavBar/>
                <Search/>
                <Results/>
                <Footer/>
            </div>
        );
    }
}
