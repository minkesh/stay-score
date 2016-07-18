import React from 'react';
import {render} from 'react-dom';
import App from './app';

require('./style/NavBar.scss');
require('./style/search-bar-section.scss');
require('./style/results.scss');
require('./style/footer.scss');

render(<App />, document.getElementById('root'));
