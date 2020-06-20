import React from 'react';
import * as PropTypes from 'prop-types';

import HeadlineComponent from '../../components/Podcast/Headline';

function Headline({ podcast }) {
  return <HeadlineComponent {...podcast} />;
}

Headline.propTypes = {
  // eslint-disable-next-line
  podcast: PropTypes.object,
};

export default Headline;
