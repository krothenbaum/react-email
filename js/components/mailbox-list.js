import React from 'react';
import {Link} from 'react-router';

export default function EmailList(props) {
	return (
		<h3>
			<Link to={'/emails/' + props.title}>
				{props.title}
			</Link>
		</h3>
	)
}