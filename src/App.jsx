import { createStyles, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React, { useCallback, useRef, useState, useEffect } from 'react';

import API from './API';
import { BetResult, CardPreviewContainer } from './components';
import { isCardHigherThan, isCardLowerThan } from './utils';

const styles = createStyles({
  appWrapper: { margin: 40, padding: 10 }
});

const App = ({ classes }) => {
  const [card, setCard] = useState(undefined);
  const [hasUserWon, setHasUserWon] = useState(undefined);

  const cardRef = useRef(card);

  const showMessageAboutBet = useCallback(nextHasUserWon => {
    setHasUserWon(nextHasUserWon);

    setTimeout(() => setHasUserWon(undefined), 600);
  }, []);

  const betOnHigherCard = useCallback(async () => {
    const nextCard = await API.getRandomCard();

    if (nextCard) {
      const nextHasUserWon = isCardHigherThan(cardRef.current, nextCard);

      showMessageAboutBet(nextHasUserWon);

      setCard(nextCard);
    }
  }, [showMessageAboutBet]);

  const betOnLowerCard = useCallback(async () => {
    const nextCard = await API.getRandomCard();

    if (nextCard) {
      const nextHasUserWon = isCardLowerThan(cardRef.current, nextCard);

      showMessageAboutBet(nextHasUserWon);

      setCard(nextCard);
    }
  }, [showMessageAboutBet]);

  useEffect(() => {
    cardRef.current = card;
  }, [card]);

  useEffect(() => {
    // Can't use async callback directly in useEffect
    (async () => {
      const nextCard = await API.getRandomCard();

      setCard(nextCard);
    })();
  }, []);

  return (
    <Card className={classes.appWrapper}>
      <Grid container direction="column">
        <CardPreviewContainer imageSrc={card ? card.image : undefined} />

        <Grid container item justify="space-between">
          <Grid item>
            <Button variant="contained" onClick={betOnHigherCard}>
              Up
            </Button>
          </Grid>

          <Grid item>
            <Button variant="contained" onClick={betOnLowerCard}>
              Down
            </Button>
          </Grid>
        </Grid>

        {hasUserWon !== undefined && (
          <Grid item>
            <BetResult isPositive={hasUserWon} />
          </Grid>
        )}
      </Grid>
    </Card>
  );
};

App.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(App);
