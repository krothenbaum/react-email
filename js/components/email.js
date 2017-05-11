import React from 'react';

export default function Email(props) {
	return (
		<div>
			<p>{props.from}</p>
			<p>{props.to}</p>
			<strong>
					{props.title}
			</strong>
			&nbsp;
			{props.content}
		</div>
	);
};