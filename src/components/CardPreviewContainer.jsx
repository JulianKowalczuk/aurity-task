import PropTypes from 'prop-types';
import React from 'react';

import { createStyles, withStyles } from '@material-ui/core';

const styles = createStyles({
  cardPreviewImage: { maxHeight: '100%', maxWidth: '100%' },
  cardPreviewWrapper: {
    border: '1px solid grey',
    height: 226,
    width: 314
  }
});

const CardPreviewContainer = ({ classes, imageSrc }) => {
  return (
    <div className={classes.cardPreviewWrapper}>
      <img className={classes.cardPreviewImage} src={imageSrc} alt="Card preview container" />
    </div>
  );
};

CardPreviewContainer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  imageSrc: PropTypes.string
};

CardPreviewContainer.defaultProps = {
  imageSrc: undefined
};

export default withStyles(styles)(CardPreviewContainer);
