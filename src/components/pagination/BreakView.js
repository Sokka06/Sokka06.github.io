'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

const BreakView = (props) => {
  const {
    breakLabel,
    breakClassName,
    breakLinkClassName,
    breakHandler,
    getEventListener,
  } = props;
  const className = breakClassName || 'break';

  return (
	  <Button
	  onClick={breakHandler}
	  {...getEventListener(breakHandler)}>
		  {breakLabel}
	  </Button>
  );
};

BreakView.propTypes = {
  breakLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  breakClassName: PropTypes.string,
  breakLinkClassName: PropTypes.string,
  breakHandler: PropTypes.func.isRequired,
  getEventListener: PropTypes.func.isRequired,
};

export default BreakView;