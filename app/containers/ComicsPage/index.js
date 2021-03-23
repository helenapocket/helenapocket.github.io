/*
* ComicsPage
*
* Lists comics
*/
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function ComicsPage() {
    return (
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      );
}