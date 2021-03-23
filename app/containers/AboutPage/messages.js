/*
 * AboutPage Messages
 *
 * This contains all the text for the AboutPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AboutPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "about",
  },
  paragraph1: {
    id: `${scope}.p1`,
    defaultMessage: "Helena is a Taiwanese-American illustrator based in Maryland. As a former research coordinator in medical research, she received her MA Illustration from the Maryland Institute College of Art. Pursuing visual development in animation, book illustration, hand lettering, and other freelance work, she enjoys capturing moments in time through lively characterizations and stylistic environments.",
  },
  paragraph2: {
    id: `${scope}.p2`,
    defaultMessage: "When she's not working, she can be found rock climbing, soaking up sunlight on a mountain, cooking stews, and sneezing over her cat (allergies).",
  },
  paragraph3: {
    id: `${scope}.p3`,
    defaultMessage: "If you would like to contact her for work, reach her at helenawu18@gmail.com!",
  },
});
