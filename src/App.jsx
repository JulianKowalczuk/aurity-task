import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const App = () => (
  <Card>
    <Grid container direction="column">
      <Grid item>MAGE HER</Grid>

      <Grid container item justify="space-between">
        <Grid item>
          <Button>Up</Button>
        </Grid>

        <Grid item>
          <Button>Down</Button>
        </Grid>
      </Grid>
    </Grid>
  </Card>
);

export default App;
