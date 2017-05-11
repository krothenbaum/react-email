import React from 'react';
import EMAILS from '../emails';
import EmailList from './email-list';


export default function MailboxContainer(props) {
	const emailList = EMAILS[props.params.mailboxId];
	// console.log(emailList);
	return (
		<div>
			<EmailList emails={emailList} mailboxId={props.params.mailboxId} />
		</div>
	);
};