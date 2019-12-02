import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './components/List/List';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<List />, document.getElementById('root'));

serviceWorker.unregister();
