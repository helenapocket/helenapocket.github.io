/*
* AboutPage
*
* Lists about info
*/
import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';

export default function AboutPage() {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <p>
        <FormattedMessage {...messages.paragraph1} />
        </p>
        <p>
        <FormattedMessage {...messages.paragraph2} />
        </p>
        <p>
        <FormattedMessage {...messages.paragraph3} />
        </p>
      </div>
      );
}