import React from 'react';
import EMAILS from '../emails'

export default function Email(props) {
	const email = EMAILS[props.params.mailboxId][props.params.emailId];
	return (
		<div>
			<p>To: {email.to}</p>
			<p>From: {email.from}</p>
			<p>Title: {email.title}</p>
			<p>Content: {email.content}</p>
		</div>
	);
};