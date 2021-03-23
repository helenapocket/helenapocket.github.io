/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  illustration: {
    id: `${scope}.illustration`,
    defaultMessage: 'Illustration',
  },
  environments: {
    id: `${scope}.environments`,
    defaultMessage: 'Environments',
  },
  visualdevelopment: {
    id: `${scope}.visualdevelopment`,
    defaultMessage: 'Visual Development',
  },
  lettering: {
    id: `${scope}.lettering`,
    defaultMessage: 'Lettering',
  },
  comics: {
    id: `${scope}.comics`,
    defaultMessage: 'Comics',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
});
