/*
* IllustrationPage
*
* Lists illustrations
*/
import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List'
import ListItem from './ListItem';
import Img from './Img';

import Kallie from './illustrations/Kallie1.png';
import Lucia from './illustrations/Lucia1.png';
import Portrait from './illustrations/Portrait1.jpg';

export default function IllustrationPage() {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <List>
          <ListItem>
            <Img src={Kallie} alt="kallie" />
          </ListItem>
          <ListItem>
            <Img src={Lucia} alt="lucia" />
          </ListItem>
          <ListItem>
            <Img src={Portrait} alt="jack - portrait" />
          </ListItem>
        </List>
      </div>
      );
}