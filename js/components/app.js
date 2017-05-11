import React from 'react';
import {Link} from 'react-router';
import EMAILS from '../emails';

export default function App(props) {
		const mailboxes = Object.keys(EMAILS).map((key) => {
				return <Link key={key} to={`/${key}`}>
						<li>{key}</li>
				</Link>;
		});
		return (
				<div>
					<nav>
						<ul>
							{mailboxes}
						</ul>
					</nav>
					<main>
						{props.children}
					</main>
				</div>
		);
};