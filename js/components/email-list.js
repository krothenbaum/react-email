import React from 'react';
import {Link} from 'react-router';

export default function EmailList(props) {
	const emails = Object.keys(props.emails).map((emailId) => {
		// console.log(props.emails[emailId].from);
		return <Link to={`/${props.mailboxId}/${emailId}`}>
			<li>
				{props.emails[emailId].from} - {props.emails[emailId].title}
			</li>
		</Link>;
	});
	// console.log(props.emails);
	return (
		<div>
			<h3>{props.mailboxId}</h3>
			<ul>
				{emails}
			</ul>
		</div>
	);
};