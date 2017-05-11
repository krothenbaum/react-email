import React from 'react';

import EMAILS from '../emails';
import Email from  './email';

export default function EmailContainer(props) {
    const email = EMAILS[props.params.emailId];
    return <Email id={email.id} name={email.name}
                    phoneNumber={email.phoneNumber} />;
};