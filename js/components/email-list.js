import React from 'react';
import Email from  './email';

export default function EmailList(props) {
	// console.log('EmailList props');
	// console.log(props);
	const emails = Object.keys(props.emails).map((emailId, index) => {
		const email = props.emails[emailId];
		return (
			<li key={index}>
				<Email id={email.id} to={email.to}
								 from={email.from} title={email.title} content= {email.content} />
			</li>
		);
	});

	return (
		<ul>
			{emails}
		</ul>
	);
};