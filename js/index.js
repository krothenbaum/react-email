require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './components/app';
import MailBoxListContainer from './components/mailbox-list-container'
import EmailListContainer from './components/email-list-container';
import EmailContainer from './components/email-container';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={MailBoxListContainer} />
			<Route path='/emails/:name' component={EmailListContainer} />
		</Route>
	</Router>
);

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(routes, document.getElementById('app'))
);