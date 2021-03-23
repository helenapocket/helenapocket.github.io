/*
* VisualDevelopmentPage
*
* Lists visual developments
*/
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function VisualDevelopmentPage() {
    return (
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      );
}