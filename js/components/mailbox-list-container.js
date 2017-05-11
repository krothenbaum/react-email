import React from 'react';
import {hashHistory} from 'react-router';
import EMAILS from '../emails';
import MailBoxList from './mailbox-list';

export default function MailBoxListContainer() {
	// const mailboxArray = [];
	// for (const key of Object.keys(EMAILS)) {
	// 	mailboxArray.push(<MailBoxList title={key}/>);
	// }

		return (
			<div>
				<button onClick={() => hashHistory.push('/emails/inbox')}>
					Inbox
				</button>
				<button onClick={() => hashHistory.push('/emails/spam')}>
					Spam
				</button>
			</div>
		)
};