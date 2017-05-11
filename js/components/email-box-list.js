import React from 'react';
import EmailList from  './email-list';

export default function EmailBoxList(props) {
	// const emails = Object.keys(props.emails).map((emailId, index) => {
	// 	const email = props.emails[emailId];
	// 	return (
	// 		<li key={index}>
	// 			<Email id={email.id} to={email.to}
	// 							 from={email.from} title={email.title} content= {email.content} />
	// 		</li>
	// 	);
	// });
	console.log(props);

	return (
		<div>
			<h2>{props.title}</h2>
			<EmailList emails={props.emails} />
		</div>
	);
};