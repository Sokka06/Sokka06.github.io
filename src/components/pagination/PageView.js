'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Icon, IconButton } from '@chakra-ui/react';

const CircleIcon = (props) => (
	<Icon viewBox='0 0 200 200' {...props}>
	  <path
		fill='currentColor'
		d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
	  />
	</Icon>
  )

const PageView = (props) => {
  let { pageClassName, pageLinkClassName } = props;
  const {
    page,
    selected,
    activeClassName,
    activeLinkClassName,
    getEventListener,
    pageSelectedHandler,
    href,
    extraAriaContext,
    pageLabelBuilder,
    rel,
  } = props;

  let ariaLabel =
    props.ariaLabel ||
    'Page ' + page + (extraAriaContext ? ' ' + extraAriaContext : '');
  let ariaCurrent = null;

  if (selected) {
    ariaCurrent = 'page';

    ariaLabel = props.ariaLabel || 'Page ' + page + ' is your current page';

    if (typeof pageClassName !== 'undefined') {
      pageClassName = pageClassName + ' ' + activeClassName;
    } else {
      pageClassName = activeClassName;
    }

    if (typeof pageLinkClassName !== 'undefined') {
      if (typeof activeLinkClassName !== 'undefined') {
        pageLinkClassName = pageLinkClassName + ' ' + activeLinkClassName;
      }
    } else {
      pageLinkClassName = activeLinkClassName;
    }
  }

  return (
	<Box>
		<IconButton
		size={'xs'}
		variant={selected ? 'solid' : 'ghost'}
		isRound
		onClick={pageSelectedHandler}
		{...getEventListener(pageSelectedHandler)}
		icon={<CircleIcon color={'gray.100'} opacity={selected ? '1' : '0.25'} />} />
			
			{/* {pageLabelBuilder(page)} */}
	</Box>
  );
};

PageView.propTypes = {
  pageSelectedHandler: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  pageClassName: PropTypes.string,
  pageLinkClassName: PropTypes.string,
  activeClassName: PropTypes.string,
  activeLinkClassName: PropTypes.string,
  extraAriaContext: PropTypes.string,
  href: PropTypes.string,
  ariaLabel: PropTypes.string,
  page: PropTypes.number.isRequired,
  getEventListener: PropTypes.func.isRequired,
  pageLabelBuilder: PropTypes.func.isRequired,
  rel: PropTypes.string,
};

export default PageView;