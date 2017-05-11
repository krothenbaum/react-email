import React from 'react';
import EMAILS from '../emails';
import EmailList from './email-list';

export default function EmailListContainer(props) {
    return (
    	<h1>{props.params.name}</h1>
    )
};