import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { createStyles, withStyles } from '@material-ui/core';

const styles = createStyles({
  betResult: { padding: 15, fontWeight: 'bold' },
  negativeBetResult: { color: 'red' },
  positiveBetResult: { color: 'green' }
});

const BetResult = ({ classes, isPositive }) => {
  if (isPositive === undefined) {
    return null;
  }

  return (
    <span
      className={cx(
        classes.cardPreviewWrapper,
        isPositive ? classes.positiveBetResult : classes.negativeBetResult
      )}
    >
      {isPositive ? 'YOU WON' : 'YOU LOST'}
    </span>
  );
};

BetResult.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  isPositive: PropTypes.bool
};

BetResult.defaultProps = {
  isPositive: undefined
};

export default withStyles(styles)(BetResult);
