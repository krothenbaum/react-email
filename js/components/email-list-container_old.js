import React from 'react';
import EMAILS from '../emails';
import EmailBoxList from './email-box-list';

export default function EmailListContainer() {
	const mailboxArray = [];
	const style = {
		float: 'left'
	};
	for (const key of Object.keys(EMAILS)) {
		mailboxArray.push(<EmailBoxList title={key} emails={EMAILS[key]} />);
	}
	console.log(mailboxArray);
	return (
		<div>
				{mailboxArray}
		</div>
	);
};